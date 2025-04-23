import StickyCursor from './homepagecomponents/animation/sticky-cursort'
import Banner from './homepagecomponents/banner'
import Clientes from './homepagecomponents/clientes'
import Footer from './homepagecomponents/footer'
import GalleryCTA from './homepagecomponents/galeria-cta'
import Hero from './homepagecomponents/hero'
import Hidroponia from './homepagecomponents/hidroponia'
import Logos from './homepagecomponents/logos'
import Sobre from './homepagecomponents/sobre'
import Vantagens from './homepagecomponents/vantagens'

export default function Home() {
  return (
    <div className="flex flex-col cursor-auto overflow-x-hidden">
      <StickyCursor />
      <Hero />
      <Banner />
      <Hidroponia />
      <Vantagens />
      <Sobre />
      <Logos />
      <GalleryCTA />
      <Clientes />
      <Footer />
    </div>
  )
}
