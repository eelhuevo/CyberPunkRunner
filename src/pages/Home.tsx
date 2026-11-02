import { CrtOverlay } from '../components/CrtOverlay'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Historia } from '../sections/Historia'
import { Personaje } from '../sections/Personaje'
import { Mecanicas } from '../sections/Mecanicas'
import { Datos } from '../sections/Datos'
import { Jugar } from '../sections/Jugar'
import { Footer } from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-ink">
      <CrtOverlay />
      <Header />
      <main>
        <Hero />
        <Historia />
        <Personaje />
        <Mecanicas />
        <Datos />
        <Jugar />
      </main>
      <Footer />
    </div>
  )
}
