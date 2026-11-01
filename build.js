const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const outputDirs = [
  path.join(rootDir, 'dist'),
  path.join(rootDir, 'public')
];

const filesToCopy = [
  'index.html',
  'thank-you.html',
  'README.md',
  'facebook-ad-copy.md'
];

const foldersToCopy = ['css', 'js', 'products'];

outputDirs.forEach(outDir => {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  filesToCopy.forEach(file => {
    const src = path.join(rootDir, file);
    const dest = path.join(outDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  });

  foldersToCopy.forEach(folder => {
    const src = path.join(rootDir, folder);
    const dest = path.join(outDir, folder);
    if (fs.existsSync(src)) {
      fs.cpSync(src, dest, { recursive: true });
    }
  });
});

console.log('✅ Build successful! Static assets populated in root, dist/, and public/ for any hosting provider.');
