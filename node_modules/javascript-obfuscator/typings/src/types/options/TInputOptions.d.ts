import { TDictionary } from '../TDictionary';
import { IOptions } from '../../interfaces/options/IOptions';
export declare type TInputOptions = Partial<Pick<IOptions, keyof IOptions>> & TDictionary;
