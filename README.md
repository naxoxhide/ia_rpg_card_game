# 🌌 tripleS: Dimension Portal - Idle RPG Card Game

Welcome to the **tripleS: Dimension Portal** project, an immersive web-based idle RPG card game centered around the concept of tripleS and their digital collectibles (Objekts/Cards). Players navigate through dimensional gates, assemble decks composed of different members and sub-units, and embark on passive idle missions to stabilize the multiverse.

---

## 🔮 Core Game Concept
The game combines RPG progression mechanics with card collection elements:
- **Character Selection Questionnaire**: An interactive intro sequence that queries the player's preferences and background to assign their starting tripleS companion.
- **Objekts Deck Building**: Decks are populated with members from S1 to S24, triggering synergy bonuses when specific sub-units (Acid Angel from Asia, +(KR)ystal Eyes, Aria, Visionary Vision) are united.
- **WebGL Cosmic Portals**: Immersive backgrounds animated with custom fragment shaders mapping the chaotic dimension-hopping journey of the group.
- **Idle Missions**: Decks run automated encounters, earning experience points and securing new card drops.

---

## 🚀 Technologies Used
- **Core Architecture**: HTML5 semantic markup and Vanilla JavaScript state controllers.
- **WebGL Shader Engine**: Custom, highly optimized GLSL fragment shader rendering the animated cosmic gas clouds and blinking star fields in real-time.
- **Web Audio Synth**: A self-contained sound effects engine utilizing the browser's native **Web Audio API** to compile classic arcade sweeps and chimes programmatically.
- **Retro Styling (CSS)**: Double pixel-art borders, glowing neon headers, text glitch animations, and a retro CRT screen overlay (scanlines, vignettes, and pixel flickering).
- **Aesthetic Typography**: Google Fonts integration using `Press Start 2P` (headers and interfaces) and `VT323` (readable terminal dialogue).

---

## 🤖 AI Co-Piloted Agent Development
This project is built using advanced agentic pair-programming workflows, co-created by the user alongside **Antigravity IDE** (developed by Google DeepMind) and **Claude**. 

The repository contains specialized **Agent Customization Skills** designed to enhance the AI's autonomous capability to understand, plan, and write game features directly in the codebase:

### Integrated Agent Skills (`.agents/skills/`)
1. **[`game-engine`](file:///.agents/skills/game-engine/SKILL.md)**: Exposes advanced reference documentation, algorithms (noise, collisions, math), and baseline templates for HTML5 Canvas and raw WebGL rendering loops.
2. **[`game-development`](file:///.agents/skills/game-development/SKILL.md)**: Coordinates gaming frameworks, design principles, multiplayer systems, audio synthesis, and sub-genre guidelines (2D, 3D, mobile, and web).

These skills are checked by the agent at runtime to align with the workspace's architecture.

---

## 🎮 How to Play / Run Locally
Since the game runs on native browser APIs, you only need to serve the root directory using any local web server:

**Option A: Python server**
```bash
python3 -m http.server 8000
```

**Option B: Node.js server**
```bash
npx serve -l 8000 ./
```

Open your browser and navigate to:
👉 **[http://localhost:8000](http://localhost:8000)**
