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


@id('UnusedMethod')
@name('UnusedMethod')
@category('design')
@context('scan')
@message('Unused methods make understanding code harder')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(method_declaration name: (identifier) @methodName)@target')
export class UnusedMethod extends ScanRule {}