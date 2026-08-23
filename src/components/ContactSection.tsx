import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { Mail, Phone, MessageSquare, ArrowUpRight, Send, Check, Copy } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Identité Visuelle & Branding',
    budget: 'Standard',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);

    const whatsappMessage = `*Nouveau Projet - Contact Portfolio*\n\n*Nom:* ${formData.name}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Budget:* ${formData.budget}\n*Message:* ${formData.message}`;
    const url = `https://wa.me/2290144790049?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#111111] text-[#FAFAF7] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B6FF00]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Headlines, Direct Contacts & Socials */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#B6FF00] animate-ping" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#B6FF00] uppercase">
                  12 — INITIALISER UN PROJET
                </span>
              </div>

              <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#FAFAF7] leading-[0.95] tracking-tighter uppercase">
                VOUS AVEZ <br />
                <span className="text-[#B6FF00]">
                  UNE IDÉE ?
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-[#A1A1A1] max-w-md font-light leading-relaxed">
                Transformons-la en quelque chose de remarquable.
              </p>
            </div>

            {/* Quick Action Direct Buttons */}
            <div className="space-y-4 pt-4">
              {/* WhatsApp Primary */}
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 hover:border-[#B6FF00] transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block font-bold">
                      WHATSAPP DIRECT
                    </span>
                    <span className="font-heading font-bold text-base text-white">
                      (+229) 01 44 79 00 49
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#B6FF00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Email Direct */}
              <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block font-bold">
                      EMAIL OFFICIEL
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="font-heading font-bold text-sm sm:text-base text-white hover:text-[#B6FF00] transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-[#B6FF00]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phones List */}
              <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A1A1A1] font-bold">
                  <Phone className="w-3.5 h-3.5 text-[#B6FF00]" />
                  <span>LIGNES TÉLÉPHONIQUES</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.raw}`}
                      className="text-sm font-mono text-white hover:text-[#B6FF00] transition-colors flex items-center gap-2"
                    >
                      <span className="text-[10px] text-[#A1A1A1]">{phone.label}:</span>
                      <span>{phone.number}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A1A1A1] block font-bold mb-3">
                  RÉSEAUX PROFESSIONNELS
                </span>
                <div className="flex flex-wrap gap-2">
                  {CONTACT_INFO.socials.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white hover:text-[#B6FF00] transition-colors"
                    >
                      {soc.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#181818] border border-white/10 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B6FF00] block mb-1">
                  BRIEF DE PROJET RAPIDE
                </span>
                <h3 className="font-heading font-black text-2xl text-white uppercase">
                  Démarrer un projet ↗
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-1.5">
                    Votre Nom ou Entreprise *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Jean Dupont / Startup X"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-sm text-white placeholder-[#666666] focus:border-[#B6FF00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-1.5">
                    Votre Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ex: contact@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-sm text-white placeholder-[#666666] focus:border-[#B6FF00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-1.5">
                    Type de prestation recherchée
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-sm text-white focus:border-[#B6FF00] focus:outline-none"
                  >
                    <option value="Identité Visuelle & Branding">Identité Visuelle & Branding</option>
                    <option value="Design Publicitaire & Affiches">Design Publicitaire & Affiches</option>
                    <option value="Social Media Design">Social Media Design</option>
                    <option value="Retouche Photo Professionnelle">Retouche Photo Professionnelle</option>
                    <option value="AI Creative & Concept Visuals">AI Creative & Concept Visuals</option>
                    <option value="UI Design & Expérience Digitale">UI Design & Expérience Digitale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-1.5">
                    Décrivez votre besoin en quelques lignes *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Parlez-moi de vos objectifs, délais souhaités, format attendu..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-sm text-white placeholder-[#666666] focus:border-[#B6FF00] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#B6FF00] text-[#111111] font-heading font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#a3e600] transition-all shadow-lg cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVOYER MON BRIEF DIRECTEMENT</span>
                </button>

                {isSent && (
                  <div className="p-3 rounded-xl bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-xs font-mono text-[#B6FF00] text-center">
                    Redirection vers WhatsApp pour l'envoi immédiat de votre brief...
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
