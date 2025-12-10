import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { BadgeCheck, Trophy, Terminal } from 'lucide-react';
import { SlideProps } from '../types';

export const WhoAmISlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex flex-col md:flex-row items-center gap-12">
      
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0 order-2 md:order-1"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-green-500/50 shadow-[0_0_30px_rgba(0,255,0,0.2)]">
            <img
                src="/images/myimg.jpg"
                alt="Abdulrahman Majid"
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => e.currentTarget.src='https://via.placeholder.com/400x400/000000/00FF00?text=Abdulrahman'}
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm p-2 text-center border-t border-green-500/30">
                <span className="font-mono-code text-green-500 text-sm">uid=0(root)</span>
            </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="flex-1 text-right order-1 md:order-2" dir="rtl">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="mb-4 flex justify-end">
                 <GlitchText text="WHOAMI" size="2xl" color="green" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cairo">
                عبدالرحمن ماجد
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                طالب شغوف بالأمن السيبراني، بدأت رحلتي بحب الاستطلاع لاكتشاف الثغرات وكيفية حماية الأنظمة الرقمية. أسعى دائماً لتطوير مهاراتي ومشاركة المعرفة مع المجتمع التقني.
            </p>
        </motion.div>

        <div className="space-y-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-900/50 p-4 rounded-xl border border-blue-500/30 flex items-center gap-4 hover:bg-blue-900/10 transition-colors"
                dir="ltr"
            >
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                    <BadgeCheck size={32} />
                </div>
                <div className="text-left">
                    <h3 className="text-white font-bold text-lg">Certified Web Security Expert</h3>
                    <p className="text-blue-400 font-mono-code text-sm">from Hackviser</p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-900/50 p-4 rounded-xl border border-yellow-500/30 flex items-center gap-4 hover:bg-yellow-900/10 transition-colors"
            >
                <div className="p-3 bg-yellow-500/20 rounded-lg text-yellow-400">
                    <Trophy size={32} />
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">المركز الرابع في مسابقة العراق الوطنية</h3>
                    <p className="text-yellow-400 font-mono-code text-sm" dir="rtl">المركز الرابع من أصل 580 مشارك</p>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};