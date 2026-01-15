import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import DiyaIcon from './DiyaIcon'

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
    <nav className="sticky top-0 z-50 h-16 bg-white/90 backdrop-blur-md border-b border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <a href="#" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
            <DiyaIcon className="w-7 h-7 text-brand-clay" />
            <span className="font-playfair font-bold text-xl text-brand-blue">
              Approaches to CSE
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 transition-all relative group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1 right-1 h-0.5 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
            <button
              className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-medium
                       transition-all hover:shadow-[inset_0_0_20px_rgba(74,144,226,0.2)]
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
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

      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-50 transition ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white/90 backdrop-blur-md border-l border-brand-blue/10 shadow-xl
                      transform transition-transform duration-300 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                      }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-brand-blue/10">
            <div className="flex items-center gap-2">
              <DiyaIcon className="w-6 h-6 text-brand-clay" />
              <span className="font-playfair font-bold text-lg text-brand-blue">
                Approaches to CSE
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-3 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4">
              <button
                className="w-full px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-medium
                           hover:shadow-[inset_0_0_20px_rgba(74,144,226,0.2)] transition-all
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
