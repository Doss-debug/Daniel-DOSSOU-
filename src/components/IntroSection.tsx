import { STATISTICS_DATA } from '../data/portfolioData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface IntroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function IntroSection({ onNavigate }: IntroSectionProps) {
  return (
    <section id="who-i-am" className="py-24 sm:py-32 bg-[#FAFAF7] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#B6FF00]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Manifesto */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
            <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
              01 — WHO I AM
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#111111] leading-[1.02] tracking-tighter uppercase">
            JE NE CRÉE PAS <br />
            SIMPLEMENT DES VISUELS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#111111] to-[#7C3AED]">
              JE CRÉE DE L'IMPACT.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#737373] leading-relaxed">
              <p>
                Je suis <strong className="text-[#111111] font-semibold">Daniel Dossou M.</strong>, Créatif Digital et Graphiste Designer passionné par la création visuelle, les nouvelles technologies et l'intelligence artificielle.
              </p>
              <p>
                Je combine mes compétences en <strong className="text-[#111111] font-semibold">Photoshop, Illustrator et Figma</strong> avec les nouvelles possibilités offertes par l'IA afin de concevoir des rendus réalistes, modernes et percutants.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block">
                  POSITIONNEMENT
                </span>
                <span className="font-heading font-bold text-lg text-[#111111] block leading-tight">
                  DESIGN + TECH + AI + CREATIVITY
                </span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('apropos')}
                className="pt-4 flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#111111] hover:text-[#7C3AED] transition-colors cursor-pointer group"
              >
                <span>Lire mon histoire</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Statistics Counters */}
        <div className="mt-20 pt-12 border-t border-black/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATISTICS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-black/10 hover:border-black/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-[#111111] group-hover:text-[#7C3AED] transition-colors tracking-tighter mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                {stat.label}
              </div>
              <p className="text-xs text-[#737373] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
