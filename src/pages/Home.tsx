import { CrtOverlay } from '../components/CrtOverlay'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Historia } from '../sections/Historia'
import { Personaje } from '../sections/Personaje'
import { Mecanicas } from '../sections/Mecanicas'
import { Datos } from '../sections/Datos'
import { Laberinto } from '../sections/Laberinto' // <-- NUEVA IMPORTACIÓN
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
        <Laberinto /> {/* <-- NUEVA SECCIÓN AGREGADA AQUÍ */}
        <Jugar />
      </main>
      <Footer />
    </div>
  )
}