import { TStringArrayEncoding } from '../../options/TStringArrayEncoding';
import { IStringArrayScopeCallsWrappersData } from '../../../interfaces/node-transformers/string-array-transformers/IStringArrayScopeCallsWrappersData';
export declare type TStringArrayScopeCallsWrappersDataByEncoding = Partial<{
    [key in TStringArrayEncoding]: IStringArrayScopeCallsWrappersData;
}>;
