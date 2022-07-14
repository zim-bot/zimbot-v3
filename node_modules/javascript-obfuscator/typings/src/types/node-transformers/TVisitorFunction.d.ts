import * as ESTree from 'estree';
import { TVisitorResult } from './TVisitorResult';
export declare type TVisitorFunction = (node: ESTree.Node, parentNode: ESTree.Node | null) => TVisitorResult;
