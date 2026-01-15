import HeroContent from './hero/HeroContent'
import DigitalDiya from './hero/DigitalDiya'

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden bg-off-white"
      aria-labelledby="hero-heading"
    >
      {/* Clean background - no watermark */}
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Typography (45% on desktop) */}
          <div className="lg:col-span-5">
            <HeroContent />
          </div>
          
          {/* Right Column - Digital Diya (55% on desktop) */}
          <div className="lg:col-span-7 flex items-center justify-center min-h-[500px] md:min-h-[600px]">
            <DigitalDiya />
          </div>
        </div>
      </div>
    </section>
  )
}
