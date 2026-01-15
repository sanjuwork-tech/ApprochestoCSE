import { Download, CheckCircle } from 'lucide-react'

export default function OfflineModeBox() {
  return (
    <div
      className="min-h-[12rem] bg-white border border-slate-100 rounded-2xl p-6
                 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/60
                 flex flex-col items-start justify-between"
    >
      <div className="p-3 bg-blue-50 rounded-2xl">
        <Download
          className="w-10 h-10 text-brand-blue animate-pulse-slow"
          strokeWidth={1.5}
        />
      </div>

      <div className="mt-4">
        <h3 className="font-playfair font-bold text-lg text-slate-800 flex items-center gap-2">
          Offline Mode
          <CheckCircle
            className="w-4 h-4 text-brand-sage check-pop"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </h3>
        <p className="mt-1 text-sm text-slate-600">Download &amp; learn anywhere</p>
      </div>
    </div>
  )
}
