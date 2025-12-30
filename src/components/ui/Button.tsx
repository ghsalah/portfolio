import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg',
    secondary: 'bg-black text-white hover:bg-gray-800 shadow-2xl',
    outline: 'border-2 border-gray-600 text-white hover:bg-gray-800',
  };

  const sizes = {
    sm: 'px-5 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm md:text-base',
    lg: 'px-10 py-4 text-base md:text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const content = (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={classes}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return content;
}

