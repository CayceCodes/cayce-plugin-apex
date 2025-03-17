import { id, ScanRule, context, message, name, ruleSeverity, treeQuery,  suggestion, category } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

import {  ScanResultDigest } from 'cayce-types';

@id('ApexSOQLInjection')
@name('ApexSOQLInjection')
@category('security')
@context('scan')
@message('Avoid untrusted/unescaped variables in DML query')
@suggestion('Even today, query/script injection is a real threat when exposing any sort of execution to the outside world. Apex has a queryWithBinds method that is a handy tool in mitigating this risk.')
@ruleSeverity(3)
@treeQuery('(method_invocation(identifier)@one(identifier)@two (#match? @one "Database") (#eq? @two "query"))@target')
export class ApexSOQLInjection extends ApexScanRule {}
