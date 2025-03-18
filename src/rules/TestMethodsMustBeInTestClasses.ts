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



@id('TestMethodsMustBeInTestClasses')
@name('TestMethodsMustBeInTestClasses')
@category('errorprone')
@context('scan')
@message('Test methods must be in test classes')
@suggestion('')
@ruleSeverity(3)
@treeQuery(
    '(class_declaration (modifiers) @mods (#not-match? @mods "isTest")) (method_declaration(modifiers (annotation) @target (#match? @target "isTest")))'
)
export class TestMethodsMustBeInTestClasses extends ApexScanRule {}