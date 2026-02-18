# Life Game (React)

React implementation of Conway's Game of Life. The grid is initialized
randomly and evolves at a fixed tick interval.

**Features**
- Random initial matrix
- Tick-based simulation with configurable interva- Pure service that calculates the next generation

**Tech Stack**
- React
- TypeScript
- Vite

**Getting Started**
1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the build locally:

```bash
npm run preview
```

**Configuration**
- `src/config/matrix-config.ts` defines `rows`, `columns`, and `ticInterval` (ms).

**Project Structure**
- `src/components/Matrix.tsx` renders the grid
- `src/services/LifeGameServices.ts` computes the next matrix state
- `src/utils/random.ts` provides random matrix helpers
- `src/config/matrix-config.ts` contains the simulation config
- `src/App.tsx` wires the UI
- `src/App.css` styles the grid

**Rules**
- Any live cell with fewer than two live neighbors dies.
- Any live cell with two or three live neighbors lives on.
- Any live cell with more than three live neighbors dies.
- Any dead cell with exactly three live neighbors becomes a live cell.
