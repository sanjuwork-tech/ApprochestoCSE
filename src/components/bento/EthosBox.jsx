import { Quote } from 'lucide-react'

export default function EthosBox() {
  return (
    <div
      id="ethos"
      className="min-h-[16rem] bg-brand-clay rounded-2xl p-6 relative overflow-hidden flex items-center justify-center"
    >
      <Quote
        className="absolute top-5 right-5 w-16 h-16 text-white/20"
        strokeWidth={1.5}
      />

      <div className="text-center max-w-sm">
        <p className="font-playfair italic text-lg leading-relaxed text-white">
          विद्या ददाति विनयं विनयाद् याति पात्रताम्।
        </p>
        <p className="mt-3 text-sm text-white/80 font-inter">
          Knowledge imparts humility... humility cultivates worthiness.
        </p>
      </div>
    </div>
  )
}
