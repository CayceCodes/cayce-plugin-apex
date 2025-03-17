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




@id('NcssTypeCount')
@name('NcssTypeCount')
@category('design')
@context('scan')
@message('The type has an NCSS line count of {0}')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class NcssTypeCount extends ApexScanRule {}
