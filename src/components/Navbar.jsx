import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import DiyaIcon from './DiyaIcon'
import { motion as Motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Preparation', href: '#preparation' },
    { name: 'The Bridge (Career)', href: '#career' },
    { name: 'Ethos', href: '#ethos' },
    { name: 'Community', href: '#community' },
  ]

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <nav className="sticky top-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-slate-100/50">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <a 
            href="#" 
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="Approaches to CSE Home"
          >
            <DiyaIcon className="w-6 h-6 text-diya-base" />
            <span className="font-playfair font-bold text-xl text-text-dark tracking-wide">
              Approaches to CSE
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-medium hover:text-primary-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-1"
              >
                {link.name}
              </a>
            ))}
            <button
              className="px-5 py-2 border border-primary-blue text-primary-blue rounded-full text-sm font-medium
                         transition-all duration-300 hover:bg-blue-50
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 text-slate-800 hover:text-primary-blue rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden fixed inset-0 z-50"
            aria-hidden={!isOpen}
          >
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <Motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white/90 backdrop-blur-md border-l border-slate-100/50 shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100/50">
                <div className="flex items-center gap-2">
                  <DiyaIcon className="w-6 h-6 text-diya-base" />
                  <span className="font-playfair font-bold text-lg text-text-dark">
                    Approaches to CSE
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-slate-800 hover:text-primary-blue 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>

              <div className="px-6 py-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-3 px-4 rounded-xl text-text-medium hover:text-primary-blue hover:bg-blue-50 transition-colors
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-4">
                  <button
                    className="w-full px-5 py-3 rounded-full border border-primary-blue text-primary-blue font-medium
                               transition-all duration-300 hover:bg-blue-50
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Login
                  </button>
                </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}
