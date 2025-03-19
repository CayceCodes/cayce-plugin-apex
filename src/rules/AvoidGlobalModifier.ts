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

@id('AvoidGlobalModifier')
@name('AvoidGlobalModifier')
@category('bestpractices')
@context('scan')
@message('Avoid using global modifier')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(global)@mod')
export class AvoidGlobalModifier extends ApexScanRule {}
