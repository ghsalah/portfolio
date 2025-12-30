import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Palette, 
  Smartphone, 
  Cloud, 
  Zap
} from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import { staggerContainer, staggerItem } from '../utils/animations';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Database className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express", "MongoDB", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Palette className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Design",
    skills: ["UI/UX", "Figma", "Adobe XD", "Responsive Design"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Mobile",
    skills: ["React Native", "PWA", "Mobile-First Design"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Cloud className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Cloud & DevOps",
    skills: ["AWS", "Vercel", "Docker", "CI/CD", "GitHub Actions"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Tools & Others",
    skills: ["Git", "VS Code", "Postman", "Jira", "Agile"],
    color: "from-yellow-500 to-yellow-400",
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen lg:h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title="Skills & Technologies"
          highlight="Skills"
          subtitle="Technologies I work with to build amazing products"
          className="mb-6 lg:mb-8"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-4"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
            >
              <Card hover={true} className="p-4 md:p-4 lg:p-4 h-full">
                <div className={`w-11 h-11 md:w-12 md:h-12 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-2.5 lg:mb-3 text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-base md:text-lg lg:text-base xl:text-lg font-bold mb-2 lg:mb-2.5 text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gray-800/60 rounded-lg text-xs md:text-xs lg:text-xs xl:text-xs text-gray-300 border border-gray-700/50 hover:border-gray-600 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
