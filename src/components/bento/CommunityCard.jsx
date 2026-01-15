import { motion as Motion } from 'framer-motion'
import { MessageCircle, ShieldCheck } from 'lucide-react'

export default function CommunityCard() {
  return (
    <Motion.div
      id="community"
      className="col-span-1 min-h-48 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-inter font-semibold text-lg text-text-dark">
          Community
        </h3>
        <MessageCircle
          className="w-8 h-8 text-primary-blue"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      {/* Chat Items */}
      <div className="space-y-4 mt-2">
        {/* User Message */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold shrink-0">
            Ravi
          </div>
          <div className="bg-slate-50 rounded-lg px-4 py-2 max-w-xs">
            <p className="font-inter text-sm text-text-medium">
              How to tackle Ethics case study?
            </p>
          </div>
        </div>

        {/* System Badge */}
        <Motion.div
          className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <ShieldCheck
            className="w-5 h-5 text-success-green"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="font-inter text-xs font-medium text-success-green">
            No Toxicity Allowed.
          </span>
        </Motion.div>
      </div>
    </Motion.div>
  )
}
