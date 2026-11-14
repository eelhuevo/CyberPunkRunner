import { useState } from 'react'
import { ExternalLink, Gamepad2, Play } from 'lucide-react'
import { Reveal } from '../hooks/useReveal'
import { GAME_1, GAME_2, UNITY_BUILD_URL, UNITY_BUILD_URL_2 } from '../config'

// Componente interno para cada juego
function GameSection({ 
  id, title, subtitle, genre, url, accentColor 
}: { 
  id: string, title: string, subtitle: string, genre: string, url: string, accentColor: string 
}) {
  const [isStarted, setIsStarted] = useState(false)

  const isReady = url.trim().length > 0

  return (
    <div id={id} className="mt-16 border-t border-line pt-16 scroll-mt-24">
      <Reveal>
        <div className="flex items-center gap-4 mb-8">
          <span className={`font-display text-xl uppercase tracking-[0.2em] ${accentColor}`}>
            {id === 'juego-1' ? 'JUEGO 1' : 'JUEGO 2'}
          </span>
          <span className="h-px flex-1 bg-line" />
          <h2 className="font-display text-4xl uppercase tracking-[0.06em] text-metal sm:text-5xl">{title}</h2>
          <span className="h-px flex-1 bg-line" />
        </div>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <Reveal className="reveal-d1">
          {isReady ? (
            <div className={`border bg-inkdeep ${isStarted ? `border-${accentColor.replace('text-', '')}/50` : 'border-line'}`}>
              
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <p className={`font-display text-xl uppercase tracking-[0.18em] ${accentColor}`}>
                  {title} // {subtitle}
                </p>
                <span className="flex items-center gap-2 font-display text-lg uppercase tracking-[0.16em] text-dim">
                  {isStarted ? (
                    <><span className={`inline-block h-2 w-2 bg-${accentColor.replace('text-', '')}`} style={{ animation: 'blink-dot 1s step-end infinite' }} /> En ejecución</>
                  ) : (
                    'En espera'
                  )}
                </span>
              </div>

              <div className="aspect-video w-full relative bg-black flex items-center justify-center overflow-hidden">
                {/* Si no se ha iniciado, mostramos el botón START */}
                {!isStarted && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-inkdeep z-10 px-6 text-center">
                    <Gamepad2 className={`h-16 w-16 mb-4 ${accentColor} opacity-80`} />
                    <h3 className="font-display text-3xl uppercase tracking-[0.1em] text-metal mb-2">
                      {title}
                    </h3>
                    <p className="text-dim text-sm mb-6 max-w-md">
                      Presiona START para cargar el juego. {genre}
                    </p>
                    <button
                      onClick={() => setIsStarted(true)}
                      className={`inline-flex items-center gap-3 bg-${accentColor.replace('text-', '')} text-ink font-display uppercase tracking-[0.12em] px-8 h-14 text-2xl border-2 border-${accentColor.replace('text-', '')} transition-all duration-300 hover:bg-transparent hover:text-${accentColor.replace('text-', '')}`}
                    >
                      <Play className="h-6 w-6 fill-current" />
                      START
                    </button>
                  </div>
                )}
                
                {/* El iframe se carga solo cuando isStarted es true */}
                {isStarted && (
                  <iframe
                    src={url}
                    title={`${title} — build Unity WebGL`}
                    className="h-full w-full absolute inset-0"
                    allow="autoplay; fullscreen; gamepad; keyboard-map"
                    allowFullScreen
                  />
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-3">
                <p className="text-sm text-dim">¿Problemas con el marco? Abre el juego en pestaña completa.</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 border px-4 py-2 font-display text-lg uppercase tracking-[0.14em] transition-colors hover:bg-${accentColor.replace('text-', '')} hover:text-ink border-${accentColor.replace('text-', '')} ${accentColor}`}
                >
                  Abrir en pestaña <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ) : (
            <div className="border border-pulse/50 bg-inkdeep p-10 text-center">
              <Gamepad2 className="h-14 w-14 text-pulse mx-auto mb-4" />
              <p className="font-display text-2xl uppercase text-metal">Build pendiente</p>
            </div>
          )}
        </Reveal>

        {/* Ficha técnica lateral */}
        <div>
          <Reveal className="reveal-d2 border border-line bg-panel/50 p-5">
            <p className="font-display text-xl uppercase tracking-[0.14em] text-metal mb-4">
              Detalles del juego
            </p>
            <dl className="space-y-3 text-sm sm:text-base">
              <div className="flex justify-between gap-4 border-b border-line/50 pb-2">
                <dt className="text-dim">Género</dt>
                <dd className="text-right text-metal">{genre}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line/50 pb-2">
                <dt className="text-dim">Puntuación meta</dt>
                <dd className="text-right text-metal">{id === 'juego-1' ? GAME_1.targetScore : GAME_2.targetScore}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line/50 pb-2">
                <dt className="text-dim">Controles</dt>
                <dd className="text-right text-metal">{id === 'juego-1' ? GAME_1.controls : GAME_2.controls}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export function Jugar() {
  return (
    <section id="jugar" className="relative border-t border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl uppercase tracking-[0.2em] text-pulse">CH.05</span>
            <span className="h-px flex-1 bg-line" />
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-metal sm:text-6xl">Jugar ahora</h2>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        {/* Juego 1 */}
        <GameSection 
          id="juego-1"
          title={GAME_1.title}
          subtitle={GAME_1.subtitle}
          genre={GAME_1.genre}
          url={UNITY_BUILD_URL}
          accentColor="text-neon"
        />

        {/* Juego 2 */}
        <GameSection 
          id="juego-2"
          title={GAME_2.title}
          subtitle={GAME_2.subtitle}
          genre={GAME_2.genre}
          url={UNITY_BUILD_URL_2}
          accentColor="text-pulse"
        />

      </div>
    </section>
  )
}