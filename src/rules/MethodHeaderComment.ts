import { id,
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    suggestion
} from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('MethodHeaderComment')
@name('MethodHeaderComment')
@category('bestpractices')
@context('scan')
@message('Methods must have a header comment with a @description tag')
@suggestion('')
@ruleSeverity(1)
@treeQuery('(method_declaration) @method')
export class MethodHeaderComment extends ApexScanRule {}
