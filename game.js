// ==========================================
// TRIPLES DIMENSION PORTAL - GAME ENGINE
// ==========================================

// Member Database (tripleS S1 - S18, S23)
const MEMBERS = {
    'S1': { name: 'Seoyeon', id: 'S1', desc: 'La primera integrante de tripleS. Su carisma natural y liderazgo marcan el comienzo de la dimensión.' },
    'S2': { name: 'Hyerin', id: 'S2', desc: 'Una bailarina excepcional con una fuerza letal en combate. Su talento en ballet e hip-hop es inigualable.' },
    'S3': { name: 'Jiwoo', id: 'S3', desc: 'Veterana de las audiciones y reina de la variedad. Su expresividad y pasión pueden conquistar cualquier dimensión.' },
    'S4': { name: 'Chaeyeon', id: 'S4', desc: 'Ex-actriz infantil y estrella de televisión. Su experiencia profesional brilla tanto en el escenario como en la batalla.' },
    'S5': { name: 'Yooyeon', id: 'S5', desc: 'La reina visual inteligente. Combina su intelecto lógico con una presencia escénica arrolladora.' },
    'S6': { name: 'Soomin', id: 'S6', desc: 'Una fuerza alegre e impredecible. Aporta risas y un carisma caótico a todo el equipo.' },
    'S7': { name: 'Nakyoung', id: 'S7', desc: 'La bailarina principal con reflejos felinos y genes musicales extraordinarios. Hermana de la solista BIBI.' },
    'S8': { name: 'Yubin', id: 'S8', desc: 'Recarga energía con su comida favorita. Aporta una vibra activa y competitiva que fortalece al grupo.' },
    'S9': { name: 'Kaede', id: 'S9', desc: 'Una tierna y adorable integrante japonesa con reflejos rápidos e impactante talento visual.' },
    'S10': { name: 'Dahyun', id: 'S10', desc: 'La vocalista de las notas altas imposibles. Su voz resuena como una bendición a través de los mundos.' },
    'S11': { name: 'Kotone', id: 'S11', desc: 'Una rapera japonesa de estilo callejero y swag inconfundible. Su flow es legendario.' },
    'S12': { name: 'Yeonji', id: 'S12', desc: 'La joven integrante con un gran amor por la comida picante y una energía inagotable.' },
    'S13': { name: 'Nien', id: 'S13', desc: 'El comodín energético y ruidoso. Su fuerza física natural y risa fuerte motivan a todos.' },
    'S14': { name: 'Sohyun', id: 'S14', desc: 'Una productora nata y estratega musical. Escribe las habilidades del grupo y dirige las pistas.' },
    'S15': { name: 'Xinyu', id: 'S15', desc: 'Una líder visual imponente de gran estatura y carisma chic. "OMG, I\'m so pretty!"' },
    'S16': { name: 'Mayu', id: 'S16', desc: 'Adorable y carismática integrante japonesa con un tierno "¡Bye byekinnnn!" que cautiva a los rivales.' },
    'S17': { name: 'Lynn', id: 'S17', desc: 'Bailarina letal que aporta una técnica pulida de danza contemporánea al campo de batalla.' },
    'S18': { name: 'Joobin', id: 'S18', desc: 'Centro visual de gran encanto. Su misterio dimensional añade elegancia al mazo.' },
    'S23': { name: 'SeoAh', id: 'S23', desc: 'La rapera con actitud casual de "Yoooo bro!" que sorprende cantando Happy Birthday en momentos inesperados.' },
    'S24': { name: 'JiYeon', id: 'S24', desc: 'El as bajo la manga y pieza final de tripleS. Su expresividad y maestría en danza contemporánea completan el grupo.' }
};

// Subunit Definitions (Group mapping for Question 7)
const SUBUNITS = {
    'VV': ['S2', 'S5', 'S8', 'S9', 'S11', 'S12', 'S14', 'S13', 'S15', 'S3', 'S16', 'S17'], // Visionary Vision
    'AAA': ['S5', 'S7', 'S8', 'S2'], // Acid Angel from Asia
    'KRYSTAL': ['S1', 'S3', 'S4', 'S6'], // +(KR)ystal Eyes
    'ARIA': ['S10', 'S9'] // Aria (known members in our active list)
};

