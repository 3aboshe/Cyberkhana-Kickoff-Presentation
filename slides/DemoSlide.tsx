import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';

export const DemoSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-black">
        {/* Matrix Rain effect simulated via CSS in index.html, here just pure black void with center focus */}
        
        <motion.div
            initial={{ scale: 20, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative z-10"
        >
            <button className="group relative px-12 py-6 bg-transparent overflow-hidden rounded-none border border-green-500 transition-all hover:bg-green-500/10">
                <div className="absolute inset-0 w-0 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                
                {/* Text Glitch Container */}
                <div className="relative">
                    <span className="relative text-4xl font-black text-white tracking-widest uppercase font-mono-code group-hover:text-green-400 transition-colors">
                        DEMONSTRATING
                    </span>
                    <span className="absolute top-0 left-0 text-4xl font-black text-red-500 tracking-widest uppercase font-mono-code opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        DEMONSTRATING
                    </span>
                    <span className="absolute top-0 left-0 text-4xl font-black text-blue-500 tracking-widest uppercase font-mono-code opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all">
                        DEMONSTRATING
                    </span>
                </div>
            </button>
        </motion.div>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 text-green-500/60 font-mono-code text-sm animate-pulse"
        >
            Connecting to CyberKhana Platform...
        </motion.p>

    </div>
  );
};