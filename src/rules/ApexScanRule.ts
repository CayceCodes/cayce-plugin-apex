import { ScanRule } from 'cayce-types';

import TsSfApex from 'tree-sitter-sfapex';
import Parser, { Query, QueryCapture, QueryMatch } from 'tree-sitter';
import ScanRuleProperties from 'cayce-types/dist/scan-rule-properties.js';

export default class ApexScanRule extends ScanRule{
    validate(targetSource: string, parser: Parser): Parser.SyntaxNode[] {
        this.TreeSitterLanguage = TsSfApex.apex;
        this.rawSource = targetSource;
        parser = new Parser();
        parser.setLanguage(this.TreeSitterLanguage);
        const rootTree: Parser.Tree = parser.parse(this.rawSource);
        const queryInstance: Query = new Query(this.TreeSitterLanguage, this.TreeQuery);
        const results: Parser.SyntaxNode[] = [];
        let captures: QueryCapture[] = [];

        captures = queryInstance.captures(rootTree.rootNode);


        captures.forEach((capture) => {
            results.push(capture.node);
        });
        return results;
    }
}

