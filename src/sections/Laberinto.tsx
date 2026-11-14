import { Reveal } from '../hooks/useReveal'

export function Laberinto() {
  return (
    <section id="laberinto" className="relative border-t border-line bg-inkdeep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl uppercase tracking-[0.2em] text-pulse">CH.06</span>
            <span className="h-px flex-1 bg-line" />
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-metal sm:text-6xl">El Laberinto</h2>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="reveal-d1">
            <p className="hud-label text-sm text-pulse">Cyber Runner // Laberinto del Núcleo</p>
            <h3 className="mt-2 font-display text-4xl uppercase text-metal">Atrapado en el Núcleo</h3>
            <p className="mt-4 text-lg leading-relaxed text-metal">
              Tras ganar la Última Carrera, NEX-01 es encerrado por NODO-0 en el corazón digital de Neo-Cyber. 
              Para escapar, debe recuperar sus 36 fragmentos de memoria (núcleos de datos dorados) esquivando 
              a los Centinelas.
            </p>
            
            <div className="mt-8 border border-pulse/30 bg-pulse/5 p-6">
              <h4 className="font-display text-2xl uppercase text-pulse mb-2">Los Centinelas C-1 y C-2</h4>
              <p className="text-sm text-dim">
                Drones de seguridad con un ojo magenta. Patrullan una ruta fija, pero si su rayo de escaneo 
                te toca, se volverán rojos y te perseguirán a mayor velocidad. No hay vidas: un solo toque y 
                la partida termina.
              </p>
            </div>

            <div className="mt-6 border border-line bg-panel/40 p-6">
              <h4 className="font-display text-2xl uppercase text-neon mb-2">Salir del Laberinto</h4>
              <p className="text-sm text-dim">
                La compuerta de salida está sellada. Solo se abrirá con un destello cian cuando recojas el último 
                de los 36 fragmentos. Corre hacia la luz para recuperar tu identidad.
              </p>
            </div>
          </Reveal>

          <Reveal className="reveal-d2">
            <div className="relative">
              {/* Imagen del Laberinto (Asegúrate de tenerla en public/images) */}
              <img 
                src="./images/laberinto.png" 
                alt="Laberinto del Núcleo" 
                className="w-full border border-line object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute bottom-4 left-4 right-4 bg-inkdeep/80 backdrop-blur-md border border-line p-4">
                <p className="font-display text-lg text-neon uppercase tracking-widest">Vista del Laberinto</p>
                <p className="text-xs text-dim mt-1">Laberinto de 11x9 celdas con 36 puntos de datos.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}