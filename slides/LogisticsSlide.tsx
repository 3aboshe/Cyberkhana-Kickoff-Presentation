import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { Clock, MapPin, Calendar } from 'lucide-react';
import { SlideProps } from '../types';

export const LogisticsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full items-center">
        
        <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#111] p-6 rounded-lg border-r-4 border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.1)]"
            >
                <div className="flex items-center gap-4 mb-2">
                    <Calendar className="text-green-500" />
                    <h3 className="text-2xl font-bold text-white">الموعد</h3>
                </div>
                <p className="text-xl text-gray-300">كل يوم <span className="text-white font-bold">خميس</span></p>
                <p className="text-sm text-gray-500 font-mono-code mt-1" dir="ltr">Scheduled Task: Weekly</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#111] p-6 rounded-lg border-r-4 border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.1)]"
            >
                <div className="flex items-center gap-4 mb-2">
                    <Clock className="text-green-500" />
                    <h3 className="text-2xl font-bold text-white">الوقت</h3>
                </div>
                <p className="text-xl text-gray-300">الساعة <span className="text-white font-bold">١٢:٠٠ ظهراً</span></p>
                <p className="text-gray-400 text-sm">المدة: ساعة ونصف</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#111] p-6 rounded-lg border-r-4 border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.1)]"
            >
                <div className="flex items-center gap-4 mb-2">
                    <MapPin className="text-green-500" />
                    <h3 className="text-2xl font-bold text-white">المكان</h3>
                </div>
                <p className="text-2xl text-white font-bold">
                    مكتبة العمادة
                </p>
                <p className="text-sm text-gray-500 font-mono-code mt-1" dir="ltr">Location: Deanship Library</p>
            </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-green-500/10 blur-[60px] rounded-full" />
            <GlitchText text="SAVE" size="2xl" color="white" />
            <GlitchText text="THE" size="xl" color="white" />
            <GlitchText text="DATE" size="2xl" color="green" />
            
            <motion.div 
              className="mt-8 font-mono-code text-green-500/50 text-xs"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              System.DateTime.Now.Sync()
            </motion.div>
        </div>

      </div>
    </div>
  );
};