import ShadowResumeBox from './bento/ShadowResumeBox'
import OfflineModeBox from './bento/OfflineModeBox'
import EthosBox from './bento/EthosBox'
import CommunityBox from './bento/CommunityBox'

export default function BentoGridSection() {
  return (
    <section
      id="preparation"
      className="py-16 sm:py-20"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2
            id="features-heading"
            className="font-playfair font-bold text-3xl sm:text-4xl text-slate-800"
          >
            Dual-track preparation, one premium experience.
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Designed for UPSC depth—with a career bridge built-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <ShadowResumeBox />
          <OfflineModeBox />
          <EthosBox />
          <CommunityBox />
        </div>
      </div>
    </section>
  )
}
