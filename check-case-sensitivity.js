// scripts/check-imports.js
import { readdirSync, statSync, readFileSync } from 'fs';
import { join } from 'path';

function checkCase(dir) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      checkCase(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      const content = readFileSync(fullPath, 'utf-8');
      const imports = content.match(/from\s+['"](.+?)['"]/g) || [];
      
      imports.forEach(imp => {
        const importPath = imp.replace(/from\s+['"](.+?)['"]/, '$1');
        if (importPath !== importPath.toLowerCase() && importPath !== importPath.toUpperCase()) {
          console.log(`Mixed case import in ${fullPath}: ${importPath}`);
        }
      });
    }
  });
}

checkCase( './src');