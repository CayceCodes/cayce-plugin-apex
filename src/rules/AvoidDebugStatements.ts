import { id,    ScanRule,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    suggestion,
    category,
} from 'cayce-types';
@id('AvoidDebugStatements')
@name('AvoidDebugStatements')
@category('performance')
@context('scan')
@message('Avoid debug statements since they impact on performance')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(method_invocation) @method')
export class AvoidDebugStatements extends  ScanRule {}