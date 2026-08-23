import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { logoImg, CONTACT_INFO } from '../data/portfolioData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'who-i-am', 'works', 'creative-engine', 'design-ia', 'services', 'processus', 'apropos', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: 'works' },
    { label: 'ABOUT', href: 'apropos' },
    { label: 'SERVICES', href: 'services' },
    { label: 'PROCESS', href: 'processus' },
    { label: 'CONTACT', href: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Floating Capsule Bar */}
          <nav
            className={`w-full flex items-center justify-between px-4 sm:px-6 py-3 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-[#FAFAF7]/90 backdrop-blur-xl border border-black/10 shadow-lg shadow-black/5 py-2.5'
                : 'bg-[#FAFAF7]/75 backdrop-blur-md border border-black/5 shadow-xs'
            }`}
          >
            {/* Zone 1: Brand title / Monogram */}
            <button
              onClick={() => handleLinkClick('hero')}
              className="flex items-center space-x-3 group text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B6FF00]"
              data-cursor="HOME"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#111111] overflow-hidden p-1 flex items-center justify-center tracking-tighter group-hover:scale-105 transition-transform shadow-xs">
                  <img
                    src={logoImg}
                    alt="Daniel Dossou M."
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#111111] group-hover:text-[#7C3AED] transition-colors whitespace-nowrap">
                    DANIEL DOSSOU
                  </span>
                  <span className="text-[9px] font-mono text-[#737373] tracking-widest uppercase hidden sm:block">
                    CREATIVE STUDIO
                  </span>
                </div>
              </div>
            </button>

            {/* Zone 2: Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-1 sm:space-x-2 bg-black/[0.04] px-3 py-1 rounded-full border border-black/[0.03]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#111111] text-[#B6FF00] shadow-xs'
                        : 'text-[#737373] hover:text-[#111111] hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Zone 3: Primary Action (Desktop + Tablet) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full bg-black/5 hover:bg-black/10 text-xs font-mono font-semibold text-[#111111] transition-colors flex items-center gap-1.5"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#111111]" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              <button
                onClick={() => handleLinkClick('contact')}
                className="px-5 py-2 rounded-full bg-[#111111] text-[#FAFAF7] hover:bg-[#111111] hover:text-[#B6FF00] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 group shadow-sm active:scale-95 border border-black"
                data-cursor="TALK ↗"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B6FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-[#111111]"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-9 h-9 rounded-full bg-[#111111] text-[#FAFAF7] flex items-center justify-center focus:outline-none cursor-pointer"
                aria-label="Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAFAF7] flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-black/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#111111] overflow-hidden p-1 flex items-center justify-center shadow-xs">
                <img
                  src={logoImg}
                  alt="Daniel Dossou"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-bold text-base tracking-wider uppercase text-[#111111]">
                DANIEL DOSSOU
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-[#111111] cursor-pointer"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col justify-center space-y-4 py-8">
            {navLinks.map((link, idx) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left font-heading font-black text-3xl sm:text-4xl text-[#111111] hover:text-[#7C3AED] transition-colors py-2 flex items-center justify-between border-b border-black/5"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#737373]">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-black/10">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-4 rounded-full bg-[#111111] text-[#B6FF00] font-heading font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>LET'S TALK ↗</span>
            </button>

            <div className="flex items-center justify-between text-xs font-mono text-[#737373] pt-2">
              <a href="mailto:danieldossou32@gmail.com" className="hover:text-[#111111]">
                danieldossou32@gmail.com
              </a>
              <span>(+229) 01 44 79 00 49</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
