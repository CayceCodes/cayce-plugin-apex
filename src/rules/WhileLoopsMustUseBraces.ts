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
@id('WhileLoopsMustUseBraces')
@name('WhileLoopsMustUseBraces')
@category('codestyle')
@context('scan')
@message("Avoid using 'while' statements without curly braces")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class WhileLoopsMustUseBraces extends ScanRule {}
