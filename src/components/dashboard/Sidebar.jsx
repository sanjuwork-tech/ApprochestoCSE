import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  BookOpen, 
  FileText, 
  BarChart3, 
  ChevronDown, 
  ChevronRight,
  Briefcase,
  Menu,
  X,
  TrendingUp
} from 'lucide-react'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, active: true },
  { 
    id: 'syllabus', 
    label: 'My Syllabus', 
    icon: BookOpen,
    children: [
      { id: 'gs1', label: 'GS1 - Art & Culture', progress: 75 },
      { id: 'gs2', label: 'GS2 - Polity', progress: 45 },
      { id: 'gs3', label: 'GS3 - Economy', progress: 20 },
      { id: 'gs4', label: 'GS4 - Ethics', progress: 90 },
    ]
  },
  { id: 'editorials', label: 'Daily Editorials', icon: FileText },
  { id: 'tests', label: 'Tests & Analytics', icon: BarChart3 },
]

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [expandedItems, setExpandedItems] = useState(['syllabus'])

  const toggleExpand = (id) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-100 z-30 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-ethos-gold/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full" style={{ background: '#C59B76' }} />
          </div>
          <span className="font-playfair font-bold text-lg text-text-dark">
            Dharma
          </span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-text-dark" strokeWidth={1.5} />
          ) : (
            <Menu className="w-6 h-6 text-text-dark" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Sidebar Container */}
      <Motion.aside
        initial={false}
        animate={{ 
          x: isMobileMenuOpen ? 0 : '-100%',
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-[260px] bg-white border-r border-slate-100 z-50
          lg:translate-x-0 lg:opacity-100
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-100">
          <div className="w-8 h-8 rounded-lg bg-ethos-gold/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full" style={{ background: '#C59B76' }} />
          </div>
          <span className="font-playfair font-bold text-xl text-text-dark">
            Dharma
          </span>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1" role="navigation" aria-label="Main navigation">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-xl
                      transition-all duration-200
                      ${item.active 
                        ? 'bg-primary-blue/10 text-primary-blue' 
                        : 'text-text-medium hover:bg-slate-50 hover:text-text-dark'
                      }
                    `}
                    aria-expanded={expandedItems.includes(item.id)}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" strokeWidth={1.5} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {expandedItems.includes(item.id) ? (
                      <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                    ) : (
                      <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedItems.includes(item.id) && (
                      <Motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pr-4 py-2 space-y-1">
                          {item.children.map((child) => (
                            <a
                              key={child.id}
                              href={`#${child.id}`}
                              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-text-medium hover:text-primary-blue transition-colors"
                            >
                              <span>{child.label}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-primary-blue rounded-full transition-all duration-500"
                                    style={{ width: `${child.progress}%` }}
                                  />
                                </div>
                                <span className="text-xs text-text-light">{child.progress}%</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={`#${item.id}`}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-200
                    ${item.active 
                      ? 'bg-primary-blue/10 text-primary-blue' 
                      : 'text-text-medium hover:bg-slate-50 hover:text-text-dark'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  <span className="font-medium">{item.label}</span>
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Career Safety Net Widget */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-gradient-to-br from-primary-blue to-brand-blue rounded-2xl p-5 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Briefcase className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-white/80">Career Safety Net</p>
                <p className="font-semibold">Level 3/5</p>
              </div>
            </div>
            
            {/* Progress Ring */}
            <div className="relative w-16 h-16 mx-auto mb-3">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="75 100"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" strokeWidth={1.5} />
              </div>
            </div>
            
            <p className="text-center text-sm font-medium">Corp. Readiness: Good</p>
          </div>
        </div>
      </Motion.aside>
    </>
  )
}
