import {
    category,
    context,
    message,
    name,
    priority,
    query,
    regex,
    ResultType,
    ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';
import Parser from 'tree-sitter';
@name('EmptyTryOrFinallyBlock')
@category('errorprone')
@context('scan')
@suggestion('')
@message('Avoid empty try or finally blocks')
@priority(3)
@query('((try_statement (block)@try) (finally_clause (block)@final))@all')
@regex('')
export class EmptyTryOrFinallyBlock extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        if (node.namedChildCount == 0) {
            return [new ScanResult(this, ResultType.VIOLATION)];
        }
        return [];
    }
}
// TODO: Progress
