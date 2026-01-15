import { motion as Motion } from 'framer-motion'
import { Send } from 'lucide-react'
import DiyaIcon from './DiyaIcon'

const quickLinks = [
  { name: 'Preparation', href: '#preparation' },
  { name: 'The Bridge (Career)', href: '#career' },
  { name: 'Ethos', href: '#ethos' },
  { name: 'Privacy', href: '#privacy' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer 
      className="bg-deep-navy text-white" 
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2">
              <DiyaIcon className="w-7 h-7 text-ethos-gold" />
              <span className="font-playfair font-bold text-2xl text-white">
                Approaches to CSE
              </span>
            </div>
            <p className="mt-3 font-inter text-sm text-slate-400">
              Democratizing the Dream.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-inter font-semibold text-base text-white mb-6">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-inter text-sm text-slate-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="font-inter font-semibold text-base text-white mb-4">
              Stay Updated
            </h3>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
              />
              <Motion.button
                type="submit"
                className="w-full px-4 py-2 bg-primary-blue text-white font-inter font-medium text-sm rounded-lg transition-colors duration-300 hover:bg-blue-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </Motion.button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="font-inter text-xs text-slate-500 text-center">
            © 2025 Approaches to CSE. Made with ❤️ for India.
          </p>
        </div>
      </div>
    </footer>
  )
}
