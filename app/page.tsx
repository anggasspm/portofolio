'use client';

import { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Loader from '@/components/Loader';
import ThreeScene from '@/components/ThreeScene';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import TerminalFooter from '@/components/TerminalFooter';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ThreeScene />

      <div className="veil" />
      <div id="progress-track" className="fixed top-0 left-0 right-0 h-[2px] z-[110] bg-white/6">
        <div id="progress-bar" className="h-full w-0 bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_10px_var(--accent)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <TerminalFooter />
    </>
  );
}