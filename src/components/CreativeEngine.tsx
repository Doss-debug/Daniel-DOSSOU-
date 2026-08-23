import { useState } from 'react';
import { CREATIVE_ENGINE_NODES, CreativeEngineNode, logoImg } from '../data/portfolioData';
import { Cpu, Sparkles, Layers, ArrowUpRight, Zap } from 'lucide-react';

export default function CreativeEngine() {
  const [activeNode, setActiveNode] = useState<CreativeEngineNode>(
    CREATIVE_ENGINE_NODES.find((n) => n.id === 'center') || CREATIVE_ENGINE_NODES[0]
  );
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const centerNode = CREATIVE_ENGINE_NODES.find((n) => n.id === 'center')!;
  const outerNodes = CREATIVE_ENGINE_NODES.filter((n) => n.id !== 'center');

  return (
    <section id="creative-engine" className="py-24 sm:py-32 bg-[#111111] text-[#FAFAF7] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B6FF00]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#B6FF00]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#B6FF00] uppercase">
              03 — INTERACTIVE WORKFLOW NETWORK
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-[#FAFAF7] leading-none tracking-tighter uppercase">
            MY CREATIVE <br />
            <span className="text-[#B6FF00] italic">ENGINE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
            Un écosystème interconnecté où la vision humaine dirige les outils de création les plus exigeants et la puissance générative de l'IA.
          </p>
        </div>

        {/* Interactive Network Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center: Interactive SVG Canvas (8 cols) */}
          <div className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] bg-[#161616] rounded-3xl border border-white/10 p-6 overflow-hidden flex items-center justify-center shadow-2xl shadow-black">
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            {/* SVG Connecting Lines & Signals */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B6FF00" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {outerNodes.map((node) => {
                const isConnected = hoveredNodeId === node.id || activeNode.id === node.id;
                return (
                  <g key={`line-${node.id}`}>
                    {/* Background faint line */}
                    <line
                      x1={`${centerNode.x}%`}
                      y1={`${centerNode.y}%`}
                      x2={`${node.x}%`}
                      y2={`${node.y}%`}
                      stroke={isConnected ? '#B6FF00' : 'rgba(255,255,255,0.15)'}
                      strokeWidth={isConnected ? '2.5' : '1.5'}
                      strokeDasharray={isConnected ? 'none' : '4 4'}
                      className="transition-all duration-300"
                    />

                    {/* Animated Pulsing Signal along line */}
                    {isConnected && (
                      <circle r="4" fill="#B6FF00">
                        <animateMotion
                          path={`M ${centerNode.x * 6} ${centerNode.y * 4} L ${node.x * 6} ${node.y * 4}`}
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Center Core Node: DANIEL DOSSOU */}
            <div
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${centerNode.x}%`, top: `${centerNode.y}%` }}
              onClick={() => setActiveNode(centerNode)}
              onMouseEnter={() => setHoveredNodeId('center')}
              onMouseLeave={() => setHoveredNodeId(null)}
              data-cursor="CORE"
            >
              <div className="relative">
                {/* Glowing Aura */}
                <div className="absolute inset-0 rounded-2xl bg-[#B6FF00] blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />
                
                <div className="relative px-5 py-4 rounded-2xl bg-[#111111] border-2 border-[#B6FF00] text-center shadow-xl group-hover:scale-105 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-black overflow-hidden p-1.5 mx-auto flex items-center justify-center mb-1.5 border border-[#B6FF00]/40 shadow-xs">
                    <img src={logoImg} alt="Daniel Dossou" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-heading font-black text-xs sm:text-sm text-white tracking-wider block">
                    DANIEL DOSSOU
                  </span>
                  <span className="text-[9px] font-mono uppercase text-[#B6FF00] block mt-0.5 font-bold">
                    CORE STRATEGY
                  </span>
                </div>
              </div>
            </div>

            {/* Outer Nodes */}
            {outerNodes.map((node) => {
              const isActive = activeNode.id === node.id;
              const isHovered = hoveredNodeId === node.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNode(node)}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left group ${
                    isActive || isHovered
                      ? 'bg-white text-black border-[#B6FF00] scale-110 shadow-2xl shadow-[#B6FF00]/20'
                      : 'bg-[#1F1F1F] text-white border-white/10 hover:border-white/30'
                  }`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  data-cursor="NODE"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive || isHovered ? 'bg-[#111111] text-[#B6FF00]' : 'bg-white/10 text-white'
                      }`}
                    >
                      {node.badge}
                    </span>
                  </div>
                  <span className="font-heading font-bold text-xs sm:text-sm block tracking-wide">
                    {node.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Node Detail Inspector Card (4 cols) */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#181818] border border-white/10 space-y-6 shadow-xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-sm text-black"
                  style={{ backgroundColor: activeNode.color }}
                >
                  {activeNode.badge}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block font-bold">
                    NŒUD ACTIF
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {activeNode.name}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-[#B6FF00]">
                {activeNode.category.toUpperCase()}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#B6FF00] font-bold block">
                Rôle & Fonction
              </span>
              <p className="text-sm font-medium text-white">
                {activeNode.role}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#A1A1A1] block font-bold">
                Description du Workflow
              </span>
              <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                {activeNode.description}
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-[#A1A1A1] block font-bold">
                Spécialités Clés
              </span>
              <div className="flex flex-wrap gap-2">
                {activeNode.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#A1A1A1] flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#B6FF00]" />
              <span>Cliquez sur chaque nœud pour explorer le réseau.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
