import { IObjectExpressionExtractor } from '../../../interfaces/node-transformers/converting-transformers/object-expression-extractors/IObjectExpressionExtractor';
import { ObjectExpressionExtractor } from '../../../enums/node-transformers/converting-transformers/properties-extractors/ObjectExpressionExtractor';
export declare type TObjectExpressionExtractorFactory = (objectExpressionExtractorName: ObjectExpressionExtractor) => IObjectExpressionExtractor;
