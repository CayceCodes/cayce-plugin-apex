import { id,
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,

    suggestion,
} from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

@id('ApexCSRF')
@name('ApexCSRF')
@category('errorprone')
@context('scan')
@suggestion('Constructors are generally best reserved for simple initialization, so heavier logic that accesses a managed resource (such as a data store) are best left to their own discreet methods where their idiosyncrasies can be better managed.')
@message('Avoid making DML operations in Apex class constructor')
@ruleSeverity(3)
@treeQuery(
    '(constructor_body (expression_statement (dml_expression)@target))'
)
export class ApexCSRF extends ApexScanRule {}
