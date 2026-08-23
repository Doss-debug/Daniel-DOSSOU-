import { useState } from 'react';
import { FAQ_DATA } from '../data/portfolioData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAFAF7] border-t border-black/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
            <HelpCircle className="w-3.5 h-3.5 text-[#111111]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
              11 — QUESTIONS FRÉQUENTES
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#111111] leading-tight tracking-tighter uppercase">
            TOUT CE QUE VOUS DEVEZ <br />
            <span className="text-[#7C3AED]">SAVOIR.</span>
          </h2>
          <p className="text-base text-[#737373] max-w-xl mx-auto">
            Des réponses claires pour aborder sereinement votre collaboration avec Daniel Dossou.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-black/10 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#111111]">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#111111] text-[#B6FF00]' : 'text-[#111111]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#737373] leading-relaxed border-t border-black/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
