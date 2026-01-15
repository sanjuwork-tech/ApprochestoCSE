import { useState } from 'react';
import { Flame, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Preparation', 'The Bridge (Career)', 'Ethos', 'Community'];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-brand-blue">Approaches</span>
            <Flame className="text-earth-clay" size={24} strokeWidth={1.5} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="px-6 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm font-medium text-slate-600 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="w-full px-6 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
