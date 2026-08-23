import { useState, FormEvent } from 'react';
import { Sparkles, X, MessageSquare, ArrowUpRight, Send, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface AIAssistantProps {
  onNavigate: (sectionId: string) => void;
}

export default function AIAssistant({ onNavigate }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: "Bonjour 👋 Je suis l'assistant créatif de Daniel Dossou. Comment puis-je vous aider aujourd'hui ?",
    },
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    { label: 'Voir les projets', target: 'works', reply: "Je vous emmène directement à la sélection des réalisations de Daniel." },
    { label: 'Découvrir les services', target: 'services', reply: "Voici les 6 grands pôles d'expertise de Daniel : Branding, Affiches, Social Media, Retouche Photo, AI Creative et UI Design." },
    { label: 'Outils maîtrisés', target: 'outils', reply: "Daniel maîtrise parfaitement Photoshop, Illustrator, Figma ainsi que les moteurs d'IA générative." },
    { label: 'Contacter Daniel', target: 'contact', reply: "Vous pouvez joindre Daniel directement par WhatsApp au (+229) 01 44 79 00 49 ou par email à danieldossou32@gmail.com." },
  ];

  const handleQuickPrompt = (prompt: { label: string; target?: string; reply: string }) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: prompt.label },
      { sender: 'ai', text: prompt.reply },
    ]);

    if (prompt.target) {
      setTimeout(() => {
        onNavigate(prompt.target!);
      }, 400);
    }
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    let aiReply = "Merci pour votre message ! Pour discuter directement de votre besoin spécifique avec Daniel, je vous invite à cliquer sur 'Contacter Daniel' ou lui envoyer un message sur WhatsApp.";
    const lower = userText.toLowerCase();

    if (lower.includes('prix') || lower.includes('tarif') || lower.includes('devis') || lower.includes('combien')) {
      aiReply = "Les tarifs dépendent de l'envergure du projet. Vous pouvez obtenir un devis personnalisé très rapidement en remplissant le brief de contact ou via WhatsApp au (+229) 01 44 79 00 49.";
    } else if (lower.includes('ia') || lower.includes('intelligence') || lower.includes('midjourney')) {
      aiReply = "Daniel utilise l'IA comme un accélérateur d'exploration conceptuelle, mais toutes les compositions sont travaillées et finalisées rigoureusement sous Photoshop et Illustrator.";
    } else if (lower.includes('projet') || lower.includes('portfolio') || lower.includes('travail')) {
      aiReply = "Daniel a réalisé de nombreuses créations en identité de marque, affiches d'événements, retouche haute couture et design digital. Découvrez la section 'Selected Works' !";
    }

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userText },
      { sender: 'ai', text: aiReply },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative px-4 py-3 rounded-full bg-[#111111] text-[#FAFAF7] border border-white/20 shadow-2xl hover:border-[#B6FF00] transition-all duration-300 flex items-center gap-2 group cursor-pointer active:scale-95"
          data-cursor="AI ✦"
          aria-label="Ouvrir l'assistant créatif IA"
        >
          {/* Subtle pulse badge */}
          <span className="w-2 h-2 rounded-full bg-[#B6FF00] animate-ping" />
          <Sparkles className="w-4 h-4 text-[#B6FF00] group-hover:rotate-12 transition-transform" />
          <span className="font-mono text-xs font-bold tracking-wider uppercase">
            ✦ AI
          </span>
        </button>
      )}

      {/* Assistant Modal Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] bg-[#111111] text-[#FAFAF7] rounded-3xl border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[520px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-[#181818] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-4 h-4 text-[#B6FF00]" />
              </div>
              <div>
                <span className="font-heading font-black text-sm text-white block leading-tight">
                  DD CREATIVE ASSISTANT
                </span>
                <span className="text-[10px] font-mono text-[#B6FF00] block">
                  En ligne • Prêt à répondre
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 max-h-[300px] text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#B6FF00] text-[#111111] font-medium rounded-br-none'
                      : 'bg-[#222222] text-[#E5E5E5] border border-white/10 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts Options */}
          <div className="p-3 bg-[#161616] border-t border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1A1] block mb-2 font-bold">
              Suggestions rapides :
            </span>
            <div className="flex flex-wrap gap-1.5">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickPrompt(p)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] font-mono text-white transition-colors cursor-pointer text-left"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#181818] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Posez une question sur le travail de Daniel..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-[#222222] border border-white/10 text-xs text-white placeholder-[#777777] focus:border-[#B6FF00] focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#B6FF00] text-[#111111] hover:bg-[#a3e600] transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
