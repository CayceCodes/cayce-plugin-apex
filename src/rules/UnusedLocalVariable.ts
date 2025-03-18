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

@id('UnusedLocalVariable')
@name('UnusedLocalVariable')
@category('bestpractices')
@context('scan')
@message("Variable ''{0}'' defined but not used")
@suggestion('')
@ruleSeverity(1)
@treeQuery('(parser_output)@p')
export class UnusedLocalVariable extends ApexScanRule {
}