// Questions Database
const QUESTIONS = [
    {
        num: "PREGUNTA 1/12",
        text: "¿Cuál es tu trasfondo antes de unirte a esta gran aventura (Dimension)?",
        options: [
            { text: "Era una estudiante común y corriente preparándome para los exámenes, sin experiencia previa.", keys: ['S1'] },
            { text: "He entrenado en casi todas las grandes agencias, acumulando experiencia legendaria.", keys: ['S3'] },
            { text: "Ya era toda una profesional con años de experiencia en televisión infantil.", keys: ['S4'] },
            { text: "Vengo de una familia con genes musicales súper talentosos y reconocidos.", keys: ['S7'] },
            { text: "Fui el secreto mejor guardado; el as bajo la manga que aparece al final para completar el equipo.", keys: ['S24'] }
        ]
    },
    {
        num: "PREGUNTA 2/12",
        text: "Tu comida de confort absoluta para recuperar estamina en el juego es:",
        options: [
            { text: "Un plato gigante de Malatang ardiente o Tteokbokki picante.", keys: ['S15', 'S12'] },
            { text: "Un buen plato de Gopchang (intestinos de res) para recargar energías.", keys: ['S8'] },
            { text: "Un delicioso y simple bagel recién horneado.", keys: ['S11'] },
            { text: "¡Brócoli! Crujiente, verde y saludable.", keys: ['S13'] }
        ]
    },
    {
        num: "PREGUNTA 3/12",
        text: "Te quedas atrapado en un mapa difícil (o en un episodio de Badge War). ¿Cuál es tu estrategia?",
        options: [
            { text: "Analizar la situación fríamente con mi intelecto y sobrevivir con lógica.", keys: ['S5'] },
            { text: "Convertirme en la reina del drama y de la variedad para hacer el rescate divertido.", keys: ['S4', 'S3'] },
            { text: "Quejarme cómicamente con mis compañeros y culparlos con gracia si algo sale mal.", keys: ['S6'] },
            { text: "Ponerme a cantar a todo pulmón con notas altas para que me escuchen a kilómetros.", keys: ['S10'] }
        ]
    },
    {
        num: "PREGUNTA 4/12",
        text: "Entras victorioso a la sala del jefe final. ¿Cuál es tu frase de batalla?",
        options: [
            { text: '"OMG, I\'m so pretty!" (¡Por Dios, soy tan hermosa!).', keys: ['S15'] },
            { text: 'Un épico y repentino grito de introducción: "¡Toripuru ES... we wanna be your staaaaar!"', keys: ['S10'] },
            { text: 'Un saludo casual e inesperado: "Yoooo bro!" con actitud de rapera.', keys: ['S23'] },
            { text: 'Un tierno e hipnotizante "¡Bye byekinnnn!" para despedir al enemigo.', keys: ['S16'] }
        ]
    },
    {
        num: "PREGUNTA 5/12",
        text: "¿Qué rol prefieres tomar dentro de la formación de tu mazo?",
        options: [
            { text: "Producir las pistas, escribir las habilidades de las cartas y dirigir la estrategia.", keys: ['S14'] },
            { text: "Ser la fuerza de ataque principal con ráfagas de hip-hop, ballet o danza moderna.", keys: ['S2', 'S17', 'S24'] },
            { text: "Ser el centro visual indiscutible que acapara todas las miradas.", keys: ['S5', 'S18'] },
            { text: "El comodín ruidoso y energético que buffea el ataque de todo el equipo.", keys: ['S13', 'S6'] }
        ]
    },
    {
        num: "PREGUNTA 6/12",
        text: "¿Cómo reaccionas cuando el juego te lanza un evento sorpresa o un susto?",
        options: [
            { text: "Mis expresiones faciales son tan exageradas que mi cara se vuelve un meme instantáneo.", keys: ['S3'] },
            { text: "Ni me entero... tengo la habilidad de quedarme dormida en cualquier esquina del mapa.", keys: ['S2'] },
            { text: "Me asusto súper fácil y salgo corriendo, pero sigo siendo adorable.", keys: ['S9'] },
            { text: "Mantengo una expresión seria, elegante y misteriosa para que nadie note mi sorpresa.", keys: ['S7', 'S24'] }
        ]
    },
    {
        num: "PREGUNTA 7/12",
        text: "Tu estilo estético ideal para el diseño de tus cartas (Objekts) iniciales sería:",
        options: [
            { text: "Estilo callejero, urbano, hip-hop y lleno de swag.", keys: ['S11', 'SUBUNIT_VV'] },
            { text: "Concepto misterioso, elegante, chic y de alta costura.", keys: ['S7', 'S5', 'SUBUNIT_AAA'] },
            { text: "Estilo retro de los años 2000, brillante, cute y nostálgico.", keys: ['S1', 'S4', 'SUBUNIT_KRYSTAL'] },
            { text: "Una estética floral, mágica y de balada emocional.", keys: ['S10', 'S9', 'SUBUNIT_ARIA'] }
        ]
    },
    {
        num: "PREGUNTA 8/12",
        text: "Si tuvieras un superpoder pasivo en el juego, ¿cuál elegirías?",
        options: [
            { text: '"Nací con estos músculos": Fuerza física natural sin necesidad de entrenar tanto.', keys: ['S13'] },
            { text: "Adaptabilidad absoluta: Cambiar de rol o sub-unidad en cualquier momento según la misión.", keys: ['S1'] },
            { text: '"El gran final": Multiplicar el daño del mazo cuando se activa la última carta disponible.', keys: ['S24'] },
            { text: "Aura felina: Esquivar ataques enemigos gracias a reflejos rápidos y visuales chic.", keys: ['S7'] }
        ]
    },
    {
        num: "PREGUNTA 9/12",
        text: "Cuando logras una victoria difícil, ¿cómo celebras con tu equipo?",
        options: [
            { text: "Devorando toda la comida que encuentre en el inventario en un segundo.", keys: ['S5'] },
            { text: "Cantando \"Happy Birthday to me~\" aunque no sea mi cumpleaños.", keys: ['S23'] },
            { text: "Armando una sesión de karaoke caótica y ruidosa con mi mejor amiga del gremio.", keys: ['S10', 'S14'] },
            { text: "Presumiendo mis recompensas digitales con un baile de la victoria.", keys: ['S2'] }
        ]
    },
    {
        num: "PREGUNTA 10/12",
        text: "¿Qué tipo de vibra quieres que transmita el líder de tu mazo?",
        options: [
            { text: "Una vibra hogareña, carismática y un poco torpe pero muy confiable.", keys: ['S1'] },
            { text: "Una vibra de \"Ice Queen\" inteligente y madura, pero que en el fondo es súper divertida.", keys: ['S5'] },
            { text: "Energía caótica pura, risas fuertes y momentos icónicos en cada turno.", keys: ['S13', 'S6'] },
            { text: "Un equilibrio perfecto de timidez fuera del escenario y un talento letal en combate.", keys: ['S7', 'S9'] }
        ]
    },
    {
        num: "PREGUNTA 11/12",
        text: "¿Cómo prefieres hacer tu entrada triunfal en el campo de batalla?",
        options: [
            { text: "Desde el primer segundo, abriendo el camino y guiando a los que vienen detrás.", keys: ['S1'] },
            { text: "Justo en el medio del caos, rompiendo la tensión con un giro inesperado.", keys: ['S13', 'S7'] },
            { text: "En el momento cumbre, como la pieza final que cierra el círculo y desata el verdadero poder del grupo.", keys: ['S24'] },
            { text: "De manera completamente relajada y despreocupada, quizás comiendo un bocadillo o medio dormida hasta que sea mi turno real de actuar.", keys: ['S2', 'S8', 'S12'] }
        ]
    },
    {
        num: "PREGUNTA 12/12",
        text: "Si tus ataques tuvieran un efecto visual artístico, ¿cuál elegirías?",
        options: [
            { text: "Movimientos fluidos, etéreos y expresivos de danza contemporánea que confunden al rival.", keys: ['S24', 'S17'] },
            { text: "Ráfagas de luces de neón urbanas con un ritmo de Hip-Hop pesado.", keys: ['S11', 'S2'] },
            { text: "Destellos mágicos, brillantes y coloridos que curan a los aliados mientras dañan al enemigo.", keys: ['S9', 'S16'] },
            { text: "Ondas sonoras doradas, pentagramas y partituras musicales que resuenan con fuerza en todo el escenario.", keys: ['S10', 'S14'] }
        ]
    }
];

