import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BentoGridSection from './components/BentoGridSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-off-white text-text-dark">
      <Navbar />
      <main>
        <HeroSection />
        <BentoGridSection />
      </main>
      <Footer />
    </div>
  )
}
