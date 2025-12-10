import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { BookOpen, Flag, ArrowLeft } from 'lucide-react';
import { SlideProps } from '../types';

export const StructureSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <div className="text-center mb-16">
        <GlitchText text="WORKSHOP" size="xl" color="white" />
        <GlitchText text="STRUCTURE" size="xl" color="red" className="mr-4" />
      </div>

      {/* Changed flex-row to flex-row-reverse to place Theory on Right and Practical on Left */}
      <div className="flex flex-col md:flex-row-reverse items-stretch justify-center gap-4 relative">
        
        {/* Theory Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-gradient-to-bl from-gray-900 to-black border border-gray-800 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <BookOpen size={100} />
          </div>
          <h3 className="text-3xl font-bold text-blue-400 mb-4">الجزء النظري</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            راح يتخصص وقت نشرح فيه عن مفاهيم "أساسية" وممتعة بالتخصص.
            <br/>
            <span className="text-sm text-gray-500 font-mono-code mt-2 block">/var/www/theory_lecture.pdf</span>
          </p>
        </motion.div>

        {/* Arrow Connector */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center text-gray-600"
        >
          {/* Arrow points Left: From Right (Theory) to Left (CTF) */}
          <ArrowLeft size={40} className="hidden md:block" />
          <div className="h-10 w-[1px] bg-gray-600 md:hidden" />
        </motion.div>

        {/* Practical Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl relative overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <Flag size={100} />
          </div>
          <h3 className="text-3xl font-bold text-red-500 mb-4">الجزء العملي (CTF)</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            تحدي "العثور على العلم" لتطبيق ما تم شرحه فوراً.
            <br/>
            <span className="text-sm text-green-500 font-mono-code mt-2 block">root@ctf:~$ ./capture_flag</span>
          </p>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-xl text-gray-400">
          أسلوب التعلم راح يكون <span className="text-green-400 font-bold">ممتع جداً</span>
        </p>
      </motion.div>
    </div>
  );
};