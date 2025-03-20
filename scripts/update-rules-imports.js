#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
// Get the directory name in ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Paths
const rulesDir = path.resolve(__dirname, '../src/rules');
const indexPath = path.resolve(__dirname, '../src/index.ts');
// Read all rule files
const ruleFiles = fs.readdirSync(rulesDir)
    .filter(file => file.endsWith('.ts') && file !== 'ApexScanRule.ts');
// Read the current index.ts file
let indexContent = fs.readFileSync(indexPath, 'utf8');
// Extract the current imports section
const importRegex = /^import.*from '\.\/rules\/.*\.js';$/gm;
const currentImports = indexContent.match(importRegex) || [];
// Extract the current rules instantiation section
const rulesRegex = /registerRules\(\) {[\s\S]*?return \[([\s\S]*?)\];/m;
const rulesMatch = indexContent.match(rulesRegex);
const currentRules = rulesMatch ? rulesMatch[1].trim().split('\n').map(line => line.trim()) : [];
// Process each rule file
const imports = [];
const ruleInstances = [];
ruleFiles.forEach(file => {
    // Get the class name (assumed to be the same as the file name)
    const className = file.replace('.ts', '');
    // Create import statement
    const importStatement = `import { ${className} } from './rules/${className}.js';`;
    // Create rule instantiation
    const ruleInstance = `new ${className}(),`;
    // Add to our arrays if not already present
    if (!currentImports.some(imp => imp.includes(`{ ${className} }`))) {
        imports.push(importStatement);
    }
    if (!currentRules.some(rule => rule.includes(`new ${className}(),`))) {
        ruleInstances.push(ruleInstance);
    }
});
// Update the imports section
if (imports.length > 0) {
    // Find the last import
    const lastImportIndex = indexContent.lastIndexOf("import ");
    const lastImportEndIndex = indexContent.indexOf(';', lastImportIndex) + 1;
    // Insert new imports after the last import
    indexContent =
        indexContent.substring(0, lastImportEndIndex) +
            '\n' + imports.join('\n') +
            indexContent.substring(lastImportEndIndex);
}
// Update the rules instantiation section
if (ruleInstances.length > 0 && rulesMatch) {
    const rulesStartIndex = rulesMatch.index + rulesMatch[0].indexOf('[') + 1;
    const rulesEndIndex = rulesMatch.index + rulesMatch[0].indexOf(']');
    // Get existing rules content
    const existingRulesContent = indexContent.substring(rulesStartIndex, rulesEndIndex).trim();
    // Combine existing and new rules
    const newRulesContent = existingRulesContent
        ? existingRulesContent + '\n            ' + ruleInstances.join('\n            ')
        : ruleInstances.join('\n            ');
    // Replace the rules section
    indexContent =
        indexContent.substring(0, rulesStartIndex) +
            '\n            ' + newRulesContent +
            '\n        ' +
            indexContent.substring(rulesEndIndex);
}
// Write the updated content back to index.ts
fs.writeFileSync(indexPath, indexContent);
console.log(`Updated index.ts with ${imports.length} new imports and ${ruleInstances.length} new rule instances.`);
