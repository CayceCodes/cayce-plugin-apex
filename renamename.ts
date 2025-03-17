import * as fs from 'fs';
import * as path from 'path';

const rulesDir = path.join(process.cwd(), 'src', 'rules');

// Read all .ts files in the rules directory
fs.readdir(rulesDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.filter(file => file.endsWith('.ts')).forEach(file => {
        const filePath = path.join(rulesDir, file);
        const content = fs.readFileSync(filePath, 'utf8');

        // Skip if @id already exists
        if (content.includes('@id(')) {
            return;
        }

        // Get the class name (same as file name without .ts)
        const className = file.replace('.ts', '');

        // Replace the first occurrence of @name with @id + @name
        const modifiedContent = content.replace(
            /@name\(/,
            `@id('${className}')\n@name(`
        );

        // Add the import if it doesn't exist
        const finalContent = modifiedContent.includes('id,') ?
            modifiedContent :
            modifiedContent.replace(
                /import {/,
                'import { id,'
            );

        fs.writeFileSync(filePath, finalContent);
        console.log(`Added @id decorator to ${file}`);
    });
});