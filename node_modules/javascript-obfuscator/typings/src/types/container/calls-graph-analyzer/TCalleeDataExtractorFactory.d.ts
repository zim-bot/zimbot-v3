import { ICalleeDataExtractor } from '../../../interfaces/analyzers/calls-graph-analyzer/ICalleeDataExtractor';
import { CalleeDataExtractor } from '../../../enums/analyzers/calls-graph-analyzer/CalleeDataExtractor';
export declare type TCalleeDataExtractorFactory = (calleeDataExtractorName: CalleeDataExtractor) => ICalleeDataExtractor;
