import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('IfElseStmtsMustUseBraces')
@name('IfElseStmtsMustUseBraces')
@category('codestyle')
@context('scan')
@message("Avoid using 'if...else' statements without curly braces")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class IfElseStmtsMustUseBraces extends ApexScanRule {}
