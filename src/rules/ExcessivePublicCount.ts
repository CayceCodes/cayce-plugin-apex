import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('ExcessivePublicCount')
@name('ExcessivePublicCount')
@category('design')
@context('scan')
@message('The class {0} has {1} public methods, attributes, and properties (limit: {2})')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(modifier(public)@pub)')
export class ExcessivePublicCount extends ApexScanRule {}
