import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { 
  Play, 
  Wifi, 
  WifiOff,
  TreePine,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Clock
} from 'lucide-react'

// Subject Card Component with "Tree" visual
function SubjectCard({ name, icon: _icon, progress, color, bgColor }) {
  // Determine tree state based on progress
  const getTreeState = (progress) => {
    if (progress >= 80) return 'full'
    if (progress >= 40) return 'growing'
    return 'sapling'
  }

  const treeState = getTreeState(progress)

  return (
    <Motion.div
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${bgColor}`}>
          <_icon className={`w-6 h-6 ${color}`} strokeWidth={1.5} />
        </div>
        <TreePine 
          className={`w-8 h-8 ${
            treeState === 'full' ? 'text-success-green' 
            : treeState === 'growing' ? 'text-yellow-500'
            : 'text-amber-600'
          }`}
          strokeWidth={1.5}
        />
      </div>
      
      <h3 className="font-semibold text-text-dark mb-2">{name}</h3>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
            <Motion.div 
              className={`h-full rounded-full ${
                treeState === 'full' ? 'bg-success-green'
                : treeState === 'growing' ? 'bg-yellow-500'
                : 'bg-amber-600'
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <span className="text-sm text-text-medium">{progress}%</span>
        </div>
        <span className="text-xs text-text-light capitalize">{treeState}</span>
      </div>
    </Motion.div>
  )
}

export default function DashboardContent() {
  const [lowDataMode, setLowDataMode] = useState(false)

  const subjects = [
    { name: 'History', icon: BookIcon, progress: 85, color: 'text-amber-600', bgColor: 'bg-amber-50' },
    { name: 'Geography', icon: GlobeIcon, progress: 60, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { name: 'Economy', icon: TrendingIcon, progress: 25, color: 'text-green-600', bgColor: 'bg-green-50' },
    { name: 'Ethics', icon: HeartIcon, progress: 92, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  ]

  return (
    <div className="min-h-screen pt-16 lg:pt-0">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 px-6 py-6 lg:sticky lg:top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <Motion.h1 
              className="font-playfair font-bold text-2xl lg:text-3xl text-text-dark"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Good Morning, Arjun.
            </Motion.h1>
            <Motion.p 
              className="font-inter text-sm text-ethos-gold italic mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Quote of the day: "Arise, awake, and stop not till the goal is reached." - Vivekananda
            </Motion.p>
          </div>
          
          {/* Low Data Mode Toggle */}
          <Motion.button
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200
              ${lowDataMode 
                ? 'bg-primary-blue/10 border-primary-blue text-primary-blue' 
                : 'border-slate-200 text-text-medium hover:border-primary-blue'
              }
            `}
            onClick={() => setLowDataMode(!lowDataMode)}
            whileTap={{ scale: 0.95 }}
          >
            {lowDataMode ? (
              <WifiOff className="w-4 h-4" strokeWidth={1.5} />
            ) : (
              <Wifi className="w-4 h-4" strokeWidth={1.5} />
            )}
            <span className="text-sm font-medium">⚡ Low Data Mode</span>
          </Motion.button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Section A: Continue Learning */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-playfair font-semibold text-xl text-text-dark mb-4">
            Continue Learning
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6">
            {/* Thumbnail */}
            <div className="w-full md:w-48 h-32 rounded-xl bg-gradient-to-br from-primary-blue/20 to-brand-blue/20 flex items-center justify-center relative overflow-hidden shrink-0">
              <div className="p-4 bg-white/90 rounded-full shadow-lg">
                <Play className="w-8 h-8 text-primary-blue" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 rounded text-xs text-white">
                24:35
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-primary-blue/10 text-primary-blue text-xs font-medium rounded-full">
                  Polity
                </span>
                <span className="text-xs text-text-light">Chapter 3 of 12</span>
              </div>
              <h3 className="font-semibold text-lg text-text-dark mb-3">
                The Preamble: Philosophy & Purpose
              </h3>
              <p className="text-sm text-text-medium mb-4">
                Understanding the ideological foundation of the Indian Constitution through historical context.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-ethos-gold">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                  <span>Estimated Data: {lowDataMode ? '8MB' : '15MB'}</span>
                </div>
                
                <Motion.button
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-blue text-white rounded-full font-medium text-sm shadow-lg shadow-primary-blue/25 hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Resume
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Motion.button>
              </div>
            </div>
          </div>
        </Motion.section>

        {/* Section B: Knowledge Tree */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-playfair font-semibold text-xl text-text-dark">
              Knowledge Tree
            </h2>
            <a href="#syllabus" className="text-sm text-primary-blue hover:underline">
              View All
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjects.map((subject) => (
              <SubjectCard key={subject.name} {...subject} />
            ))}
          </div>
        </Motion.section>

        {/* Section C: Dual-Track Notification */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4"
        >
          {/* Recent Achievement */}
          <div className="flex-1 bg-green-50/80 backdrop-blur-sm rounded-2xl p-5 border border-green-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Briefcase className="w-6 h-6 text-success-green" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-text-dark mb-1">Recent Achievement</h3>
                <p className="text-sm text-text-medium mb-3">
                  You completed <span className="font-medium text-text-dark">'Ethics Case Studies'</span>. 
                  Skill Unlocked: <span className="font-medium text-success-green">Decision Making</span>
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success-green" strokeWidth={1.5} />
                  <span className="text-xs text-success-green font-medium">Corporate Portfolio Updated</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Today's Streak */}
          <div className="flex-1 bg-ethos-gold/10 rounded-2xl p-5 border border-ethos-gold/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <FireIcon className="w-6 h-6 text-ethos-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-text-dark mb-1">Today&apos;s Streak</h3>
                <p className="text-sm text-text-medium mb-2">
                  Keep going! You&apos;ve studied for <span className="font-semibold text-ethos-gold">7 days</span> in a row.
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div 
                      key={day}
                      className={`w-2 h-6 rounded-full ${day <= 7 ? 'bg-ethos-gold' : 'bg-slate-200'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Motion.section>
      </main>
    </div>
  )
}

// Icon components
function BookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function GlobeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function TrendingIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function FireIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.5-3Z" />
    </svg>
  )
}
