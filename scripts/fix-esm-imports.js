const fs = require('fs');
const path = require('path');

function fixImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const dirPath = path.dirname(filePath);
  
  // Replace directory imports with explicit file extensions
  content = content.replace(/from ['"]\.\/([^'"]+)['"]/g, (match, importPath) => {
    // If it's already a .js file, leave it
    if (importPath.endsWith('.js')) {
      return match;
    }
    
    // Check if the file exists directly
    const directFile = path.join(dirPath, `${importPath}.js`);
    if (fs.existsSync(directFile)) {
      return `from './${importPath}.js'`;
    }
    
    // Check if it's a directory with an index file
    const indexFile = path.join(dirPath, importPath, 'index.js');
    if (fs.existsSync(indexFile)) {
      return `from './${importPath}/index.js'`;
    }
    
    // Default to adding .js extension
    return `from './${importPath}.js'`;
  });
  
  // Replace relative imports with explicit file extensions
  content = content.replace(/from ['"]\.\.\/([^'"]+)['"]/g, (match, importPath) => {
    // If it's already a .js file, leave it
    if (importPath.endsWith('.js')) {
      return match;
    }
    
    // Check if the file exists directly
    const directFile = path.join(dirPath, '..', `${importPath}.js`);
    if (fs.existsSync(directFile)) {
      return `from '../${importPath}.js'`;
    }
    
    // Check if it's a directory with an index file
    const indexFile = path.join(dirPath, '..', importPath, 'index.js');
    if (fs.existsSync(indexFile)) {
      return `from '../${importPath}/index.js'`;
    }
    
    // Default to adding .js extension
    return `from '../${importPath}.js'`;
  });
  
  fs.writeFileSync(filePath, content);
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js')) {
      fixImportsInFile(filePath);
    }
  }
}

// Process the ESM directory
const esmDir = path.join(__dirname, '../dist/esm');
if (fs.existsSync(esmDir)) {
  processDirectory(esmDir);
  console.log('Fixed ES module imports');
} 