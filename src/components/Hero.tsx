import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Cpu } from 'lucide-react';
import { portraitImg, logoImg } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between relative overflow-hidden bg-[#FAFAF7]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B6FF00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Watermark Logo in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[520px] lg:w-[760px] pointer-events-none select-none z-0 flex items-center justify-center opacity-[0.08] sm:opacity-[0.10] transition-opacity">
        <img
          src={logoImg}
          alt=""
          aria-hidden="true"
          className="w-full h-auto max-h-[75vh] object-contain pointer-events-none filter drop-shadow-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Prominent Logo & Top Indicator Label */}
            <div className="flex flex-col items-start gap-4">
              {/* Official Logo Display */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-black/10 p-2 shadow-sm flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src={logoImg}
                  alt="Daniel Dossou Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Indicator Pill */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#B6FF00] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
                  DANIEL DOSSOU M.
                </span>
                <span className="text-xs font-mono text-[#737373] hidden sm:inline">|</span>
                <span className="text-[11px] font-mono text-[#737373] uppercase tracking-wider hidden sm:inline">
                  CREATIVE DIGITAL / GRAPHIC DESIGN / AI
                </span>
              </div>
            </div>

            {/* Giant Monumental Headline */}
            <div className="space-y-1">
              <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] text-[#111111] leading-[0.92] tracking-tighter uppercase">
                <span className="block">JE TRANSFORME</span>
                <span className="block">LES IDÉES</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#111111] to-[#111111]">
                  EN <span className="bg-[#111111] text-[#B6FF00] px-3 py-0.5 rounded-lg inline-block shadow-sm">IMPACT.</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#737373] max-w-xl leading-relaxed font-normal">
              Je combine <strong className="text-[#111111] font-semibold">design, technologie et intelligence artificielle</strong> pour créer des expériences visuelles modernes, réalistes et percutantes.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('works')}
                className="px-7 py-4 rounded-full bg-[#111111] text-[#FAFAF7] hover:text-[#B6FF00] font-heading font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 group transition-all duration-200 shadow-md cursor-pointer active:scale-95"
                data-cursor="EXPLORE"
              >
                <span>DÉCOUVRIR MES PROJETS</span>
                <ArrowUpRight className="w-4 h-4 text-[#B6FF00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-7 py-4 rounded-full bg-white hover:bg-black/5 text-[#111111] font-heading font-bold text-xs uppercase tracking-widest border border-black/15 transition-all duration-200 text-center cursor-pointer active:scale-95 shadow-xs"
                data-cursor="CONTACT"
              >
                TRAVAILLONS ENSEMBLE
              </button>
            </div>

            {/* Micro Tags Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#737373]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                Photoshop & Illustrator Expert
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                AI Art Direction
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                Figma UI Design
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Multi-layer Parallax & Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-white to-[#F2F2EC] border border-black/10 shadow-2xl shadow-black/10 flex items-center justify-center transition-transform duration-200 ease-out"
              style={{
                transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)`,
              }}
            >
              {/* Photo Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111111] border border-black/10">
                <img
                  src={portraitImg}
                  alt="Daniel Dossou M. — Créatif Digital & Graphiste Designer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Signature Overlay in Frame */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B6FF00] block">
                      STUDIO EDITORIAL
                    </span>
                    <span className="font-heading font-bold text-sm tracking-wide">
                      Daniel Dossou M.
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md overflow-hidden p-1 flex items-center justify-center border border-white/20">
                    <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: PS (Photoshop) - Top Left */}
              <div
                className="absolute -top-3 -left-4 px-3 py-2 rounded-xl bg-white border border-black/10 shadow-lg flex items-center gap-2 transition-transform duration-300"
                style={{
                  transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
                }}
              >
                <div className="w-7 h-7 rounded-lg bg-[#001E36] text-[#31A8FF] font-heading font-black text-xs flex items-center justify-center shadow-xs">
                  PS
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-bold text-[#111111] block leading-tight">Photoshop</span>
                  <span className="text-[9px] font-mono text-[#737373] block">Mastery</span>
                </div>
              </div>

              {/* Floating Badge 2: AI (Intelligence Artificielle) - Top Right */}
              <div
                className="absolute -top-3 -right-4 px-3 py-2 rounded-xl bg-white border border-[#7C3AED]/30 shadow-lg flex items-center gap-2 transition-transform duration-300"
                style={{
                  transform: `translate3d(${mousePos.x * -0.7}px, ${mousePos.y * -0.7}px, 0)`,
                }}
              >
                <div className="w-7 h-7 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center text-xs shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-bold text-[#111111] block leading-tight">AI Creative</span>
                  <span className="text-[9px] font-mono text-[#7C3AED] font-semibold block">Exploration</span>
                </div>
              </div>

              {/* Floating Badge 3: Illustrator - Bottom Left */}
              <div
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-white border border-black/10 shadow-lg flex items-center gap-2 transition-transform duration-300"
                style={{
                  transform: `translate3d(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0)`,
                }}
              >
                <div className="w-7 h-7 rounded-lg bg-[#330000] text-[#FF9A00] font-heading font-black text-xs flex items-center justify-center shadow-xs">
                  Ai
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-bold text-[#111111] block leading-tight">Illustrator</span>
                  <span className="text-[9px] font-mono text-[#737373] block">Vector Craft</span>
                </div>
              </div>

              {/* Floating Badge 4: Figma - Bottom Right */}
              <div
                className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl bg-white border border-black/10 shadow-lg flex items-center gap-2 transition-transform duration-300"
                style={{
                  transform: `translate3d(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px, 0)`,
                }}
              >
                <div className="w-7 h-7 rounded-lg bg-[#111111] text-[#B6FF00] font-heading font-black text-xs flex items-center justify-center shadow-xs">
                  Fig
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-bold text-[#111111] block leading-tight">Figma</span>
                  <span className="text-[9px] font-mono text-[#737373] block">UI Systems</span>
                </div>
              </div>

              {/* Floating Accent Sparkle */}
              <div
                className="absolute top-1/2 -right-6 w-8 h-8 rounded-full bg-[#B6FF00] text-[#111111] flex items-center justify-center font-bold text-xs shadow-md"
                style={{
                  transform: `translate3d(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px, 0)`,
                }}
              >
                ✦
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-xs font-mono text-[#737373]">
        <span className="uppercase tracking-widest">
          PORTFOLIO DANIEL DOSSOU M.
        </span>
        <button
          onClick={() => onNavigate('who-i-am')}
          className="flex items-center gap-2 hover:text-[#111111] transition-colors cursor-pointer group"
        >
          <span className="uppercase tracking-wider">SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#B6FF00]" />
        </button>
      </div>
    </section>
  );
}
