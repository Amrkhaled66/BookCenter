// check-case-sensitivity.js
import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname, basename, relative } from 'path';
import { sync } from 'glob';

// Get all JS/JSX files
const files = sync('src/**/*.{js,jsx}');
const issues = [];

files.forEach(file => {
  const content = readFileSync(file, 'utf8');
  
  // Simple regex to find imports
  const importRegex = /import .* from ['"](\..*?)['"]/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    const resolvedPath = resolve(dirname(file), importPath);
    
    // Check if the path exists with the exact case
    const dirToCheck = dirname(resolvedPath);
    const baseName = basename(resolvedPath);
    
    if (existsSync(dirToCheck)) {
      const dirContents = readdirSync(dirToCheck);
      const correctCase = dirContents.find(item => item.toLowerCase() === baseName.toLowerCase());
      
      if (correctCase && correctCase !== baseName) {
        issues.push(`${file}: "${importPath}" should be "${relative(dirname(file), dirToCheck)}/${correctCase}"`);
      }
    }
  }
});

if (issues.length > 0) {
  console.error('Case sensitivity issues found:');
  issues.forEach(issue => console.error(issue));
  process.exit(1);
} else {
  console.log('No case sensitivity issues found');
}