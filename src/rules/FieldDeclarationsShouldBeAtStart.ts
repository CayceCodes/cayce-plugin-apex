import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('FieldDeclarationsShouldBeAtStart')
@name('FieldDeclarationsShouldBeAtStart')
@category('codestyle')
@context('scan')
@message("Field declaration for ''{0}'' should be before method declarations in its class")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(field_declaration) @field')
export class FieldDeclarationsShouldBeAtStart extends ApexScanRule {}
