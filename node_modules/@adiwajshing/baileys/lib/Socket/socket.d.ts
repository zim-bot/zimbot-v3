/// <reference types="node" />
import WebSocket from 'ws';
import { AuthenticationCreds, BaileysEventEmitter, BaileysEventMap, SocketConfig } from '../Types';
import { BinaryNode } from '../WABinary';
/**
 * Connects to WA servers and performs:
 * - simple queries (no retry mechanism, wait for connection establishment)
 * - listen to messages and emit events
 * - query phone connection
 */
export declare const makeSocket: ({ waWebSocketUrl, connectTimeoutMs, logger, agent, keepAliveIntervalMs, version, browser, auth: authState, printQRInTerminal, defaultQueryTimeoutMs, transactionOpts }: SocketConfig) => {
    type: "md";
    ws: WebSocket;
    ev: BaileysEventEmitter;
    authState: {
        creds: AuthenticationCreds;
        keys: import("../Types").SignalKeyStoreWithTransaction;
    };
    readonly user: import("../Types").Contact;
    emitEventsFromMap: (map: Partial<BaileysEventMap<AuthenticationCreds>>) => void;
    generateMessageTag: () => string;
    query: (node: BinaryNode, timeoutMs?: number) => Promise<BinaryNode>;
    waitForMessage: (msgId: string, timeoutMs?: number) => Promise<any>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: BinaryNode) => Promise<void>;
    logout: () => Promise<void>;
    end: (error: Error | undefined) => void;
    onUnexpectedError: (error: Error, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    /** Waits for the connection to WA to reach a state */
    waitForConnectionUpdate: (check: (u: Partial<import("../Types").ConnectionState>) => boolean, timeoutMs?: number) => Promise<void>;
};
export declare type Socket = ReturnType<typeof makeSocket>;
