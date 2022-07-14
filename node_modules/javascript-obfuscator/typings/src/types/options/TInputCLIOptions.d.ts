import { TDictionary } from '../TDictionary';
import { ICLIOptions } from '../../interfaces/options/ICLIOptions';
export declare type TInputCLIOptions = Partial<Pick<ICLIOptions, keyof ICLIOptions>> & TDictionary;
