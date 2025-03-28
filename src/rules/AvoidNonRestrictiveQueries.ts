import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('AvoidNonRestrictiveQueries')
@name('AvoidNonRestrictiveQueries')
@category('performance')
@context('scan')
@message('Avoid {0} queries without a where or limit statement')
@suggestion('')
@ruleSeverity(3)
@treeQuery('((soql_query_body) @soql (#match? @soql "WHERE|LIMIT"))')
export class AvoidNonRestrictiveQueries extends ApexScanRule {}
