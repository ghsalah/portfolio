import { motion } from 'framer-motion';

interface TechBadgeProps {
  tech: string;
  variant?: 'small' | 'large';
  className?: string;
}

export default function TechBadge({
  tech,
  variant = 'small',
  className = '',
}: TechBadgeProps) {
  const baseStyles = 'rounded-full font-medium transition-all';
  
  const variants = {
    small: 'px-2 py-0.5 bg-gray-800 text-xs text-gray-300',
    large: 'px-4 md:px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600 text-sm md:text-base',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {tech}
    </motion.span>
  );
}

