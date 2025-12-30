import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
  animationDelay?: number;
}

export default function SectionTitle({
  title,
  highlight,
  subtitle,
  className = '',
  animationDelay = 0,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      viewport={{ once: true }}
      className={`text-center mb-6 md:mb-8 lg:mb-8 ${className}`}
    >
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-2 md:mb-2.5 lg:mb-3">
        {title.split(' ').map((word, i) => {
          const normalizedWord = word.toLowerCase().replace(/[^\w]/g, '');
          const normalizedHighlight = highlight?.toLowerCase().replace(/[^\w]/g, '') || '';
          const shouldHighlight = highlight && normalizedWord.includes(normalizedHighlight);
          
          return (
            <span key={i}>
              {shouldHighlight ? (
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                  {word}{' '}
                </span>
              ) : (
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]">
                  {word}{' '}
                </span>
              )}
            </span>
          );
        })}
      </h1>
      {subtitle && (
        <p className="text-zinc-400 text-xs sm:text-sm md:text-sm lg:text-xs xl:text-sm max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

