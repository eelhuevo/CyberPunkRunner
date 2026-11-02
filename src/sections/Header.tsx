import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GAME, NAV_LINKS } from '../config'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[80] border-b border-line/70 bg-inkdeep/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="chroma font-display text-2xl tracking-[0.14em] text-metal">
            CYBER<span className="text-neon">_</span>RUNNER
            <span className="ml-1 inline-block h-3 w-3 bg-pulse align-middle" style={{ animation: 'blink-dot 1.2s step-end infinite' }} />
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-display text-xl uppercase tracking-[0.16em] text-dim transition-colors duration-200 hover:text-neon"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#jugar"
              className="border border-neon px-5 py-2 font-display text-xl uppercase tracking-[0.16em] text-neon transition-all duration-200 hover:bg-neon hover:text-ink"
            >
              Jugar ahora
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center border border-line text-metal transition-colors hover:border-neon hover:text-neon md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[90] flex flex-col bg-inkdeep/97 backdrop-blur-lg"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="flex h-16 items-center justify-between border-b border-line px-4">
            <span className="font-display text-2xl tracking-[0.14em] text-metal">
              CYBER<span className="text-neon">_</span>RUNNER
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="flex h-11 w-11 items-center justify-center border border-line text-metal transition-colors hover:border-pulse hover:text-pulse"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8" aria-label="Navegación móvil">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="chroma font-display text-5xl uppercase leading-tight tracking-[0.08em] text-metal sm:text-6xl"
              >
                <span className="mr-4 text-xl text-pulse">0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="px-8 pb-8 font-display text-lg uppercase tracking-[0.2em] text-dim">
            {GAME.genre} // NEO-CYBER
          </p>
        </div>
      )}
    </>
  )
}
