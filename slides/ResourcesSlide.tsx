import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { SlideProps } from '../types';

export const ResourcesSlide: React.FC<SlideProps> = () => {
  const resources = [
    "HACK THE BOX",
    "TRY HACK ME",
    "INE",
    "OFFSEC"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 flex flex-col items-center">
      <div className="text-center mb-16">
        <GlitchText text="SELF" size="xl" color="white" />
        <GlitchText text="LEARNING" size="xl" color="green" className="ml-3" />
        <p className="mt-4 text-xl text-gray-400 font-mono-code">النادي هو مجرد البداية...</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {resources.map((res, i) => (
            <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0a0a0a] border border-gray-800 p-8 flex items-center justify-center hover:bg-green-900/10 hover:border-green-500 transition-all cursor-crosshair group relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <h3 className="text-2xl font-black text-gray-500 group-hover:text-white transition-colors tracking-widest text-center">
                    {res}
                </h3>
            </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 bg-gray-900/50 p-6 rounded-lg border-l-4 border-yellow-500"
      >
        <p className="text-lg text-gray-300 text-center" dir="rtl">
            عليك بالممارسة المستمرة وحل التحديات لتصبح خبير.
        </p>
      </motion.div>
    </div>
  );
};