// Intro Dialogue Sentences
const INTRO_DIALOGUES = [
    "Recuerdo vagamente... estar llegando al concierto de tripleS...",
    "De un momento a otro todo se volvió blanco... y ahora estoy aquí.",
    "Parece que este portal me ha transportado a una dimensión alternativa...",
    "Escucho una voz en eco hablando a lo lejos...",
    "Hola extraño, ¿puedes oírme?",
    "No temas, solo necesito que respondas unas preguntas para poder ayudarte a encontrar a las chicas...",
    "Ellas se han separado en diferentes dimensiones, con estas preguntas te ayudaré a conectar con una de ellas.",
    "Tus respuestas definirán la dimensión en la que aparecerás y la primera miembro de tripleS que conocerás.",
    "¿Estás listo?",
    "Muy bien, comencemos..."
];

// Global Game State
const state = {
    currentScreen: 'menu-screen',
    currentIntroIndex: 0,
    currentQuestionIndex: 0,
    scores: {}, // S1-S18, S23 score mapping
    soundEnabled: true,
    shaderQuality: 'high',
    typingTimer: null,
    audioCtx: null,
    glitchAmount: 0.0
};

// ==========================================
// 1. WEB AUDIO SYNTHESIZER
// ==========================================
function initAudio() {
    if (!state.audioCtx) {
        state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
    }
}

