import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('CyclomaticComplexity')
@name('CyclomaticComplexity')
@category('design')
@context('scan')
@message("The {0} ''{1}'' has a{2} cyclomatic complexity of {3}.")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class CyclomaticComplexity extends ApexScanRule {}
