import { TOOLS_DATA } from '../data/portfolioData';
import { Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ExpertiseSection() {
  return (
    <section id="outils" className="py-24 sm:py-32 bg-[#FAFAF7] border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
            <Layers className="w-3.5 h-3.5 text-[#111111]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
              06 — STACK LOGICIEL & OUTILS
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] leading-[0.95] tracking-tighter uppercase">
            LES OUTILS <br />
            QUI DONNENT VIE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#7C3AED] to-[#111111]">
              À MES IDÉES.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Chaque logiciel remplit un rôle chirurgical dans mon processus créatif pour garantir une finition sans compromis.
          </p>
        </div>

        {/* 4 Interactive Tool Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS_DATA.map((tool, idx) => {
            const isAI = tool.name.includes('AI') || tool.name.includes('Artificielle');
            
            return (
              <div
                key={tool.name}
                className={`p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group cursor-default shadow-xs hover:shadow-xl ${
                  isAI
                    ? 'bg-gradient-to-b from-[#7C3AED]/10 to-white border-2 border-[#7C3AED]/30 hover:border-[#7C3AED]'
                    : 'bg-white border border-black/10 hover:border-black'
                }`}
                data-cursor="TOOL"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`w-10 h-10 rounded-2xl flex items-center justify-center font-heading font-black text-sm ${
                      tool.name.includes('Photoshop')
                        ? 'bg-[#001E36] text-[#31A8FF]'
                        : tool.name.includes('Illustrator')
                        ? 'bg-[#330000] text-[#FF9A00]'
                        : tool.name.includes('Figma')
                        ? 'bg-[#111111] text-[#B6FF00]'
                        : 'bg-[#7C3AED] text-white'
                    }`}>
                      {tool.name.includes('Photoshop')
                        ? 'Ps'
                        : tool.name.includes('Illustrator')
                        ? 'Ai'
                        : tool.name.includes('Figma')
                        ? 'Fig'
                        : '✦ AI'}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#737373]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="font-heading font-black text-2xl text-[#111111] uppercase tracking-tight mb-1">
                    {tool.name}
                  </h3>
                  <span className="text-xs font-mono text-[#7C3AED] font-semibold block mb-4">
                    {tool.role}
                  </span>

                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="pt-6 border-t border-black/5 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAFAF7] border border-black/5 text-[#111111]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#111111] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B6FF00]" />
                    <span>{tool.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
