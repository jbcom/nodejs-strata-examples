const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const nextVersion = process.argv[2];

if (!nextVersion) {
  console.error('No version provided');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');

// 1. Update root package.json
const rootPackageJsonPath = path.join(rootDir, 'package.json');
const rootPackageJson = JSON.parse(fs.readFileSync(rootPackageJsonPath, 'utf8'));
rootPackageJson.version = nextVersion;
fs.writeFileSync(rootPackageJsonPath, JSON.stringify(rootPackageJson, null, 2) + '\n');

// 2. Update subpackages
const workspaceYamlPath = path.join(rootDir, 'pnpm-workspace.yaml');
const workspaceYaml = fs.readFileSync(workspaceYamlPath, 'utf8');
const packages = workspaceYaml
  .split('\n')
  .filter(line => line.trim().startsWith('-'))
  .map(line => line.trim().replace('-', '').trim().replace(/'/g, '').replace(/"/g, ''));

for (const pkg of packages) {
  const pkgPath = path.join(rootDir, pkg, 'package.json');
  if (fs.existsSync(pkgPath)) {
    console.log(`Updating ${pkg}/package.json to ${nextVersion}`);
    const pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    pkgJson.version = nextVersion;
    fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + '\n');
  }
}

// 3. Update pnpm-lock.yaml
console.log('Updating pnpm-lock.yaml...');
try {
  execSync('pnpm install --no-frozen-lockfile --ignore-scripts', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to update lockfile:', error);
  // Continue anyway as we want to commit the package.json changes
}

console.log(`Successfully updated all packages to ${nextVersion}`);
