import { motion as Motion } from 'framer-motion'
import ShadowResumeCard from './bento/ShadowResumeCard'
import EthosCard from './bento/EthosCard'
import OfflineModeCard from './bento/OfflineModeCard'
import CommunityCard from './bento/CommunityCard'

export default function BentoGridSection() {
  return (
    <section
      id="preparation"
      className="py-20 bg-off-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Motion.h2
          id="features-heading"
          className="font-playfair font-bold text-4xl md:text-5xl text-text-dark text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A Holistic Ecosystem.
        </Motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card A: Shadow Resume - Spans 2 Columns */}
          <ShadowResumeCard />

          {/* Card B: Ethos - Right Column, Spans 2 Rows */}
          <EthosCard />

          {/* Card C: Offline Mode - Bottom Left */}
          <OfflineModeCard />

          {/* Card D: Community - Bottom Center */}
          <CommunityCard />
        </div>
      </div>
    </section>
  )
}
