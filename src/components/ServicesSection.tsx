import { useState } from 'react';
import { SERVICES_DATA, CONTACT_INFO } from '../data/portfolioData';
import { ArrowUpRight, Sparkles, Check, CheckCircle2, MessageSquare } from 'lucide-react';
import { Service } from '../types';

interface ServicesSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAFAF7] border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
            <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
              07 — SERVICES CRÉATIFS
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] leading-none tracking-tighter uppercase">
            EXPERTISE & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#7C3AED]">
              SOLUTIONS.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            De la direction artistique complète au déploiement multicanal, des offres pensées pour maximiser l'impact de votre image.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="p-8 rounded-3xl bg-white border border-black/10 hover:border-black transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xs hover:shadow-xl"
              data-cursor="SERVICE"
            >
              <div>
                {/* Number & Tag */}
                <div className="flex items-center justify-between text-xs font-mono text-[#737373] uppercase tracking-widest mb-6">
                  <span className="font-black text-[#111111] text-base">{service.number}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAFAF7] border border-black/5 text-[#111111] font-semibold text-[10px]">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-2xl text-[#111111] group-hover:text-[#7C3AED] transition-colors uppercase tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[#737373] leading-relaxed mb-6 font-normal">
                  {service.shortDescription}
                </p>

                {/* Deliverables List */}
                <ul className="space-y-2 border-t border-black/5 pt-4">
                  {service.deliverables.slice(0, 3).map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#111111]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#7C3AED] transition-colors">
                  Détails de l'offre
                </span>
                <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-[#111111] group-hover:text-[#B6FF00] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl border border-black/10 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-black/10">
              <div>
                <span className="text-xs font-mono uppercase text-[#7C3AED] font-bold tracking-widest block">
                  SERVICE {selectedService.number}
                </span>
                <h3 className="font-heading font-black text-2xl text-[#111111] uppercase">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[#111111] hover:bg-black/10 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#737373] leading-relaxed">
              {selectedService.fullDescription}
            </p>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold block mb-3">
                LIVRABLES INCLUS :
              </span>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#B6FF00]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between">
              <a
                href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(
                  `Bonjour Daniel, je souhaite commander le service : ${selectedService.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#111111] text-[#B6FF00] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Demander un devis sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
