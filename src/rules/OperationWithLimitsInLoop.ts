import { id,
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,

    suggestion,
} from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';




@id('OperationWithLimitsInLoop')
@name('OperationWithLimitsInLoop')
@category('performance')
@context('scan')
@suggestion('')
@message('Avoid operations in loops that may hit governor limits')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class OperationWithLimitsInLoop extends ApexScanRule {}
