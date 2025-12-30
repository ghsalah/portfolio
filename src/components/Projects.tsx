import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import TechBadge from './ui/TechBadge';
import ProjectCard from './ProjectCard';
import { fadeInUp, fadeInDown } from '../utils/animations';
import AnimationWrapper from './ui/AnimationWrapper';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack online store built with Next.js, Stripe payments, and Prisma ORM. Features real-time inventory, cart system, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "TaskFlow - Project Manager",
    description:
      "Beautiful Kanban board app with drag & drop, real-time collaboration using Socket.io, teams, and dark mode support.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "Zustand"],
    liveUrl: "https://taskflow.example",
    githubUrl: "https://github.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Next-gen content tool powered by OpenAI GPT-4. Generate blog posts, tweets, emails with templates and tone control.",
    tech: ["Next.js", "OpenAI", "Vercel", "Tailwind", "Shadcn"],
    liveUrl: "https://aiwriter.example",
    githubUrl: "https://github.com",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () =>
    setCurrentIndex((i) => (i + 1) % projects.length);
  const prevProject = () =>
    setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);

  const selectedProject = projects[currentIndex];

  return (
    <section className="min-h-screen lg:h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle 
          title="My Projects" 
          highlight="Projects"
          subtitle="Check out some of my recent work"
          className="mb-6 lg:mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* LEFT COLUMN — Carousel */}
          <AnimationWrapper variants={fadeInUp} className="flex flex-col justify-center">
            {/* Carousel */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[350px] xl:h-[400px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {projects.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isActive={idx === currentIndex}
                    onClick={() => setCurrentIndex(idx)}
                    index={idx}
                    currentIndex={currentIndex}
                  />
                ))}
              </div>

              {/* Controls */}
              <button
                onClick={prevProject}
                className="absolute left-0 sm:left-4 z-40 p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-0 sm:right-4 z-40 p-2 sm:p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-4 md:mt-6 lg:mt-6">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'w-2 bg-gray-600'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </AnimationWrapper>

          {/* RIGHT COLUMN — Project Details */}
          <AnimationWrapper variants={fadeInDown} className="flex flex-col justify-center items-start px-2 sm:px-4 md:px-6 lg:px-4">
            <div
              className={`w-full h-40 sm:h-48 md:h-56 lg:h-44 xl:h-52 rounded-2xl overflow-hidden mb-4 md:mb-6 lg:mb-6 bg-gradient-to-br ${selectedProject.color} relative shadow-2xl`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute bottom-4 md:bottom-6 lg:bottom-5 left-4 md:left-6 lg:left-5 text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-300 mb-4 md:mb-6 lg:mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 md:mb-6 lg:mb-6">
              {selectedProject.tech.map((t) => (
                <TechBadge key={t} tech={t} variant="large" />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              {selectedProject.liveUrl && (
                <Button
                  href={selectedProject.liveUrl}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  View Live Demo
                </Button>
              )}
              {selectedProject.githubUrl && (
                <Button
                  href={selectedProject.githubUrl}
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Source Code
                </Button>
              )}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
