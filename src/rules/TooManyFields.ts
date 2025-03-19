import { id, category, context, message, name, treeQuery, ruleSeverity, suggestion } from 'cayce-types';
import ApexScanRule from './ApexScanRule.js';
import ScanResultDigest from 'cayce-types/dist/scan-result-digest.js';
@id('TooManyFields')
@name('TooManyFields')
@category('design')
@context('scan')
@message('Too many fields')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(class_body(field_declaration) @1)')
export class TooManyFields extends ApexScanRule {
    public validate(targetSource: string): ScanResultDigest[] {
        const results: ScanResultDigest[] = super.validate(targetSource);
        if (results.length > 20) {
            return results;
        } else {
            return [];
        }
    }
}
