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
import Parser, * as TreeSitter from 'tree-sitter';
import Query from 'tree-sitter';
import TsSfApex from 'tree-sitter-sfapex';
//TODO: Log Completed

@name('ApexSuggestUsingNamedCred')
@category('security')
@context('scan')
@message('Suggest named credentials for authentication')
@suggestion('')
@priority(3)
@query('(class_body)')
@regex('')
export class ApexSuggestUsingNamedCred extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        const results: ScanResult[] = [];
        const literals: string[] = [];
        node.descendantsOfType('identifier').forEach((ident) => {
            if (ident.text.startsWith('https')) {
                literals.push(ident.text);
            }
        });

        const queryString = `(method_invocation name: (identifier)@ident(argument_list)@args)`;
        const query: TreeSitter.Query = new TreeSitter.Query(TsSfApex.apex, queryString);
        const globalCaptures: Query.QueryCapture[] = query.captures(node);

        for (const capture of globalCaptures) {
            capture.node.children.forEach((child) => {
                if (literals.includes(child.text)) {
                    results.push(new ScanResult(this, ResultType.VIOLATION));
                }
                if (child.grammarType.includes('literal')) {
                    results.push(new ScanResult(this, ResultType.VIOLATION));
                }
            });
        }
        return results;
    }
}
