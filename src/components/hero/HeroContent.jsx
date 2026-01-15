import { ArrowRight } from 'lucide-react'

export default function HeroContent() {
  return (
    <div className="relative z-10">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm shadow-blue-200/40">
        <span className="relative">
          Nation Building &amp; Career Security
          <span className="absolute -inset-2 rounded-full bg-blue-200/30 blur-xl -z-10"></span>
        </span>
      </div>

      <h1
        id="hero-heading"
        className="mt-6 font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-slate-800"
      >
        The Exam is a Phase.{' '}
        <span className="text-brand-clay">You are the Future.</span>
      </h1>

      <p className="mt-5 text-lg text-slate-600 max-w-md font-inter">
        India's first platform that secures your career while you prepare for UPSC.
        Win the seat or win the corporate world.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <a
          href="#preparation"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium
                     transition-all duration-300 hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02]
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start Learning
          <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
        </a>

        <a
          href="#career"
          className="inline-flex items-center gap-2 text-blue-600 font-medium transition-all group
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full px-2 py-2"
        >
          Explore Plan B
          <ArrowRight
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </div>
  )
}
