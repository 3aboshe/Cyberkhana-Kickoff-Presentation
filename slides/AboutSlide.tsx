import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { Shield, Users, Target } from 'lucide-react';
import { SlideProps } from '../types';

export const AboutSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-12 items-center" dir="rtl">
      
      {/* Content Section - Right Side in RTL */}
      <div className="flex-1 order-1">
        <motion.div 
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
            <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Users className="text-blue-500" />
              فكرة النادي الأساسية
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed border-r-4 border-blue-500 pr-4 bg-white/5 p-4 rounded-l-lg backdrop-blur-sm">
              مجتمع يجمع جميع المهتمين بمجال الأمن السيبراني في الكلية بمكان واحد.
            </p>
          </motion.div>

          <motion.div variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
            <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Target className="text-red-500" />
              الهدف
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed border-r-4 border-red-500 pr-4 bg-white/5 p-4 rounded-l-lg backdrop-blur-sm">
              تطوير الأعضاء عبر ورشات أسبوعية تفاعلية للتدريب على حل تحديات CTF وتهيئة الطلبة لسوق العمل.
            </p>
          </motion.div>

          <motion.div variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
             <p className="text-green-400 font-mono-code text-sm ltr" dir="ltr">&gt;&gt; Initializing community protocol...</p>
          </motion.div>

        </motion.div>
      </div>

      {/* Visual Section - Left Side in RTL */}
      <div className="flex-1 order-2 flex flex-col items-center justify-center">
         <div className="relative">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border-2 border-dashed border-gray-700 rounded-full scale-150"
            />
            <div className="text-center">
                 <h2 className="text-5xl font-bold text-white mb-2 font-cairo">مجتمعنا</h2>
                 <h2 className="text-3xl font-bold text-green-500 font-cairo">سايبر خانة</h2>
            </div>
         </div>
         <div className="mt-12 grid grid-cols-2 gap-4 opacity-50">
             <div className="p-4 border border-gray-700 rounded text-center font-bold text-sm text-gray-300">طلاب</div>
             <div className="p-4 border border-gray-700 rounded text-center font-bold text-sm text-gray-300">مخترقون</div>
             <div className="p-4 border border-gray-700 rounded text-center font-bold text-sm text-gray-300">مطورون</div>
             <div className="p-4 border border-gray-700 rounded text-center font-bold text-sm text-gray-300">مدافعون</div>
         </div>
      </div>
    </div>
  );
};