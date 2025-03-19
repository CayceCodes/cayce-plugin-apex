import { id, ruleSeverity, category, context, message, name, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('ShortIdentifierLengths')
@name('Variable, constant or parameter name too short')
@category('codestyle')
@context('measure')
@message('This query returns all variable/parameter/constant names that are under 3 characters in length')
@suggestion('Increase the length of the identifier')
@ruleSeverity(3)
@treeQuery(
    '(variable_declarator name: (identifier)@var (#match? @var "^.{0,2}$"))' +
        '(formal_parameter name: (identifier)@param (#match? @param "^.{0,2}$"))'
)
export class ShortIdentifierLengths extends ApexScanRule {}
