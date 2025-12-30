import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { forwardRef } from 'react';

interface InputProps {
  label?: string;
  icon?: LucideIcon;
  placeholder?: string;
  type?: string;
  className?: string;
  error?: string;
  animationDelay?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, placeholder, type = 'text', className = '', error, animationDelay = 0 }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: animationDelay }}
        viewport={{ once: true }}
        className="w-full"
      >
        {label && (
          <label className="block text-xs sm:text-sm mb-1.5 text-zinc-400 font-medium">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
          )}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`w-full ${Icon ? 'pl-9' : 'pl-3'} pr-3 py-2 md:py-2.5 rounded-lg bg-zinc-800/50 border ${
              error ? 'border-red-500/50' : 'border-zinc-700/50'
            } focus:outline-none focus:border-yellow-400/70 focus:ring-1 focus:ring-yellow-400/30 focus:bg-zinc-800/70 transition-all duration-200 text-white text-sm placeholder-zinc-600 ${className}`}
          />
        </div>
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      </motion.div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

