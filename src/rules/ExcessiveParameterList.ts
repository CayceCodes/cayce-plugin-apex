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



@id('ExcessiveParameterList')
@name('ExcessiveParameterList')
@category('design')
@context('scan')
@message('Avoid long parameter lists.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(formal_parameters) @param')
export class ExcessiveParameterList extends ApexScanRule {}