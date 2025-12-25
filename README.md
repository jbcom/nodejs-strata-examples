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

This repository uses GitHub Actions to verify that all examples build correctly with the latest version of `@jbcom/strata`.

The verification runs:
- On every push to `main`
- On every pull request
- Weekly to check for breaking changes in `@jbcom/strata`

### Live Deployment
Successfully merged PRs to `main` are automatically deployed to GitHub Pages.

### Visual Regression Tests (Planned)
Future updates will include automated visual regression tests using Playwright/E2E to ensure visual consistency across strata versions.

## License

MIT © [Jon Bogaty](https://github.com/jbcom)
