import { IObfuscationResult } from '../interfaces/source-code/IObfuscationResult';
export declare type TObfuscationResultsObject<TSourceCodesObject> = {
    [key in keyof TSourceCodesObject]: IObfuscationResult;
};
