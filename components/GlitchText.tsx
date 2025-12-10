import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  color?: 'red' | 'blue' | 'green' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'giant';
  className?: string;
  as?: React.ElementType;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  color = 'white', 
  size = 'md', 
  className = '',
  as: Component = 'h2'
}) => {
  const colors = {
    red: 'text-red-500',
    blue: 'text-cyan-500',
    green: 'text-green-500',
    white: 'text-white'
  };

  const sizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
    '2xl': 'text-7xl',
    'giant': 'text-8xl md:text-[10rem]'
  };

  return (
    <div className={`relative inline-block group ${className}`}>
      <motion.span
        className={`relative z-10 block ${colors[color]} ${sizes[size]} font-black tracking-tighter graffiti-text uppercase`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
      <motion.span
        className={`absolute top-0 left-0 -z-10 block ${colors[color]} ${sizes[size]} font-black tracking-tighter opacity-50 graffiti-text uppercase blur-[1px]`}
        animate={{ 
          x: [-2, 2, -1, 0],
          y: [1, -1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className={`absolute top-0 left-0 -z-10 block ${colors[color === 'red' ? 'blue' : 'red']} ${sizes[size]} font-black tracking-tighter opacity-30 graffiti-text uppercase mix-blend-screen`}
        animate={{ 
          x: [2, -2, 0],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          repeatType: "reverse"
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default GlitchText;