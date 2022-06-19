"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractGroupMetadata = exports.makeGroupsSocket = void 0;
const Utils_1 = require("../Utils");
const WABinary_1 = require("../WABinary");
const socket_1 = require("./socket");
const makeGroupsSocket = (config) => {
    const sock = (0, socket_1.makeSocket)(config);
    const { query } = sock;
    const groupQuery = async (jid, type, content) => (query({
        tag: 'iq',
        attrs: {
            type,
            xmlns: 'w:g2',
            to: jid,
        },
        content
    }));
    const groupMetadata = async (jid) => {
        const result = await groupQuery(jid, 'get', [{ tag: 'query', attrs: { request: 'interactive' } }]);
        return (0, exports.extractGroupMetadata)(result);
    };
    return {
        ...sock,
        groupMetadata,
        groupCreate: async (subject, participants) => {
            const key = (0, Utils_1.generateMessageID)();
            const result = await groupQuery('@g.us', 'set', [
                {
                    tag: 'create',
                    attrs: {
                        subject,
                        key
                    },
                    content: participants.map(jid => ({
                        tag: 'participant',
                        attrs: { jid }
                    }))
                }
            ]);
            return (0, exports.extractGroupMetadata)(result);
        },
        groupLeave: async (id) => {
            await groupQuery('@g.us', 'set', [
                {
                    tag: 'leave',
                    attrs: {},
                    content: [
                        { tag: 'group', attrs: { id } }
                    ]
                }
            ]);
        },
        groupUpdateSubject: async (jid, subject) => {
            await groupQuery(jid, 'set', [
                {
                    tag: 'subject',
                    attrs: {},
                    content: Buffer.from(subject, 'utf-8')
                }
            ]);
        },
        groupParticipantsUpdate: async (jid, participants, action) => {
            const result = await groupQuery(jid, 'set', participants.map(jid => ({
                tag: action,
                attrs: {},
                content: [{ tag: 'participant', attrs: { jid } }]
            })));
            const node = (0, WABinary_1.getBinaryNodeChild)(result, action);
            const participantsAffected = (0, WABinary_1.getBinaryNodeChildren)(node, 'participant');
            return participantsAffected.map(p => {
                return { status: p.attrs.error || 200, jid: p.attrs.jid };
            });
        },
        groupUpdateDescription: async (jid, description) => {
            var _a;
            const metadata = await groupMetadata(jid);
            const prev = (_a = metadata.descId) !== null && _a !== void 0 ? _a : null;
            await groupQuery(jid, 'set', [
                {
                    tag: 'description',
                    attrs: {
                        ...(description ? { id: (0, Utils_1.generateMessageID)() } : { delete: 'true' }),
                        ...(prev ? { prev } : {})
                    },
                    content: description ? [{ tag: 'body', attrs: {}, content: Buffer.from(description, 'utf-8') }] : null
                }
            ]);
        },
        groupInviteCode: async (jid) => {
            const result = await groupQuery(jid, 'get', [{ tag: 'invite', attrs: {} }]);
            const inviteNode = (0, WABinary_1.getBinaryNodeChild)(result, 'invite');
            return inviteNode.attrs.code;
        },
        groupRevokeInvite: async (jid) => {
            const result = await groupQuery(jid, 'set', [{ tag: 'invite', attrs: {} }]);
            const inviteNode = (0, WABinary_1.getBinaryNodeChild)(result, 'invite');
            return inviteNode.attrs.code;
        },
        groupAcceptInvite: async (code) => {
            const results = await groupQuery('@g.us', 'set', [{ tag: 'invite', attrs: { code } }]);
            const result = (0, WABinary_1.getBinaryNodeChild)(results, 'group');
            return result.attrs.jid;
        },
        /**
         * accept a GroupInviteMessage
         * @param senderJid jid of the person that sent the message
         * @param inviteMessage the message to accept
         */
        groupAcceptInviteV4: async (senderJid, inviteMessage) => {
            const results = await groupQuery(inviteMessage.groupJid, 'set', [{
                    tag: 'accept',
                    attrs: {
                        code: inviteMessage.inviteCode,
                        expiration: inviteMessage.inviteExpiration.toString(),
                        admin: senderJid
                    }
                }]);
            return results.attrs.from;
        },
        groupGetInviteInfo: async (code) => {
            const results = await groupQuery('@g.us', 'get', [{ tag: 'invite', attrs: { code } }]);
            return (0, exports.extractGroupMetadata)(results);
        },
        groupToggleEphemeral: async (jid, ephemeralExpiration) => {
            const content = ephemeralExpiration ?
                { tag: 'ephemeral', attrs: { expiration: ephemeralExpiration.toString() } } :
                { tag: 'not_ephemeral', attrs: {} };
            await groupQuery(jid, 'set', [content]);
        },
        groupSettingUpdate: async (jid, setting) => {
            await groupQuery(jid, 'set', [{ tag: setting, attrs: {} }]);
        },
        groupFetchAllParticipating: async () => {
            const result = await query({
                tag: 'iq',
                attrs: {
                    to: '@g.us',
                    xmlns: 'w:g2',
                    type: 'get',
                },
                content: [
                    {
                        tag: 'participating',
                        attrs: {},
                        content: [
                            { tag: 'participants', attrs: {} },
                            { tag: 'description', attrs: {} }
                        ]
                    }
                ]
            });
            const data = {};
            const groupsChild = (0, WABinary_1.getBinaryNodeChild)(result, 'groups');
            if (groupsChild) {
                const groups = (0, WABinary_1.getBinaryNodeChildren)(groupsChild, 'group');
                for (const groupNode of groups) {
                    const meta = (0, exports.extractGroupMetadata)({
                        tag: 'result',
                        attrs: {},
                        content: [groupNode]
                    });
                    data[meta.id] = meta;
                }
            }
            return data;
        }
    };
};
exports.makeGroupsSocket = makeGroupsSocket;
const extractGroupMetadata = (result) => {
    var _a, _b;
    const group = (0, WABinary_1.getBinaryNodeChild)(result, 'group');
    const descChild = (0, WABinary_1.getBinaryNodeChild)(group, 'description');
    let desc;
    let descId;
    if (descChild) {
        desc = (_a = (0, WABinary_1.getBinaryNodeChild)(descChild, 'body')) === null || _a === void 0 ? void 0 : _a.content;
        descId = descChild.attrs.id;
    }
    const groupId = group.attrs.id.includes('@') ? group.attrs.id : (0, WABinary_1.jidEncode)(group.attrs.id, 'g.us');
    const eph = (_b = (0, WABinary_1.getBinaryNodeChild)(group, 'ephemeral')) === null || _b === void 0 ? void 0 : _b.attrs.expiration;
    const metadata = {
        id: groupId,
        subject: group.attrs.subject,
        subjectOwner: group.attrs.s_o,
        subjectTime: +group.attrs.s_t,
        size: +group.attrs.size,
        creation: +group.attrs.creation,
        owner: group.attrs.creator ? (0, WABinary_1.jidNormalizedUser)(group.attrs.creator) : undefined,
        desc,
        descId,
        restrict: !!(0, WABinary_1.getBinaryNodeChild)(group, 'locked'),
        announce: !!(0, WABinary_1.getBinaryNodeChild)(group, 'announcement'),
        participants: (0, WABinary_1.getBinaryNodeChildren)(group, 'participant').map(({ attrs }) => {
            return {
                id: attrs.jid,
                admin: attrs.type || null,
            };
        }),
        ephemeralDuration: eph ? +eph : undefined
    };
    return metadata;
};
exports.extractGroupMetadata = extractGroupMetadata;