function playSound(type) {
    if (!state.soundEnabled) return;
    initAudio();

    const ctx = state.audioCtx;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    const now = ctx.currentTime;

    switch (type) {
        case 'hover':
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);
            gainNode.gain.setValueAtTime(0.08, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
            break;

        case 'select':
            osc.type = 'square';
            osc.frequency.setValueAtTime(587.33, now); // D5
            osc.frequency.setValueAtTime(880, now + 0.08); // A5
            gainNode.gain.setValueAtTime(0.06, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.25);
            break;

        case 'type':
            osc.type = 'sine';
            osc.frequency.setValueAtTime(Math.random() * 50 + 120, now);
            gainNode.gain.setValueAtTime(0.03, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
            osc.start(now);
            osc.stop(now + 0.02);
            break;

        case 'error':
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(110, now);
            osc.frequency.linearRampToValueAtTime(70, now + 0.18);
            gainNode.gain.setValueAtTime(0.12, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
            osc.start(now);
            osc.stop(now + 0.18);
            break;

        case 'success':
            osc.type = 'triangle';
            // Play quick arpeggio
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, index) => {
                const noteOsc = ctx.createOscillator();
                const noteGain = ctx.createGain();
                noteOsc.connect(noteGain);
                noteGain.connect(ctx.destination);

                noteOsc.type = 'triangle';
                noteOsc.frequency.setValueAtTime(freq, now + index * 0.06);
                noteGain.gain.setValueAtTime(0.05, now + index * 0.06);
                noteGain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.06 + 0.2);
                noteOsc.start(now + index * 0.06);
                noteOsc.stop(now + index * 0.06 + 0.2);
            });
            break;

        case 'glitch':
            // Synthesize a crackling/distorted short glitch noise
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(80 + Math.random() * 40, now);
            osc.frequency.linearRampToValueAtTime(10 + Math.random() * 20, now + 0.15);
            gainNode.gain.setValueAtTime(0.18, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
            osc.start(now);
            osc.stop(now + 0.15);

            // Second modulator for high frequency click/disconnect sound
            const clickOsc = ctx.createOscillator();
            const clickGain = ctx.createGain();
            clickOsc.connect(clickGain);
            clickGain.connect(ctx.destination);
            clickOsc.type = 'triangle';
            clickOsc.frequency.setValueAtTime(1500, now);
            clickOsc.frequency.exponentialRampToValueAtTime(100, now + 0.05);
            clickGain.gain.setValueAtTime(0.04, now);
            clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            clickOsc.start(now);
            clickOsc.stop(now + 0.05);
            break;
    }
}

// ==========================================
// 2. WEBGL NEBULA BACKGROUND ENGINE
// ==========================================
let gl;
let program;
let startTime;
let animationFrameId;

