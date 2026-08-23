import { Sparkles, Cpu, Layers, Eye, CheckCircle2, ArrowRight, Wand2 } from 'lucide-react';
import { aiArtImg, conqueteImg } from '../data/portfolioData';

export default function DesignAiSection() {
  const steps = [
    {
      step: '01',
      title: 'IDEA',
      subtitle: 'Stratégie & Intention Créative',
      description: 'Définition du concept, du message clé, de l’émotion recherchée et de la direction d’art humaine.',
      badge: 'HUMAN INTELLECT',
      icon: Eye,
      color: '#111111',
    },
    {
      step: '02',
      title: 'AI',
      subtitle: 'Génération & Exploration Conceptuelle',
      description: 'Prompt engineering de pointe pour explorer des mondes impossibles, des éclairages dramatiques et des matières uniques.',
      badge: 'EXPLORATION GEN-AI',
      icon: Sparkles,
      color: '#7C3AED',
    },
    {
      step: '03',
      title: 'DESIGN',
      subtitle: 'Construction & Composition Rigoureuse',
      description: 'Intégration sous Photoshop & Illustrator. Découpage, grilles, hiérarchie typographique et règles fondamentales du graphisme.',
      badge: 'GRAPHIC MASTERY',
      icon: Layers,
      color: '#111111',
    },
    {
      step: '04',
      title: 'REFINEMENT',
      subtitle: 'Retouche Chirurgicale & Color Grading',
      description: 'Séparation de fréquences, dodge & burn, rééclairage volumétrique et suppression des artefacts.',
      badge: 'CHIRURGICAL RETOUCH',
      icon: Wand2,
      color: '#111111',
    },
    {
      step: '05',
      title: 'FINAL RESULT',
      subtitle: 'Impact & Déploiement Haute Définition',
      description: 'Un visuel unique, crédible, percutant et prêt pour l’affichage urbain, le digital ou le print.',
      badge: 'IMPACT LIVRÉ',
      icon: CheckCircle2,
      color: '#B6FF00',
    },
  ];

  return (
    <section id="design-ia" className="py-24 sm:py-32 bg-[#FAFAF7] border-t border-black/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#B6FF00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#7C3AED] uppercase">
                04 — MANIFESTE DESIGN × AI
              </span>
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] leading-[0.95] tracking-tighter uppercase">
              L'IA EST <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#111111]">
                MON OUTIL.
              </span> <br />
              LE DESIGN EST <br />
              <span className="bg-[#111111] text-[#B6FF00] px-3 py-0.5 rounded-lg inline-block">
                MON LANGAGE.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 text-base sm:text-lg text-[#737373] leading-relaxed pt-2">
            <p className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm">
              <strong className="text-[#111111] block mb-2 font-bold font-heading text-lg">
                Pourquoi Daniel Dossou fait la différence ?
              </strong>
              L'intelligence artificielle me permet d'explorer rapidement des concepts, des scènes et des univers visuels.
              <br /><br />
              <strong className="text-[#111111]">Mais l'IA ne remplace pas mon travail de designer.</strong> Je sélectionne, dirige, retouche, compose et finalise chaque création avec les outils professionnels du design (Photoshop, Illustrator, Figma).
            </p>
          </div>
        </div>

        {/* 5-Step Pipeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSpecial = item.step === '02' || item.step === '05';

            return (
              <div
                key={item.step}
                className={`relative p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between group ${
                  isSpecial && item.step === '02'
                    ? 'bg-gradient-to-b from-[#7C3AED]/10 to-white border-2 border-[#7C3AED]/40 shadow-md'
                    : isSpecial && item.step === '05'
                    ? 'bg-[#111111] text-[#FAFAF7] border-2 border-[#B6FF00] shadow-xl'
                    : 'bg-white text-[#111111] border border-black/10 hover:border-black/30 shadow-xs'
                }`}
              >
                <div>
                  {/* Step number and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xl font-black ${item.step === '05' ? 'text-[#B6FF00]' : item.step === '02' ? 'text-[#7C3AED]' : 'text-[#111111]'}`}>
                      {item.step}
                    </span>
                    <Icon className={`w-5 h-5 ${item.step === '05' ? 'text-[#B6FF00]' : item.step === '02' ? 'text-[#7C3AED]' : 'text-[#737373]'}`} />
                  </div>

                  <h3 className={`font-heading font-black text-2xl uppercase tracking-tight mb-1 ${item.step === '05' ? 'text-[#FAFAF7]' : 'text-[#111111]'}`}>
                    {item.title}
                  </h3>
                  <span className={`text-[11px] font-mono uppercase tracking-wider block mb-3 font-semibold ${item.step === '05' ? 'text-[#B6FF00]' : item.step === '02' ? 'text-[#7C3AED]' : 'text-[#737373]'}`}>
                    {item.subtitle}
                  </span>

                  <p className={`text-xs leading-relaxed ${item.step === '05' ? 'text-[#A1A1A1]' : 'text-[#737373]'}`}>
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5">
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    item.step === '05'
                      ? 'bg-[#B6FF00] text-[#111111]'
                      : item.step === '02'
                      ? 'bg-[#7C3AED] text-white'
                      : 'bg-black/5 text-[#737373]'
                  }`}>
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
