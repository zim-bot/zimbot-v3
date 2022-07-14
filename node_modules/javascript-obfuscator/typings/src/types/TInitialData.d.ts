import { IInitializable } from '../interfaces/IInitializable';
export declare type TInitialData<TClass extends IInitializable> = Parameters<TClass['initialize']>;
