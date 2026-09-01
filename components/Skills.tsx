'use client';

const row1 = ['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'FastAPI', 'Express.js', 'React Native'];
const row2 = ['PostgreSQL', 'MongoDB', 'Prisma', 'Firebase', 'Supabase', 'Figma', 'Git', 'Tailwind CSS'];

export default function Skills() {
  return (
    <section className="py-[20px] pb-[80px] overflow-hidden" id="skills">
      <div className="flex items-baseline gap-[18px] max-w-[1280px] mx-auto px-[6vw] mb-[28px] section-label">
        <span className="font-display font-extrabold text-[clamp(38px,5.5vw,60px)] text-transparent [-webkit-text-stroke:1px_var(--line)] leading-none">
          03
        </span>
        <h2 className="font-mono text-[12px] font-normal text-muted uppercase tracking-[0.14em]">
          Stack
        </h2>
      </div>

      {/* PERBAIKAN: Ditambahkan py-[15px] dan my-[5px] agar efek hover ke atas tidak terpotong */}
      <div className="max-w-[1280px] mx-auto px-[6vw] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] flex flex-col gap-[14px] py-[15px] my-[5px]">
        <div className="animate-marquee">
          {[...row1, ...row1].map((skill, idx) => (
            <span
              key={idx}
              className="font-mono text-[15px] leading-none px-[22px] py-[12px] rounded-full border border-line bg-panel text-text whitespace-nowrap inline-flex items-center gap-[9px] transition-all duration-250 hover:border-accent hover:bg-white/8 hover:-translate-y-[2px] before:content-[''] before:w-[6px] before:h-[6px] before:rounded-full before:bg-accent-2"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="animate-marquee rev">
          {[...row2, ...row2].map((skill, idx) => (
            <span
              key={idx}
              className="font-mono text-[15px] leading-none px-[22px] py-[12px] rounded-full border border-line bg-panel text-text whitespace-nowrap inline-flex items-center gap-[9px] transition-all duration-250 hover:border-accent hover:bg-white/8 hover:-translate-y-[2px] before:content-[''] before:w-[6px] before:h-[6px] before:rounded-full before:bg-accent-3"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}