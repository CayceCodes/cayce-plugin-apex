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

@id('EmptyWhileStmt')
@name('EmptyWhileStmt')
@category('errorprone')
@context('scan')
@message("Avoid empty 'while' statements")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(while_statement (block) @block (#not-match? @block "\\S"))')
export class EmptyWhileStmt extends ApexScanRule {}