const vertexShaderSource = `
    attribute vec2 a_position;
    void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `
    precision mediump float;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform float u_quality; // 1.0 = High, 0.5 = Medium, 0.0 = Low
    uniform float u_glitch; // 0.0 to 1.0 (glitch overlay intensity)

    float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
    }

    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 p) {
        float v = 0.0;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(0.877, 0.479, -0.479, 0.877);
        
        v += 0.5 * noise(p);
        p = rot * p * 2.0 + shift;
        
        v += 0.25 * noise(p);
        p = rot * p * 2.0 + shift;
        
        if (u_quality > 0.4) {
            v += 0.125 * noise(p);
            p = rot * p * 2.0 + shift;
            
            v += 0.0625 * noise(p);
        }
        return v;
    }

    void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
        float t = u_time * 0.22;
        
        // 1. Horizontal slice coordinates distortion (Glitch effect)
        if (u_glitch > 0.05) {
            float slice = sin(p.y * 40.0 + u_time * 120.0);
            if (slice > 0.9 - u_glitch * 0.4) {
                p.x += sin(u_time * 30.0) * 0.18 * u_glitch;
            }
            p.y += hash(vec2(floor(p.x * 12.0), u_time)) * 0.06 * u_glitch;
        }

        // 2. Nether Portal: Vertical flow (Y flowing upwards)
        vec2 flowCoords = p * vec2(1.6, 0.75); // Vertical stretch
        flowCoords.y -= t;
        
        // Horizontal wobble waves
        flowCoords.x += sin(flowCoords.y * 3.2 + t * 2.5) * 0.16;
        
        // Compute waves
        float f = fbm(flowCoords + fbm(flowCoords + vec2(t * 0.08)));
        
        // Nether Portal Color Scheme (Obsidian frame, dark purple, glowing magenta)
        vec3 colDark = vec3(0.06, 0.0, 0.10);      // Deep dark base
        vec3 colPortal = vec3(0.32, 0.0, 0.42);    // Swirl purple
        vec3 colMagenta = vec3(0.78, 0.0, 0.72);   // Hot glowing magenta
        vec3 colCyanGlitch = vec3(0.0, 0.85, 0.92); // Glitch neon cyan overlay
        
        vec3 color = vec3(0.0);
        
        if (u_glitch > 0.05) {
            float offset = 0.015 * u_glitch;
            
            // Red channel (shift left)
            vec2 pR = p - vec2(offset, 0.0);
            vec2 flowR = pR * vec2(1.6, 0.75) - vec2(0.0, t);
            flowR.x += sin(flowR.y * 3.2 + t * 2.5) * 0.16;
            float fR = fbm(flowR + fbm(flowR + vec2(t * 0.08)));
            
            // Blue channel (shift right)
            vec2 pB = p + vec2(offset, 0.0);
            vec2 flowB = pB * vec2(1.6, 0.75) - vec2(0.0, t);
            flowB.x += sin(flowB.y * 3.2 + t * 2.5) * 0.16;
            float fB = fbm(flowB + fbm(flowB + vec2(t * 0.08)));
            
            // Green channel (center)
            float fG = f;
            
            color.r = mix(colDark.r, colPortal.r, clamp(fR * 2.1, 0.0, 1.0));
            color.r = mix(color.r, colMagenta.r, clamp((fR - 0.38) * 3.8, 0.0, 1.0));
            
            color.g = mix(colDark.g, colPortal.g, clamp(fG * 2.1, 0.0, 1.0));
            color.g = mix(color.g, colMagenta.g, clamp((fG - 0.38) * 3.8, 0.0, 1.0));
            
            color.b = mix(colDark.b, colPortal.b, clamp(fB * 2.1, 0.0, 1.0));
            color.b = mix(color.b, colMagenta.b, clamp((fB - 0.38) * 3.8, 0.0, 1.0));
        } else {
            color = mix(colDark, colPortal, clamp(f * 2.1, 0.0, 1.0));
            color = mix(color, colMagenta, clamp((f - 0.38) * 3.8, 0.0, 1.0));
        }
        
        // 3. Glitch color flashing overlay
        if (u_glitch > 0.1) {
            float flashNoise = hash(vec2(u_time));
            if (flashNoise > 0.58) {
                color = mix(color, colCyanGlitch, u_glitch * 0.75);
            }
            if (flashNoise > 0.82) {
                color = 1.0 - color; // Invert colors
            }
        }
        
        // Vignette
        float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
        vignette = clamp(pow(16.0 * vignette, 0.28), 0.0, 1.0);
        color *= vignette;
        
        gl_FragColor = vec4(color, 1.0);
    }
