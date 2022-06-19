"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMessagesRecvSocket = void 0;
const WAProto_1 = require("../../WAProto");
const Defaults_1 = require("../Defaults");
const Types_1 = require("../Types");
const Utils_1 = require("../Utils");
const make_mutex_1 = require("../Utils/make-mutex");
const process_message_1 = __importStar(require("../Utils/process-message"));
const WABinary_1 = require("../WABinary");
const chats_1 = require("./chats");
const groups_1 = require("./groups");
const makeMessagesRecvSocket = (config) => {
    const { logger, treatCiphertextMessagesAsReal, retryRequestDelayMs, downloadHistory } = config;
    const sock = (0, chats_1.makeChatsSocket)(config);
    const { ev, authState, ws, onUnexpectedError, assertSessions, sendNode, relayMessage, sendReceipt, resyncMainAppState, emitEventsFromMap, uploadPreKeys, } = sock;
    /** this mutex ensures that the notifications (receipts, messages etc.) are processed in order */
    const processingMutex = (0, make_mutex_1.makeKeyedMutex)();
    /** this mutex ensures that each retryRequest will wait for the previous one to finish */
    const retryMutex = (0, make_mutex_1.makeMutex)();
    const historyCache = new Set();
    let recvChats = {};
    const appStateSyncTimeout = (0, Utils_1.debouncedTimeout)(6000, async () => {
        logger.info({ recvChats: Object.keys(recvChats).length }, 'doing initial app state sync');
        if (ws.readyState === ws.OPEN) {
            await resyncMainAppState(recvChats);
        }
        historyCache.clear();
        recvChats = {};
    });
    const msgRetryMap = config.msgRetryCounterMap || {};
    const callOfferData = {};
    let sendActiveReceipts = false;
    const sendMessageAck = async ({ tag, attrs }, extraAttrs = {}) => {
        const stanza = {
            tag: 'ack',
            attrs: {
                id: attrs.id,
                to: attrs.from,
                class: tag,
                ...extraAttrs,
            }
        };
        if (!!attrs.participant) {
            stanza.attrs.participant = attrs.participant;
        }
        if (tag !== 'message' && attrs.type && !extraAttrs.type) {
            stanza.attrs.type = attrs.type;
        }
        logger.debug({ recv: { tag, attrs }, sent: stanza.attrs }, 'sent ack');
        await sendNode(stanza);
    };
    const sendRetryRequest = async (node) => {
        const msgId = node.attrs.id;
        const retryCount = msgRetryMap[msgId] || 1;
        if (retryCount >= 5) {
            logger.debug({ retryCount, msgId }, 'reached retry limit, clearing');
            delete msgRetryMap[msgId];
            return;
        }
        msgRetryMap[msgId] = retryCount + 1;
        const isGroup = !!node.attrs.participant;
        const { account, signedPreKey, signedIdentityKey: identityKey } = authState.creds;
        const deviceIdentity = WAProto_1.proto.ADVSignedDeviceIdentity.encode(account).finish();
        await authState.keys.transaction(async () => {
            const { update, preKeys } = await (0, Utils_1.getNextPreKeys)(authState, 1);
            const [keyId] = Object.keys(preKeys);
            const key = preKeys[+keyId];
            const decFrom = node.attrs.from ? (0, WABinary_1.jidDecode)(node.attrs.from) : undefined;
            const receipt = {
                tag: 'receipt',
                attrs: {
                    id: msgId,
                    type: 'retry',
                    to: isGroup ? node.attrs.from : (0, WABinary_1.jidEncode)(decFrom.user, 's.whatsapp.net', decFrom.device, 0)
                },
                content: [
                    {
                        tag: 'retry',
                        attrs: {
                            count: retryCount.toString(),
                            id: node.attrs.id,
                            t: node.attrs.t,
                            v: '1'
                        }
                    },
                    {
                        tag: 'registration',
                        attrs: {},
                        content: (0, Utils_1.encodeBigEndian)(authState.creds.registrationId)
                    }
                ]
            };
            if (node.attrs.recipient) {
                receipt.attrs.recipient = node.attrs.recipient;
            }
            if (node.attrs.participant) {
                receipt.attrs.participant = node.attrs.participant;
            }
            if (retryCount > 1) {
                const exec = (0, Utils_1.generateSignalPubKey)(Buffer.from(Defaults_1.KEY_BUNDLE_TYPE)).slice(0, 1);
                const content = receipt.content;
                content.push({
                    tag: 'keys',
                    attrs: {},
                    content: [
                        { tag: 'type', attrs: {}, content: exec },
                        { tag: 'identity', attrs: {}, content: identityKey.public },
                        (0, Utils_1.xmppPreKey)(key, +keyId),
                        (0, Utils_1.xmppSignedPreKey)(signedPreKey),
                        { tag: 'device-identity', attrs: {}, content: deviceIdentity }
                    ]
                });
            }
            await sendNode(receipt);
            logger.info({ msgAttrs: node.attrs, retryCount }, 'sent retry receipt');
            ev.emit('creds.update', update);
        });
    };
    const processMessageLocal = async (msg) => {
        var _a;
        // process message and emit events
        const newEvents = await (0, process_message_1.default)(msg, {
            downloadHistory,
            historyCache,
            recvChats,
            creds: authState.creds,
            keyStore: authState.keys,
            logger,
            treatCiphertextMessagesAsReal
        });
        // send ack for history message
        const normalizedContent = !!msg.message ? (0, Utils_1.normalizeMessageContent)(msg.message) : undefined;
        const isAnyHistoryMsg = !!((_a = normalizedContent === null || normalizedContent === void 0 ? void 0 : normalizedContent.protocolMessage) === null || _a === void 0 ? void 0 : _a.historySyncNotification);
        if (isAnyHistoryMsg) {
            // we only want to sync app state once we've all the history
            // restart the app state sync timeout
            logger.debug('restarting app sync timeout');
            appStateSyncTimeout.start();
            const jid = (0, WABinary_1.jidEncode)((0, WABinary_1.jidDecode)(msg.key.remoteJid).user, 'c.us');
            await sendReceipt(jid, undefined, [msg.key.id], 'hist_sync');
        }
        return newEvents;
    };
    const handleEncryptNotification = async (node) => {
        const from = node.attrs.from;
        if (from === WABinary_1.S_WHATSAPP_NET) {
            const countChild = (0, WABinary_1.getBinaryNodeChild)(node, 'count');
            const count = +countChild.attrs.value;
            const shouldUploadMorePreKeys = count < Defaults_1.MIN_PREKEY_COUNT;
            logger.debug({ count, shouldUploadMorePreKeys }, 'recv pre-key count');
            if (shouldUploadMorePreKeys) {
                await uploadPreKeys();
            }
        }
        else {
            const identityNode = (0, WABinary_1.getBinaryNodeChild)(node, 'identity');
            if (identityNode) {
                logger.info({ jid: from }, 'identity changed');
                // not handling right now
                // signal will override new identity anyway
            }
            else {
                logger.info({ node }, 'unknown encrypt notification');
            }
        }
    };
    const processNotification = (node) => {
        const result = {};
        const [child] = (0, WABinary_1.getAllBinaryNodeChildren)(node);
        const nodeType = node.attrs.type;
        if (nodeType === 'w:gp2') {
            switch (child === null || child === void 0 ? void 0 : child.tag) {
                case 'create':
                    const metadata = (0, groups_1.extractGroupMetadata)(child);
                    result.messageStubType = Types_1.WAMessageStubType.GROUP_CREATE;
                    result.messageStubParameters = [metadata.subject];
                    result.key = { participant: metadata.owner };
                    ev.emit('chats.upsert', [{
                            id: metadata.id,
                            name: metadata.subject,
                            conversationTimestamp: metadata.creation,
                        }]);
                    ev.emit('groups.upsert', [metadata]);
                    break;
                case 'ephemeral':
                case 'not_ephemeral':
                    result.message = {
                        protocolMessage: {
                            type: WAProto_1.proto.ProtocolMessage.ProtocolMessageType.EPHEMERAL_SETTING,
                            ephemeralExpiration: +(child.attrs.expiration || 0)
                        }
                    };
                    break;
                case 'promote':
                case 'demote':
                case 'remove':
                case 'add':
                case 'leave':
                    const stubType = `GROUP_PARTICIPANT_${child.tag.toUpperCase()}`;
                    result.messageStubType = Types_1.WAMessageStubType[stubType];
                    const participants = (0, WABinary_1.getBinaryNodeChildren)(child, 'participant').map(p => p.attrs.jid);
                    if (participants.length === 1 &&
                        // if recv. "remove" message and sender removed themselves
                        // mark as left
                        (0, WABinary_1.areJidsSameUser)(participants[0], node.attrs.participant) &&
                        child.tag === 'remove') {
                        result.messageStubType = Types_1.WAMessageStubType.GROUP_PARTICIPANT_LEAVE;
                    }
                    result.messageStubParameters = participants;
                    break;
                case 'subject':
                    result.messageStubType = Types_1.WAMessageStubType.GROUP_CHANGE_SUBJECT;
                    result.messageStubParameters = [child.attrs.subject];
                    break;
                case 'announcement':
                case 'not_announcement':
                    result.messageStubType = Types_1.WAMessageStubType.GROUP_CHANGE_ANNOUNCE;
                    result.messageStubParameters = [(child.tag === 'announcement') ? 'on' : 'off'];
                    break;
                case 'locked':
                case 'unlocked':
                    result.messageStubType = Types_1.WAMessageStubType.GROUP_CHANGE_RESTRICT;
                    result.messageStubParameters = [(child.tag === 'locked') ? 'on' : 'off'];
                    break;
            }
        }
        else if (nodeType === 'mediaretry') {
            const event = (0, Utils_1.decodeMediaRetryNode)(node);
            ev.emit('messages.media-update', [event]);
        }
        else if (nodeType === 'encrypt') {
            handleEncryptNotification(node);
        }
        else if (nodeType === 'devices') {
            const devices = (0, WABinary_1.getBinaryNodeChildren)(child, 'device');
            if ((0, WABinary_1.areJidsSameUser)(child.attrs.jid, authState.creds.me.id)) {
                const deviceJids = devices.map(d => d.attrs.jid);
                logger.info({ deviceJids }, 'got my own devices');
            }
        }
        if (Object.keys(result).length) {
            return result;
        }
    };
    const willSendMessageAgain = (id) => {
        const retryCount = msgRetryMap[id] || 0;
        return retryCount < 5;
    };
    const sendMessagesAgain = async (key, ids) => {
        const msgs = await Promise.all(ids.map(id => (config.getMessage({ ...key, id }))));
        const participant = key.participant || key.remoteJid;
        await assertSessions([participant], true);
        if ((0, WABinary_1.isJidGroup)(key.remoteJid)) {
            await authState.keys.set({ 'sender-key-memory': { [key.remoteJid]: null } });
        }
        logger.debug({ participant }, 'forced new session for retry recp');
        for (let i = 0; i < msgs.length; i++) {
            if (msgs[i]) {
                msgRetryMap[ids[i]] = (msgRetryMap[ids[i]] || 0) + 1;
                await relayMessage(key.remoteJid, msgs[i], {
                    messageId: ids[i],
                    participant
                });
            }
            else {
                logger.debug({ jid: key.remoteJid, id: ids[i] }, 'recv retry request, but message not available');
            }
        }
    };
    const handleReceipt = async (node) => {
        var _a;
        let shouldAck = true;
        const { attrs, content } = node;
        const isNodeFromMe = (0, WABinary_1.areJidsSameUser)(attrs.participant || attrs.from, (_a = authState.creds.me) === null || _a === void 0 ? void 0 : _a.id);
        const remoteJid = !isNodeFromMe || (0, WABinary_1.isJidGroup)(attrs.from) ? attrs.from : attrs.recipient;
        const fromMe = !attrs.recipient || (attrs.type === 'retry' && isNodeFromMe);
        const ids = [attrs.id];
        if (Array.isArray(content)) {
            const items = (0, WABinary_1.getBinaryNodeChildren)(content[0], 'item');
            ids.push(...items.map(i => i.attrs.id));
        }
        const key = {
            remoteJid,
            id: '',
            fromMe,
            participant: attrs.participant
        };
        await processingMutex.mutex(remoteJid, async () => {
            const status = (0, Utils_1.getStatusFromReceiptType)(attrs.type);
            if (typeof status !== 'undefined' &&
                (
                // basically, we only want to know when a message from us has been delivered to/read by the other person
                // or another device of ours has read some messages
                status > WAProto_1.proto.WebMessageInfo.WebMessageInfoStatus.DELIVERY_ACK ||
                    !isNodeFromMe)) {
                if ((0, WABinary_1.isJidGroup)(remoteJid)) {
                    const updateKey = status === WAProto_1.proto.WebMessageInfo.WebMessageInfoStatus.DELIVERY_ACK ? 'receiptTimestamp' : 'readTimestamp';
                    ev.emit('message-receipt.update', ids.map(id => ({
                        key: { ...key, id },
                        receipt: {
                            userJid: (0, WABinary_1.jidNormalizedUser)(attrs.participant),
                            [updateKey]: +attrs.t
                        }
                    })));
                }
                else {
                    ev.emit('messages.update', ids.map(id => ({
                        key: { ...key, id },
                        update: { status }
                    })));
                }
            }
            if (attrs.type === 'retry') {
                if (willSendMessageAgain(ids[0])) {
                    // correctly set who is asking for the retry
                    key.participant = key.participant || attrs.from;
                    if (key.fromMe) {
                        try {
                            logger.debug({ attrs, key }, 'recv retry request');
                            await sendMessagesAgain(key, ids);
                        }
                        catch (error) {
                            logger.error({ key, ids, trace: error.stack }, 'error in sending message again');
                            shouldAck = false;
                        }
                    }
                    else {
                        logger.info({ attrs, key }, 'recv retry for not fromMe message');
                    }
                }
                else {
                    logger.info({ attrs, key }, 'will not send message again, as sent too many times');
                }
            }
            if (shouldAck) {
                await sendMessageAck(node);
            }
        });
    };
    const handleNotification = async (node) => {
        const remoteJid = node.attrs.from;
        await sendMessageAck(node);
        const msg = processNotification(node);
        if (msg) {
            const fromMe = (0, WABinary_1.areJidsSameUser)(node.attrs.participant || remoteJid, authState.creds.me.id);
            msg.key = {
                remoteJid,
                fromMe,
                participant: node.attrs.participant,
                id: node.attrs.id,
                ...(msg.key || {})
            };
            msg.participant = node.attrs.participant;
            msg.messageTimestamp = +node.attrs.t;
            const fullMsg = WAProto_1.proto.WebMessageInfo.fromObject(msg);
            ev.emit('messages.upsert', { messages: [fullMsg], type: 'append' });
        }
    };
    const handleUpsertedMessages = async ({ messages, type }) => {
        var _a;
        if (type === 'notify' || type === 'append') {
            const contactNameUpdates = {};
            for (const msg of messages) {
                const normalizedChatId = (0, WABinary_1.jidNormalizedUser)(msg.key.remoteJid);
                if (!!msg.pushName) {
                    let jid = msg.key.fromMe ? authState.creds.me.id : (msg.key.participant || msg.key.remoteJid);
                    jid = (0, WABinary_1.jidNormalizedUser)(jid);
                    contactNameUpdates[jid] = msg.pushName;
                    // update our pushname too
                    if (msg.key.fromMe && ((_a = authState.creds.me) === null || _a === void 0 ? void 0 : _a.name) !== msg.pushName) {
                        ev.emit('creds.update', { me: { ...authState.creds.me, name: msg.pushName } });
                    }
                }
                const events = await processingMutex.mutex('p-' + normalizedChatId, () => processMessageLocal(msg));
                emitEventsFromMap(events);
            }
            if (Object.keys(contactNameUpdates).length) {
                ev.emit('contacts.update', Object.keys(contactNameUpdates).map(id => ({ id, notify: contactNameUpdates[id] })));
            }
        }
    };
    // recv a message
    ws.on('CB:message', (stanza) => {
        const { fullMessage: msg, category, author, decryptionTask } = (0, Utils_1.decodeMessageStanza)(stanza, authState);
        processingMutex.mutex(msg.key.remoteJid, async () => {
            await sendMessageAck(stanza);
            await decryptionTask;
            // message failed to decrypt
            if (msg.messageStubType === WAProto_1.proto.WebMessageInfo.WebMessageInfoStubType.CIPHERTEXT) {
                logger.error({ key: msg.key, params: msg.messageStubParameters }, 'failure in decrypting message');
                retryMutex.mutex(async () => {
                    if (ws.readyState === ws.OPEN) {
                        await sendRetryRequest(stanza);
                        if (retryRequestDelayMs) {
                            await (0, Utils_1.delay)(retryRequestDelayMs);
                        }
                    }
                    else {
                        logger.debug({ stanza }, 'connection closed, ignoring retry req');
                    }
                });
            }
            else {
                // no type in the receipt => message delivered
                let type = undefined;
                let participant = msg.key.participant;
                if (category === 'peer') { // special peer message
                    type = 'peer_msg';
                }
                else if (msg.key.fromMe) { // message was sent by us from a different device
                    type = 'sender';
                    // need to specially handle this case
                    if ((0, WABinary_1.isJidUser)(msg.key.remoteJid)) {
                        participant = author;
                    }
                }
                else if (!sendActiveReceipts) {
                    type = 'inactive';
                }
                await sendReceipt(msg.key.remoteJid, participant, [msg.key.id], type);
            }
            (0, process_message_1.cleanMessage)(msg, authState.creds.me.id);
            ev.emit('messages.upsert', { messages: [msg], type: stanza.attrs.offline ? 'append' : 'notify' });
        })
            .catch(error => onUnexpectedError(error, 'processing message'));
    });
    ws.on('CB:call', async (node) => {
        const { attrs } = node;
        const [infoChild] = (0, WABinary_1.getAllBinaryNodeChildren)(node);
        const callId = infoChild.attrs['call-id'];
        const from = infoChild.attrs.from || infoChild.attrs['call-creator'];
        const status = (0, Utils_1.getCallStatusFromNode)(infoChild);
        const call = {
            chatId: attrs.from,
            from,
            id: callId,
            date: new Date(+attrs.t * 1000),
            offline: !!attrs.offline,
            status,
        };
        if (status === 'offer') {
            call.isVideo = !!(0, WABinary_1.getBinaryNodeChild)(infoChild, 'video');
            call.isGroup = infoChild.attrs.type === 'group';
            callOfferData[call.id] = call;
        }
        // use existing call info to populate this event
        if (callOfferData[call.id]) {
            call.isVideo = callOfferData[call.id].isVideo;
            call.isGroup = callOfferData[call.id].isGroup;
        }
        // delete data once call has ended
        if (status === 'reject' || status === 'accept' || status === 'timeout') {
            delete callOfferData[call.id];
        }
        ev.emit('call', [call]);
        await sendMessageAck(node, { type: infoChild.tag })
            .catch(error => onUnexpectedError(error, 'ack call'));
    });
    ws.on('CB:receipt', node => {
        handleReceipt(node)
            .catch(error => onUnexpectedError(error, 'handling receipt'));
    });
    ws.on('CB:notification', async (node) => {
        handleNotification(node)
            .catch(error => {
            onUnexpectedError(error, 'handling notification');
        });
    });
    ev.on('messages.upsert', data => {
        handleUpsertedMessages(data)
            .catch(error => onUnexpectedError(error, 'handling upserted messages'));
    });
    ev.on('call', ([call]) => {
        // missed call + group call notification message generation
        if (call.status === 'timeout' || (call.status === 'offer' && call.isGroup)) {
            const msg = {
                key: {
                    remoteJid: call.chatId,
                    id: call.id,
                    fromMe: false
                },
                messageTimestamp: (0, Utils_1.unixTimestampSeconds)(call.date),
            };
            if (call.status === 'timeout') {
                if (call.isGroup) {
                    msg.messageStubType = call.isVideo ? Types_1.WAMessageStubType.CALL_MISSED_GROUP_VIDEO : Types_1.WAMessageStubType.CALL_MISSED_GROUP_VOICE;
                }
                else {
                    msg.messageStubType = call.isVideo ? Types_1.WAMessageStubType.CALL_MISSED_VIDEO : Types_1.WAMessageStubType.CALL_MISSED_VOICE;
                }
            }
            else {
                msg.message = { call: { callKey: Buffer.from(call.id) } };
            }
            const protoMsg = WAProto_1.proto.WebMessageInfo.fromObject(msg);
            ev.emit('messages.upsert', { messages: [protoMsg], type: call.offline ? 'append' : 'notify' });
        }
    });
    ev.on('connection.update', ({ isOnline }) => {
        if (typeof isOnline !== 'undefined') {
            sendActiveReceipts = isOnline;
            logger.trace(`sendActiveReceipts set to "${sendActiveReceipts}"`);
        }
    });
    return {
        ...sock,
        processMessage: processMessageLocal,
        sendMessageAck,
        sendRetryRequest
    };
};
exports.makeMessagesRecvSocket = makeMessagesRecvSocket;
