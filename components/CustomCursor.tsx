'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const handlePointerMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }
    };

    let animationFrameId: number;
    const ringLoop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      animationFrameId = requestAnimationFrame(ringLoop);
    };

    window.addEventListener('pointermove', handlePointerMove);
    ringLoop();

    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    const hoverElements = document.querySelectorAll('[data-hover]');
    hoverElements.forEach((el) => {
      el.addEventListener('pointerenter', addHover);
      el.addEventListener('pointerleave', removeHover);
    });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
      hoverElements.forEach((el) => {
        el.removeEventListener('pointerenter', addHover);
        el.removeEventListener('pointerleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-white z-[200] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[34px] h-[34px] rounded-full border border-white/50 z-[200] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-250 ease-out hidden md:block [.cursor-hover_&]:w-[56px] [.cursor-hover_&]:h-[56px] [.cursor-hover_&]:border-white"
      />
    </>
  );
}