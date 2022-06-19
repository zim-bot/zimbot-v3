import type { Logger } from 'pino';
import { proto } from '../../WAProto';
import { AuthenticationCreds, BaileysEventMap, InitialReceivedChatsState, SignalKeyStoreWithTransaction } from '../Types';
declare type ProcessMessageContext = {
    historyCache: Set<string>;
    recvChats: InitialReceivedChatsState;
    downloadHistory: boolean;
    creds: AuthenticationCreds;
    keyStore: SignalKeyStoreWithTransaction;
    logger?: Logger;
    treatCiphertextMessagesAsReal?: boolean;
};
/** Cleans a received message to further processing */
export declare const cleanMessage: (message: proto.IWebMessageInfo, meId: string) => void;
declare const processMessage: (message: proto.IWebMessageInfo, { downloadHistory, historyCache, recvChats, creds, keyStore, logger, treatCiphertextMessagesAsReal }: ProcessMessageContext) => Promise<Partial<BaileysEventMap<any>>>;
export default processMessage;
