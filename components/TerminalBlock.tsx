import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const snippets = [
  "Wait-Event -SourceIdentifier 'ProcessStart'",
  "buffer_overflow_exploit.py --target 192.168.1.10",
  "SELECT * FROM users WHERE admin = '1' OR '1'='1'",
  "nmap -sC -sV -p- 10.10.10.10",
  "ssh-keygen -t rsa -b 4096",
  "chmod +x exploit.sh && ./exploit.sh",
  "CVE-2023-45122 : RCE Found",
  "Payload delivered successfully...",
  "Establishing reverse shell...",
  "Access Granted.",
  "Root privileges escalated."
];

export const TerminalBlock: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        const newLine = snippets[Math.floor(Math.random() * snippets.length)];
        const newLines = [...prev, `> ${newLine}`];
        if (newLines.length > 8) newLines.shift();
        return newLines;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`font-mono-code text-xs md:text-sm text-green-500/80 leading-relaxed overflow-hidden pointer-events-none ${className}`}>
      {lines.map((line, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="whitespace-nowrap"
        >
          {line}
        </motion.div>
      ))}
      <motion.div 
        animate={{ opacity: [0, 1] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-4 bg-green-500 ml-1 align-middle"
      />
    </div>
  );
};