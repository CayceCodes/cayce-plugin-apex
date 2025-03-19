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

@id('NamingRule')
@name('FormalParameterNamingConventions')
@category('codestyle')
@context('scan')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion('')
@ruleSeverity(1)
@treeQuery('(parser_output)@p')
export class NamingRule extends ApexScanRule {}
