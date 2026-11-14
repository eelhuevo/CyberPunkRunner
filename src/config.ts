/**
 * Configuración central del portal de Cyber Runner: Última Carrera.
 *
 * Para activar el botón JUGAR AHORA:
 * 1. Exporta tu build WebGL desde Unity (File → Build Settings → WebGL).
 * 2. Sube el build a un hosting público (o copia la carpeta del build en
 *    `public/unity-build/` de este proyecto, de modo que exista
 *    `public/unity-build/index.html`).
 * 3. Pega la URL pública aquí (o usa "/unity-build/index.html" si lo
 *    copiaste a `public/`).
 */
export const UNITY_BUILD_URL = './unity-build/index.html'
export const UNITY_BUILD_URL_2 = './unity-build-2/index.html'

export const GAME_1 = {
  title: 'CYBER RUNNER',
  subtitle: 'ÚLTIMA CARRERA',
  genre: 'ENDLESS RUNNER 3D',
  tagline: 'El sistema te declaró objetivo. Tu única salida está al otro lado de Neo-Cyber.',
  synopsis: 'Corre, salta y deslízate por una carretera elevada plagada de barreras eléctricas, drones y brazos mecánicos. Cada segundo que sobrevives es una victoria; si agotas tus vidas, el sistema te recupera.',
  targetScore: '1.000',
  lives: '3',
  controls: '↑ SALTA · ↓ AGÁCHATE',
  team: ['Jorge Robledo Rojas', 'Paul Chipana', 'Marco Guzman'],
  course: 'Game Development · Unidad 2',
  engine: 'Unity · Modelado en Blender',
  palette: [
    { hex: '#101522', name: 'Azul oscuro', use: 'Fondo, cielo nocturno, carretera' },
    { hex: '#00E5FF', name: 'Cian neón', use: 'Visera, puntuación, luces' },
    { hex: '#FF36B7', name: 'Magenta', use: 'Núcleo de energía, alertas' },
    { hex: '#D8E5F2', name: 'Metal claro', use: 'Armadura, estructuras' },
  ],
}

export const GAME_2 = {
  title: 'CYBER RUNNER',
  subtitle: 'LABERINTO DEL NÚCLEO',
  genre: 'LABERINTO 3D',
  tagline: 'Atrapado en el corazón digital de Neo-Cyber. Recupera tus 36 fragmentos de memoria y escapa.',
  synopsis: 'NEX-01 cae al Laberinto del Núcleo. Debes recorrer los pasillos, recolectar los fragmentos dorados y evitar a los Centinelas que te persiguen con sus rayos de escaneo.',
  targetScore: '360',
  lives: '1',
  controls: '↑ ↓ ← → MOVERSE · R REINICIAR',
  team: ['Jorge Robledo Rojas', 'Paul Franz Chipana', 'Marco Antonio'],
  course: 'Game Development · Unidad 3',
  engine: 'Unity · Modelado en Blender',
  palette: [
    { hex: '#101522', name: 'Azul oscuro', use: 'Fondo del laberinto' },
    { hex: '#00E5FF', name: 'Cian neón', use: 'Circuito, puerta, NEX-01' },
    { hex: '#FF36B7', name: 'Magenta', use: 'Ojo de los Centinelas' },
    { hex: '#FFD700', name: 'Dorado', use: 'Núcleos de datos (fragmentos)' },
  ],
}

export const NAV_LINKS = [
  { id: 'historia', label: 'Historia' },
  { id: 'personaje', label: 'Personaje' },
  { id: 'mecanicas', label: 'Mecánicas' },
  { id: 'datos', label: 'Datos' },
  { id: 'laberinto', label: 'El Laberinto' }, // <-- NUEVO
  { id: 'juego-1', label: 'Juego 1' },
  { id: 'juego-2', label: 'Juego 2' },
]