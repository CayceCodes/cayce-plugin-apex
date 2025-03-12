import { id,
    category,
    context,
    message,
    name,
    treeQuery,
    ruleSeverity,
    ScanRule,
    suggestion
} from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';

import Parser from 'tree-sitter';
@id('TooManyFields')
@name('TooManyFields')
@category('design')
@context('scan')
@message('Too many fields')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(class_body(field_declaration) @1)')
export class TooManyFields extends ScanRule {
    public validate(targetSource: string, parser: Parser): Parser.SyntaxNode[] {
        const results: Parser.SyntaxNode[] = super.validate(targetSource, parser);
        if(results.length > 20) {
            return results;
        }
        else{
            return [];
        }
    }
}