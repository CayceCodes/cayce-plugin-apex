import { id,
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    suggestion,
} from 'cayce-types';


import { NamingRule } from './NamingRule.js';
@id('PropertyNamingConventions')
@name('PropertyNamingConventions')
@category('codestyle')
@context('scan')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion('')
@ruleSeverity(1)
@treeQuery('(field_declaration declarator: (variable_declarator name:(identifier) @name (#match? @name "[a-zA-Z0-9]")))')
export class PropertyNamingConventions extends NamingRule {}