import { Reveal } from '../hooks/useReveal'

const beats = [
  {
    code: 'INICIO',
    color: 'bg-neon',
    title: 'Unidad pasiva',
    text: 'NEX-01 despierta inactivo en una estación abandonada de Neo-Cyber. Es parte del mismo sistema de seguridad que ahora lo persigue: sin órdenes, sin destino, sin saber por qué la ciudad está en alerta.',
    image: './images/escena1_activacion.png',
  },
  {
    code: 'CAMBIO',
    color: 'bg-pulse',
    title: 'Objetivo marcado',
    text: 'El sistema central se descontrola y lo declara objetivo a capturar. Para sobrevivir debe correr, saltar barreras bajas y agacharse bajo drones y brazos mecánicos. Deja de obedecer y empieza a decidir.',
    image: './images/escena2_laCarrera.png',
  },
  {
    code: 'DESENLACE',
    color: 'bg-amber',
    title: 'Éxito o captura',
    text: 'Éxito: llega a la estación de escape, supera el récord y se libera del sistema como corredor autónomo. Derrota: agota sus vidas y es capturado, con la señal de «Juego terminado».',
    image: './images/escena3_elDesafio.png',
  },
]

export function Historia() {
  return (
    <section id="historia" className="relative border-t border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* TÍTULO */}
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl uppercase tracking-[0.2em] text-pulse">CH.01</span>
            <span className="h-px flex-1 bg-line" />
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-metal sm:text-6xl">Historia</h2>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        {/* CONTEXTO NARRATIVO (FONDO INMERSIVO TOTAL) */}
        <Reveal className="reveal-d1 mt-20 relative mx-auto max-w-6xl">

          {/* Contenedor de la Imagen - Ocupa el 100% del bloque */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

            {/* La imagen con interferencia y desenfoque */}
            <div className="w-full h-full relative animate-tv-static">
              <img
                src="./images/fondo-neo-cyber.png"
                alt="Fondo Neo-Cyber"
                className="absolute inset-0 w-full h-full object-cover blur-[2px]"
              />

              {/* Máscara de 4 lados para difuminar en cuadrado */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: 'linear-gradient(to right, #101522 0%, transparent 15%, transparent 85%, #101522 100%), linear-gradient(to bottom, #101522 0%, transparent 15%, transparent 85%, #101522 100%)'
                }}
              />
            </div>

          </div>

          {/* Contenido de Texto (Le agregamos un poco de padding vertical para que la imagen respire) */}
          <div className="relative z-20 mx-auto max-w-3xl px-4 sm:px-6 py-20">
            <p className="hud-label text-sm mb-6 text-neon">Contexto narrativo // Neo-Cyber</p>

            <p className="text-xl font-medium leading-relaxed text-metal sm:text-2xl mb-8">
              Neo-Cyber es una megaciudad futurista de edificios de gran altura, autopistas elevadas,
              anuncios holográficos y luces de neón. Su sistema central de seguridad se ha
              descontrolado y declara una <span className="text-pulse font-bold">alerta total</span>.
            </p>

            <div className="space-y-6 text-base leading-relaxed text-metal/90 sm:text-lg">
              <p>
                En una estación abandonada despierta NEX-01, un robot corredor sin órdenes ni misión.
                Para el sistema, es un objetivo a capturar. Su única salida es una estación de escape
                al otro lado de la ciudad, y el camino es una carretera elevada plagada de barreras
                eléctricas, drones y brazos mecánicos.
              </p>
              <p>
                Cada segundo que sobrevive es una victoria; si agota sus vidas, el sistema lo recupera.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-line/30">
              <p className="text-sm italic leading-relaxed text-neon/90 flex items-start gap-3">
                <span className="text-pulse mt-1 text-lg leading-none">►</span>
                Narrativa lineal con final alternativo: la historia siempre avanza en el mismo orden
                —activación, carrera, desafío, desenlace— y solo el desempeño del jugador define si el
                final es éxito o derrota.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ARCO ARGUMENTAL (DISEÑO EN L / ALTERNADO) */}
        <div className="mt-20">
          <Reveal className="reveal-d2 mb-10">
            <p className="hud-label text-sm">Arco argumental // NEX-01</p>
          </Reveal>

          <div className="flex flex-col gap-16">
            {beats.map((b, i) => {
              // Esta lógica hace que se alterne izquierda/derecha
              const isEven = i % 2 === 0;

              return (
                <Reveal key={b.code} className={`reveal-d${i + 1} flex flex-col md:flex-row gap-8 items-center`}>

                  {/* Imagen (Cambia de orden según la posición) */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-64 md:h-80 object-cover border border-line grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Texto (Cambia de orden según la posición) */}
                  <div className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`h-2.5 w-2.5 ${b.color}`} style={{ boxShadow: '0 0 8px rgba(0,229,255,0.4)' }} aria-hidden="true" />
                      <p className="font-display text-lg uppercase tracking-[0.2em] text-dim">{b.code}</p>
                    </div>
                    <h3 className="font-display text-4xl uppercase text-metal mb-4">{b.title}</h3>
                    <p className="text-base leading-relaxed text-dim sm:text-lg">{b.text}</p>
                  </div>

                </Reveal>
              )
            })}
          </div>
        </div>

        {/* GALERÍA DE ESCENAS (3 COLUMNAS ABAJO) */}
        <div className="mt-24 border-t border-line pt-12">
          <p className="hud-label text-sm mb-6">Galería de escenas // Storyboard</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: 'escena3b_varianteDeDeslizamiento', title: '3B. Variante de Deslizamiento' },
              { img: 'escena4a_exito', title: '4A. Éxito' },
              { img: 'escena4b_derrota', title: '4B. Derrota' }
            ].map((escena) => (
              <div key={escena.img} className="border border-line bg-panel/50 p-2 group relative overflow-hidden">
                <img
                  src={`./images/${escena.img}.png`}
                  alt={escena.title}
                  className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                  <p className="font-display text-lg text-neon">{escena.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}