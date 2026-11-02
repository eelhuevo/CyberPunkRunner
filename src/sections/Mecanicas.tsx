import { ArrowDown, ArrowUp, CircleAlert, CircleCheck } from 'lucide-react'
import { Reveal } from '../hooks/useReveal'

const rules = [
  'El personaje comienza la partida con tres vidas.',
  'Cada segundo de supervivencia incrementa la puntuación.',
  'Las barreras bajas deben superarse mediante un salto.',
  'Los obstáculos altos deben esquivarse agachándose.',
  'Una colisión con un obstáculo provoca la pérdida de una vida.',
  'Cuando las vidas llegan a cero, la partida termina y se muestra la puntuación final.',
  'Al alcanzar los 1.000 puntos aparece el mensaje de récord o meta superada.',
  'Los obstáculos superados se eliminan de la escena para mantener el rendimiento.',
]

const obstacles = [
  {
    level: 'OBSTÁCULOS BAJOS',
    action: 'SALTAR',
    key: '↑',
    items: 'Barreras eléctricas · Cajas de energía · Bloques tecnológicos',
    accent: 'neon',
  },
  {
    level: 'OBSTÁCULOS ALTOS',
    action: 'AGACHARSE',
    key: '↓',
    items: 'Drones de seguridad · Brazos mecánicos suspendidos',
    accent: 'pulse',
  },
]

export function Mecanicas() {
  return (
    <section id="mecanicas" className="relative border-t border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl uppercase tracking-[0.2em] text-pulse">CH.03</span>
            <span className="h-px flex-1 bg-line" />
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-metal sm:text-6xl">
              Mecánicas
            </h2>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        {/* Esquema de control */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {obstacles.map((o, i) => (
            <Reveal key={o.level} className={`reveal-d${i + 1} border border-line bg-panel/60 p-6 sm:p-8`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`hud-label text-sm ${o.accent === 'neon' ? 'text-neon' : 'text-pulse'}`}>
                    {o.level}
                  </p>
                  <p className="mt-2 font-display text-3xl uppercase text-metal sm:text-4xl">{o.action}</p>
                </div>
                <kbd
                  className={`flex h-16 w-16 shrink-0 items-center justify-center border-2 font-display text-4xl ${
                    o.accent === 'neon' ? 'border-neon text-neon' : 'border-pulse text-pulse'
                  }`}
                >
                  {o.key === '↑' ? <ArrowUp className="h-8 w-8" /> : <ArrowDown className="h-8 w-8" />}
                </kbd>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-dim sm:text-base">{o.items}</p>
              <p className="mt-3 font-display text-lg uppercase tracking-[0.14em] text-dim">
                Entrada: <span className="text-metal">Flecha {o.key === '↑' ? 'arriba' : 'abajo'} del teclado</span>
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="reveal-d2 mt-6 border border-line bg-inkdeep/70 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-metal sm:text-lg">
            <span className="font-display uppercase tracking-[0.14em] text-neon">Lógica de colisión: </span>
            al agacharse, el área física de colisión de NEX-01 se reduce proporcionalmente a la postura.
            Los obstáculos aparecen a intervalos variables y de forma aleatoria: calcula el momento
            exacto para saltar o deslizarte.
          </p>
        </Reveal>

        {/* Reglas del sistema */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="hud-label text-sm">Sistema // Reglas de partida</p>
            <h3 className="mt-2 font-display text-4xl uppercase leading-tight text-metal sm:text-5xl">
              Sobrevive. Suma puntos. Supera el récord.
            </h3>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 border border-neon/40 bg-neon/5 p-5">
                <CircleCheck className="mt-0.5 h-6 w-6 shrink-0 text-neon" />
                <div>
                  <p className="font-display text-2xl uppercase text-neon">Victoria / récord</p>
                  <p className="mt-1 text-sm text-dim sm:text-base">
                    Alcanza los 1.000 puntos y recibe el mensaje «Récord superado». La partida puede
                    continuar para lograr una puntuación aún mayor.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-pulse/40 bg-pulse/5 p-5">
                <CircleAlert className="mt-0.5 h-6 w-6 shrink-0 text-pulse" />
                <div>
                  <p className="font-display text-2xl uppercase text-pulse">Derrota</p>
                  <p className="mt-1 text-sm text-dim sm:text-base">
                    Pierde las tres vidas tras chocar con los obstáculos y el sistema te captura:
                    pantalla de «Juego terminado» con tu puntuación final.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="reveal-d2">
            <ol className="divide-y divide-line border border-line bg-panel/40">
              {rules.map((r, i) => (
                <li key={r} className="flex items-baseline gap-4 px-5 py-3.5 sm:px-6">
                  <span className="font-display text-xl text-pulse">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm leading-relaxed text-metal/90 sm:text-base">{r}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
