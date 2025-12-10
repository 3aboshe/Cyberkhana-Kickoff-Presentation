import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideProps } from '../types';
import { Lock, Unlock, Database, Cpu, Search, Bug, ShieldAlert, Network, FileSearch } from 'lucide-react';

interface CategorySlideProps extends SlideProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'red' | 'blue';
  codeSnippet?: string;
  points: string[];
}

// --- Visual Components ---

const SQLiVisual = () => {
  const [text, setText] = useState("");
  const payload = "admin' OR '1'='1";
  const [showDb, setShowDb] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: any;
    let timeout: any;
    let resetTimeout: any;

    const startLoop = () => {
        i = 0;
        setText("");
        setShowDb(false);
        
        interval = setInterval(() => {
          setText(payload.slice(0, i + 1));
          i++;
          if (i > payload.length) {
            clearInterval(interval);
            timeout = setTimeout(() => {
                setShowDb(true);
                resetTimeout = setTimeout(startLoop, 3000);
            }, 500);
          }
        }, 100);
    };

    startLoop();
    return () => {
        clearInterval(interval);
        clearTimeout(timeout);
        clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <div className="w-full max-w-sm">
      <div className="bg-gray-800 p-2 rounded-t-md text-xs text-gray-400 font-mono-code">Login Panel</div>
      <div className="bg-gray-900 p-4 rounded-b-md border border-gray-700 mb-4 space-y-2">
        <div className="text-sm text-gray-500">Username:</div>
        <div className="bg-black border border-green-500/50 p-2 text-green-500 font-mono-code h-10 flex items-center">
            {text}<span className="animate-pulse">|</span>
        </div>
      </div>
      
      <AnimatePresence>
        {showDb && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden bg-black border border-red-500 rounded-md"
          >
            <div className="bg-red-900/50 text-red-200 text-xs p-1 text-center font-bold">DATABASE LEAKED</div>
            <div className="p-2 font-mono-code text-xs text-green-400">
              <div className="grid grid-cols-2 border-b border-gray-800 pb-1 mb-1 text-gray-500">
                <span>USER</span><span>PASS</span>
              </div>
              <div className="grid grid-cols-2"><span>admin</span><span>s3cr3t</span></div>
              <div className="grid grid-cols-2"><span>root</span><span>toor</span></div>
              <div className="grid grid-cols-2"><span>user1</span><span>123456</span></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CryptoVisual = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // Password attempts and their hashes
  const passwordAttempts = React.useMemo(() => [
      { password: "admin", hash: "21232f297a57a5a743894a0e4a801fc3", correct: false },
      { password: "password", hash: "5f4dcc3b5aa765d61d8327deb882cf99", correct: false },
      { password: "12345", hash: "827ccb0eea8a706c4c34a16891f84e7b", correct: false },
      { password: "abc123", hash: "e99a18c428cb38d5f260853678922e03", correct: false },
      { password: "qwerty", hash: "d8578edf8458ce06fbc5bb76a58c5ca4", correct: false },
      { password: "letmein", hash: "0d107d09f5bbe40cade3de5c71e9e9b7", correct: false },
      { password: "monkey", hash: "8d4c05f1d4f3e0d0eaa4f0e5b3e0d7d0", correct: false },
      { password: "Qwert123", hash: "78e731027d8fd50ed642340b7c9a63b3", correct: true }
  ], []);

  const targetHash = "78e731027d8fd50ed642340b7c9a63b3";
  const itemHeight = 70;
  const containerHeight = 210;

  useEffect(() => {
      if (!isRunning) return;

      let timer: ReturnType<typeof setTimeout>;

      if (isResetting) {
           timer = setTimeout(() => {
               setIsResetting(false);
               setCurrentIndex(0);
           }, 800); 
           return () => clearTimeout(timer);
      }

      if (currentIndex < passwordAttempts.length - 1) {
          timer = setTimeout(() => {
              setCurrentIndex(prev => prev + 1);
          }, 700);
      } else if (currentIndex === passwordAttempts.length - 1) {
          timer = setTimeout(() => {
              setIsResetting(true);
          }, 3000);
      }

      return () => clearTimeout(timer);
  }, [currentIndex, isResetting, passwordAttempts.length, isRunning]);

  const currentAttempt = passwordAttempts[currentIndex];
  const isSuccess = currentAttempt?.correct && !isResetting;

  const handleStart = () => {
      setIsRunning(true);
      setCurrentIndex(0);
      setIsResetting(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full px-2 items-center justify-center">
        {/* Target Hash - Large Display */}
        <div className="flex flex-col items-center gap-3">
            <div className="text-sm text-gray-400 uppercase tracking-widest">Target Hash (MD5)</div>
            <div className="text-2xl md:text-3xl font-mono-code text-yellow-400 bg-gray-900/80 px-8 py-4 rounded-lg border-2 border-yellow-600/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                {targetHash}
            </div>
        </div>

        {/* Start Button */}
        {!isRunning && (
            <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg border-2 border-red-400 shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all"
            >
                START BRUTE FORCE
            </motion.button>
        )}

        {/* Wheels - Only show when running */}
        {isRunning && (
            <div className="flex gap-4 w-full items-center justify-center">
                {/* Password Wheel */}
                <div className="flex flex-col items-center gap-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Password</div>
                    <div className="relative w-52 h-[210px] bg-gradient-to-b from-gray-950 via-black to-gray-950 border-2 border-gray-700 rounded-xl overflow-hidden">
                        {/* Fade gradients */}
                        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
                        
                        {/* Selection highlight */}
                        <div className="absolute top-1/2 left-0 right-0 h-[70px] -mt-[35px] bg-blue-500/10 border-y-2 border-blue-500/50 z-10 pointer-events-none"></div>

                        <motion.div
                            className="w-full flex flex-col items-center"
                            animate={{ 
                                y: isResetting ? containerHeight : -(currentIndex * itemHeight) + (containerHeight/2 - itemHeight/2)
                            }} 
                            transition={{ 
                                duration: isResetting ? 0 : 0.6, 
                                ease: "easeInOut" 
                            }}
                        >
                            {passwordAttempts.map((item, i) => (
                                <div 
                                    key={i} 
                                    style={{ height: itemHeight }} 
                                    className={`flex items-center justify-center font-mono-code text-xl w-full transition-all duration-300 px-2 ${
                                        i === currentIndex
                                        ? "text-white font-bold scale-105" 
                                        : "text-gray-600 scale-90 blur-[1px]"
                                    }`}
                                >
                                    {item.password}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="text-gray-500 text-3xl mt-8">→</div>

                {/* Hash Wheel */}
                <div className="flex flex-col items-center gap-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Hash (MD5)</div>
                    <div className="relative w-96 h-[210px] bg-gradient-to-b from-gray-950 via-black to-gray-950 border-2 border-gray-700 rounded-xl overflow-hidden">
                        {/* Fade gradients */}
                        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
                        
                        {/* Selection highlight - changes color on match */}
                        <div className={`absolute top-1/2 left-0 right-0 h-[70px] -mt-[35px] border-y-2 z-10 pointer-events-none transition-all duration-300 ${
                            isSuccess 
                            ? "bg-green-500/20 border-green-500 shadow-[inset_0_0_30px_rgba(34,197,94,0.3)]" 
                            : "bg-red-500/5 border-red-500/50"
                        }`}></div>

                        <motion.div
                            className="w-full flex flex-col items-center"
                            animate={{ 
                                y: isResetting ? containerHeight : -(currentIndex * itemHeight) + (containerHeight/2 - itemHeight/2)
                            }} 
                            transition={{ 
                                duration: isResetting ? 0 : 0.6, 
                                ease: "easeInOut" 
                            }}
                        >
                            {passwordAttempts.map((item, i) => (
                                <div 
                                    key={i} 
                                    style={{ height: itemHeight }} 
                                    className={`flex items-center justify-center font-mono-code text-base w-full transition-all duration-300 px-6 ${
                                        i === currentIndex
                                        ? (item.correct 
                                            ? "text-green-400 font-bold scale-105 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" 
                                            : "text-red-400 font-bold scale-105")
                                        : "text-gray-600 scale-90 blur-[1px]"
                                    }`}
                                >
                                    {item.hash}
                                </div>
                            ))}
                        </motion.div>

                        {/* Success indicator */}
                        {isSuccess && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute top-2 right-2 text-green-400 font-bold text-sm z-30"
                            >
                                ✓ MATCH!
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

const RevEngVisual = () => {
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => setKey(k => k + 1), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 font-mono-code text-xs w-full max-w-sm h-40 overflow-hidden relative">
        {/* Binary Column */}
        <div className="flex-1 text-green-900 opacity-50 overflow-hidden">
             {Array.from({length:20}).map((_,i) => <div key={i}>{Math.random().toString(2).substr(2,8)}</div>)}
        </div>
        {/* Arrow */}
        <div className="flex items-center justify-center text-white">
             →
        </div>
        {/* Assembly Column */}
        <div className="flex-1 text-blue-400">
             <motion.div 
               key={key}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 2 }}
             >
                <div>MOV EAX, 0x1</div>
                <div>PUSH EBP</div>
                <div>MOV EBP, ESP</div>
                <div>SUB ESP, 0x10</div>
                <div className="text-yellow-500">CMP [EBP-4], 0</div>
                <div className="text-red-500">JNE 0x401000</div>
                <div>XOR EAX, EAX</div>
                <div>POP EBP</div>
                <div>RET</div>
             </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
    </div>
  );
};

const PwnVisual = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setKey(k => k + 1), 5000);
        return () => clearInterval(interval);
    }, []);

    // Stack overflow visualization
    return (
        <div key={key} className="relative w-32 h-48 border-2 border-gray-600 rounded-b-lg border-t-0 flex flex-col-reverse items-center p-1 overflow-visible">
            <div className="absolute -top-6 text-gray-500 text-xs font-mono-code">BUFFER</div>
            {Array.from({length: 8}).map((_, i) => (
                <motion.div 
                    key={i}
                    className="w-full h-5 bg-green-500/20 border border-green-500/50 mb-1 rounded-sm"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3 }}
                />
            ))}
            <motion.div 
                 className="absolute -top-10 w-full h-8 bg-red-600 border border-red-400 rounded-sm z-10 flex items-center justify-center text-white font-bold text-xs"
                 initial={{ opacity: 0, y: -100 }}
                 animate={{ opacity: 1, y: 0, rotate: [0, 5, -5, 0] }}
                 transition={{ delay: 2.5, duration: 0.5 }}
            >
                OVERFLOW
            </motion.div>
        </div>
    );
};

const ForensicsVisual = () => {
    // Grid of dots with magnifying glass
    return (
        <div className="relative w-48 h-48 bg-black grid grid-cols-8 gap-1 p-2 rounded border border-gray-800">
            {Array.from({length: 64}).map((_, i) => (
                 <div key={i} className={`rounded-full w-full h-full ${i === 27 ? "bg-red-500" : "bg-gray-800"}`}></div>
            ))}
            <motion.div 
                className="absolute w-16 h-16 border-2 border-blue-500 rounded-full shadow-[0_0_15px_blue] flex items-center justify-center bg-blue-500/10 backdrop-blur-sm"
                animate={{ top: ["0%", "40%", "20%", "40%"], left: ["0%", "30%", "60%", "30%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Search size={24} className="text-white" />
            </motion.div>
        </div>
    );
}

const MalwareVisual = () => {
    return (
        <div className="relative w-40 h-40 bg-gray-900 border border-red-900 rounded-lg flex items-center justify-center overflow-hidden">
            <Bug size={64} className="text-red-600" />
            <motion.div 
               className="absolute w-full h-1 bg-blue-500 shadow-[0_0_10px_blue]"
               animate={{ top: ["0%", "100%", "0%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute bottom-2 left-2 text-xs font-mono-code text-blue-400">SCANNING...</div>
        </div>
    );
}

const IRVisual = () => {
    return (
        <div className="relative w-64 h-32 flex items-center justify-center overflow-hidden">
             {/* Center Shield Icon */}
             <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center border-2 border-blue-400">
                <ShieldAlert size={32} className="text-white" />
             </div>
             
             {/* Particles */}
             {Array.from({length: 5}).map((_, i) => (
                 <motion.div 
                    key={i}
                    className="absolute right-0 w-2 h-2 bg-red-500 rounded-full"
                    initial={{ right: "-10%" }}
                    animate={{ right: "50%" }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                 />
             ))}
        </div>
    );
};

const OSINTVisual = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setKey(k => k + 1), 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div key={key} className="relative w-48 h-48">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-10 border-4 border-gray-900">
                 <div className="w-8 h-8 bg-gray-300 rounded-full" />
             </div>
             
             {/* Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                 <motion.line x1="50%" y1="50%" x2="50%" y2="15%" stroke="gray" strokeWidth="2" initial={{pathLength:0}} animate={{pathLength:1}} transition={{delay:1}} />
                 <motion.line x1="50%" y1="50%" x2="50%" y2="85%" stroke="gray" strokeWidth="2" initial={{pathLength:0}} animate={{pathLength:1}} transition={{delay:1.2}} />
                 <motion.line x1="50%" y1="50%" x2="15%" y2="50%" stroke="gray" strokeWidth="2" initial={{pathLength:0}} animate={{pathLength:1}} transition={{delay:1.4}} />
                 <motion.line x1="50%" y1="50%" x2="85%" y2="50%" stroke="gray" strokeWidth="2" initial={{pathLength:0}} animate={{pathLength:1}} transition={{delay:1.6}} />
             </svg>

             {[0, 1, 2, 3].map((i) => (
                 <motion.div 
                    key={i}
                    className="absolute bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-xs text-white z-10 border-2 border-black"
                    initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%", opacity: 0 }}
                    animate={{ 
                        top: i === 0 ? "15%" : i === 1 ? "85%" : "50%", 
                        left: i === 2 ? "15%" : i === 3 ? "85%" : "50%",
                        opacity: 1 
                    }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                 >
                     {i === 0 ? "@" : i === 1 ? "Loc" : i === 2 ? "IP" : "Ph"}
                 </motion.div>
             ))}
        </div>
    );
};

// -------------------------

export const CategorySlide: React.FC<CategorySlideProps> = ({ title, description, icon, color, codeSnippet, points }) => {
  const accentColor = color === 'red' ? 'text-red-500' : 'text-blue-500';
  const borderColor = color === 'red' ? 'border-red-500' : 'border-blue-500';
  const bgGradient = color === 'red' ? 'from-red-900/20' : 'from-blue-900/20';

  const renderVisual = () => {
      if (title.includes("Web")) return <SQLiVisual />;
      if (title.includes("Crypto")) return <CryptoVisual />;
      if (title.includes("Reverse")) return <RevEngVisual />;
      if (title.includes("Binary")) return <PwnVisual />;
      if (title.includes("Forensics")) return <ForensicsVisual />;
      if (title.includes("Malware")) return <MalwareVisual />;
      if (title.includes("Incident")) return <IRVisual />;
      if (title.includes("OSINT")) return <OSINTVisual />;
      
      // Fallback: icon
      return (
        <motion.div 
            className={`${accentColor}`}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
        >
            {React.cloneElement(icon as React.ReactElement, { size: 120 })}
        </motion.div>
      );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex flex-col md:flex-row items-center gap-12 h-full justify-center">
      
      {/* Visual Side */}
      <motion.div 
        className={`flex-1 w-full bg-gradient-to-br ${bgGradient} to-black p-1 rounded-2xl relative overflow-visible h-[400px]`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="bg-[#050505] p-4 rounded-xl h-full flex flex-col items-center justify-center overflow-visible">
            {renderVisual()}
        </div>
      </motion.div>

      {/* Info Side */}
      <motion.div 
        className="flex-1 text-right" 
        dir="rtl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${accentColor} flex items-center justify-end gap-3`}>
            {title}
        </h2>
        <p className="text-xl text-gray-300 mb-8 leading-loose border-r-4 border-gray-700 pr-6">
            {description}
        </p>

        <ul className="space-y-4">
            {points.map((point, i) => (
                <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 text-gray-400 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                    <span className={`w-2 h-2 rounded-full ${color === 'red' ? 'bg-red-500' : 'bg-blue-500'}`} />
                    <span>{point}</span>
                </motion.li>
            ))}
        </ul>
      </motion.div>

    </div>
  );
};