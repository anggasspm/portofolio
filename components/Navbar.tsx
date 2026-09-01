'use client';
import { useEffect, useState, useRef, useCallback } from 'react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Profile' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('hero');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef<HTMLElement>(null);

  // Fungsi untuk menghitung posisi indikator secara presisi
  const updateIndicator = useCallback((tabId: string) => {
    const activeEl = document.querySelector(`[data-target="${tabId}"]`) as HTMLElement;
    const navEl = navRef.current;
    
    if (activeEl && navEl) {
      const elRect = activeEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      
      setIndicatorStyle({
        width: `${elRect.width}px`,
        transform: `translateX(${elRect.left - navRect.left - 7}px)`,
      });
    }
  }, []);

  // Logika mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = navItems.map((item) => document.getElementById(item.id));
      let idx = 0;
      let best = Infinity;

      sectionEls.forEach((el, i) => {
        if (el) {
          const d = Math.abs(el.getBoundingClientRect().top - 90);
          if (d < best) {
            best = d;
            idx = i;
          }
        }
      });
      
      const newActive = navItems[idx].id;
      if (newActive !== activeTab) {
        setActiveTab(newActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  // Update tampilan indikator saat tab berubah atau layar di-resize
  useEffect(() => {
    updateIndicator(activeTab);
    
    const handleResize = () => updateIndicator(activeTab);
    window.addEventListener('resize', handleResize);
    
    // Memastikan posisi indikator benar setelah font/halaman selesai di-render
    const timer = setTimeout(() => updateIndicator(activeTab), 150);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [activeTab, updateIndicator]);

  const scrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const scrollTarget = targetEl.querySelector('.section-label, .contact-label') || targetEl;
      const navBottom = navRef.current?.getBoundingClientRect().bottom || 0;
      const targetPosition = scrollTarget.getBoundingClientRect().top + window.scrollY - navBottom - 30;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scrim (Efek gradasi hitam di belakang navbar) */}
      <div 
        className="fixed top-0 left-0 right-0 h-[120px] z-[90] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, var(--bg) 0%, rgba(5,7,10,0.75) 45%, transparent 100%)' }}
      />
      
      <nav
        id="navbar"
        ref={navRef}
        className="fixed top-[20px] left-1/2 -translate-x-1/2 z-[100] flex items-center gap-[2px] p-[7px] rounded-full border border-[rgba(255,255,255,0.14)] bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.03)] backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[0_10px_34px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.2)] max-w-[92vw] overflow-x-auto scrollbar-none"
      >
        {/* Indikator Latar Belakang Kapsul Aktif */}
        <span
          id="nav-indicator"
          className="absolute top-[7px] left-[7px] h-[calc(100%-14px)] rounded-full bg-[rgba(255,255,255,0.09)] z-0 pointer-events-none transition-all duration-350 ease-[cubic-bezier(.16,1,.3,1)]"
          style={indicatorStyle}
        />
        
        {navItems.map((item, idx) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-target={item.id}
            onClick={(e) => scrollToSection(e, item.id)}
            className={`relative z-[1] font-mono text-[12px] px-[15px] py-[9px] rounded-full whitespace-nowrap transition-colors duration-250 ${
              idx === 0 
                ? 'text-[#eef2f5] font-bold mr-[6px] pr-[14px] border-r border-[rgba(255,255,255,0.12)]' 
                : ''
            } ${activeTab === item.id ? 'text-[#eef2f5] font-semibold' : 'text-muted hover:text-[#eef2f5]'}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}