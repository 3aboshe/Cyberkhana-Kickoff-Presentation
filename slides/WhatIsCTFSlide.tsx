import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { Flag, Crosshair, Code } from 'lucide-react';
import { SlideProps } from '../types';

export const WhatIsCTFSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <div className="text-center mb-12">
        <GlitchText text="WHAT IS" size="xl" color="white" />
        <GlitchText text="CTF?" size="2xl" color="red" className="ml-3" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <motion.div 
          className="flex-1 text-center md:text-right"
          initial={{ opacity: 0, x: 50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{ 
              opacity: { duration: 0.5 },
              x: { duration: 0.5 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          dir="rtl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Capture The Flag</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            هي مسابقات أمنية تهدف لاختبار وتطوير المهارات في مجال الاختراق الأخلاقي والأمن السيبراني.
          </p>
          <p className="text-gray-400 leading-relaxed">
            يقوم المشاركون بحل تحديات برمجية وأمنية للعثور على نص مخفي يسمى "Flag" (العلم) لتأكيد نجاحهم في اختراق النظام أو فك تشفيره.
          </p>
          
          <div className="mt-8 inline-block bg-black border border-green-500 p-4 font-mono-code text-green-500 text-sm rounded" dir="ltr">
            Khana&#123;w3lc0m3_t0_cyb3rkh4n4&#125;
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{ 
              opacity: { duration: 0.5, delay: 0.3 },
              x: { duration: 0.5, delay: 0.3 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
          }}
        >
           <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex flex-col items-center gap-4 hover:border-red-500 transition-colors">
              <Flag size={40} className="text-red-500" />
              <span className="text-white font-bold">Find Flag</span>
           </div>
           <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex flex-col items-center gap-4 hover:border-blue-500 transition-colors">
              <Code size={40} className="text-blue-500" />
              <span className="text-white font-bold">Analyze Code</span>
           </div>
           <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex flex-col items-center gap-4 hover:border-green-500 transition-colors col-span-2">
              <Crosshair size={40} className="text-green-500" />
              <span className="text-white font-bold">Exploit Vulnerability</span>
           </div>
        </motion.div>
      </div>
    </div>
  );
};