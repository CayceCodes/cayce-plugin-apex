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



@id('MethodWithSameNameAsEnclosingClass')
@name('MethodWithSameNameAsEnclosingClass')
@category('errorprone')
@context('scan')
@message('Classes should not have non-constructor methods with the same name as the class')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(identifier)@name')
export class MethodWithSameNameAsEnclosingClass extends ApexScanRule {}