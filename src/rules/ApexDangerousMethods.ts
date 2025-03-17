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


import Parser, { Query, QueryCapture } from 'tree-sitter';

@id('ApexDangerousMethods')
@name('ApexDangerousMethods')
@category('security')
@context('scan')
@message('Calling potentially dangerous method')
@suggestion('While it might solve a short-term problem, disabling CRUD security on a trigger can create serious long-term issues. Consider investigating the reason for this exception and find a solution that satisfied your use case and follows secrurity best-practices.')
@ruleSeverity(3)
@treeQuery('(expression_statement (method_invocation name: (identifier) @method (#eq? @method \"disableTriggerCRUDSecurity\"))@target)')
export class ApexDangerousMethods extends ScanRule {}
