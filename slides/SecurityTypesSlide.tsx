import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { Sword, Shield } from 'lucide-react';
import { SlideProps } from '../types';

export const SecurityTypesSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row relative">
      
      {/* Title Overlay */}
      <div className="absolute top-10 left-0 w-full z-30 text-center pointer-events-none">
          <div className="bg-black/50 backdrop-blur-md inline-block px-8 py-2 rounded-full border border-gray-700">
             <h2 className="text-2xl font-bold text-white">أقسام الأمن السيبراني</h2>
          </div>
      </div>

      {/* Red Team (Offensive) */}
      <motion.div 
        className="flex-1 bg-black/80 relative flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-l border-red-900/50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
         <div className="absolute inset-0 bg-red-900/5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="relative z-10 text-center">
            <motion.div 
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mb-6 inline-block text-red-500"
            >
                <Sword size={80} strokeWidth={1.5} />
            </motion.div>
            <GlitchText text="OFFENSIVE SECURITY" size="lg" color="red" />
            <h2 className="text-4xl font-bold text-white mt-2 mb-6">الأمن الهجومي</h2>
            <p className="text-gray-400 max-w-sm mx-auto leading-relaxed" dir="rtl">
                محاكاة الهجمات الحقيقية لاكتشاف الثغرات قبل أن يستغلها المخترقون.
            </p>
         </div>
      </motion.div>

      {/* VS Badge */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-black border-2 border-white p-4 rounded-full font-black text-2xl italic tracking-tighter shadow-[0_0_30px_white]">
            VS
        </div>
      </div>

      {/* Blue Team (Defensive) */}
      <motion.div 
        className="flex-1 bg-black/80 relative flex flex-col items-center justify-center p-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
         <div className="absolute inset-0 bg-blue-900/5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

         <div className="relative z-10 text-center">
            <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6 inline-block text-blue-500"
            >
                <Shield size={80} strokeWidth={1.5} />
            </motion.div>
            <GlitchText text="DEFENSIVE SECURITY" size="lg" color="blue" />
            <h2 className="text-4xl font-bold text-white mt-2 mb-6">الأمن الدفاعي</h2>
            <p className="text-gray-400 max-w-sm mx-auto leading-relaxed" dir="rtl">
                حماية الأنظمة والشبكات، ومراقبة التهديدات والاستجابة للحوادث الأمنية.
            </p>
         </div>
      </motion.div>

    </div>
  );
};