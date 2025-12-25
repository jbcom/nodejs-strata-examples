const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Examples to collect
const examples = [
    { name: 'basic-terrain', source: 'basic-terrain/dist' },
    { name: 'water-scene', source: 'water-scene/dist' },
    { name: 'sky-volumetrics', source: 'sky-volumetrics/dist' },
    { name: 'vegetation-showcase', source: 'vegetation-showcase/dist' },
    { name: 'api-showcase', source: 'api-showcase/dist' },
    { name: 'api-docs', source: 'api-showcase/docs' }
];

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function copyDir(src, dest) {
    console.log(`Copying ${src} to ${dest}...`);
    if (!fs.existsSync(src)) {
        console.warn(`Warning: Source directory ${src} does not exist.`);
        return;
    }
    ensureDir(dest);
    
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Main execution
try {
    // 1. Clean and create dist directory
    console.log('Cleaning dist directory...');
    if (fs.existsSync(distDir)) {
        fs.rmSync(distDir, { recursive: true, force: true });
    }
    ensureDir(distDir);

    // 2. Copy each example dist to root dist
    for (const example of examples) {
        const src = path.join(rootDir, example.source);
        const dest = path.join(distDir, example.name);
        copyDir(src, dest);
    }

    // 3. Copy root index.html to dist
    console.log('Copying root index.html...');
    fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));

    console.log('Successfully collected all builds into dist/');
} catch (error) {
    console.error('Error collecting builds:', error);
    process.exit(1);
}
