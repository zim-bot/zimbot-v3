import { ICustomNode } from '../../../interfaces/custom-nodes/ICustomNode';
import { ControlFlowCustomNode } from '../../../enums/custom-nodes/ControlFlowCustomNode';
export declare type TControlFlowCustomNodeFactory = <TInitialData extends unknown[] = unknown[]>(controlFlowCustomNodeName: ControlFlowCustomNode) => ICustomNode<TInitialData>;
