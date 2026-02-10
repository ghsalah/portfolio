import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { fadeInLeft, scaleIn } from '../utils/animations';
import SocialLinks from './ui/SocialLinks';
import Button from './ui/Button';
import AnimationWrapper from './ui/AnimationWrapper';

const roles = [
  "FULL STACK DEVELOPER",
  "DATA SCIENTIST",
  "AI ENTHUSIAST",
  "UI/UX DESIGNER"
];

function TypingRoles() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <span className="text-yellow-500 font-bold border-r-2 border-yellow-400 pr-1 animate-pulse min-h-[1.5em] inline-block">
      {displayText}
    </span>
  );
}

interface HeroProps {
  goToSection: (index: number) => void;
}

export default function Hero({ goToSection }: HeroProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const moveX = useTransform(springX, [-500, 500], [-30, 30]);
  const moveY = useTransform(springY, [-500, 500], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen lg:h-screen overflow-hidden bg-[#050505] flex items-center selection:bg-yellow-400 selection:text-black"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -70, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="min-h-screen lg:h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 lg:pt-20 xl:pt-24 w-full relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left Text Section */}
          <AnimationWrapper variants={fadeInLeft} className="text-center lg:text-left space-y-6">
            <motion.div
              style={{ x: moveX, y: moveY }}
              className="inline-block px-4 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 backdrop-blur-sm shadow-[0_0_20px_rgba(250,204,21,0.1)]"
            >
              <h2 className="text-yellow-400 text-xs sm:text-sm font-black tracking-[0.2em] uppercase">
                WELCOME TO MY PORTFOLIO
              </h2>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tighter">
              I'M <br />
              <span className="relative inline-block text-white group cursor-default">
                SALAH
                <span className="absolute inset-0 text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1 pointer-events-none">SALAH</span>
                <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2 pointer-events-none">SALAH</span>
              </span>
            </h1>

            <div className="flex flex-col gap-4">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">
                <TypingRoles />
              </div>
              <p className="text-white/50 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed font-medium">
                I build premium digital experiences where <span className="text-yellow-400/80">creativity</span> meets <span className="text-yellow-400/80">technical precision</span>.
                Focused on Next.js mastery and AI integration.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-8">
              <Button
                onClick={() => goToSection(3)}
                size="lg"
                variant="outline"
                className="px-8 border-white/20 text-white/80 hover:border-yellow-400 hover:text-yellow-400 backdrop-blur-sm"
              >
                VIEW PROJECTS
              </Button>
              <Button
                onClick={() => goToSection(4)}
                size="lg"
                variant="primary"
                className="px-10 bg-yellow-400 text-black hover:bg-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.2)]"
              >
                LET'S TALK
              </Button>
            </div>
          </AnimationWrapper>

          {/* Right Image Container */}
          <AnimationWrapper variants={scaleIn} delay={0.3} className="relative flex justify-center lg:justify-end">
            <motion.div
              style={{ x: moveX, y: moveY, rotateX: useTransform(moveY, [-30, 30], [5, -5]), rotateY: useTransform(moveX, [-30, 30], [-5, 5]) }}
              className="relative group"
            >
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-yellow-400/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border border-white/5 rounded-full"
              />

              {/* Profile Image Wrap */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-[400px] xl:h-[400px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img
                  src="/assets/profile/profile_pic_1.jpg"
                  alt="Salah"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-yellow-400/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>

              {/* Floating Tech Badges (Abstract Decor) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center -rotate-12 shadow-2xl"
              >
                <span className="text-black font-black text-2xl">JS</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-lg flex items-center justify-center rotate-12 shadow-2xl"
              >
                <span className="text-black font-black text-lg">AI</span>
              </motion.div>
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>



      {/* Right Vertical Social Icons */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40"
      >
        <SocialLinks orientation="vertical" showLabels={true} />
      </motion.div>
    </div>
  );
}

