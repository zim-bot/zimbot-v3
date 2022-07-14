import { INodeTransformer } from '../../../interfaces/node-transformers/INodeTransformer';
import { NodeTransformer } from '../../../enums/node-transformers/NodeTransformer';
export declare type TNodeTransformerFactory = (nodeTransformerName: NodeTransformer) => INodeTransformer;
