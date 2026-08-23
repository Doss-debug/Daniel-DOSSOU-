import { CONTACT_INFO, logoImg } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight, MessageSquare, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-[#FAFAF7] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Call-to-action Banner */}
        <div className="pt-24 pb-16 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#B6FF00] uppercase block">
                PRÊT À MARQUER LES ESPRITS ?
              </span>
              <h2 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl text-white uppercase leading-[0.92] tracking-tighter">
                LET'S CREATE <br />
                SOMETHING <br />
                <span className="text-[#B6FF00]">
                  IMPACTFUL.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 rounded-full bg-[#B6FF00] text-[#111111] font-heading font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#a3e600] transition-all shadow-xl"
              >
                <span>DÉMARRER UN PROJET ↗</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="px-8 py-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-heading font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
              >
                <span>ÉCRIRE PAR EMAIL</span>
              </a>
            </div>
          </div>
        </div>

        {/* Multi-column Navigation & Direct Information */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          
          {/* Col 1: Identity & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 overflow-hidden p-1.5 flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Daniel Dossou"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-sm tracking-wider uppercase text-white block">
                  Daniel Dossou M.
                </span>
                <span className="text-[10px] font-mono text-[#A1A1A1] tracking-widest uppercase">
                  Studio Créatif & AI
                </span>
              </div>
            </div>
            <p className="text-xs text-[#A1A1A1] leading-relaxed">
              Créatif Digital · Graphiste Designer · AI Creative. <br />
              Disponible pour projets freelance et collaborations créatives.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B6FF00] font-bold block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#A1A1A1]">
              <li>
                <button
                  onClick={() => onNavigate('works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Works ↗
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('creative-engine')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Creative Engine ↗
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('design-ia')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Design × IA ↗
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services & Offres ↗
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('apropos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  À Propos de Daniel ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B6FF00] font-bold block">
              COORDONNÉES
            </span>
            <div className="space-y-2 text-xs font-mono text-[#A1A1A1]">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block hover:text-white transition-colors text-white"
              >
                {CONTACT_INFO.email}
              </a>
              <div className="space-y-1 pt-1">
                {CONTACT_INFO.phones.map((p, idx) => (
                  <a
                    key={idx}
                    href={`tel:${p.raw}`}
                    className="block hover:text-white transition-colors"
                  >
                    {p.number}
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-[#777777] pt-1">
                {CONTACT_INFO.location}
              </p>
            </div>
          </div>

          {/* Col 4: Socials */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B6FF00] font-bold block">
              RÉSEAUX & PAGES
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#A1A1A1]">
              {CONTACT_INFO.socials.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{soc.name} — {soc.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#B6FF00] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to top */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <div className="space-y-0.5 text-center sm:text-left">
            <p className="text-[#A1A1A1] font-semibold tracking-wider">
              {CONTACT_INFO.tagline}
            </p>
            <p>© {new Date().getFullYear()} Daniel Dossou M. — Tous droits réservés.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A1A1A1] hover:text-[#B6FF00] transition-colors cursor-pointer group"
          >
            <span>RETOUR EN HAUT</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#B6FF00] group-hover:text-black transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
