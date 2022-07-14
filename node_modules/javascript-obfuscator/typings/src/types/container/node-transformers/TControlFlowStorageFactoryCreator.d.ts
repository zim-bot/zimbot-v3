import { TControlFlowStorageFactory } from './TControlFlowStorageFactory';
import { ControlFlowStorage } from '../../../enums/storages/ControlFlowStorage';
export declare type TControlFlowStorageFactoryCreator = (controlFlowStorageName: ControlFlowStorage) => TControlFlowStorageFactory;
