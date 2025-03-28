import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('EmptyTryOrFinallyBlock')
@name('EmptyTryOrFinallyBlock')
@category('errorprone')
@context('scan')
@suggestion('')
@message('Avoid empty try or finally blocks')
@ruleSeverity(3)
@treeQuery('(try_statement (block)) (finally_clause (block)@target (#not-match? @target "\\S"))')
export class EmptyTryOrFinallyBlock extends ApexScanRule {}
