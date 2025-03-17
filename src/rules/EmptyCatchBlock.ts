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
import ApexScanRule from './ApexScanRule.js';

@id('EmptyCatchBlock')
@name('EmptyCatchBlock')
@category('errorprone')
@context('scan')
@suggestion('')
@message('Avoid empty catch blocks')
@ruleSeverity(3)
@treeQuery('(catch_clause (block) @catch)')
export class EmptyCatchBlock extends ScanRule {}