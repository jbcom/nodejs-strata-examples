# @jbcom/strata-examples

Example applications for [Strata 3D](https://github.com/jbcom/nodejs-strata).

## Examples

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
```

## Requirements

- Node.js 18+
- pnpm 8+
- Modern browser with WebGL2 support

## Structure

```
strata-examples/
├── basic-terrain/       # Simple terrain example
│   ├── src/
│   │   ├── App.tsx
│   │   └── core-usage.ts
│   └── package.json
├── water-scene/         # Advanced water example
├── sky-volumetrics/     # Sky and volumetric effects
├── vegetation-showcase/ # Instanced vegetation
├── api-showcase/        # API reference examples
└── pnpm-workspace.yaml
```

## Dependencies

All examples depend on the published `@jbcom/strata` npm package.

```json
{
  "dependencies": {
    "@jbcom/strata": "^1.3.0",
    "@react-three/fiber": "^9.0.0",
    "react": "^18.3.0",
    "three": "^0.170.0"
  }
}
```

## Related

- [Strata 3D](https://github.com/jbcom/nodejs-strata) - Full procedural graphics library
- [Strata Shaders](https://github.com/jbcom/nodejs-strata-shaders) - GLSL shader collection
- [Strata Presets](https://github.com/jbcom/nodejs-strata-presets) - Pre-configured settings

## License

MIT © [Jon Bogaty](https://github.com/jbcom)
