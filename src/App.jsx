import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BentoGridSection from './components/BentoGridSection'
import CallToActionSection from './components/CallToActionSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-paper text-slate-800">
      <Navbar />
      <main>
        <HeroSection />
        <BentoGridSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
