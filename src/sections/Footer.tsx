import { ChevronUp } from 'lucide-react'
import { GAME } from '../config'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-inkdeep">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="font-display text-2xl uppercase tracking-[0.14em] text-metal">
              CYBER<span className="text-neon">_</span>RUNNER
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-dim">
              Portal de divulgación técnica y promoción del videojuego. {GAME.course}. Desarrollado
              en Unity con modelado en Blender.
            </p>
          </div>
          <div>
            <p className="hud-label text-sm">Equipo de desarrollo</p>
            <ul className="mt-3 space-y-1">
              {GAME.team.map((member) => (
                <li key={member} className="text-base text-metal">
                  {member}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 border border-line px-5 py-3 font-display text-xl uppercase tracking-[0.16em] text-dim transition-colors hover:border-neon hover:text-neon"
          >
            <ChevronUp className="h-5 w-5" />
            Rewind
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <p className="font-display text-lg uppercase tracking-[0.2em] text-dim">
            NEO-CYBER // SYS.ALERT ACTIVA
          </p>
          <p className="font-display text-lg uppercase tracking-[0.2em] text-dim">
            {GAME.genre} · LOW POLY
          </p>
        </div>
      </div>

      {/* Marca tipográfica gigante */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <p className="-mb-10 whitespace-nowrap text-center font-display text-[18vw] uppercase leading-[0.8] text-panel sm:-mb-16">
          CYBER RUNNER
        </p>
      </div>
    </footer>
  )
}
