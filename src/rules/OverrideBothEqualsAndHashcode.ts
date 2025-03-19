import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('OverrideBothEqualsAndHashcode')
@name('OverrideBothEqualsAndHashcode')
@category('errorprone')
@context('scan')
@message('Ensure you override both equals() and hashCode()')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class OverrideBothEqualsAndHashcode extends ApexScanRule {}
