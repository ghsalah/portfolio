// components/CustomCursor.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MousePointer2, User, Code2, Palette, Sparkles, Globe, Zap, Camera,
  type LucideIcon
} from 'lucide-react';

type CursorVariant = "default" | "avatar" | "code" | "design" | "animation" | "api" | "performance" | "creative";

const cursorVariants: Record<CursorVariant, { Icon: LucideIcon; scale: number }> = {
  default: { Icon: MousePointer2, scale: 1 },
  avatar: { Icon: User, scale: 1.4 },
  code: { Icon: Code2, scale: 1.3 },
  design: { Icon: Palette, scale: 1.3 },
  animation: { Icon: Sparkles, scale: 1.4 },
  api: { Icon: Globe, scale: 1.2 },
  performance: { Icon: Zap, scale: 1.4 },
  creative: { Icon: Camera, scale: 1.3 },
};

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Global helpers so any component can change the cursor
  useEffect(() => {
    // @ts-ignore - Adding to window object for global access
    window.setCursor = (variant: CursorVariant) => {
      if (variant in cursorVariants) {
        setCursorVariant(variant);
      }
    };
    // @ts-ignore
    window.resetCursor = () => setCursorVariant("default");
    
    // Cleanup on unmount
    return () => {
      // @ts-ignore
      delete window.setCursor;
      // @ts-ignore
      delete window.resetCursor;
    };
  }, []);

  const variant = cursorVariants[cursorVariant];
  const IconComponent = variant.Icon;

  return (
    <>
      {/* Hide default cursor everywhere */}
      <style >{`
        *, *::after, *::before {
          cursor: none !important;
        }
        a, button, input, textarea, [role="button"], [tabindex]:not([tabindex="-1"]) {
          cursor: none !important;
        }
      `}</style>

      {/* Custom Cursor - Small (40px) & Always on Top */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        {/* Main circle */}
        <motion.div
          className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-2xl"
          animate={{ scale: variant.scale }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <motion.div
            key={cursorVariant}
            initial={{ rotate: -180, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-black"
          >
            <IconComponent className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Outer glow ring */}
        <motion.div
          className="absolute top-0 left-0 w-10 h-10 rounded-full border-4 border-yellow-300/40 -z-10"
          animate={{ scale: cursorVariant === "default" ? 1 : 1.6 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Subtle full-screen glow */}
      <div
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 204, 21, 0.25), transparent 80%)`,
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}