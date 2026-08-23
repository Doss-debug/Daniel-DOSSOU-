import { portraitImg, logoImg, CONTACT_INFO } from '../data/portfolioData';
import { ArrowUpRight, Sparkles, Check, Download, Mail, MessageSquare } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <section id="apropos" className="py-24 sm:py-32 bg-[#FAFAF7] border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photo with Studio Art Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#111111] border border-black/10 shadow-2xl p-2 group">
              <img
                src={portraitImg}
                alt="Daniel Dossou M."
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Monogram / Logo Seal */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B6FF00] block">
                    FOUNDER & CREATIVE DIRECTOR
                  </span>
                  <span className="font-heading font-black text-sm uppercase">
                    Daniel Dossou M.
                  </span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white/10 overflow-hidden p-1 flex items-center justify-center border border-white/20">
                  <img src={logoImg} alt="Daniel Dossou" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story, Vision & Mantra */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
                <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
                  09 — ABOUT DANIEL
                </span>
              </div>

              <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] leading-none tracking-tighter uppercase">
                ABOUT <br />
                <span className="text-[#7C3AED]">
                  DANIEL.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#737373] leading-relaxed">
              <p>
                Je suis <strong className="text-[#111111] font-semibold">Daniel Dossou M.</strong>, Créatif Digital et Graphiste Designer.
              </p>
              <p>
                Passionné par le design et les nouvelles technologies, je cherche constamment de nouvelles façons de transformer les idées en expériences visuelles fortes.
              </p>
              <p>
                Maîtrisant <strong className="text-[#111111] font-semibold">Photoshop, Illustrator et Figma</strong>, j'intègre aujourd'hui l'intelligence artificielle dans mon workflow afin d'explorer de nouvelles possibilités créatives et produire des visuels réalistes et percutants.
              </p>
            </div>

            {/* Highlighted Mantra */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] text-[#FAFAF7] border border-black shadow-lg space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B6FF00] block">
                CREATIVE MANTRA
              </span>
              <p className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-tight">
                MAÎTRISER LES FONDAMENTAUX. <br />
                EXPLORER LA TECHNOLOGIE. <br />
                <span className="text-[#B6FF00]">CRÉER AUTREMENT.</span>
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#111111] text-[#FAFAF7] hover:text-[#B6FF00] font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#B6FF00]" />
                <span>Discuter sur WhatsApp</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-black/5 text-[#111111] font-heading font-bold text-xs uppercase tracking-wider border border-black/15 flex items-center gap-2 shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Envoyer un Email</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
