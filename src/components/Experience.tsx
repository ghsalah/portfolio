import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { staggerContainer, staggerItem } from "../utils/animations";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  desc: string[];
  type: "work" | "education";
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "React / MERN Stack Developer",
    company: "BAIRUHATECH LLP",
    period: "2025 - Present",
    desc: [
      "Developed and maintained full-stack applications using MongoDB, Express.js, React, and Node.js.",
      "Contributed to enterprise-level Hospital Management System (HMS) and ERP applications.",
      "Built and integrated RESTful APIs using Express.js and MongoDB.",
      "Implemented Redux Toolkit with TypeScript for scalable state management.",
      "Applied modern JavaScript (ES6+) best practices for clean and maintainable code."
    ],
    type: "work"
  },
  {
    id: 2,
    role: "PHP Developer",
    company: "JP Cyber Labs Services",
    period: "2020 - 2022",
    desc: [
      "Developed and maintained dynamic websites using PHP and MySQL.",
      "Built custom web applications and CMS solutions based on client requirements.",
      "Worked on backend logic, database design, and feature updates."
    ],
    type: "work"
  },
  {
    id: 3,
    role: "Master of Computer Applications (MCA)",
    company: "AWH Engineering College, Kuttikattoor",
    period: "2023 - 2025",
    desc: [
      "Focused on full-stack development, modern web technologies, and software engineering.",
      "Strengthened skills in MERN stack, REST APIs, and scalable application development."
    ],
    type: "education"
  },
  {
    id: 4,
    role: "B.Sc. in Computer Science",
    company: "SAFI Institute of Advanced Study, Vazhayur",
    period: "2017 - 2020",
    desc: [
      "Built a strong foundation in programming, databases, and computer science fundamentals.",
      "Studied core subjects including DBMS, Data Structures, and Software Engineering."
    ],
    type: "education"
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen lg:h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white pt-20 md:pt-24 lg:pt-20 pb-8 px-4 sm:px-6 md:px-8 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
        <SectionTitle
          title="Work Experience"
          highlight="Experience"
          subtitle="A snapshot of my work and education"
          className="mb-6 lg:mb-8 text-center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={staggerItem} className="h-full">
              <Card className="p-4 transition-transform duration-300 h-full border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm">
                <div className="flex flex-col mb-2 gap-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-yellow-400/10 rounded-md text-yellow-400 shrink-0">
                        {exp.type === "work" ? (
                          <Briefcase size={16} />
                        ) : (
                          <GraduationCap size={16} />
                        )}
                      </div>
                      <h3 className="text-base font-bold leading-tight">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-500 text-xs bg-zinc-800/80 px-2 py-0.5 rounded-full whitespace-nowrap">
                      <Calendar size={11} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-yellow-500 text-sm font-medium ml-7">
                    {exp.company}
                  </p>
                </div>

                <ul className="space-y-1 text-gray-400 text-xs list-disc list-inside ml-1 marker:text-yellow-500/70">
                  {exp.desc.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
