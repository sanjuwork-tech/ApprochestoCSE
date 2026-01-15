import { motion as Motion } from 'framer-motion'
import { CloudDownload } from 'lucide-react'

export default function OfflineModeCard() {
  return (
    <Motion.div
      className="col-span-1 min-h-48 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Motion.div
        whileHover={{ rotate: 3 }}
        transition={{ duration: 0.3 }}
      >
        <CloudDownload
          className="w-12 h-12 text-primary-blue"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </Motion.div>

      <div className="text-center">
        <h3 className="font-inter font-semibold text-lg text-text-dark">
          Offline Mode
        </h3>
        <p className="font-inter text-sm text-text-medium mt-1">
          2G Friendly. No Buffering.
        </p>
      </div>
    </Motion.div>
  )
}
