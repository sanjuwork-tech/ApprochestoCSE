import { motion as Motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function EthosCard() {
  return (
    <Motion.div
      id="ethos"
      className="col-span-1 md:row-span-2 bg-ethos-gold rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[calc(100%-24px)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Quote
        className="w-16 h-16 text-white/30 mb-4"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <Motion.p
        className="font-playfair italic font-bold text-2xl text-white leading-relaxed text-center max-w-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        विद्या ददाति विनयं विनयाद् याति पात्रताम्।
      </Motion.p>

      <Motion.p
        className="mt-4 font-inter font-normal text-sm text-white/80 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Knowledge imparts humility... Humility cultivates worthiness.
      </Motion.p>
    </Motion.div>
  )
}
