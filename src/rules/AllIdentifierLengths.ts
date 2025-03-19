import { id, ruleSeverity, category, context, message, name, treeQuery, suggestion } from 'cayce-types';
import { ScanResultDigest } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';
import { CountFormalParametersSubRule } from './CountFormalParametersSubRule.js';
import { CountVariableDeclaratorsSubRule } from './CountVariableDeclaratorsSubRule.js';

@id('AllIdentifierLengths')
@name('Variable/Parameter/Constant appropriate in length')
@category('codestyle')
@context('measure')
@message('All proper-length identifiers')
@suggestion('')
@ruleSeverity(3)
@treeQuery(
    '(variable_declarator name: (identifier)@var) (#match? @var "^.{3,2000}$")' +
        '(formal_parameter name: (identifier)@param (#match? @param "^.{3,2000}$"))@target'
)
export class AllIdentifierLengths extends ApexScanRule {
    validate(targetSource: string): ScanResultDigest[] {
        const formalParams: CountFormalParametersSubRule = new CountFormalParametersSubRule();
        const variableDeclarations: CountVariableDeclaratorsSubRule = new CountVariableDeclaratorsSubRule();

        const results: ScanResultDigest[] = [];
        results.concat(formalParams.validate(targetSource));
        results.concat(variableDeclarations.validate(targetSource));

        return results;
    }
}
