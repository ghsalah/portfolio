// components/Navbar.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  currentSection: number;           // 0=hero, 1=about, 2=skills, 3=projects, 4=contact
  goToSection: (index: number) => void;
}

const navItems = [
  { name: '', icon: Home, index: 0 },
  { name: 'ABOUT', index: 1 },
  { name: 'SKILLS', index: 2 },
  { name: 'PROJECTS', index: 3 },
  { name: 'CONTACT', index: 4 },
];

export default function Navbar({ isMenuOpen, setIsMenuOpen, currentSection, goToSection }: NavbarProps) {
  return (
    <>
      {/* Fixed Top Bar */}
      <nav className="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div className="h-14 md:h-16 lg:h-16 xl:h-20 bg-black/80 backdrop-blur-xl border-b border-white/10 pointer-events-auto">
          <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden z-50 p-1 hover:bg-white/10 rounded transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-10 text-xs xl:text-sm font-medium">
              {navItems.map((item) => {
                const active = currentSection === item.index;

                return (
                  <button
                    key={item.index}
                    onClick={() => goToSection(item.index)}
                    className="flex items-center gap-2 relative group"
                  >
                    {/* Home Icon */}
                    {item.icon && (
                      <item.icon
                        className={`w-5 h-5 transition-colors ${
                          active ? 'text-yellow-400' : 'text-white/70 group-hover:text-yellow-400'
                        }`}
                      />
                    )}

                    {/* Text */}
                    <span
                      className={`transition-all ${
                        active
                          ? 'text-yellow-400 font-semibold'
                          : 'text-white group-hover:text-yellow-400'
                      }`}
                    >
                      {item.name || ''}
                    </span>

                    {/* Active Underline */}
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: active ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Desktop Hire Me */}
            <motion.button
              onClick={() => goToSection(4)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block px-5 xl:px-6 2xl:px-7 py-1.5 xl:py-2 2xl:py-2.5 bg-yellow-400 text-black rounded-full text-xs xl:text-sm font-bold hover:bg-yellow-300 transition shadow-lg"
            >
              HIRE ME
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 sm:gap-12 text-3xl sm:text-4xl font-bold lg:hidden"
          >
            {navItems.map((item) => {
              const active = currentSection === item.index;

              return (
                <motion.button
                  key={item.index}
                  onClick={() => {
                    goToSection(item.index);
                    setIsMenuOpen(false);
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.index * 0.1 }}
                  className={`flex items-center gap-5 transition-all ${
                    active ? 'text-yellow-400 scale-110' : 'text-white/80'
                  } hover:text-yellow-400`}
                >
                  {item.icon && <item.icon className="w-10 h-10" />}
                  <span>{item.name || 'HOME'}</span>
                </motion.button>
              );
            })}

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => {
                goToSection(4);
                setIsMenuOpen(false);
              }}
              className="mt-10 px-10 py-4 bg-yellow-400 text-black rounded-full text-xl font-bold hover:bg-yellow-300 transition shadow-2xl"
            >
              HIRE ME
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}