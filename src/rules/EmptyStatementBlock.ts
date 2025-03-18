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



@id('EmptyStatementBlock')
@name('EmptyStatementBlock')
@category('errorprone')
@context('scan')
@message('Avoid empty block statements.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(block) @block')
export class EmptyStatementBlock extends ApexScanRule {}