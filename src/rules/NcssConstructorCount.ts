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




@id('NcssConstructorCount')
@name('NcssConstructorCount')
@category('design')
@context('scan')
@message('The constructor has an NCSS line count of {0}')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class NcssConstructorCount extends ApexScanRule {}
