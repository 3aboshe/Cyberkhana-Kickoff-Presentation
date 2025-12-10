import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { Laptop, Terminal, Globe, Code2 } from 'lucide-react';
import { SlideProps } from '../types';

export const RequirementsSlide: React.FC<SlideProps> = () => {
  const reqs = [
    { icon: <Terminal />, title: "أساسيات لنكس", desc: "Linux Basics" },
    { icon: <Globe />, title: "أساسيات الشبكات", desc: "Network Fundamentals" },
    { icon: <Code2 />, title: "أساسيات البرمجة", desc: "Programming Basics" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex flex-col items-center">
      <div className="text-center mb-12">
        <GlitchText text="SYSTEM" size="xl" color="white" />
        <GlitchText text="REQUIREMENTS" size="xl" color="red" className="ml-3" />
      </div>

      <motion.div 
        className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-12 flex items-center gap-4 w-full max-w-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="bg-red-500 p-3 rounded-full text-black animate-pulse">
            <Laptop size={32} />
        </div>
        <div className="text-right flex-1">
            <h3 className="text-xl font-bold text-white">هام جداً</h3>
            <p className="text-gray-300">جلب لابتوبك الخاص معك</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {reqs.map((item, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-green-500 group transition-all duration-300 hover:-translate-y-2"
            >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-green-500 group-hover:bg-green-500/20 transition-colors">
                    {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="font-mono-code text-xs text-gray-500 uppercase">{item.desc}</p>
            </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center max-w-2xl bg-gradient-to-r from-transparent via-blue-900/20 to-transparent p-6"
      >
         <h3 className="text-xl text-blue-300 font-bold mb-2">النادي لجميع الطلاب</h3>
         <p className="text-gray-400">بغض النظر عن المرحلة (أولى، ثانية، ثالثة) أو نوع الدراسة (صباحي/مسائي)</p>
      </motion.div>
    </div>
  );
};