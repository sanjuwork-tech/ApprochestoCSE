import { motion as Motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function ShadowResumeCard() {
  return (
    <Motion.div
      id="career"
      className="col-span-1 md:col-span-2 min-h-56 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-6">
        {/* Progress Visual */}
        <div>
          <h3 className="font-inter font-semibold text-slate-900 mb-4">
            History Syllabus Completed
          </h3>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <Motion.div
              className="h-full bg-gradient-to-r from-primary-blue to-success-green rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '75%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
          <p className="mt-2 text-xs text-text-medium">75% Complete</p>
        </div>

        {/* Skill Badge Reveal */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          className="inline-flex items-center gap-2"
        >
          <span className="font-inter text-sm font-medium text-text-medium">
            Research Analysis Skill Unlocked
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" strokeWidth={1.5} />
          </span>
        </Motion.div>

        {/* Tagline */}
        <p className="font-inter text-sm text-text-medium italic">
          While you study, we build your portfolio.
        </p>
      </div>
    </Motion.div>
  )
}
