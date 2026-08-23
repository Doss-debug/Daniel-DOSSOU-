import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { Quote, MessageSquare } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAFAF7] border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
            <MessageSquare className="w-3.5 h-3.5 text-[#111111]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
              10 — RETOURS & EXPÉRIENCES
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] leading-none tracking-tighter uppercase">
            WHAT CLIENTS <br />
            <span className="text-[#7C3AED]">
              SAY.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#737373]">
            Des retours authentiques de clients et collaborateurs ayant confié leur image à Daniel Dossou.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-black/10 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl group"
            >
              <div>
                <Quote className="w-8 h-8 text-[#B6FF00] mb-4" />
                <p className="text-sm sm:text-base text-[#111111] leading-relaxed italic mb-6">
                  « {item.quote} »
                </p>
              </div>

              <div className="pt-6 border-t border-black/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-[#B6FF00] font-heading font-black text-sm flex items-center justify-center">
                  {item.avatarLetter}
                </div>
                <div>
                  <span className="font-heading font-bold text-sm text-[#111111] block">
                    {item.author}
                  </span>
                  <span className="text-[11px] font-mono text-[#737373] block">
                    {item.role} • {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
