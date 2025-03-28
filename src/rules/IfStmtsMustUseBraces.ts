import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('IfStmtsMustUseBraces')
@name('IfStmtsMustUseBraces')
@category('codestyle')
@context('scan')
@message('Avoid using if statements without curly braces')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(if_statement consequence:(block) @block (#match? @block "\\{*\\}"))')
export class IfStmtsMustUseBraces extends ApexScanRule {}
