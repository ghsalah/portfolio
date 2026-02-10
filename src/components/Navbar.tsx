import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import resumeFile from '../assets/Aboobacker_salah_Resume.pdf';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  currentSection: number;           // 0=hero, 1=about, 2=skills, 3=projects, 4=contact
  goToSection: (index: number) => void;
}

const navItems = [
  { name: 'HOME', index: 0 },
  { name: 'ABOUT', index: 1 },
  { name: 'EXPERIENCE', index: 2 },
  { name: 'PROJECTS', index: 3 },
  { name: 'CONTACT', index: 4 },
];

const Navbar = memo(({ isMenuOpen, setIsMenuOpen, currentSection, goToSection }: NavbarProps) => {
  return (
    <>
      {/* Navigation Header */}
      <nav className="absolute inset-x-0 top-6 z-50 pointer-events-none flex justify-end lg:justify-center px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full pointer-events-auto shadow-2xl transition-all hover:border-white/20">

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
            {navItems.map((item) => {
              const active = currentSection === item.index;

              return (
                <button
                  key={item.index}
                  onClick={() => goToSection(item.index)}
                  className="relative px-2 py-1 group overflow-hidden"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${active ? 'text-yellow-400' : 'text-white/60 group-hover:text-white'
                      }`}
                  >
                    {item.name}
                  </span>

                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-yellow-400/10 rounded-lg -z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transition-transform duration-300 transform origin-left ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                </button>
              );
            })}
          </div>

          {/* Desktop Resume Button (Split) */}
          <div className="hidden lg:block w-px h-4 bg-white/20 mx-2" />

          <motion.a
            href={resumeFile}
            download="Aboobacker_Salah_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 px-4 py-1.5 bg-yellow-400 text-black rounded-full text-[10px] font-black tracking-tighter hover:bg-yellow-300 transition shadow-lg"
          >
            <Download className="w-3.5 h-3.5" />
            RESUME
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-full transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[70] flex flex-col items-center justify-center lg:hidden"
          >
            {/* Close Button Inside Menu */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navItems.map((item) => {
                const active = currentSection === item.index;

                return (
                  <motion.button
                    key={item.index}
                    onClick={() => {
                      goToSection(item.index);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.index * 0.1 }}
                    className={`group relative text-3xl font-black tracking-tighter transition-all ${active ? 'text-yellow-400' : 'text-white/40'
                      } hover:text-white`}
                  >
                    <span>{item.name}</span>
                    {active && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-yellow-400"
                      />
                    )}
                  </motion.button>
                );
              })}

              <motion.a
                href={resumeFile}
                download="Aboobacker_Salah_Resume.pdf"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 px-8 py-3 bg-yellow-400 text-black rounded-full text-lg font-black tracking-tighter hover:bg-yellow-300 transition shadow-2xl flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                RESUME
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;