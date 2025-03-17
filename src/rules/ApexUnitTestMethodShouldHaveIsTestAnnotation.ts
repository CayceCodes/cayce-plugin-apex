import { id,
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    ScanRule,
    suggestion,
} from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('ApexUnitTestMethodShouldHaveIsTestAnnotation')
@name('ApexUnitTestMethodShouldHaveIsTestAnnotation')
@category('bestpractices')
@context('scan')
@message('Apex test methods should have @isTest annotation.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(modifiers(modifier(testMethod)@mod))')export class ApexUnitTestMethodShouldHaveIsTestAnnotation extends ApexScanRule {}
