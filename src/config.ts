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

export const GAME = {
  title: 'CYBER RUNNER',
  subtitle: 'ÚLTIMA CARRERA',
  genre: 'ENDLESS RUNNER 3D',
  tagline: 'El sistema te declaró objetivo. Tu única salida está al otro lado de Neo-Cyber.',
  synopsis:
    'Corre, salta y deslízate por una carretera elevada plagada de barreras eléctricas, drones y brazos mecánicos. Cada segundo que sobrevives es una victoria; si agotas tus vidas, el sistema te recupera.',
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

export const NAV_LINKS = [
  { id: 'historia', label: 'Historia' },
  { id: 'personaje', label: 'Personaje' },
  { id: 'mecanicas', label: 'Mecánicas' },
  { id: 'datos', label: 'Datos' },
  { id: 'jugar', label: 'Jugar ahora' },
]
