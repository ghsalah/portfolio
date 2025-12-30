import { motion } from 'framer-motion';
import { fadeInLeft, scaleIn } from '../utils/animations';
import SocialLinks from './ui/SocialLinks';
import Button from './ui/Button';
import AnimationWrapper from './ui/AnimationWrapper';

export default function Hero() {
  return (
    <div className="relative min-h-screen lg:h-screen overflow-hidden bg-gradient-to-b from-yellow-900 to-black flex items-center">
      {/* Main Hero Content */}
      <div className="min-h-screen lg:h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 lg:pt-20 xl:pt-24 w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Text Section */}
          <AnimationWrapper variants={fadeInLeft} className="text-center lg:text-left space-y-2 md:space-y-3 lg:space-y-4">
            <h2 className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-black tracking-wider drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
              HI THERE!
            </h2>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight">
              I'M <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">SALAH</span>
            </h1>

            <div className="space-y-2 md:space-y-2.5 lg:space-y-3">
              <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-bold text-yellow-500 border-l-3 md:border-l-4 lg:border-l-4 border-yellow-400 pl-3 md:pl-4 lg:pl-4 inline-block shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                FULL STACK DEVELOPER / DATA SCIENTIST
              </p>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-bold bg-gradient-to-r from-black to-gray-900 text-yellow-400 inline-block px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full border border-yellow-400/30 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                BUILDING MODERN WEB & AI PROJECTS
              </p>
            </div>

            <p className="text-gray-400 md:text-gray-500 max-w-lg mx-auto lg:mx-0 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base leading-relaxed">
              I specialize in creating modern, responsive web applications using React, 
              Next.js, and Tailwind CSS. I also work on data science and machine learning 
              projects, building intelligent solutions that solve real-world problems. 
              Check out my projects below to see my work in action.
            </p>

            {/* Mobile CTA */}
            <div className="lg:hidden flex justify-center">
              <Button href="#contact" size="lg" variant="secondary">
                MORE ABOUT ME
              </Button>
            </div>
          </AnimationWrapper>

          {/* Right Image with Golden Arc */}
          <AnimationWrapper variants={scaleIn} delay={0.3} className="relative flex justify-center lg:justify-end">
            {/* Golden Decorative Arc */}
            <svg
              className="absolute -top-10 -right-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg pointer-events-none -z-10"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 250 50 A 200 200 0 0 1 450 250"
                fill="none"
                stroke="#FCD34D"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.8"
              />
              <circle cx="250" cy="50" r="14" fill="#FCD34D" />
              <circle cx="450" cy="250" r="14" fill="#FCD34D" />
            </svg>

            {/* Profile Image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full overflow-hidden border-6 md:border-8 lg:border-8 xl:border-10 border-white shadow-2xl ring-3 md:ring-4 lg:ring-4 xl:ring-6 ring-yellow-400/20">
              <img
                src="/assets/profile/profile_pic_1.jpg"
                alt="Salah"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Yellow Dots */}
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full opacity-90 animate-pulse"></div>
            <div className="absolute top-16 sm:top-20 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute bottom-24 sm:bottom-32 left-4 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full opacity-85"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 right-12 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full opacity-75"></div>
          </AnimationWrapper>
        </div>
      </div>

      {/* Right Vertical Social Icons (Desktop Only) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:flex fixed right-4 xl:right-8 top-1/2 -translate-y-1/2 z-40"
      >
        <SocialLinks orientation="vertical" showLabels={true} />
      </motion.div>
    </div>
  );
}
