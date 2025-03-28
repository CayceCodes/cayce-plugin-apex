import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('EagerlyLoadedDescribeSObjectResult')
@name('EagerlyLoadedDescribeSObjectResult')
@category('performance')
@context('scan')
@message('DescribeSObjectResult could be being loaded eagerly with all child relationships.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(method_invocation object:(identifier) @object (#match? @object "DescribeSObjectResult"))@all')
export class EagerlyLoadedDescribeSObjectResult extends ApexScanRule {}
