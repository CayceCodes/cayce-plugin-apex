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



@id('InaccessibleAuraEnabledGetter')
@name('InaccessibleAuraEnabledGetter')
@category('errorprone')
@context('scan')
@message('AuraEnabled getter must be public or global if is referenced in Lightning components')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class InaccessibleAuraEnabledGetter extends ScanRule {}
