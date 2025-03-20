import { id, ruleSeverity, category, context, message, name, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('CountFormalParametersSubRule')
@name('Variable/Parameter/Constant appropriate in length')
@category('codestyle')
@context('measure')
@message('All proper-length identifiers')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(formal_parameter name: (identifier))@target')
export class CountFormalParametersSubRule extends ApexScanRule {}
