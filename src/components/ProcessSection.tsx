import { PROCESS_STEPS } from '../data/portfolioData';
import { ArrowDown, CheckCircle2, Clock } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="processus" className="py-24 sm:py-32 bg-[#FAFAF7] border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
            <Clock className="w-3.5 h-3.5 text-[#111111]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
              08 — MÉTHODOLOGIE & WORKFLOW
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] leading-none tracking-tighter uppercase">
            DE L'IDÉE BRUTE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#7C3AED]">
              AU CHEF-D'ŒUVRE.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Un processus fluide, transparent et rigoureux structuré en 5 étapes clés.
          </p>
        </div>

        {/* Timeline Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROCESS_STEPS.slice(0, 5).map((step, idx) => (
            <div
              key={step.number}
              className="p-6 rounded-3xl bg-white border border-black/10 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#111111] group-hover:text-[#7C3AED] transition-colors">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#B6FF00]" />
                </div>

                <h3 className="font-heading font-black text-xl text-[#111111] uppercase tracking-tight mb-1">
                  {step.title}
                </h3>
                <span className="text-[11px] font-mono text-[#7C3AED] font-semibold block mb-3">
                  {step.subtitle}
                </span>

                <p className="text-xs text-[#737373] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 text-[10px] font-mono text-[#111111]">
                {step.details}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
