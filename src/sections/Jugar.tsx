import { ExternalLink, Gamepad2, MonitorCheck, Keyboard, Wifi } from 'lucide-react'
import { Reveal } from '../hooks/useReveal'
import { GAME, UNITY_BUILD_URL } from '../config'

const requirements = [
  {
    icon: MonitorCheck,
    title: 'Navegador compatible',
    desc: 'Chrome, Edge o Firefox actualizados, con soporte WebGL 2.0 habilitado.',
  },
  {
    icon: Keyboard,
    title: 'Teclado físico',
    desc: 'La partida se controla con las flechas ↑ (saltar) y ↓ (agacharse).',
  },
  {
    icon: Wifi,
    title: 'Conexión estable',
    desc: 'La primera carga descarga los recursos del build; después la partida corre local.',
  },
]

const steps = [
  'En Unity: File → Build Settings → WebGL → Build.',
  'Sube la carpeta del build a un hosting público, o cópiala en public/unity-build/ de este proyecto.',
  'Define la URL en src/config.ts (constante UNITY_BUILD_URL) y el botón JUGAR AHORA quedará activo.',
]

export function Jugar() {
  const ready = UNITY_BUILD_URL.trim().length > 0

  return (
    <section id="jugar" className="relative border-t border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl uppercase tracking-[0.2em] text-pulse">CH.05</span>
            <span className="h-px flex-1 bg-line" />
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-metal sm:text-6xl">
              Jugar ahora
            </h2>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Contenedor de ejecución */}
          <Reveal className="reveal-d1">
            {ready ? (
              <div className="border border-neon/50 bg-inkdeep">
                <div className="flex items-center justify-between border-b border-line px-5 py-3">
                  <p className="font-display text-xl uppercase tracking-[0.18em] text-neon">
                    {GAME.title} // INSTANCIA UNITY
                  </p>
                  <span className="flex items-center gap-2 font-display text-lg uppercase tracking-[0.16em] text-neon">
                    <span className="inline-block h-2 w-2 bg-neon" style={{ animation: 'blink-dot 1s step-end infinite' }} />
                    En línea
                  </span>
                </div>
                <div className="aspect-video w-full">
                  <iframe
                    src={UNITY_BUILD_URL}
                    title="Cyber Runner: Última Carrera — build Unity WebGL"
                    className="h-full w-full"
                    allow="autoplay; fullscreen; gamepad; keyboard-map"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-3">
                  <p className="text-sm text-dim">¿Problemas con el marco? Abre el juego en pestaña completa.</p>
                  <a
                    href={UNITY_BUILD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-neon px-4 py-2 font-display text-lg uppercase tracking-[0.14em] text-neon transition-colors hover:bg-neon hover:text-ink"
                  >
                    Abrir en pestaña <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="border border-pulse/50 bg-inkdeep">
                <div className="flex items-center justify-between border-b border-line px-5 py-3">
                  <p className="font-display text-xl uppercase tracking-[0.18em] text-pulse">
                    {GAME.title} // INSTANCIA UNITY
                  </p>
                  <span className="flex items-center gap-2 font-display text-lg uppercase tracking-[0.16em] text-amber">
                    <span className="inline-block h-2 w-2 bg-amber" style={{ animation: 'blink-dot 1s step-end infinite' }} />
                    Build pendiente
                  </span>
                </div>
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 px-6 text-center">
                  <Gamepad2 className="h-14 w-14 text-pulse glow-magenta" />
                  <p className="font-display text-3xl uppercase tracking-[0.1em] text-metal sm:text-4xl">
                    Señal de juego no conectada
                  </p>
                  <p className="max-w-md text-sm leading-relaxed text-dim sm:text-base">
                    El contenedor de ejecución está listo. En cuanto el build WebGL de Unity tenga una
                    URL pública, la partida cargará aquí directamente.
                  </p>
                </div>
                <div className="border-t border-line px-5 py-4">
                  <p className="hud-label text-sm text-amber">Para activar la instancia</p>
                  <ol className="mt-3 space-y-2">
                    {steps.map((s, i) => (
                      <li key={s} className="flex items-baseline gap-3 text-sm text-dim sm:text-base">
                        <span className="font-display text-lg text-pulse">{String(i + 1).padStart(2, '0')}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </Reveal>

          {/* Requerimientos */}
          <div>
            <Reveal className="reveal-d2">
              <p className="hud-label text-sm">Requerimientos mínimos</p>
              <h3 className="mt-2 font-display text-4xl uppercase leading-tight text-metal">
                Prepara tu terminal de escape
              </h3>
            </Reveal>
            <ul className="mt-8 space-y-6">
              {requirements.map((r, i) => (
                <Reveal as="li" key={r.title} className={`flex gap-4 reveal-d${i + 2}`}>
                  <r.icon className="mt-1 h-7 w-7 shrink-0 text-neon" />
                  <div>
                    <h4 className="font-display text-2xl uppercase tracking-wide text-metal">{r.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-dim sm:text-base">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal className="reveal-d3 mt-8 border border-line bg-panel/50 p-5">
              <p className="font-display text-xl uppercase tracking-[0.14em] text-metal">
                Ficha técnica
              </p>
              <dl className="mt-3 space-y-2 text-sm sm:text-base">
                <div className="flex justify-between gap-4">
                  <dt className="text-dim">Género</dt>
                  <dd className="text-right text-metal">Endless runner 3D</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-dim">Motor</dt>
                  <dd className="text-right text-metal">Unity (WebGL)</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-dim">Modelado y animación</dt>
                  <dd className="text-right text-metal">Blender</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-dim">Plataforma</dt>
                  <dd className="text-right text-metal">PC · Navegador web</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
