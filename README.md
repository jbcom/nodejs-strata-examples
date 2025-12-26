# @strata/examples

Example applications for [Strata 3D](https://strata.game).

## 📚 Documentation

**Full documentation is available at [strata.game](https://strata.game)**

- [Live Showcase](https://strata.game/showcase/)
- [Getting Started](https://strata.game/getting-started/)
- [API Reference](https://strata.game/api/)

---

## 🏢 Enterprise Context

**Strata** is the Games & Procedural division of the [jbcom enterprise](https://jbcom.github.io). This repository provides example applications for Strata 3D, showcasing the unified design system and interconnections with sibling organizations like [Agentic](https://agentic.dev) and [Extended Data](https://extendeddata.dev).

## Examples

| Example | Description | Port |
|---------|-------------|------|
| `basic-terrain` | Simple procedural terrain with heightmap generation | 3000 |
| `water-scene` | Advanced water rendering with reflections and waves | 3001 |
| `vegetation-showcase` | GPU-instanced vegetation with wind animation | 3002 |
| `sky-volumetrics` | Procedural sky, clouds, and volumetric effects | 3003 |
| `api-showcase` | Comprehensive API examples for all systems | 3004 |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/strata-game-library/examples.git
cd examples

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

## Related

- [Strata Documentation](https://strata.game) - Full documentation
- [Strata Core](https://github.com/strata-game-library/core) - Main library
- [Strata Presets](https://github.com/strata-game-library/presets) - Pre-configured settings

## License

MIT © [Jon Bogaty](https://github.com/jbcom)
