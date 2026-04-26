import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Monitor, 
  Calculator, 
  Book, 
  Menu, 
  X, 
  Github, 
  Twitter, 
  Mail,
  Shield,
  FileText,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-card-bg border-b border-border h-16 shrink-0 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-accent">
          ⚡ Quiz<span className="text-text-main">Pro</span>
        </Link>

        {/* Desktop Links & Search */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center max-w-xl">
           <input 
              type="text" 
              placeholder="Search subjects, topics..." 
              className="search-pill w-full max-w-xs"
            />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4">
            {links.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : 'text-text-sub'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3 border-l border-border pl-6">
            <div className="w-8 h-8 bg-accent rounded-full text-white flex items-center justify-center font-bold text-xs">JD</div>
            <div className="hidden lg:block">
              <p className="text-[13px] font-bold text-text-main leading-tight">Learner</p>
              <p className="text-[11px] text-text-sub">Level 1</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-text-sub"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-16 left-0 w-full bg-card-bg border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-text-sub hover:text-accent hover:bg-accent-light rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="h-12 bg-card-bg border-t border-border flex items-center justify-center gap-6 text-[11px] text-text-sub shrink-0">
      <span>© {new Date().getFullYear()} QuizPro</span>
      <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
      <Link to="/terms" className="hover:text-accent">Terms & Conditions</Link>
      <Link to="/about" className="hover:text-accent">About Us</Link>
    </footer>
  );
};
