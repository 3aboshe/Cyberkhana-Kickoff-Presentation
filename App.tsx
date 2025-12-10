import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Terminal, ShieldAlert, Lock, Binary, Cpu, Search, Bug, FileSearch, Shield } from 'lucide-react';
import { IntroSlide } from './slides/IntroSlide';
import { AboutSlide } from './slides/AboutSlide';
import { WhoAmISlide } from './slides/WhoAmISlide';
import { StructureSlide } from './slides/StructureSlide';
import { LogisticsSlide } from './slides/LogisticsSlide';
import { RequirementsSlide } from './slides/RequirementsSlide';
import { SecurityTypesSlide } from './slides/SecurityTypesSlide';
import { WhatIsCTFSlide } from './slides/WhatIsCTFSlide';
import { SectionOverviewSlide } from './slides/SectionOverviewSlide';
import { CategorySlide } from './slides/CategorySlide';
import { DemoSlide } from './slides/DemoSlide';

// Total slide count calculation
const OFFENSIVE_CATS = 4;
const DEFENSIVE_CATS = 4;
// Intro, About, WhoAmI, Structure, Logistics, Reqs, SecTypes, WhatIsCTF, OffOverview, [OffCats], DefOverview, [DefCats], Demo
const TOTAL_SLIDES = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + OFFENSIVE_CATS + 1 + DEFENSIVE_CATS + 1;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES - 1) setCurrentSlide(curr => curr + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen bg-[#080808] text-white overflow-hidden scanlines selection:bg-green-500/30 selection:text-green-200">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10 pointer-events-none z-0"></div>
      
      {/* Global Gradient Blobs - Dynamic based on slide type (Red vs Blue) */}
      <div className={`absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse transition-colors duration-1000 ${currentSlide >= 8 && currentSlide <= 12 ? 'bg-red-900/30' : 'bg-red-900/10'}`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] blur-[150px] rounded-full pointer-events-none mix-blend-screen transition-colors duration-1000 ${currentSlide >= 13 && currentSlide <= 17 ? 'bg-blue-900/30' : 'bg-blue-900/10'}`} />

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* Header/Nav */}
        <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
           <div className="flex items-center gap-2 text-green-500 font-mono-code text-sm">
             <Terminal size={16} />
             <span>root@cyberkhana:~# ./slide_{currentSlide}.sh</span>
           </div>
           <div className="flex gap-1">
             {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
               <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-white shadow-[0_0_10px_white]' : 'w-2 bg-gray-800'}`}
               />
             ))}
           </div>
        </header>

        {/* Slide Render */}
        <main className="flex-1 flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {currentSlide === 0 && <IntroSlide key="intro" isActive={true} />}
            {currentSlide === 1 && <AboutSlide key="about" isActive={true} />}
            {currentSlide === 2 && <WhoAmISlide key="whoami" isActive={true} />}
            {currentSlide === 3 && <StructureSlide key="structure" isActive={true} />}
            {currentSlide === 4 && <LogisticsSlide key="logistics" isActive={true} />}
            {currentSlide === 5 && <RequirementsSlide key="reqs" isActive={true} />}
            {currentSlide === 6 && <SecurityTypesSlide key="types" isActive={true} />}
            {currentSlide === 7 && <WhatIsCTFSlide key="ctf" isActive={true} />}
            
            {/* OFFENSIVE SECTION */}
            {currentSlide === 8 && <SectionOverviewSlide key="off-ov" team="red" isActive={true} 
                title="أقسام الفريق الهجومي"
                items={[
                    { title: "Web Exploitation", desc: "اختراق تطبيقات الويب" },
                    { title: "Cryptography", desc: "التشفير وكسر الشفرات" },
                    { title: "Reverse Engineering", desc: "الهندسة العكسية" },
                    { title: "Binary Exploitation", desc: "استغلال الثغرات البرمجية" }
                ]}
            />}
            {currentSlide === 9 && <CategorySlide key="off-web" isActive={true} color="red"
                title="Web Exploitation"
                description="البحث عن الثغرات في المواقع وتطبيقات الويب واستغلالها للوصول إلى قاعدة البيانات أو التحكم بالموقع."
                icon={<ShieldAlert />}
                points={["SQL Injection", "Cross-Site Scripting (XSS)", "Remote Code Execution", "Authentication Bypass"]}
                codeSnippet="admin' OR '1'='1"
            />}
            {currentSlide === 10 && <CategorySlide key="off-crypto" isActive={true} color="red"
                title="Cryptography"
                description="فن كتابة وفك الشفرات. يتضمن تحليل خوارزميات التشفير وكسرها للوصول إلى البيانات الأصلية."
                icon={<Lock />}
                points={["RSA Encryption", "Hash Cracking", "Encoding (Base64/Hex)", "Classic Ciphers"]}
                codeSnippet="c = m^e mod n"
            />}
            {currentSlide === 11 && <CategorySlide key="off-rev" isActive={true} color="red"
                title="Reverse Engineering"
                description="تحليل البرامج لفهم كيفية عملها واستخراج المعلومات الحساسة منها دون امتلاك الكود المصدري."
                icon={<Cpu />}
                points={["Assembly Language", "Decompilation", "Malware Analysis Basics", "Patching Binaries"]}
                codeSnippet="MOV EAX, 1"
            />}
            {currentSlide === 12 && <CategorySlide key="off-pwn" isActive={true} color="red"
                title="Binary Exploitation"
                description="استغلال الأخطاء في إدارة الذاكرة للتحكم في تدفق البرنامج وتنفيذ أوامر خبيثة."
                icon={<Binary />}
                points={["Buffer Overflow", "Format String", "Heap Exploitation", "Shellcode Injection"]}
                codeSnippet="void vuln() { gets(buf); }"
            />}

            {/* DEFENSIVE SECTION */}
            {currentSlide === 13 && <SectionOverviewSlide key="def-ov" team="blue" isActive={true} 
                title="أقسام الفريق الدفاعي"
                items={[
                    { title: "Digital Forensics", desc: "التحقيق الجنائي الرقمي" },
                    { title: "Malware Analysis", desc: "تحليل البرمجيات الخبيثة" },
                    { title: "Threat Hunting", desc: "صيد التهديدات" },
                    { title: "Incident Response", desc: "الاستجابة للحوادث" }
                ]}
            />}
            {currentSlide === 14 && <CategorySlide key="def-forensics" isActive={true} color="blue"
                title="Digital Forensics"
                description="جمع وتحليل الأدلة الرقمية من الأجهزة والشبكات لتحديد ما حدث أثناء الهجوم."
                icon={<Search />}
                points={["Disk Forensics", "Network Forensics", "Memory Analysis", "Log Analysis"]}
                codeSnippet="volatility -f mem.dump imageinfo"
            />}
            {currentSlide === 15 && <CategorySlide key="def-malware" isActive={true} color="blue"
                title="Malware Analysis"
                description="دراسة سلوك البرمجيات الخبيثة لفهم كيفية عملها وتأثيرها وكيفية إيقافها."
                icon={<Bug />}
                points={["Static Analysis", "Dynamic Analysis", "Sandboxing", "Signature Creation"]}
                codeSnippet="MD5: e4d909c290d0fb1ca068ffaddf22cbd0"
            />}
            {currentSlide === 16 && <CategorySlide key="def-threat" isActive={true} color="blue"
                title="Incident Response"
                description="عملية الاستعداد، الكشف، والتعافي من الحوادث الأمنية لتقليل الأضرار."
                icon={<Shield />}
                points={["Preparation", "Detection & Analysis", "Containment", "Eradication & Recovery"]}
            />}
            {currentSlide === 17 && <CategorySlide key="def-osint" isActive={true} color="blue"
                title="OSINT"
                description="استخبارات المصادر المفتوحة: جمع المعلومات من المصادر العامة المتاحة للجميع."
                icon={<FileSearch />}
                points={["Social Media Analysis", "Public Records", "Domain Info", "Geolocation"]}
            />}


            {currentSlide === 18 && <DemoSlide key="demo" isActive={true} />}
          </AnimatePresence>
        </main>

        {/* Controls */}
        <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-center z-50 pointer-events-none">
           <button 
             onClick={prevSlide} 
             disabled={currentSlide === 0}
             className={`pointer-events-auto p-4 rounded-full border border-gray-800 bg-black/50 backdrop-blur-md hover:bg-white/10 transition-colors ${currentSlide === 0 ? 'opacity-0' : 'opacity-100'}`}
           >
             <ChevronLeft className="w-6 h-6" />
           </button>
           
           <div className="font-mono-code text-xs text-gray-500">
             V 1.0.0 // CTF-PROTOCOL
           </div>

           <button 
             onClick={nextSlide} 
             disabled={currentSlide === TOTAL_SLIDES - 1}
             className={`pointer-events-auto p-4 rounded-full border border-gray-800 bg-black/50 backdrop-blur-md hover:bg-white/10 transition-colors ${currentSlide === TOTAL_SLIDES - 1 ? 'opacity-0' : 'opacity-100'}`}
           >
             <ChevronRight className="w-6 h-6" />
           </button>
        </div>

      </div>
    </div>
  );
}