`;

function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.compileStatus)) {
        console.error("Shader compilation failed: ", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function initWebGL() {
    const canvas = document.getElementById('gl-canvas');
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        console.warn("WebGL not supported. Falling back to background gradient.");
        canvas.style.display = 'none';
        return;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vs || !fs) {
        console.warn("Shader compilation failed. Falling back to background gradient.");
        canvas.style.display = 'none';
        return;
    }

    program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program linking failed: ", gl.getProgramInfoLog(program));
        return;
    }

    // Quad geometry (two triangles covering screen)
    const vertices = new Float32Array([
        -1.0, -1.0,
        1.0, -1.0,
        -1.0, 1.0,
        -1.0, 1.0,
        1.0, -1.0,
        1.0, 1.0
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    startTime = Date.now();
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start render loop
    renderLoop();
}

function resizeCanvas() {
    const canvas = document.getElementById('gl-canvas');
    if (!canvas || !gl) return;

    // Handle quality resolution downscaling
    let scale = 1.0;
    if (state.shaderQuality === 'medium') scale = 0.5;

    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * scale || canvas.height !== displayHeight * scale) {
        canvas.width = displayWidth * scale;
        canvas.height = displayHeight * scale;
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
}

function renderLoop() {
    if (!gl || state.shaderQuality === 'low') {
        const canvas = document.getElementById('gl-canvas');
        if (canvas) canvas.style.display = 'none';
        return;
    }

    const canvas = document.getElementById('gl-canvas');
    canvas.style.display = 'block';

    const elapsed = (Date.now() - startTime) / 1000.0;

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);

    // Set uniforms
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    gl.uniform2f(resolutionLoc, gl.canvas.width, gl.canvas.height);

    const timeLoc = gl.getUniformLocation(program, 'u_time');
    gl.uniform1f(timeLoc, elapsed);

    const qualityLoc = gl.getUniformLocation(program, 'u_quality');
    const qVal = state.shaderQuality === 'high' ? 1.0 : (state.shaderQuality === 'medium' ? 0.5 : 0.0);
    gl.uniform1f(qualityLoc, qVal);

    const glitchLoc = gl.getUniformLocation(program, 'u_glitch');
    gl.uniform1f(glitchLoc, state.glitchAmount);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    animationFrameId = requestAnimationFrame(renderLoop);
}

// ==========================================
// 3. DIALOGUE TYPEWRITER ENGINE
// ==========================================
function typeText(element, text, speed = 40, callback) {
    let index = 0;
    element.innerHTML = '';

    if (state.typingTimer) clearInterval(state.typingTimer);

    state.typingTimer = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            playSound('type');
        } else {
            clearInterval(state.typingTimer);
            state.typingTimer = null;
            if (callback) callback();
        }
    }, speed);
}

function skipTyping(element, text) {
    if (state.typingTimer) {
        clearInterval(state.typingTimer);
        state.typingTimer = null;
        element.innerHTML = text;
        playSound('select');
    }
}

// ==========================================
// 4. SCREEN FLOW MANAGER
// ==========================================
function transitionTo(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(scr => {
        scr.classList.remove('active');
    });

    // Show target screen
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        state.currentScreen = screenId;
    }

    // Specific setup per screen
    if (screenId === 'intro-screen') {
        runIntroDialogue();
    } else if (screenId === 'quiz-screen') {
        state.currentQuestionIndex = 0;
        resetScores();
        loadQuestion(0);
    } else if (screenId === 'menu-screen') {
        // Reset state
        state.currentIntroIndex = 0;
        state.currentQuestionIndex = 0;
    }
}

function resetScores() {
    state.scores = {};
    Object.keys(MEMBERS).forEach(key => {
        state.scores[key] = 0;
    });
}

// ==========================================
// 5. DIALOGUE FLOW
// ==========================================
function runIntroDialogue() {
    const textEl = document.getElementById('dialogue-text');
    const currentText = INTRO_DIALOGUES[state.currentIntroIndex];

    typeText(textEl, currentText, 45, () => {
        // Display completed callback (if any)
    });
}

function advanceIntro() {
    const textEl = document.getElementById('dialogue-text');
    const currentText = INTRO_DIALOGUES[state.currentIntroIndex];

    if (state.typingTimer) {
        // Skip typewriter effect and show full line
        skipTyping(textEl, currentText);
    } else {
        // Advance to next phrase
        state.currentIntroIndex++;
        if (state.currentIntroIndex < INTRO_DIALOGUES.length) {
            playSound('hover');
            runIntroDialogue();
        } else {
            // End of intro, proceed to quiz
            playSound('select');
            transitionTo('quiz-screen');
        }
    }
}

// ==========================================
// 6. QUESTIONNAIRE CONTROLLER
// ==========================================
function loadQuestion(index) {
    const qData = QUESTIONS[index];

    // Update progress elements
    document.getElementById('question-num').innerText = qData.num;
    document.getElementById('question-text').innerText = qData.text;

    const progressPercent = Math.round(((index) / QUESTIONS.length) * 100);
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;
    document.getElementById('progress-percent').innerText = `${progressPercent}%`;

    // Render options
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E'];
    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-letter">${letters[idx]}</span>
            <span class="option-val">${opt.text}</span>
        `;

        btn.addEventListener('mouseenter', () => playSound('hover'));
        btn.addEventListener('click', () => {
            playSound('select');
            applyOptionScores(opt.keys);
            nextQuestion();
        });

        container.appendChild(btn);
    });
}

