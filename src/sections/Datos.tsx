import { Reveal } from '../hooks/useReveal'
import { GAME } from '../config'

const cards = [
  { value: GAME.targetScore, label: 'Puntuación objetivo', note: 'Activa el mensaje de récord' },
  { value: GAME.lives, label: 'Vidas por partida', note: 'Cada colisión resta una' },
  { value: '2', label: 'Controles de acción', note: 'Saltar y agacharse' },
  { value: '∞', label: 'Distancia de recorrido', note: 'Generación continua de obstáculos' },
]

export function Datos() {
  return (
    <section id="datos" className="relative border-t border-line bg-inkdeep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl uppercase tracking-[0.2em] text-pulse">CH.04</span>
            <span className="h-px flex-1 bg-line" />
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-metal sm:text-6xl">Datos</h2>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        {/* Tarjetas de métricas */}
        <div className="mt-14 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.label} className={`reveal-d${i + 1} bg-ink p-6 sm:p-8`}>
              <p className="font-display text-6xl leading-none text-neon sm:text-7xl">{c.value}</p>
              <p className="mt-3 font-display text-xl uppercase tracking-[0.14em] text-metal">{c.label}</p>
              <p className="mt-1 text-sm text-dim">{c.note}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Curva de dificultad */}
          <Reveal className="reveal-d2 border border-line bg-panel/50 p-6 sm:p-8">
            <p className="hud-label text-sm">Progresión // Dificultad en el tiempo</p>
            <p className="mt-3 text-sm leading-relaxed text-dim sm:text-base">
              La velocidad de desplazamiento aumenta gradualmente y los obstáculos aparecen con
              intervalos variables: la combinación de obstáculos bajos y altos exige más reflejos y
              precisión a medida que avanza la partida.
            </p>
            <svg
              viewBox="0 0 400 140"
              className="mt-6 w-full"
              role="img"
              aria-label="Gráfica de dificultad: la velocidad del juego crece de forma progresiva con el tiempo"
            >
              <line x1="0" y1="120" x2="400" y2="120" stroke="#26304A" strokeWidth="1" />
              <line x1="0" y1="80" x2="400" y2="80" stroke="#26304A" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="0" y1="40" x2="400" y2="40" stroke="#26304A" strokeWidth="1" strokeDasharray="4 6" />
              <path
                d="M0 118 C 80 112, 120 96, 180 78 C 250 57, 320 34, 400 12"
                fill="none"
                stroke="#00E5FF"
                strokeWidth="3"
              />
              <path
                d="M0 118 C 80 116, 150 108, 220 92 C 290 76, 350 54, 400 30"
                fill="none"
                stroke="#FF36B7"
                strokeWidth="2"
                strokeDasharray="6 5"
              />
              <text x="4" y="134" fill="#93A1B8" fontSize="11" fontFamily="'VT323', monospace">
                T=0s
              </text>
              <text x="356" y="134" fill="#93A1B8" fontSize="11" fontFamily="'VT323', monospace">
                T=FINAL
              </text>
              <text x="4" y="36" fill="#00E5FF" fontSize="11" fontFamily="'VT323', monospace">
                VELOCIDAD
              </text>
              <text x="4" y="76" fill="#FF36B7" fontSize="11" fontFamily="'VT323', monospace">
                DENSIDAD DE OBSTÁCULOS
              </text>
            </svg>
          </Reveal>

          {/* Paleta de color */}
          <Reveal className="reveal-d3 border border-line bg-panel/50 p-6 sm:p-8">
            <p className="hud-label text-sm">Identidad visual // Paleta Neo-Cyber</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {GAME.palette.map((p) => (
                <div key={p.hex} className="group border border-line">
                  <div
                    className="h-16 w-full transition-transform duration-200 group-hover:scale-[1.02]"
                    style={{ backgroundColor: p.hex }}
                  />
                  <div className="p-3">
                    <p className="font-display text-xl tracking-[0.1em] text-metal">{p.hex}</p>
                    <p className="font-display text-base uppercase tracking-[0.14em] text-neon">{p.name}</p>
                    <p className="mt-0.5 text-xs leading-snug text-dim">{p.use}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-dim">
              Estilo artístico <span className="text-metal">Low Poly</span> · Motor {GAME.engine}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
