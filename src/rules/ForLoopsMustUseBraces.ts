import { id,
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    ScanRule,
    suggestion,
} from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('ForLoopsMustUseBraces')
@name('ForLoopsMustUseBraces')
@category('codestyle')
@context('scan')
@suggestion('')
@message("Avoid using 'for' statements without curly braces")
@ruleSeverity(3)
@treeQuery('(for_statement)@for')
export class ForLoopsMustUseBraces extends ApexScanRule {}