function applyOptionScores(keys) {
    keys.forEach(key => {
        // Handle subunits mapping
        if (key.startsWith('SUBUNIT_')) {
            const subunitName = key.replace('SUBUNIT_', '');
            const members = SUBUNITS[subunitName];
            if (members) {
                members.forEach(memberId => {
                    if (state.scores[memberId] !== undefined) {
                        state.scores[memberId] += 1;
                    }
                });
            }
        } else {
            // Direct member score
            if (state.scores[key] !== undefined) {
                state.scores[key] += 1;
            }
        }
    });
}

function nextQuestion() {
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < QUESTIONS.length) {
        loadQuestion(state.currentQuestionIndex);
    } else {
        // End of quiz - update final progress bar
        document.getElementById('progress-fill').style.width = '100%';
        document.getElementById('progress-percent').innerText = '100%';

        setTimeout(() => {
            calculateResults();
        }, 300);
    }
}

// ==========================================
// 7. RESULT SCORING & TIE-BREAKER
// ==========================================
function calculateResults() {
    // Find maximum score value
    let maxScore = -1;
    let winners = [];

    Object.entries(state.scores).forEach(([memberId, score]) => {
        if (score > maxScore) {
            maxScore = score;
            winners = [memberId];
        } else if (score === maxScore) {
            winners.push(memberId);
        }
    });

    // Check for ties
    if (winners.length > 1) {
        showTieBreaker(winners);
    } else {
        showFinalResult(winners[0]);
    }
}

function showTieBreaker(tiedMembers) {
    playSound('error');
    transitionTo('tie-screen');

    const container = document.getElementById('tie-options-container');
    container.innerHTML = '';

    tiedMembers.forEach(memberId => {
        const member = MEMBERS[memberId];
        const btn = document.createElement('button');
        btn.className = 'tie-card-btn';

        // Random avatar placeholder icon based on ID to make cards look unique
        const avatars = ['🔮', '🛡️', '⚡', '🌙', '🌟', '🍀', '💎', '🔥', '🐾', '🎀'];
        const avatarIdx = parseInt(memberId.replace('S', '')) % avatars.length;

        btn.innerHTML = `
            <span class="tie-card-id">${member.id}</span>
            <span class="placeholder-icon">${avatars[avatarIdx]}</span>
            <span class="glow-text">${member.name.toUpperCase()}</span>
        `;

        btn.addEventListener('mouseenter', () => playSound('hover'));
        btn.addEventListener('click', () => {
            playSound('success');
            showFinalResult(memberId);
        });

        container.appendChild(btn);
    });
}

