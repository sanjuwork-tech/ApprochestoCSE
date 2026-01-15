import { ArrowRight, Users } from 'lucide-react'

export default function CallToActionSection() {
  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-6">
          <Users className="w-4 h-4 text-brand-blue" strokeWidth={1.5} />
          <span className="text-sm text-slate-700 font-medium">
            Join 10,000+ students
          </span>
        </div>

        <h2
          id="cta-heading"
          className="font-playfair font-bold text-3xl sm:text-4xl text-slate-800"
        >
          Ready to Secure Your Future?
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Join students building dual careers—UPSC clarity and corporate resilience.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-medium
                       transition-all duration-300 hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02]
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </a>

          <a
            href="#learn-more"
            className="text-blue-600 font-medium hover:underline
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full px-4 py-2"
          >
            Learn more about our approach
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-brand-blue">97%</p>
            <p className="text-sm text-slate-600 mt-1">Student Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-sage">500+</p>
            <p className="text-sm text-slate-600 mt-1">Skills Mapped</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-clay">24/7</p>
            <p className="text-sm text-slate-600 mt-1">Learning Access</p>
          </div>
        </div>
      </div>
    </section>
  )
}
