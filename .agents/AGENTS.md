# Workspace Customization Rules - tripleS Dimension Portal

This document defines repository-specific behaviors and guidelines for AI agents pair-programming on the tripleS Dimension Portal game.

---

## 📋 Context Documentation Rule (Mandatory Extra Step)

### 1. Maintain the Development Ledger
Every time you perform a change, add a feature, fix a bug, or execute a task requested by the user, you **MUST** record your changes in the development ledger:
- **Ledger Path**: [docs/CONTEXT.md](file:///Users/ignaciorojas/Documents/repos/ia_rpg_card_game/docs/CONTEXT.md)
- **Time of Update**: Perform this update as part of the verification/crossover step at the end of your execution phase, before writing your final walkthrough.

### 2. What to Document in `CONTEXT.md`
When editing `docs/CONTEXT.md`, append or update sections to specify:
- **Date/Timestamp**: The date and local time of the update.
- **Goal / Request**: Summary of the task requested by the user.
- **Implementation details**: Files modified/created, changes made, and architectural considerations (e.g. state additions, shader modifications, sound effects parameters).
- **Verification step**: How to run and verify the changes locally.
- **Current Project State**: Keep the overall list of completed/active features accurate so future agents can get up to speed instantly.

---

## 🎨 Design & Game Coding Guidelines
- **Retro Aesthetic**: Maintain the double-border style, CRT overlays, scanlines, and VT323/Press Start 2P font pairings for all game views.
- **WebGL Fallbacks**: All GPU/WebGL intensive visuals (e.g. shaders, transitions) must include a fallback condition (gradient, canvas hiding) in case WebGL context is lost or unsupported (like in headless CI/browser subagents).
- **Self-Contained Audio**: For game sounds, prioritize browser-native programmatic Web Audio API synthesis instead of linking external static files, keeping the repo lightweight.
