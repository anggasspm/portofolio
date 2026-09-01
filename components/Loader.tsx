'use client';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    let progress = 0;
    const loadTimer = setInterval(() => {
      progress += Math.random() * 18;
      if (progress >= 100) {
        clearInterval(loadTimer);
        setTimeout(() => {
          setDone(true);
          onComplete();
        }, 400);
      }
    }, 140);

    return () => clearInterval(loadTimer);
  }, [onComplete]);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[500] bg-bg flex items-center justify-center transition-opacity duration-700 ease-in-out">
      <div className="relative w-[120px] h-[120px] flex items-center justify-center">
        <div className="pulsar-wave absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
        <div className="pulsar-wave pulsar-wave-2 absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
        <div className="pulsar-core relative z-[2] w-[14px] h-[14px] rounded-full bg-bg border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
      </div>
    </div>
  );
}