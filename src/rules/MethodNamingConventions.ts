import { id, category, context, message, name, ruleSeverity, treeQuery, suggestion } from 'cayce-types';

import { NamingRule } from './NamingRule.js';
@id('MethodNamingConventions')
@name('MethodNamingConventions')
@category('codestyle')
@context('scan')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion('')
@ruleSeverity(1)
@treeQuery('(method_declaration name:(identifier) @param (#not-match? @param "[a-zA-Z0-9]*"))')
export class MethodNamingConventions extends NamingRule {}
