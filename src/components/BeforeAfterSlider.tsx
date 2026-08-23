import React, { useState, useRef, useCallback, useEffect } from 'react';
import { retouchBeforeImg, retouchAfterImg, conqueteImg, nobleServiceImg } from '../data/portfolioData';
import { Sliders, Sparkles, Layers, ArrowLeftRight, Check } from 'lucide-react';

interface Preset {
  id: string;
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  details: string;
}

export default function BeforeAfterSlider() {
  const presets: Preset[] = [
    {
      id: 'retouch',
      title: 'RETOUCHE DE PORTRAIT & COLOR GRADING',
      category: 'Photoshop · Séparation de Fréquences',
      beforeImg: retouchBeforeImg,
      afterImg: retouchAfterImg,
      beforeLabel: 'ORIGINAL / BRUT',
      afterLabel: 'FINAL RETOUCH & COLOR GRADE',
      details: 'Nettoyage de peau non destructif, micro-dodge & burn, étalonnage cinématique et contraste studio.',
    },
    {
      id: 'branding',
      title: 'IDENTITY & COMPOSITING STUDIO',
      category: 'Design Visuel & Direction Artistique',
      beforeImg: nobleServiceImg,
      afterImg: conqueteImg,
      beforeLabel: 'BASE CONCEPTUELLE',
      afterLabel: 'CAMPAGNE DÉPLOYÉE',
      details: 'Du moodboard brut à la composition monumentale avec typographies percutantes et éclairages.',
    },
  ];

  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentPreset = presets[activePresetIndex];

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging, onMouseMove, onMouseUp, onTouchMove]);

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAF7] border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
              <Sliders className="w-3.5 h-3.5 text-[#111111]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
                05 — BEFORE ←→ AFTER COMPARATOR
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] leading-tight tracking-tighter uppercase">
              LA PRÉCISION DU DÉTAIL <br />
              <span className="text-[#7C3AED]">
                À L'ŒUVRE.
              </span>
            </h2>
            <p className="text-base text-[#737373] max-w-xl">
              Glissez le séparateur pour observer le travail de retouche, d'étalonnage et de finition chirurgicale.
            </p>
          </div>

          {/* Presets Switcher Pills */}
          <div className="flex items-center gap-2">
            {presets.map((preset, idx) => (
              <button
                key={preset.id}
                onClick={() => setActivePresetIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activePresetIndex === idx
                    ? 'bg-[#111111] text-[#B6FF00] font-bold shadow-xs'
                    : 'bg-white text-[#737373] border border-black/10 hover:border-black/30'
                }`}
              >
                Preset {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Slider Frame */}
        <div className="relative rounded-3xl overflow-hidden bg-[#111111] border border-black/10 shadow-2xl select-none max-w-5xl mx-auto">
          
          <div
            ref={containerRef}
            className="relative aspect-[16/10] sm:aspect-[21/10] w-full overflow-hidden cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* After Image (Background) */}
            <img
              src={currentPreset.afterImg}
              alt="After"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentPreset.beforeImg}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
              />
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#B6FF00] shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111111] border-2 border-[#B6FF00] text-[#B6FF00] flex items-center justify-center shadow-xl">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Badges on Top */}
            <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-xs font-bold tracking-wider pointer-events-none">
              {currentPreset.beforeLabel}
            </div>
            <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#B6FF00] border border-[#B6FF00]/40 font-mono text-xs font-bold tracking-wider pointer-events-none shadow-md">
              {currentPreset.afterLabel}
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="p-6 bg-white border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#7C3AED] font-bold block">
                {currentPreset.category}
              </span>
              <h4 className="font-heading font-bold text-base text-[#111111]">
                {currentPreset.title}
              </h4>
              <p className="text-xs text-[#737373] mt-0.5">
                {currentPreset.details}
              </p>
            </div>

            <div className="text-xs font-mono text-[#737373] shrink-0">
              Position: <strong className="text-[#111111]">{Math.round(sliderPosition)}%</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
