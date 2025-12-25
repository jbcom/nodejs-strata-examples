# @jbcom/strata-examples

Example applications for [Strata 3D](https://github.com/jbcom/nodejs-strata).

## Live Demos

Visit the **[Live Examples Dashboard](https://jbcom.github.io/nodejs-strata-examples/)** to see Strata 3D in action.

## Examples

### Live Dashboard (New!)
All examples are now available in a single [Live Examples Dashboard](https://jbcom.github.io/nodejs-strata-examples/).

### Basic Terrain (`basic-terrain/`)
Simple procedural terrain with heightmap generation and water plane.

### Water Scene (`water-scene/`)
Advanced water rendering with reflections, refractions, and wave simulation.

### Sky & Volumetrics (`sky-volumetrics/`)
Procedural sky, clouds, and volumetric effects like god rays and fog.

### Vegetation Showcase (`vegetation-showcase/`)
Instanced vegetation with wind animation, LOD, and biome distribution.

### API Showcase (`api-showcase/`)
Comprehensive examples of the Strata API for all major systems.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/jbcom/nodejs-strata-examples.git
cd nodejs-strata-examples

# Install dependencies
pnpm install

# Run an example
pnpm dev:terrain    # Basic terrain
pnpm dev:water      # Water scene
pnpm dev:sky        # Sky & volumetrics
pnpm dev:vegetation # Vegetation showcase
pnpm dev:api        # API showcase
```

## Requirements

- Node.js 18+
- pnpm 8+
- Modern browser with WebGL2 support

## Structure

```
strata-examples/
├── basic-terrain/       # Simple terrain example
├── water-scene/         # Advanced water example
├── sky-volumetrics/     # Sky and volumetric effects
├── vegetation-showcase/ # Instanced vegetation
├── api-showcase/        # API reference examples
├── scripts/             # Build and collection utilities
└── pnpm-workspace.yaml
```

## Dependencies

All examples depend on the published `@jbcom/strata` npm package.

## CI/CD

This repository uses GitHub Actions for fully automated CI/CD:
- **Automatic Releases**: Uses `semantic-release` with conventional commits to automate versioning, changelog generation, and GitHub releases.
- **Verification**: Builds and checks all examples on every push and pull request.
- **Live Deployment**: Merged changes to `main` are automatically deployed to GitHub Pages.

### Conventional Commits
This repository enforces [Conventional Commits](https://www.conventionalcommits.org/). This allows for automated semantic versioning. Use the following prefixes:
- `feat:` for new features (triggers MINOR release)
- `fix:` for bug fixes (triggers PATCH release)
- `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:` for other changes

## License

MIT © [Jon Bogaty](https://github.com/jbcom)