function showFinalResult(winnerId) {
    const member = MEMBERS[winnerId];
    playSound('success');

    // Update Result UI Elements
    document.getElementById('result-name').innerText = member.name.toUpperCase();
    document.getElementById('result-id').innerText = member.id;
    document.getElementById('result-details-text').innerText = member.desc;

    // Clear and display icon/details in frame
    const frameIcon = document.querySelector('.profile-image-placeholder .placeholder-icon');
    const frameText = document.querySelector('.profile-image-placeholder .placeholder-text');
    const avatars = ['🔮', '🛡️', '⚡', '🌙', '🌟', '🍀', '💎', '🔥', '🐾', '🎀'];
    const avatarIdx = parseInt(winnerId.replace('S', '')) % avatars.length;
    frameIcon.innerText = avatars[avatarIdx];
    frameText.innerText = `${member.id} PROFILE SYNCED`;

    transitionTo('result-screen');
}

// ==========================================
// 8. DIMENSIONAL GLITCH CONTROLLER
// ==========================================
function triggerRandomGlitch() {
    const delay = Math.random() * 4000 + 3000;

    setTimeout(() => {
        if (state.shaderQuality === 'low' || !gl) {
            triggerRandomGlitch();
            return;
        }

        const duration = Math.random() * 250 + 100;
        const start = Date.now();

        const container = document.getElementById('game-container');
        if (container) {
            container.classList.add('glitch-effect');
        }

        const glitchInterval = setInterval(() => {
            const elapsed = Date.now() - start;
            if (elapsed >= duration) {
                clearInterval(glitchInterval);
                state.glitchAmount = 0.0;
                if (container) {
                    container.classList.remove('glitch-effect');
                }
                triggerRandomGlitch();
            } else {
                state.glitchAmount = (1.0 - (elapsed / duration)) * 0.75;
            }
        }, 16);
    }, delay);
}

// ==========================================
// 9. INTERACTIVE BINDINGS AND INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // WebGL Init
    initWebGL();

    // Start portal glitches
    triggerRandomGlitch();

    // Keyboard listener to skip dialogue with spacebar
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            if (state.currentScreen === 'intro-screen') {
                e.preventDefault();
                advanceIntro();
            }
        }
    });

    // Screen click listener for dialogue advance
    document.getElementById('intro-screen').addEventListener('click', () => {
        advanceIntro();
    });

    // Start Button
    document.getElementById('start-btn').addEventListener('click', () => {
        playSound('select');
        transitionTo('intro-screen');
    });

    // Settings Modal controls
    const modal = document.getElementById('settings-modal');

    document.getElementById('settings-btn').addEventListener('click', () => {
        playSound('select');
        modal.classList.add('active');
    });

    document.getElementById('close-settings-btn').addEventListener('click', () => {
        playSound('select');
        modal.classList.remove('active');
    });

    // Sound Toggle
    const soundToggle = document.getElementById('sound-toggle');
    soundToggle.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        if (state.soundEnabled) {
            soundToggle.classList.add('active');
            soundToggle.innerText = 'ON';
            playSound('select');
        } else {
            soundToggle.classList.remove('active');
            soundToggle.innerText = 'OFF';
        }
    });

    // Shader Quality selection
    const qualitySelect = document.getElementById('shader-quality');
    qualitySelect.addEventListener('change', (e) => {
        state.shaderQuality = e.target.value;
        playSound('select');

        // Stop current animation loop if quality changes to Low
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }

        // Re-init canvas sizes & loops
        resizeCanvas();
        if (state.shaderQuality !== 'low') {
            renderLoop();
        }
    });

    // Exit Buttons
    document.getElementById('exit-btn').addEventListener('click', () => {
        playSound('error');
        alert("¡Conexión del portal finalizada!");
    });

    document.getElementById('finish-btn').addEventListener('click', () => {
        playSound('error');
        alert("¡Portal cerrado con éxito! Tu viaje dimensional ha quedado registrado.");
        window.close();
    });

    // Restart Button
    document.getElementById('restart-btn').addEventListener('click', () => {
        playSound('select');
        transitionTo('menu-screen');
    });
});
