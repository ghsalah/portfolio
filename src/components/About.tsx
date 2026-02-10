import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Camera, Sparkles, Zap, Globe } from "lucide-react";
import AnimationWrapper from "./ui/AnimationWrapper";
import { staggerContainer, staggerItem } from "../utils/animations";

interface Skill {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const skills: Skill[] = [
  {
    icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Full Stack Development",
    desc: "React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL",
  },
  {
    icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Frontend & UI Engineering",
    desc: "Tailwind, Framer Motion, ShadCN UI, custom components",
  },
  {
    icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Modern Animations",
    desc: "Smooth transitions, scroll effects & micro-interactions",
  },
  {
    icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "API Architecture",
    desc: "Clean API design, authentication, RBAC & backend logic",
  },
  {
    icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "System Design",
    desc: "Scalable architectures, debugging, optimization",
  },
  {
    icon: <Camera className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Creative Visuals",
    desc: "Strong sense of layout, color, and digital aesthetics",
  },
];

export default function About() {
  const responsiveFadeInLeft = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const responsiveFadeInRight = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-black
        text-white relative
        flex items-center justify-center
        pt-28 sm:pt-32 lg:pt-24
        pb-16
        px-4 sm:px-6 md:px-12
        overflow-hidden
      "
    >
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-yellow-400/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-zinc-800/10 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Responsive Grid: 1 col on mobile, 12 on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center lg:items-start">

          {/* Avatar Area - Centered on mobile, Left on large */}
          <AnimationWrapper
            variants={responsiveFadeInLeft}
            className="lg:col-span-4 flex flex-col items-center text-center lg:items-center lg:text-center w-full"
          >
            <div className="relative group mb-6 lg:mb-8">
              <div className="relative p-1.5 bg-zinc-900 rounded-full ring-1 ring-white/5 shadow-xl">
                <div
                  className="
                    w-36 h-36
                    sm:w-44 sm:h-44
                    lg:w-40 lg:h-40
                    xl:w-48 xl:h-48
                    rounded-full overflow-hidden
                    border-4 border-zinc-900
                  "
                >
                  <img
                    src="/assets/profile/profile_pic_1.jpg"
                    alt="Aboobacker Salah"
                    className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-bold text-white uppercase tracking-tight mb-2">
              ABOOBACKER SALAH
            </h1>

            <div className="h-0.5 w-8 bg-yellow-400/40 mb-3 rounded-full" />

            <p className="text-xs sm:text-sm text-gray-400 font-medium tracking-widest uppercase">
              Full-Stack Developer • UI/UX Enthusiast
            </p>
          </AnimationWrapper>

          {/* Content Area - Expanded Bio */}
          <AnimationWrapper
            variants={responsiveFadeInRight}
            className="lg:col-span-8 space-y-8 md:space-y-10 w-full"
          >
            <div className="glass-premium p-8 sm:p-10 rounded-2xl relative overflow-hidden">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white leading-tight">
                My <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">Journey</span> & Philosophy
              </h2>

              <div className="text-base sm:text-lg text-gray-300 leading-relaxed font-light space-y-4">
                <p>
                  I am a results-driven <span className="text-white font-medium">Full-Stack Developer</span> with a deep-seated passion for creating high-performance digital solutions. My journey in technology is driven by a desire to bridge the gap between complex technical architectures and intuitive, human-centered design.
                </p>
                <p>
                  With several years of experience in the modern JavaScript ecosystem, I specialize in building scalable applications using <span className="text-white font-medium">React, Node.js, and TypeScript</span>. I believe that true innovation happens when robust backend logic meets seamless, visually stunning user interfaces.
                </p>
                <p>
                  Beyond just writing code, I am an enthusiast for <span className="text-yellow-400 font-medium">UI/UX engineering</span>. I meticulously craft every interaction and animation to ensure that the end-user feels a sense of ease and delight. Whether it's architecting a complex API or fine-tuning a micro-interaction, my goal is always to deliver excellence.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="w-full overflow-hidden">
              <div className="flex items-center justify-between mb-6 px-2">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
                  <Sparkles className="text-yellow-400 w-6 h-6" />
                  <span className="text-white">Expertise & <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">Toolkit</span></span>
                </h3>
              </div>

              <div className="relative">
                <div className="overflow-x-auto pb-6 scrollbar-custom mask-horizontal -mx-4 px-4 sm:mx-0 sm:px-0">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-4 sm:gap-5 min-w-max py-2"
                  >
                    {skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        variants={staggerItem}
                        className="w-72 sm:w-80"
                      >
                        <div className="glass-premium p-6 rounded-xl border-zinc-800/20 hover:border-yellow-400/20 transition-all duration-500 h-full">
                          <div className="flex items-start gap-4">
                            <div className="w-11 h-11 bg-zinc-800/30 rounded-lg flex items-center justify-center text-yellow-400 flex-shrink-0">
                              {skill.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-base font-bold mb-1 text-white">{skill.title}</h4>
                              <p className="text-xs text-gray-400 leading-relaxed font-light">{skill.desc}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Scroll Hint */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-4 flex items-center gap-3 text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em] px-2"
                >
                  <div className="flex items-center gap-1.5 order-first">
                    <div className="w-8 h-[1px] bg-yellow-400/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/30" />
                  </div>
                  <span>Scroll to explore</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-auto sm:ml-0"
                  >
                    →
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
