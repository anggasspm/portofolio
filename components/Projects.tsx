'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    num: '01',
    tag: 'AI · Dev Tools',
    title: 'GitBrief',
    desc: 'Turns any repo or PR into a plain-English explanation, with risk scoring and breaking-change detection.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Vercel AI SDK', 'Next.js', 'TypeScript', 'Prisma', 'Vercel AI SDK'],
    link: 'https://gitbriefs.vercel.app/',
  },
  {
    num: '02',
    tag: 'AI · Forensics',
    title: 'Mary Forensic Platform',
    desc: 'Deepfake-detection frontend with a chain-of-custody audit trail, built for real evidence submission.',
    stack: ['React', 'Tailwind', 'Vite', 'Axios', 'React', 'Tailwind', 'Vite', 'Axios'],
    link: 'https://maryforensic.vercel.app/',
  },
  {
    num: '03',
    tag: 'Full-Stack · Realtime',
    title: 'Lost & Found Platform',
    desc: 'Map-based tracking and real-time chat to help people recover lost belongings, end to end.',
    stack: ['Node.js', 'Socket.IO', 'PostgreSQL', 'Leaflet', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Leaflet'],
    link: 'https://lostfound-five.vercel.app/',
  },
];

export default function Projects() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
    card.style.setProperty('--my', `${(py + 0.5) * 100}%`);
  };

  return (
    <section className="py-[60px] pb-[70px]" id="projects">
      <div className="flex items-baseline gap-[18px] max-w-[1280px] mx-auto px-[6vw] mb-[28px] section-label">
        <span className="font-display font-extrabold text-[clamp(38px,5.5vw,60px)] text-transparent [-webkit-text-stroke:1px_var(--line)] leading-none">
          02
        </span>
        <h2 className="font-mono text-[12px] font-normal text-muted uppercase tracking-[0.14em]">
          Selected work
        </h2>
      </div>

      {/* PERBAIKAN: Padding atas/bawah ditambah, dan overflow-x hanya untuk Mobile */}
      <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-[22px] max-w-[1280px] mx-auto px-[6vw] pt-[15px] pb-[50px] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.25 }}
            data-hover
            // PERBAIKAN: flex-none dan w-[min(360px,80vw)] untuk perilaku carousel di mobile
            className="group relative flex-none w-[min(360px,80vw)] md:w-auto snap-start rounded-[20px] p-[30px] bg-panel border border-line backdrop-blur-[10px] overflow-hidden hover:border-white/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)] after:content-[''] after:absolute after:inset-0 after:z-0 after:opacity-0 hover:after:opacity-100 after:bg-[radial-gradient(320px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.06),transparent_60%)] after:transition-opacity after:duration-400"
          >
            <span className="absolute top-[10px] right-[20px] font-display font-extrabold text-[58px] text-transparent [-webkit-text-stroke:1px_var(--line)] z-0 leading-none select-none">
              {p.num}
            </span>

            <div className="relative z-10">
              <span className="font-mono text-[11px] text-accent bg-white/8 border border-white/20 px-[10px] py-[4px] rounded-[20px] inline-block mb-[18px]">
                {p.tag}
              </span>
              <h3 className="text-[22px] font-semibold mb-[10px] font-display">{p.title}</h3>
              <p className="text-muted text-[14.5px] leading-[1.55] mb-[20px]">{p.desc}</p>

              <div className="overflow-hidden -mx-[30px] px-[30px] [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
                <div className={`flex w-max gap-[7px] ${i === 1 ? 'animate-card-stack-rev' : 'animate-card-stack'} group-hover:[animation-play-state:paused]`}>
                  {p.stack.map((tech, idx) => (
                    <span key={idx} className="font-mono text-[10.5px] text-text bg-white/6 px-[9px] py-[3px] rounded-[5px] whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                data-hover
                className="inline-flex items-center gap-[6px] mt-[20px] font-mono text-[11.5px] text-accent uppercase tracking-[0.06em]"
              >
                View project
                <svg className="w-[13px] h-[13px] transition-transform duration-300 group-hover:translate-x-[4px] group-hover:-translate-y-[4px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}