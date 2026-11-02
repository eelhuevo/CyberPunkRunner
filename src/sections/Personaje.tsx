import { Reveal } from '../hooks/useReveal'

const traits = [
  {
    name: 'Visera cian luminosa',
    desc: 'Su rasgo más reconocible: una franja de luz cian que atraviesa el rostro y marca su estado de alerta.',
  },
  {
    name: 'Núcleo de energía magenta',
    desc: 'Los detalles magenta en pecho y articulaciones representan su núcleo de energía, la fuente de su autonomía.',
  },
  {
    name: 'Armadura Low Poly',
    desc: 'Placas plateadas y azul oscuro de geometría simplificada que transmiten velocidad, resistencia y tecnología avanzada.',
  },
]

const stats = [
  { name: 'Velocidad', value: 92 },
  { name: 'Reflejos', value: 88 },
  { name: 'Resistencia', value: 76 },
]

export function Personaje() {
  return (
    <section id="personaje" className="relative border-t border-line bg-inkdeep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl uppercase tracking-[0.2em] text-pulse">CH.02</span>
            <span className="h-px flex-1 bg-line" />
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-metal sm:text-6xl">
              Personaje
            </h2>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Soporte visual */}
          <Reveal className="reveal-d1 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div
                className="absolute inset-0 -z-0"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 60%, rgba(0,229,255,0.14) 0%, rgba(255,54,183,0.08) 45%, transparent 70%)',
                }}
              />
              <div
                className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 border border-neon/20"
                aria-hidden="true"
              />
              <p className="absolute -left-2 top-0 font-display text-lg uppercase tracking-[0.2em] text-neon/70">
                UNIT.NEX-01
              </p>
              <p className="absolute -right-2 bottom-0 font-display text-lg uppercase tracking-[0.2em] text-pulse/80">
                STATUS: ACTIVO
              </p>
              <img
                src="/images/nex01-character.png"
                alt="NEX-01, robot corredor humanoide Low Poly con armadura plateada y azul oscuro, visera cian luminosa y núcleo de energía magenta"
                className="glow-cyan relative z-10 w-full"
              />
            </div>
          </Reveal>

          {/* Caracterización */}
          <div className="order-1 lg:order-2">
            <Reveal className="reveal-d1">
              <p className="hud-label text-sm">Protagonista // Unidad corredora</p>
              <h3 className="chroma mt-2 font-display text-6xl uppercase leading-none text-neon sm:text-7xl">
                NEX-01
              </h3>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-dim sm:text-lg">
                Robot corredor de apariencia humanoide, diseñado con geometría Low Poly. Formaba parte
                del sistema de seguridad de Neo-Cyber hasta que el sistema enloqueció y lo marcó como
                objetivo. Ahora corre hacia la estación de escape: cada salto y cada deslizamiento lo
                acercan a su libertad.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {traits.map((t, i) => (
                <Reveal as="li" key={t.name} className={`flex gap-4 reveal-d${i + 1}`}>
                  <span className="mt-2 h-px w-8 shrink-0 bg-pulse" aria-hidden="true" />
                  <div>
                    <h4 className="font-display text-2xl uppercase tracking-wide text-metal">{t.name}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-dim sm:text-base">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal className="reveal-d3 mt-10 border border-line bg-panel/60 p-6">
              <p className="hud-label text-sm">Parámetros de unidad</p>
              <div className="mt-4 space-y-4">
                {stats.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-xl uppercase tracking-[0.14em] text-metal">
                        {s.name}
                      </span>
                      <span className="font-display text-xl text-neon">{s.value}</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-line/60">
                      <div className="h-full bg-gradient-to-r from-neon to-pulse" style={{ width: `${s.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
