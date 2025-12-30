import { motion } from 'framer-motion';
import { socialLinks } from '../../utils/constants';

interface SocialLinksProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function SocialLinks({
  orientation = 'vertical',
  className = '',
  showLabels = false,
  size = 'md',
}: SocialLinksProps) {
  const containerClass = orientation === 'vertical' 
    ? 'flex flex-col gap-4 md:gap-6 lg:gap-8' 
    : 'flex flex-row gap-4 md:gap-6';

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6 md:w-8 md:h-8',
    lg: 'w-8 h-8 md:w-10 md:h-10',
  };

  const buttonSizes = {
    sm: 'w-10 h-10 md:w-12 md:h-12',
    md: 'w-14 h-14 md:w-16 md:h-16',
    lg: 'w-16 h-16 md:w-20 md:h-20',
  };

  return (
    <div className={`${containerClass} ${className}`}>
      {socialLinks.map((link, i) => {
        const IconComponent = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: orientation === 'vertical' ? 20 : 0, x: orientation === 'horizontal' ? -20 : 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: i * 0.1 + 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
            title={link.label}
            aria-label={link.label}
          >
            <div className={`${buttonSizes[size]} bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400 shadow-lg md:shadow-2xl`}>
              <IconComponent className={`${iconSizes[size]} text-yellow-400 group-hover:text-black transition`} />
            </div>
          {showLabels && (
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-yellow-400 text-xs md:text-sm font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
              {link.label}
            </span>
          )}
          </motion.a>
        );
      })}
    </div>
  );
}

