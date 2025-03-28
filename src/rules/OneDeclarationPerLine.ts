import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('OneDeclarationPerLine')
@name('One Variable Declaration Per Line')
@category('codestyle')
@context('scan')
@message('Multiple variables should not be declared on the same line.')
@suggestion(
    'Although this is valid syntax, it can be unclear to the reader at first glance. Consider declaring each variable on a discreet line.'
)
@ruleSeverity(1)
@treeQuery('((variable_declarator) @one (variable_declarator) @two)')
export class OneDeclarationPerLine extends ApexScanRule {}
