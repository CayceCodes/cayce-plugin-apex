import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('ApexXSSFromURLParam')
@name('ApexXSSFromURLParam')
@category('security')
@context('scan')
@message('Apex classes should escape/sanitize Strings obtained from URL parameters')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class ApexXSSFromURLParam extends ApexScanRule {}
