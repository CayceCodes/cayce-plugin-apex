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
@id('AvoidGlobalModifier')
@name('AvoidGlobalModifier')
@category('bestpractices')
@context('scan')
@message('Avoid using global modifier')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(global)@mod')
export class AvoidGlobalModifier extends ScanRule {}
