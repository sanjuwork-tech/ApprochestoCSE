import { TrendingUp, Award, Star } from 'lucide-react'

export default function GlassCard() {
  return (
    <div className="relative w-full max-w-xl">
      <div
        className="absolute -inset-8 bg-gradient-to-br from-brand-blue/10 via-white/0 to-brand-sage/10 blur-2xl"
        aria-hidden="true"
      />

      <div
        className="relative"
        style={{ transform: 'perspective(1200px) rotateY(-2deg)' }}
      >
        <div
          className="glass-panel rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(74,144,226,0.18)]
                     animate-float motion-reduce:animate-none"
        >
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-700 font-playfair flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-blue" strokeWidth={1.5} />
              Your Dashboard
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 font-medium">UPSC Progress</span>
                  <span className="text-brand-blue font-bold">70% Complete</span>
                </div>
                <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div className="progress-fill h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-sage" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-4 bg-white/50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-sage/20 rounded-lg">
                    <Award className="w-6 h-6 text-brand-sage" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">
                      Employability Score
                    </p>
                    <p className="text-xs text-slate-500">Corporate Readiness</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-1"
                  role="img"
                  aria-label="Employability level 4 out of 5"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={`w-4 h-4 ${
                        n <= 4
                          ? 'fill-brand-sage text-brand-sage'
                          : 'text-slate-300'
                      }`}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center text-xs">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <p className="font-bold text-brand-blue text-lg">247</p>
                  <p className="text-slate-600">Topics Mastered</p>
                </div>
                <div className="p-3 bg-green-50 rounded-xl">
                  <p className="font-bold text-brand-sage text-lg">18</p>
                  <p className="text-slate-600">Skills Mapped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
