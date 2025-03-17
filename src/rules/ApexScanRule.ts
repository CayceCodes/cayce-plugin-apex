import { ScanRule } from 'cayce-types';

import TsSfApex from 'tree-sitter-sfapex';
import Parser, { Query, QueryCapture } from 'tree-sitter';
import {ScanResultDigest} from 'cayce-types';

export default class ApexScanRule extends ScanRule{
    TreeSitterLanguage = TsSfApex.apex;
    validate(targetSource: string, parser?: Parser): ScanResultDigest[] {
        this.TreeSitterLanguage = TsSfApex.apex;
        this.rawSource = targetSource;
        parser = new Parser();
        parser.setLanguage(TsSfApex.apex);
        const rootTree: Parser.Tree = parser.parse(this.rawSource);
        const queryInstance: Query = new Query(this.TreeSitterLanguage, this.TreeQuery);
        const results: ScanResultDigest[] = [];
        let captures: QueryCapture[] = [];

        captures = queryInstance.captures(rootTree.rootNode);


        captures.forEach((capture) => {
            results.push(this.buildScanResult(capture.node));
        });
        return results;
    }
}

