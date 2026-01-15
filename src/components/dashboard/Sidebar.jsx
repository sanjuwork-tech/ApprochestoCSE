import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  BookOpen, 
  Newspaper, 
  BarChart3,
  Menu,
  X,
  TrendingUp
} from 'lucide-react'

// SVG Diya Icon
const DiyaIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12.5 3.5 13 5 13 6.5C14 7 15 8 15 9.5C16 10 17 11 17 12.5C17 14 16 15.5 15 16.5C14 17.5 13 18.5 12 19.5C11 18.5 10 17.5 9 16.5C8 15.5 7 14 7 12.5C7 11 8 10 9 9.5C9 8 10 7 11 6.5C11 5 11.5 3.5 12 2Z" fill="#C59B76"/>
  </svg>
)

const menuItems = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: LayoutDashboard, 
    active: true 
  },
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
  { id: 'editorials', label: 'Daily Editorials', icon: Newspaper },
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
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-30 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <DiyaIcon className="w-6 h-6" />
          <span className="font-serif font-bold text-lg text-slate-900">
            Approaches
          </span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-slate-700" strokeWidth={1.5} />
          ) : (
            <Menu className="w-5 h-5 text-slate-700" strokeWidth={1.5} />
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
          fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 z-50
          lg:translate-x-0 lg:opacity-100
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-2.5 px-5 border-b border-slate-100">
          <DiyaIcon className="w-6 h-6" />
          <span className="font-serif font-bold text-xl text-slate-900">
            Approaches
          </span>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-0.5" role="navigation" aria-label="Main navigation">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2.5 rounded-lg
                      transition-all duration-150
                      ${item.active 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }
                    `}
                    aria-expanded={expandedItems.includes(item.id)}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" strokeWidth={1.5} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedItems.includes(item.id) && (
                      <Motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-11 pr-3 py-1.5 space-y-0.5">
                          {item.children.map((child) => (
                            <a
                              key={child.id}
                              href={`#${child.id}`}
                              className="flex items-center justify-between py-2 px-2.5 rounded-md text-sm text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                              <span>{child.label}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                                    style={{ width: `${child.progress}%` }}
                                  />
                                </div>
                                <span className="text-xs text-slate-400 w-7">{child.progress}%</span>
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
                    flex items-center gap-3 px-3 py-2.5 rounded-lg
                    transition-all duration-150
                    ${item.active 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Shadow Resume Widget - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 bg-white">
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-emerald-100 rounded-lg">
                <TrendingUp className="w-4 h-4 text-emerald-600" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold text-slate-700">Corp. Readiness</span>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-slate-500">Level 3/5 Achieved</span>
                <span className="text-xs font-semibold text-emerald-600">70%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <Motion.div 
                  className="h-full bg-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '70%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </div>
            
            <p className="text-xs text-slate-500">
              Complete Ethics module to unlock Decision Making
            </p>
          </div>
        </div>
      </Motion.aside>
    </>
  )
}
