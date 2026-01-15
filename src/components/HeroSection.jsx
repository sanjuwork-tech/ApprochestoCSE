import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-bg-paper overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topographic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10 Q 30 20 50 10 T 90 10" stroke="#4A90E2" fill="none" strokeWidth="0.5"/>
              <path d="M10 30 Q 30 40 50 30 T 90 30" stroke="#4A90E2" fill="none" strokeWidth="0.5"/>
              <path d="M10 50 Q 30 60 50 50 T 90 50" stroke="#4A90E2" fill="none" strokeWidth="0.5"/>
              <path d="M10 70 Q 30 80 50 70 T 90 70" stroke="#4A90E2" fill="none" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topographic)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                Nation Building & Career Security
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              The Exam is a Phase.{' '}
              <span className="text-earth-clay">You are the Future.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              India's first adaptive platform that secures your career while you prepare for UPSC. 
              Win the seat, or win the corporate world.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-brand-blue text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all">
                Start Learning
              </button>
              <button className="px-8 py-4 bg-transparent text-brand-blue font-medium rounded-full hover:bg-blue-50 transition-all inline-flex items-center gap-2 group">
                Explore Plan B
                <ArrowRight size={20} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              {/* Mountain */}
              <path d="M 50 450 L 250 100 L 450 450 Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="2"/>
              
              {/* Left Path (UPSC) - Parliament */}
              <g>
                <path d="M 250 250 L 200 200 L 150 180" stroke="#4A90E2" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                {/* Parliament building */}
                <rect x="120" y="140" width="60" height="40" fill="#4A90E2" opacity="0.8"/>
                <path d="M 150 140 L 120 120 L 180 120 Z" fill="#4A90E2" opacity="0.9"/>
                <circle cx="150" cy="120" r="8" fill="#D4A373"/>
              </g>

              {/* Right Path (Corporate) - Skyscrapers */}
              <g>
                <path d="M 250 250 L 300 200 L 350 180" stroke="#A8D5BA" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                {/* Skyscrapers */}
                <rect x="330" y="120" width="20" height="60" fill="#A8D5BA" opacity="0.8"/>
                <rect x="355" y="140" width="20" height="40" fill="#A8D5BA" opacity="0.9"/>
                <rect x="380" y="130" width="20" height="50" fill="#A8D5BA" opacity="0.85"/>
                {/* Windows */}
                <rect x="335" y="130" width="4" height="4" fill="white"/>
                <rect x="343" y="130" width="4" height="4" fill="white"/>
                <rect x="360" y="150" width="4" height="4" fill="white"/>
                <rect x="385" y="140" width="4" height="4" fill="white"/>
              </g>

              {/* Student climbing */}
              <g>
                <circle cx="250" cy="240" r="15" fill="#D4A373"/>
                <rect x="245" y="255" width="10" height="20" fill="#4A90E2"/>
                <line x1="245" y1="265" x2="235" y2="280" stroke="#4A90E2" strokeWidth="3"/>
                <line x1="255" y1="265" x2="265" y2="280" stroke="#4A90E2" strokeWidth="3"/>
              </g>

              {/* Sun */}
              <circle cx="420" cy="80" r="30" fill="#FFD700" opacity="0.8"/>
              
              {/* Clouds */}
              <ellipse cx="100" cy="100" rx="30" ry="15" fill="white" opacity="0.7"/>
              <ellipse cx="380" cy="120" rx="25" ry="12" fill="white" opacity="0.7"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
