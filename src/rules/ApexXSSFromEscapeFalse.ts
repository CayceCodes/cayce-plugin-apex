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
@id('ApexXSSFromEscapeFalse')
@name('ApexXSSFromEscapeFalse')
@category('security')
@context('scan')
@message('Apex classes should escape Strings in error messages')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class ApexXSSFromEscapeFalse extends ScanRule {}
