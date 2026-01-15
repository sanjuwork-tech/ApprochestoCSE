import MeshGradientBackground from './hero/MeshGradientBackground'
import HeroContent from './hero/HeroContent'
import GlassCard from './hero/GlassCard'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
      <MeshGradientBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <HeroContent />
          </div>
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <GlassCard />
          </div>
        </div>
      </div>
    </section>
  )
}
