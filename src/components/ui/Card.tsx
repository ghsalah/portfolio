import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animationDelay?: number;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  hover = true,
  animationDelay = 0,
  onClick,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      whileHover={hover ? { scale: 1.05, y: -10 } : {}}
      onClick={onClick}
      className={`backdrop-blur-xl bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

