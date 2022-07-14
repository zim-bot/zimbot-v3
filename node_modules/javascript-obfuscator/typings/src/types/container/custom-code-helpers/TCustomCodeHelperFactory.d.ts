import { ICustomCodeHelper } from '../../../interfaces/custom-code-helpers/ICustomCodeHelper';
import { CustomCodeHelper } from '../../../enums/custom-code-helpers/CustomCodeHelper';
export declare type TCustomCodeHelperFactory = <TInitialData extends unknown[] = unknown[]>(customCodeHelperName: CustomCodeHelper) => ICustomCodeHelper<TInitialData>;
