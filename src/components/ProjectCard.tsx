import { memo } from 'react';
import { motion } from 'framer-motion';
import TechBadge from './ui/TechBadge';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
  index: number;
  currentIndex: number;
}

const ProjectCard = memo(({
  project,
  isActive,
  onClick,
  index,
  currentIndex,
}: ProjectCardProps) => {
  const getTransform = () => {
    if (index === currentIndex) return 'translateX(0) scale(1)';
    if (index > currentIndex) return 'translateX(200px) scale(0.75)';
    return 'translateX(-200px) scale(0.75)';
  };

  return (
    <motion.div
      className={`absolute transition-all duration-300 ease-in-out cursor-pointer ${isActive ? 'z-30 opacity-100' : 'z-10 opacity-40'
        }`}
      style={{ transform: getTransform() }}
      onClick={onClick}
      whileHover={isActive ? { scale: 1.05 } : {}}
    >
      <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-xl overflow-hidden shadow-xl border border-gray-700 bg-gray-900">
        <div className={`h-28 sm:h-32 bg-gradient-to-br ${project.color} relative`}>
          <div className="absolute inset-0 bg-black/20" />
          <h3 className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-lg sm:text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        <div className="p-3 sm:p-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {project.tech.slice(0, 3).map((t) => (
              <TechBadge key={t} tech={t} variant="small" />
            ))}
            {project.tech.length > 3 && (
              <TechBadge tech={`+${project.tech.length - 3}`} variant="small" />
            )}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

export default ProjectCard;

