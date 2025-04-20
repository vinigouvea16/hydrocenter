import Banner from './homepagecomponents/banner'
import Clientes from './homepagecomponents/clientes'
import Footer from './homepagecomponents/footer'
import Hero from './homepagecomponents/hero'
import Hidroponia from './homepagecomponents/hidroponia'
import Logos from './homepagecomponents/logos'
import Sobre from './homepagecomponents/sobre'
import Vantagens from './homepagecomponents/vantagens'

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <Banner />
      <Hidroponia />
      <Vantagens />
      <Sobre />
      <Logos />
      <Clientes />
      <Footer />
    </div>
  )
}
