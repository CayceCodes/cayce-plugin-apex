import { id, ruleSeverity, category, context, message, name, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('CountVariableDeclaratorsSubRule')
@name('Variable/Parameter/Constant appropriate in length')
@category('codestyle')
@context('measure')
@message('All variable identifiers')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(variable_declarator name: (identifier)) @target')
export class CountVariableDeclaratorsSubRule extends ApexScanRule {}
