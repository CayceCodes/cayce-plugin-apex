import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('NcssMethodCount')
@name('NcssMethodCount')
@category('design')
@context('scan')
@message("The method ''{0}()'' has an NCSS method count of {1} (limit: {2})")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class NcssMethodCount extends ApexScanRule {}
