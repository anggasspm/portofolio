'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-[120px] pb-[140px] flex justify-center text-center relative" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="contact-inner relative z-10 flex flex-col items-center gap-[24px] px-[6vw] max-w-[1000px] w-full"
      >
        <div className="contact-label font-mono text-[11.5px] text-muted tracking-[0.1em] inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full border border-line bg-panel mb-[8px]">
          <span className="w-[6px] h-[6px] bg-white rounded-full shadow-[0_0_8px_#fff] animate-status-ping" />
          AVAILABILITY: OPEN
        </div>

        <h2 className="font-display text-[clamp(42px,7vw,76px)] font-semibold leading-[1.05] tracking-[-0.02em] m-0">
          Let's build something<br />worth trusting.
        </h2>

        <p className="text-muted max-w-[50ch] leading-[1.65] text-[16px] mb-[16px]">
          Currently open for full-time roles or internships. Let's discuss projects, AI integration, or the latest in web technologies.
        </p>

        <div className="flex gap-[14px] flex-wrap justify-center w-full md:w-auto">
          <a
            href="mailto:anggasspm@gmail.com"
            data-hover
            className="btn font-mono text-[14px] px-[26px] py-[14px] rounded-full border border-accent bg-accent text-black font-bold inline-flex items-center justify-center gap-[8px] w-full md:w-auto"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 4l10 8 10-8" />
            </svg>
            anggasspm@gmail.com
          </a>

          <a
            href="CV_Anggas.pdf"
            download="CV_Anggas_FullStackDev.pdf"
            data-hover
            className="btn font-mono text-[14px] px-[26px] py-[14px] rounded-full border border-line bg-panel backdrop-blur-[6px] text-white inline-flex items-center justify-center gap-[8px] w-full md:w-auto"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/anggasspm"
            target="_blank"
            rel="noreferrer"
            data-hover
            className="btn font-mono text-[14px] px-[26px] py-[14px] rounded-full border border-line bg-panel backdrop-blur-[6px] text-white inline-flex items-center justify-center gap-[8px] w-full md:w-auto"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/anggasspm"
            target="_blank"
            rel="noreferrer"
            data-hover
            className="btn font-mono text-[14px] px-[26px] py-[14px] rounded-full border border-line bg-panel backdrop-blur-[6px] text-white inline-flex items-center justify-center gap-[8px] w-full md:w-auto"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}