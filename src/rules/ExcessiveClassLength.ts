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

@id('ExcessiveClassLength')
@name('ExcessiveClassLength')
@category('design')
@context('scan')
@suggestion('')
@message('Avoid really long classes.')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class ExcessiveClassLength extends ScanRule {}