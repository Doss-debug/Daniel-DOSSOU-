import { useState, useEffect } from 'react';
import { logoImg } from '../data/portfolioData';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'monogram' | 'name' | 'finish'>('monogram');

  useEffect(() => {
    // Monogram phase
    const timer1 = setTimeout(() => {
      setPhase('name');
    }, 400);

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    // Finish phase
    const timer2 = setTimeout(() => {
      setPhase('finish');
      setTimeout(() => {
        onComplete();
      }, 400);
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#FAFAF7] flex flex-col items-center justify-center transition-opacity duration-500 ${
        phase === 'finish' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-6 max-w-xs w-full px-6">
        {/* Monogram / Logo */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-[#111111] p-3 flex items-center justify-center shadow-xl border border-black/10">
            <img
              src={logoImg}
              alt="Daniel Dossou"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#B6FF00] animate-ping" />
        </div>

        {/* Name */}
        <div className="text-center">
          <span className="font-heading font-bold text-base uppercase tracking-[0.25em] text-[#111111] block">
            DANIEL DOSSOU M.
          </span>
          <span className="text-[11px] font-mono text-[#737373] tracking-widest uppercase block mt-1">
            CREATIVE DIGITAL · GRAPHIC DESIGN · AI
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-[#E8E8E0] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#111111] transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
