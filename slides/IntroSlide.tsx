import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { TerminalBlock } from '../components/TerminalBlock';
import { SlideProps } from '../types';

export const IntroSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
      
      {/* Logos */}
      <div className="absolute top-8 w-full flex justify-between px-8 md:px-16 z-20">
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
                opacity: { duration: 0.5, delay: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            src="/images/unilogo.png"
            alt="University of Mosul" 
            className="w-20 md:w-32 h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: [0, -10, 0] }}
             transition={{ 
                opacity: { duration: 0.5, delay: 0.7 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
             }}
             className="w-20 md:w-32 h-20 md:h-32 bg-purple-900/50 rounded-full flex items-center justify-center border-2 border-purple-500 shadow-[0_0_20px_purple] overflow-hidden"
          >
             {/* Placeholder for College Logo since we don't have the exact URL, user can replace src */}
             <img src="/images/collegelogo.jpeg" alt="College Logo" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src='https://via.placeholder.com/150/4B0082/FFFFFF?text=College'} />
          </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-20 left-10 opacity-30 rotate-12">
        <div className="border-4 border-red-600 w-32 h-32 blur-sm" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 -rotate-12">
        <div className="border-4 border-cyan-600 w-40 h-40 rounded-full blur-sm" />
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-center z-10"
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-max">
            <TerminalBlock className="text-center opacity-60" />
        </div>

        <div className="relative mb-4">
             <motion.h1 
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1 }}
                className="font-black text-7xl md:text-9xl text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]" 
                style={{ fontFamily: "'Cairo', sans-serif" }}
             >
                <span className="text-cyan-500">سايبر</span> <span className="text-red-600">خانة</span>
             </motion.h1>
             <GlitchText text="CYBER KHANA" size="lg" color="white" className="block mt-2 opacity-50 tracking-[0.5em]" />
        </div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 relative"
        >
            <div className="absolute inset-0 bg-green-500 blur-[40px] opacity-10"></div>
            <h3 className="text-2xl md:text-4xl text-white font-bold tracking-wide" dir="rtl">
                كن أنت <span className="text-green-400 font-mono-code bg-green-900/20 px-2 rounded">الرائد القادم</span> في عالم السايبر
            </h3>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-32 flex flex-col items-center gap-2"
      >
        <div className="text-sm font-mono-code text-gray-400">PRESS SPACE TO INITIATE</div>
        <div className="w-[1px] h-12 bg-gradient-to-b from-green-500 to-transparent"></div>
      </motion.div>
    </div>
  );
};