import { ArrowDown, BookOpen, Play } from 'lucide-react'
import { GAME } from '../config'

const metrics = [
  { value: GAME.targetScore, label: 'Puntos para la meta' },
  { value: GAME.lives, label: 'Vidas iniciales' },
  { value: '↑ ↓', label: 'Salta · Agáchate' },
]

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-end overflow-hidden">
      {/* Fondo: key art */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="./images/hero-neo-cyber.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24">
        <div className="boot max-w-3xl">
          <p className="inline-flex items-center gap-3 border border-neon/50 bg-inkdeep/70 px-4 py-2 font-display text-lg uppercase tracking-[0.24em] text-neon backdrop-blur-sm">
            <span className="inline-block h-2 w-2 bg-pulse" style={{ animation: 'blink-dot 1s step-end infinite' }} />
            {GAME.genre}
          </p>

          <h1 className="mt-6 font-display uppercase leading-[0.85]">
            <span className="chroma block text-7xl text-metal sm:text-8xl lg:text-9xl">{GAME.title}</span>
            <span className="text-outline block text-6xl sm:text-7xl lg:text-8xl">{GAME.subtitle}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium text-metal sm:text-xl">
            {GAME.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base text-dim">{GAME.synopsis}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#jugar" className="btn-primary">
              <Play className="h-5 w-5 fill-current" />
              Jugar ahora
            </a>
            <a href="#historia" className="btn-secondary">
              <BookOpen className="h-5 w-5" />
              Ver la historia
            </a>
          </div>

          {/* Panel de métricas rápidas */}
          <dl className="mt-10 grid max-w-2xl grid-cols-3 border border-line bg-inkdeep/70 backdrop-blur-sm">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`px-4 py-4 sm:px-6 ${i > 0 ? 'border-l border-line' : ''}`}
              >
                <dt className="order-2 mt-1 block font-display text-sm uppercase tracking-[0.18em] text-dim sm:text-base">
                  {m.label}
                </dt>
                <dd className="order-1 font-display text-3xl text-neon sm:text-4xl">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#historia"
        aria-label="Bajar a la sección Historia"
        className="absolute bottom-6 right-6 z-10 hidden h-12 w-12 items-center justify-center border border-line text-dim transition-colors hover:border-neon hover:text-neon md:flex"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
