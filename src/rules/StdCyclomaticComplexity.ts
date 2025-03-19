import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('StdCyclomaticComplexity')
@name('StdCyclomaticComplexity')
@category('design')
@context('scan')
@message("The {0} ''{1}'' has a Standard Cyclomatic Complexity of {2}.")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class StdCyclomaticComplexity extends ApexScanRule {}
