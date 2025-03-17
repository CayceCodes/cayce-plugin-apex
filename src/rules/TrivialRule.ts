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

@id('TrivialRule')
@name('It looks for intifiers that are named "Cookie"')
@category('bestpractices')
@context('scan')
@message("Variable ''{0}'' defined but not used")
@suggestion('You named something "Cookie." You monster.')
@ruleSeverity(1)
@treeQuery('(identifier) @target')
export class TrivialRule extends ApexScanRule {
}
