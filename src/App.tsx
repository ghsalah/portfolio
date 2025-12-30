// App.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

const sections = [
  { id: "hero", component: <Hero /> },
  { id: "about", component: <About /> },
  { id: "skills", component: <Skills /> },
  { id: "projects", component: <Projects /> },
  { id: "contact", component: <Contact /> },
];

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToSection = (index: number) => {
    setCurrentSectionIndex(index);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* GLOBAL CUSTOM CURSOR — Works on every section */}
      <CustomCursor />

      {/* Fixed Navbar */}
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        currentSection={currentSectionIndex}
        goToSection={goToSection}
      />

      {/* Full-screen Section Switcher */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSectionIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full min-h-screen"
        >
          {sections[currentSectionIndex].component}
        </motion.div>
      </AnimatePresence>

      {/* Section Dots Indicator */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-2 sm:gap-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`w-1.5 h-8 sm:w-2 sm:h-10 rounded-full transition-all duration-300 ${
              index === currentSectionIndex
                ? "bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50"
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;