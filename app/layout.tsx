import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// 1. Setup Font
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// 2. Setup Metadata SEO
export const metadata: Metadata = {
  title: 'Anggas — Full-Stack Developer',
  description: 'Portfolio of I Gusti Bagus Anggas Putra Maheswara — full-stack developer building AI-integrated, real-time, and forensic web platforms.',
};

// 3. Layout Utama
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} ${jetbrains.variable}`}>
      {/* Menerapkan warna background, warna teks, dan font default (Instrument Sans) */}
      <body className="bg-bg text-[#eef2f5] font-body selection:bg-white/25 selection:text-bg overflow-x-hidden">
        
        {/* Efek tekstur film grain yang selalu ada di background */}
        <div id="grain" />
        
        {/* Konten halaman (app/page.tsx) akan di-render di dalam sini */}
        {children}
        
      </body>
    </html>
  );
}