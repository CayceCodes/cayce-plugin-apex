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
            if(!this.nodeHasScanDirective(capture.node,'SuppressWarnings', 2)){
                results.push(super.buildScanResult(capture.node));
            }
        });
        return results;
    }

    nodeHasScanDirective(baseNode: Parser.SyntaxNode, annotationName: string, argumentCount: number): boolean {
        baseNode.descendantsOfType('annotation').forEach(annotationNode=>{
            if(annotationNode.text === annotationName){
                if(annotationNode.childForFieldName('annotation_argument_list')?.childCount === argumentCount){
                    return true;
                }
            }
        })
        return false;
    }

}

