import { Flame, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left - Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-heading font-bold">Approaches</span>
              <Flame className="text-earth-clay" size={24} strokeWidth={1.5} />
            </div>
            <p className="text-slate-400 text-lg">Democratizing the Dream</p>
          </div>

          {/* Right - Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:justify-end">
            <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">
              About
            </a>
            <a 
              href="https://t.me/approachescse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Send size={20} strokeWidth={1.5} />
              <span>Join on Telegram</span>
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© 2025 Approaches to CSE. Made with ❤️ for India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
