import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('QueueableWithoutFinalizer')
@name('QueueableWithoutFinalizer')
@category('bestpractices')
@context('scan')
@message("This Queueable doesn't attach a Finalizer")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(interfaces(type_list)@list)@interface')
export class QueueableWithoutFinalizer extends ApexScanRule {}
