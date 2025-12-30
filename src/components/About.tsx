import { motion } from 'framer-motion';
import { 
  Code2, Palette, Camera, Sparkles, Zap, Globe
} from 'lucide-react';
import Card from './ui/Card';
import AnimationWrapper from './ui/AnimationWrapper';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations';

interface Skill {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const skills: Skill[] = [
  { 
    icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />, 
    title: "Full Stack Development", 
    desc: "React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL" 
  },
  { 
    icon: <Palette className="w-8 h-8 md:w-10 md:h-10" />, 
    title: "Frontend & UI Engineering", 
    desc: "Tailwind, Framer Motion, ShadCN UI, custom components" 
  },
  { 
    icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10" />, 
    title: "Modern Animations", 
    desc: "Smooth transitions, scroll effects & micro-interactions" 
  },
  { 
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />, 
    title: "API Architecture", 
    desc: "Clean API design, authentication, RBAC & backend logic" 
  },
  { 
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />, 
    title: "System Design", 
    desc: "Scalable architectures, debugging, optimization" 
  },
  { 
    icon: <Camera className="w-8 h-8 md:w-10 md:h-10" />, 
    title: "Creative Visuals", 
    desc: "Strong sense of layout, color, and digital aesthetics" 
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen lg:h-screen bg-black text-white relative flex items-center justify-center py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900" />
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #f0f 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #0ff 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, #ff0 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, #f0f 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-12 md:mt-16 lg:mt-0">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6 lg:gap-6 w-full items-center">
          {/* Avatar */}
          <AnimationWrapper variants={fadeInLeft} className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              <div className="relative p-2 bg-black rounded-full ring-2 ring-yellow-400/50">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full overflow-hidden border-4 border-black shadow-3xl">
                  <img
                    src="/assets/profile/profile_pic_1.jpg"
                    alt="Aboobacker Salah"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 md:-inset-6 border-2 border-yellow-400/30 rounded-full"
              />
            </div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-black mt-3 lg:mt-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-pink-500 bg-clip-text text-transparent text-center drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]"
            >
              ABOOBACKER SALAH
            </motion.h1>
            <p className="text-xs sm:text-xs md:text-sm lg:text-xs xl:text-xs text-gray-400 font-light tracking-wider text-center px-4">
              Full-Stack Developer • UI/UX Enthusiast • Creative Technologist
            </p>
          </AnimationWrapper>

          {/* Content */}
          <AnimationWrapper variants={fadeInRight} className="lg:col-span-8 space-y-3 md:space-y-3 lg:space-y-4">
            {/* Bio */}
            <Card className="p-4 md:p-5 lg:p-5">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-black mb-2 lg:mb-2.5">
                Crafting <span className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">Digital Experiences</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-sm lg:text-xs xl:text-sm text-gray-300 leading-relaxed">
                I'm <span className="text-yellow-400 font-bold">Aboobacker Salah</span> — 
                a passionate full-stack developer, UI/UX designer, and creative technologist.
                I build modern, fast, and visually rich web experiences using the latest technologies.
              </p>
            </Card>

            {/* Skills */}
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-bold mb-2.5 lg:mb-3 flex items-center gap-2">
                <Sparkles className="text-yellow-400 w-4 h-4 sm:w-4 sm:h-4 lg:w-4 lg:h-4 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]" />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">My Superpowers</span>
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 lg:gap-3"
              >
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                  >
                    <Card hover={true} className="p-3 md:p-4 group">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-2.5 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-[0_0_10px_rgba(250,204,21,0.2)] group-hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                        {skill.icon}
                      </div>
                      <h4 className="text-xs sm:text-sm md:text-sm font-bold mb-1 text-white">{skill.title}</h4>
                      <p className="text-xs sm:text-xs md:text-xs text-gray-400">{skill.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-60"
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
        />
      ))}
    </section>
  );
}
