import { Send } from 'lucide-react'
import DiyaIcon from './DiyaIcon'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2">
              <DiyaIcon className="w-7 h-7 text-brand-clay" />
              <span className="font-playfair font-bold text-lg">
                Approaches to CSE
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400 font-inter">
              Democratizing the Dream
            </p>
          </div>

          <div className="md:text-center">
            <div className="flex md:justify-center gap-6 text-sm">
              <a
                href="#privacy"
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all
                         hover:translate-y-[-1px]"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm">Telegram</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-slate-500">
            © 2025 Approaches to CSE. Made with ❤️ for India.
          </p>
        </div>
      </div>
    </footer>
  )
}
