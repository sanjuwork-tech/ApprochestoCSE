import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { 
  Play, 
  Wifi,
  WifiOff,
  TreeDeciduous,
  Sprout,
  Seed,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Clock
} from 'lucide-react'

// Subject Card Component with Tree Icons
function SubjectCard({ name, icon: _icon, progress: _progress, color: _color }) {
  const getTreeState = (progress) => {
    if (progress >= 80) return { icon: TreeDeciduous, stateColor: 'text-emerald-500' }
    if (progress >= 40) return { icon: Sprout, stateColor: 'text-emerald-400' }
    return { icon: Seed, stateColor: 'text-amber-600' }
  }

  const { icon: TreeIcon, stateColor } = getTreeState(_progress)

  return (
    <Motion.div
      className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors"
      whileHover={{ y: -1 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3">
        <TreeDeciduous className="w-5 h-5 text-slate-600" strokeWidth={1.5} />
        <TreeIcon className={`w-5 h-5 ${stateColor}`} strokeWidth={1.5} />
      </div>
      
      <h4 className="font-medium text-slate-900 text-sm mb-2">{name}</h4>
      
      <div className="flex items-center justify-between">
        <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
          <Motion.div 
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${_progress}%` }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>
        <span className="text-xs text-slate-500">{_progress}%</span>
      </div>
    </Motion.div>
  )
}

export default function DashboardContent({ onShowToast }) {
  const [lowDataMode, setLowDataMode] = useState(false)

  const handleToggle = () => {
    setLowDataMode(!lowDataMode)
    if (!lowDataMode) {
      onShowToast("Video quality set to 240p")
    }
  }

  const careerUpdates = [
    { 
      title: "Ethics Case Study", 
      unlock: "Decision Making Badge",
      icon: CheckCircle2 
    },
    { 
      title: "Answer Writing Mains", 
      unlock: "Communication Skill",
      icon: CheckCircle2 
    },
    { 
      title: "Mock Interview", 
      unlock: "Leadership Insight",
      icon: CheckCircle2 
    },
  ]

  const subjects = [
    { name: 'History', progress: 85 },
    { name: 'Polity', progress: 45 },
    { name: 'Economy', progress: 15 },
    { name: 'Ethics', progress: 92 },
  ]

  return (
    <div className="min-h-screen pt-16 lg:pt-0">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-5 lg:sticky lg:top-0 z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Motion.h1 
            className="font-serif text-2xl text-slate-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Good Morning, Arjun.
          </Motion.h1>
          
          {/* Low Data Mode Toggle */}
          <Motion.button
            onClick={handleToggle}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-150
              ${lowDataMode 
                ? 'bg-amber-50 border-amber-200' 
                : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }
            `}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-base">⚡</span>
            <span className={`text-sm font-medium ${lowDataMode ? 'text-amber-700' : 'text-slate-600'}`}>
              2G Mode
            </span>
            {lowDataMode ? (
              <WifiOff className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
            ) : (
              <Wifi className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
            )}
          </Motion.button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-6 space-y-6">
        {/* Card 1: Continue Learning (Hero Card - Full Width) */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-serif text-lg text-slate-900 mb-3">Continue Learning</h2>
          
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            {/* Thumbnail */}
            <div className="w-full md:w-48 h-40 md:h-auto bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative shrink-0">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-1" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/40 rounded text-xs text-white">
                24:35
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                  Polity
                </span>
                <span className="text-xs text-slate-400">Chapter 3 of 12</span>
              </div>
              <h3 className="font-medium text-slate-900 text-lg mb-3">
                The Preamble: Philosophy & Purpose
              </h3>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-slate-500">Progress</span>
                  <span className="text-xs font-medium text-slate-700">45%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-blue-500 rounded-full" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-amber-600">
                  <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>Est. Data: {lowDataMode ? '8MB' : '12MB'}</span>
                </div>
                
                <Motion.button
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Resume Class
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Motion.button>
              </div>
            </div>
          </div>
        </Motion.section>

        {/* Card 2: The Knowledge Tree (Subject Progress) */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-serif text-lg text-slate-900 mb-3">Your Growth</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {subjects.map((subject) => (
              <SubjectCard key={subject.name} {...subject} icon={TreeDeciduous} color="text-slate-600" />
            ))}
          </div>
        </Motion.section>

        {/* Card 3: Shadow Career Updates (The USP) */}
        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-serif text-lg text-slate-900 mb-3">Shadow Career Updates</h2>
          
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl border border-emerald-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-emerald-700">Recent Unlocks</span>
            </div>
            
            <div className="space-y-3">
              {careerUpdates.map((update, i) => (
                <Motion.div
                  key={update.title}
                  className="flex items-center gap-3 bg-white/60 rounded-lg p-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="p-1.5 bg-emerald-100 rounded-lg">
                    <update.icon className="w-4 h-4 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700">
                      Completed <span className="font-medium text-slate-900">'{update.title}'</span>
                    </p>
                    <p className="text-xs text-emerald-600">
                      Unlocked: {update.unlock}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </Motion.section>
      </main>
    </div>
  )
}
