# Workflow - Verificar Calidad de Código con Context7

Este documento describe el flujo de trabajo (workflow) para auditar la calidad, compatibilidad y optimización del código del proyecto tripleS Dimension Portal utilizando **Context7**.

---

## 📋 Objetivos de Calidad
1. **Compatibilidad del Shader**: Validar que el fragment shader de WebGL cumpla con el estándar GLSL ES 1.00 (WebGL 1.0) y no contenga bucles dinámicos ilegales.
2. **Audio Nativo Resiliente**: Asegurar que las llamadas a la Web Audio API (como `AudioContext`, `OscillatorNode`, `GainNode`) cumplan con los requerimientos modernos de interacción de usuario (estados `suspended` y reanudación).
3. **Responsive Pixel Art**: Validar que los estilos CSS no difuminen las texturas pixel art de los retratos y mantengan el escalado de bordes nítido (`image-rendering: pixelated`).

---

## 🛠️ Procedimiento de Auditoría con Context7

Cada vez que se modifique o agregue una librería, shader o API del navegador, sigue estos pasos utilizando las herramientas de Context7:

### Paso 1: Resolver la Identidad de la API/Librería
Antes de buscar mejores prácticas, resuelve el ID oficial del recurso que estás auditando.
Ejemplos de consultas para el agente:
- Consultar ID para WebGL 1.0: `resolve-library-id(libraryName="webgl", userQuestion="GLSL ES 1.00 loops and array constraints")`
- Consultar ID para Web Audio: `resolve-library-id(libraryName="web-audio-api", userQuestion="handling user gesture interaction audio context resume")`

### Paso 2: Consultar Documentación y Buenas Prácticas
Utiliza el ID devuelto (por ejemplo, `/org/webgl` o similar) para realizar consultas de validación de sintaxis o deprecación:
- `query-docs(libraryId="/org/webgl", query="How to avoid compile-time loops errors in WebGL 1.0 shaders?")`
- `query-docs(libraryId="/org/web-audio-api", query="Best practices for oscillator pitch sweep and gain node envelope decay")`

### Paso 3: Análisis y Refactorización
Compara los resultados devueltos por Context7 con el código local actual:
- **WebGL**: Verifica que en [game.js](file:///Users/ignaciorojas/Documents/repos/ia_rpg_card_game/game.js) no existan bucles dependientes de variables de calidad no constantes.
- **CSS**: Compara con la especificación de `image-rendering` obtenida de docs para garantizar compatibilidad entre navegadores (Firefox, Chrome, Safari).

---

## 📌 Puntos de Mejora Continuos
- **WebGL Fallbacks**: Mantener activo el testeo en entornos headless (headless CI/headless browsers) verificando que el fallback por software al degradado radial CSS funcione si la compilación del shader retorna false.
- **Audio Clapping**: Evitar clics audibles al apagar osciladores mediante rampas exponenciales de ganancia a `0.001` en lugar de asignaciones directas de valor `0`.
