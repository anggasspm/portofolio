'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-[70px] pb-[20px]" id="about">
      <div className="flex items-baseline gap-[18px] max-w-[1280px] mx-auto px-[6vw] mb-[28px] section-label">
        <span className="font-display font-extrabold text-[clamp(38px,5.5vw,60px)] text-transparent [-webkit-text-stroke:1px_var(--line)] leading-none">
          01
        </span>
        <h2 className="font-mono text-[12px] font-normal text-muted uppercase tracking-[0.14em]">
          Profile
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[24px] max-w-[1280px] mx-auto px-[6vw]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="rounded-[20px] p-[32px] bg-panel border border-line backdrop-blur-[10px] hover:border-white/22 hover:bg-white/6 transition-colors duration-300 flex flex-col gap-[22px]"
        >
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] block mb-[-6px]">
            Education
          </span>
          <div className="flex items-center gap-[20px] flex-wrap">
            <div className="w-[65px] h-[65px] border border-line rounded-[8px] flex flex-col items-center justify-center font-mono bg-white/2 flex-none">
              <span className="text-[16px] font-bold text-white leading-none">3.92</span>
              <b className="text-[9px] text-muted uppercase mt-[4px] tracking-[0.1em]">GPA</b>
            </div>
            <div>
              <h3 className="text-[18px] font-bold mb-[6px] leading-[1.35] font-display">
                Universitas Pembangunan Nasional "Veteran" Jakarta
              </h3>
              <div className="text-muted text-[13.5px] leading-[1.6] font-mono">
                B.Sc. Computer Science, Informatics · 2024–2028
              </div>
            </div>
          </div>
          <p className="text-muted text-[14.5px] leading-[1.75]">
            Currently sharpening full-stack fundamentals while shipping real products — from a police-facing forensics tool to AI-powered developer tooling — well ahead of graduation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="rounded-[20px] p-[32px] bg-panel border border-line backdrop-blur-[10px] hover:border-white/22 hover:bg-white/6 transition-colors duration-300"
        >
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.1em] block mb-[16px]">
            Experience
          </span>
          <div className="relative pl-[22px] before:content-[''] before:absolute before:left-[5px] before:top-[6px] before:bottom-[6px] before:w-[1px] before:bg-gradient-to-b before:from-accent before:via-line before:to-transparent">
            <div className="relative mb-[22px] before:content-[''] before:absolute before:-left-[22px] before:top-[5px] before:w-[9px] before:h-[9px] before:rounded-full before:bg-bg before:border-2 before:border-accent before:shadow-[0_0_0_3px_rgba(255,255,255,0.12)]">
              <b className="block text-[15px] font-semibold mb-[3px]">UI/UX Designer</b>
              <div className="text-[13.5px] text-muted">KSM Multimedia, UPN Veteran Jakarta</div>
              <span className="font-mono text-[11px] text-accent-2 block mt-[4px]">Mar 2025 – Nov 2025</span>
            </div>
            <div className="relative before:content-[''] before:absolute before:-left-[22px] before:top-[5px] before:w-[9px] before:h-[9px] before:rounded-full before:bg-bg before:border-2 before:border-accent before:shadow-[0_0_0_3px_rgba(255,255,255,0.12)]">
              <b className="block text-[15px] font-semibold mb-[3px]">Equipment &amp; Logistics Staff</b>
              <div className="text-[13.5px] text-muted">Sportavest UPNVJ 2025</div>
              <span className="font-mono text-[11px] text-accent-2 block mt-[4px]">Oct 2024 – Nov 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}