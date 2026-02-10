import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CustomCursor from "./components/CustomCursor";

// Lazy load heavy sections
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToSection = (index: number) => {
    setCurrentSectionIndex(index);
    setIsMenuOpen(false);
  };

  const sections = [
    { id: "hero", component: <Hero goToSection={goToSection} /> },
    { id: "about", component: <About /> },
    {
      id: "experience",
      component: (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Experience />
        </Suspense>
      ),
    },
    {
      id: "projects",
      component: (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Projects />
        </Suspense>
      ),
    },
    {
      id: "contact",
      component: (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Contact />
        </Suspense>
      ),
    },
  ];

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
            className={`w-1.5 h-8 sm:w-2 sm:h-10 rounded-full transition-all duration-300 ${index === currentSectionIndex
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