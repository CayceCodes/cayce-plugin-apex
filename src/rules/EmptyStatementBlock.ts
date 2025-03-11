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


@id('EmptyStatementBlock')
@name('EmptyStatementBlock')
@category('errorprone')
@context('scan')
@message('Avoid empty block statements.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(block) @block')
export class EmptyStatementBlock extends ScanRule {}