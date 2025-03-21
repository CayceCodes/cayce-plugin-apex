import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('WhileLoopsMustUseBraces')
@name('WhileLoopsMustUseBraces')
@category('codestyle')
@context('scan')
@message("Avoid using 'while' statements without curly braces")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class WhileLoopsMustUseBraces extends ApexScanRule {}
