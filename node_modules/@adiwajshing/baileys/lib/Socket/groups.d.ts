/// <reference types="ws" />
/// <reference types="node" />
import { proto } from '../../WAProto';
import { GroupMetadata, ParticipantAction, SocketConfig } from '../Types';
import { BinaryNode } from '../WABinary';
export declare const makeGroupsSocket: (config: SocketConfig) => {
    groupMetadata: (jid: string) => Promise<GroupMetadata>;
    groupCreate: (subject: string, participants: string[]) => Promise<GroupMetadata>;
    groupLeave: (id: string) => Promise<void>;
    groupUpdateSubject: (jid: string, subject: string) => Promise<void>;
    groupParticipantsUpdate: (jid: string, participants: string[], action: ParticipantAction) => Promise<{
        status: string | number;
        jid: string;
    }[]>;
    groupUpdateDescription: (jid: string, description?: string) => Promise<void>;
    groupInviteCode: (jid: string) => Promise<string>;
    groupRevokeInvite: (jid: string) => Promise<string>;
    groupAcceptInvite: (code: string) => Promise<string>;
    /**
     * accept a GroupInviteMessage
     * @param senderJid jid of the person that sent the message
     * @param inviteMessage the message to accept
     */
    groupAcceptInviteV4: (senderJid: string, inviteMessage: proto.IGroupInviteMessage) => Promise<string>;
    groupGetInviteInfo: (code: string) => Promise<GroupMetadata>;
    groupToggleEphemeral: (jid: string, ephemeralExpiration: number) => Promise<void>;
    groupSettingUpdate: (jid: string, setting: 'announcement' | 'not_announcement' | 'locked' | 'unlocked') => Promise<void>;
    groupFetchAllParticipating: () => Promise<{
        [_: string]: GroupMetadata;
    }>;
    type: "md";
    ws: import("ws");
    ev: import("../Types").BaileysEventEmitter;
    authState: {
        creds: import("../Types").AuthenticationCreds;
        keys: import("../Types").SignalKeyStoreWithTransaction;
    };
    user: import("../Types").Contact;
    emitEventsFromMap: (map: Partial<import("../Types").BaileysEventMap<import("../Types").AuthenticationCreds>>) => void;
    generateMessageTag: () => string;
    query: (node: BinaryNode, timeoutMs?: number) => Promise<BinaryNode>;
    waitForMessage: (msgId: string, timeoutMs?: number) => Promise<any>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: BinaryNode) => Promise<void>;
    logout: () => Promise<void>;
    end: (error: Error) => void;
    onUnexpectedError: (error: Error, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    waitForConnectionUpdate: (check: (u: Partial<import("../Types").ConnectionState>) => boolean, timeoutMs?: number) => Promise<void>;
};
export declare const extractGroupMetadata: (result: BinaryNode) => GroupMetadata;
