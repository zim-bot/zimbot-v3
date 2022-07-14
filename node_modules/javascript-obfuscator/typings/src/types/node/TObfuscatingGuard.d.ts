import * as ESTree from 'estree';
import { ObfuscatingGuardResult } from '../../enums/node/ObfuscatingGuardResult';
export declare type TObfuscatingGuard = (node: ESTree.Node) => ObfuscatingGuardResult;
