import { Reveal } from '../hooks/useReveal'

const beats = [
  {
    code: 'INICIO',
    color: 'bg-neon',
    title: 'Unidad pasiva',
    text: 'NEX-01 despierta inactivo en una estación abandonada de Neo-Cyber. Es parte del mismo sistema de seguridad que ahora lo persigue: sin órdenes, sin destino, sin saber por qué la ciudad está en alerta.',
  },
  {
    code: 'CAMBIO',
    color: 'bg-pulse',
    title: 'Objetivo marcado',
    text: 'El sistema central se descontrola y lo declara objetivo a capturar. Para sobrevivir debe correr, saltar barreras bajas y agacharse bajo drones y brazos mecánicos. Deja de obedecer y empieza a decidir.',
  },
  {
    code: 'DESENLACE',
    color: 'bg-amber',
    title: 'Éxito o captura',
    text: 'Éxito: llega a la estación de escape, supera el récord y se libera del sistema como corredor autónomo. Derrota: agota sus vidas y es capturado, con la señal de «Juego terminado».',
  },
]

export function Historia() {
  return (
    <section id="historia" className="relative border-t border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl uppercase tracking-[0.2em] text-pulse">CH.01</span>
            <span className="h-px flex-1 bg-line" />
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-metal sm:text-6xl">Historia</h2>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Contexto narrativo */}
          <Reveal className="reveal-d1">
            <p className="hud-label text-sm">Contexto narrativo // Neo-Cyber</p>
            <p className="mt-4 text-xl font-medium leading-relaxed text-metal sm:text-2xl">
              Neo-Cyber es una megaciudad futurista de edificios de gran altura, autopistas elevadas,
              anuncios holográficos y luces de neón. Su sistema central de seguridad se ha
              descontrolado y declara una <span className="text-pulse">alerta total</span>.
            </p>
            <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-dim sm:text-lg">
              En una estación abandonada despierta NEX-01, un robot corredor sin órdenes ni misión.
              Para el sistema, es un objetivo a capturar. Su única salida es una estación de escape
              al otro lado de la ciudad, y el camino es una carretera elevada plagada de barreras
              eléctricas, drones y brazos mecánicos. Cada segundo que sobrevive es una victoria; si
              agota sus vidas, el sistema lo recupera.
            </p>
            <p className="mt-6 max-w-[65ch] border-l-2 border-pulse pl-5 text-base italic leading-relaxed text-metal/90 sm:text-lg">
              Narrativa lineal con final alternativo: la historia siempre avanza en el mismo orden
              —activación, carrera, desafío, desenlace— y solo el desempeño del jugador define si el
              final es éxito o derrota.
            </p>
          </Reveal>

          {/* Arco argumental */}
          <div>
            <Reveal className="reveal-d2">
              <p className="hud-label text-sm">Arco argumental // NEX-01</p>
            </Reveal>
            <ol className="mt-6 space-y-0 border-l border-line">
              {beats.map((b, i) => (
                <Reveal as="li" key={b.code} className={`relative pl-8 pb-10 last:pb-0 reveal-d${i + 1}`}>
                  <span
                    className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 ${b.color}`}
                    style={{ boxShadow: '0 0 8px rgba(0,229,255,0.4)' }}
                    aria-hidden="true"
                  />
                  <p className="font-display text-lg uppercase tracking-[0.2em] text-dim">{b.code}</p>
                  <h3 className="mt-1 font-display text-3xl uppercase text-metal">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim sm:text-base">{b.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
