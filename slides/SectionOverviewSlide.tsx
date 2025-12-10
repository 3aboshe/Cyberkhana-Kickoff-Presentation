import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { SlideProps } from '../types';

interface SectionOverviewSlideProps extends SlideProps {
  team: 'red' | 'blue';
  title: string;
  items: { title: string; desc: string }[];
}

export const SectionOverviewSlide: React.FC<SectionOverviewSlideProps> = ({ team, title, items }) => {
  const color = team === 'red' ? 'red' : 'blue';
  
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="text-center mb-16">
        <GlitchText text="CTF" size="xl" color="white" />
        <GlitchText text={team.toUpperCase()} size="2xl" color={color} className="ml-3" />
        <h2 className="text-4xl font-bold text-white mt-4" dir="rtl">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{ 
                    opacity: { duration: 0.5, delay: i * 0.1 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
                }}
                className={`bg-[#0a0a0a] border border-gray-800 p-6 rounded-xl hover:border-${team === 'red' ? 'red-500' : 'cyan-500'} group transition-all`}
                dir="rtl"
            >
                <div className="flex items-center gap-4 mb-2">
                    <span className={`text-4xl font-black ${team === 'red' ? 'text-red-900' : 'text-blue-900'} group-hover:text-white transition-colors`}>
                        0{i + 1}
                    </span>
                    <h3 className={`text-2xl font-bold text-gray-200 group-hover:${team === 'red' ? 'text-red-400' : 'text-cyan-400'} transition-colors`}>
                        {item.title}
                    </h3>
                </div>
                <p className="text-gray-500 group-hover:text-gray-300 transition-colors pr-12">
                    {item.desc}
                </p>
            </motion.div>
        ))}
      </div>
    </div>
  );
};