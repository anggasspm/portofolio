'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [counts, setCounts] = useState({ gpa: 0, projects: 0, tools: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ gpa: 3.92, projects: 3, tools: 16 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-[1280px] mx-auto px-[6vw] pt-[150px] pb-[60px] relative z-0" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="font-mono text-[13px] text-accent tracking-[0.12em] uppercase mb-[18px] flex items-center gap-[10px]"
      >
        <span className="w-[8px] h-[8px] rounded-full bg-accent shadow-[0_0_12px_var(--accent)] animate-pulse" />
        Open to internships &amp; full-time roles
      </motion.div>

      <h1 className="text-[clamp(40px,8vw,100px)] font-semibold leading-[1.05] tracking-[-0.01em] max-w-[15ch] font-display">
        <span className="block overflow-hidden pb-[12px] -mb-[12px]">
          <motion.span
            initial={{ y: '112%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Hi, I am Anggas —
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[12px] -mb-[12px]">
          <motion.span
            initial={{ y: '112%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: 0.09, ease: [0.16, 1, 0.3, 1] }}
            className="block text-accent italic font-medium"
          >
            a full-stack developer.
          </motion.span>
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.37 }}
        className="text-[clamp(16px,2vw,19px)] text-muted mt-[22px] max-w-[46ch] font-normal"
      >
        Ive shipped three products end to end: a deepfake-detection platform built for real forensic reports to the Indonesian police, an AI that reads GitHub pull requests for you, and a map-based app for tracking lost belongings. The full story is below.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.49 }}
        className="flex gap-[14px] mt-[36px] flex-wrap"
      >
        <a
          href="#projects"
          data-hover
          className="font-mono text-[14px] px-[26px] py-[14px] rounded-full border border-accent bg-accent text-black font-bold inline-flex items-center gap-[8px]"
        >
          See the 3 projects
        </a>
        <a
          href="mailto:anggasspm@gmail.com"
          data-hover
          className="font-mono text-[14px] px-[26px] py-[14px] rounded-full border border-line bg-panel backdrop-blur-[6px] inline-flex items-center gap-[8px] text-white"
        >
          Say hi
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.61 }}
        className="flex gap-[44px] mt-[60px] flex-wrap"
      >
        <div className="stat">
          <b className="font-display text-[clamp(28px,4vw,42px)] font-bold block">{counts.gpa.toFixed(2)}</b>
          <span className="font-mono text-[12px] text-muted uppercase tracking-[0.06em]">GPA / 4.00</span>
        </div>
        <div className="stat">
          <b className="font-display text-[clamp(28px,4vw,42px)] font-bold block">{counts.projects}</b>
          <span className="font-mono text-[12px] text-muted uppercase tracking-[0.06em]">Shipped projects</span>
        </div>
        <div className="stat">
          <b className="font-display text-[clamp(28px,4vw,42px)] font-bold block">{counts.tools}</b>
          <span className="font-mono text-[12px] text-muted uppercase tracking-[0.06em]">Tools &amp; frameworks</span>
        </div>
      </motion.div>

      <div className="mt-[56px] font-mono text-[11.5px] text-muted flex items-center gap-[8px]">
        <span className="w-[1px] h-[26px] bg-gradient-to-b from-accent to-transparent animate-hint" />
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}