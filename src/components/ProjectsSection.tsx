import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { INITIAL_PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Plus, Eye, Sparkles, X, ChevronLeft, ChevronRight, Edit3, Trash2, Image as ImageIcon } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('dd_portfolio_projects_v4');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_PROJECTS;
      }
    }
    return INITIAL_PROJECTS;
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);

  useEffect(() => {
    localStorage.setItem('dd_portfolio_projects_v4', JSON.stringify(projects));
  }, [projects]);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding & Identity' },
    { id: 'advertising', label: 'Campaigns & Posters' },
    { id: 'ai_art', label: 'AI Art & Concept' },
    { id: 'social_media', label: 'Social Media' },
    { id: 'retouching', label: 'Photo Retouching' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const selectedProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  const handleNextProject = () => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length);
  };

  const handlePrevProject = () => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject?.title || !editingProject?.subtitle) return;

    if (editingProject.id) {
      setProjects((prev) =>
        prev.map((p) => (p.id === editingProject.id ? ({ ...p, ...editingProject } as Project) : p))
      );
    } else {
      const nextNum = (projects.length + 1).toString().padStart(2, '0');
      const newProj: Project = {
        id: `custom-${Date.now()}`,
        number: nextNum,
        title: editingProject.title || 'Nouveau Projet',
        subtitle: editingProject.subtitle || 'Projet Créatif',
        category: (editingProject.category as any) || 'branding',
        categoryLabel: editingProject.categoryLabel || 'Branding & Identité',
        description: editingProject.description || 'Description du projet...',
        services: editingProject.services || ['Direction artistique', 'Design graphique'],
        tools: editingProject.tools || ['Photoshop', 'Illustrator'],
        imageUrl: editingProject.imageUrl || 'https://picsum.photos/seed/design/1200/800',
        year: editingProject.year || new Date().getFullYear().toString(),
        client: editingProject.client || 'Client Partenaire',
        deliverables: editingProject.deliverables || ['Fichiers finaux HD'],
        challenge: editingProject.challenge || 'Objectif créatif et stratégique',
        solution: editingProject.solution || 'Direction visuelle et finalisation',
        isCustom: true,
      };
      setProjects((prev) => [newProj, ...prev]);
    }

    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Voulez-vous supprimer ce projet ?')) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
      setSelectedProjectIndex(null);
    }
  };

  const handleResetDefaults = () => {
    if (confirm('Réinitialiser avec la sélection officielle ?')) {
      setProjects(INITIAL_PROJECTS);
      localStorage.removeItem('dd_portfolio_projects_v4');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProject((prev) => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="works" className="py-24 sm:py-32 bg-[#FAFAF7] border-t border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
              <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
                02 — SELECTED WORKS
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] leading-none tracking-tighter uppercase">
              SELECTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#111111] to-[#7C3AED]">
                WORKS.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#737373] max-w-xl font-normal">
              Une sélection de projets où stratégie, design et technologie se rencontrent.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setEditingProject({
                  title: '',
                  subtitle: '',
                  category: 'branding',
                  categoryLabel: 'Branding & Identité',
                  description: '',
                  services: ['Direction artistique'],
                  tools: ['Photoshop', 'Illustrator'],
                  year: '2026',
                  imageUrl: '',
                });
                setIsManagerOpen(true);
              }}
              className="px-4 py-2.5 rounded-full bg-white border border-black/15 hover:border-black text-xs font-mono font-bold uppercase tracking-wider text-[#111111] transition-all cursor-pointer shadow-xs flex items-center gap-2"
            >
              <Plus className="w-3.5 h-3.5 text-[#111111]" />
              <span>Gérer les projets</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#111111] text-[#B6FF00] font-bold shadow-xs'
                  : 'bg-white text-[#737373] hover:text-[#111111] border border-black/10 hover:border-black/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => {
            // Asymmetric rhythm: alternating span sizes
            const isHeroCard = idx % 3 === 0;
            const spanClass = isHeroCard ? 'md:col-span-12 lg:col-span-8' : idx % 3 === 1 ? 'md:col-span-6 lg:col-span-4' : 'md:col-span-6 lg:col-span-6';
            const aspectClass = isHeroCard ? 'aspect-[16/10] sm:aspect-[21/11]' : 'aspect-[4/3]';

            return (
              <article
                key={project.id}
                onClick={() => setSelectedProjectIndex(idx)}
                className={`${spanClass} group relative bg-white rounded-3xl border border-black/10 overflow-hidden cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-8`}
                data-cursor="VIEW ↗"
              >
                <div>
                  {/* Top Meta Info */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#737373] uppercase tracking-widest pb-4 mb-4 border-b border-black/5">
                    <span className="font-bold text-[#111111]">{project.number}</span>
                    <span>{project.categoryLabel}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Visual Frame */}
                  <div className={`relative ${aspectClass} rounded-2xl overflow-hidden bg-[#111111] mb-6 border border-black/10`}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                    {/* Floating Hover Badge */}
                    <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#111111] text-[#B6FF00] font-heading font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 shadow-lg">
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] group-hover:text-[#7C3AED] transition-colors leading-tight uppercase tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#737373] uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-[#737373] line-clamp-2 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tools & Action */}
                <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#F2F2EC] text-[#111111] border border-black/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="w-9 h-9 rounded-full bg-black/5 group-hover:bg-[#111111] group-hover:text-[#B6FF00] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Immersive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#FAFAF7] rounded-3xl border border-black/20 overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Header Bar */}
            <div className="p-6 border-b border-black/10 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#111111] text-[#B6FF00] font-heading font-black text-xs flex items-center justify-center">
                  {selectedProject.number}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase text-[#737373] tracking-widest block font-bold">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevProject}
                  className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#111111] cursor-pointer"
                  title="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextProject}
                  className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#111111] cursor-pointer"
                  title="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedProjectIndex(null)}
                  className="p-2 ml-2 rounded-full bg-[#111111] text-[#FAFAF7] hover:text-[#B6FF00] cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              
              {/* Grand Showcase Visual */}
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-[#111111] max-h-[480px]">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Story & Concept */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-xs font-mono uppercase text-[#7C3AED] font-bold tracking-widest block">
                    {selectedProject.subtitle}
                  </span>
                  <h4 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] leading-tight">
                    {selectedProject.description}
                  </h4>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {selectedProject.challenge && (
                      <div className="p-5 rounded-2xl bg-white border border-black/10 space-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#737373] block">
                          OBJECTIF & DÉFI
                        </span>
                        <p className="text-xs sm:text-sm text-[#111111] leading-relaxed">
                          {selectedProject.challenge}
                        </p>
                      </div>
                    )}
                    {selectedProject.solution && (
                      <div className="p-5 rounded-2xl bg-[#111111] text-[#FAFAF7] space-y-2 border border-black">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B6FF00] block">
                          CONCEPT & DIRECTION ARTISTIQUE
                        </span>
                        <p className="text-xs sm:text-sm text-[#FAFAF7] leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Meta Sidebar */}
                <div className="lg:col-span-4 space-y-6 p-6 rounded-2xl bg-white border border-black/10">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737373] font-bold block mb-2">
                      OUTILS UTILISÉS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-[#FAFAF7] border border-black/10 text-xs font-mono text-[#111111]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737373] font-bold block mb-2">
                      LIVRABLES & SERVICES
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#111111]">
                      {(selectedProject.deliverables || selectedProject.services).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.client && (
                    <div className="pt-2 border-t border-black/10">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#737373] font-bold block">
                        CLIENT / CADRE
                      </span>
                      <span className="text-sm font-bold text-[#111111]">
                        {selectedProject.client}
                      </span>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Modal Bottom Footer Navigation */}
            <div className="p-5 border-t border-black/10 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProjectIndex(null)}
                className="text-xs font-mono font-bold uppercase tracking-widest text-[#737373] hover:text-[#111111] cursor-pointer"
              >
                ← BACK TO WORK
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevProject}
                  className="px-4 py-2 rounded-full border border-black/15 text-xs font-mono font-bold uppercase tracking-wider text-[#111111] hover:bg-black/5"
                >
                  PREVIOUS PROJECT
                </button>
                <button
                  onClick={handleNextProject}
                  className="px-4 py-2 rounded-full bg-[#111111] text-[#B6FF00] text-xs font-mono font-bold uppercase tracking-wider hover:bg-black"
                >
                  NEXT PROJECT →
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Project Manager Modal */}
      {isManagerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl border border-black/10 overflow-hidden flex flex-col shadow-2xl">
            <div className="p-5 border-b border-black/10 flex items-center justify-between bg-[#FAFAF7]">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#111111]" />
                <h3 className="font-heading font-bold text-lg text-[#111111]">
                  Gestionnaire de Réalisations
                </h3>
              </div>
              <button
                onClick={() => setIsManagerOpen(false)}
                className="p-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[#111111]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="p-6 overflow-y-auto space-y-4">
              <p className="text-xs text-[#737373]">
                Ajoutez vos réalisations avec vos propres visuels, titres et descriptifs.
              </p>

              <div>
                <label className="block text-xs font-mono text-[#737373] uppercase mb-1">
                  Titre du projet *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: NOBLE SERVICE ou AFFICHE CONQUÊTE"
                  value={editingProject?.title || ''}
                  onChange={(e) => setEditingProject((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 bg-[#FAFAF7] border border-black/15 rounded-xl text-sm text-[#111111] focus:border-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#737373] uppercase mb-1">
                  Sous-titre / Spécialité *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Brand Identity / Graphic Design"
                  value={editingProject?.subtitle || ''}
                  onChange={(e) => setEditingProject((prev) => ({ ...prev, subtitle: e.target.value }))}
                  className="w-full px-3 py-2 bg-[#FAFAF7] border border-black/15 rounded-xl text-sm text-[#111111] focus:border-black focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#737373] uppercase mb-1">
                    Catégorie
                  </label>
                  <select
                    value={editingProject?.category || 'branding'}
                    onChange={(e) => {
                      const val = e.target.value as any;
                      const labelMap: Record<string, string> = {
                        branding: 'Branding & Identity',
                        advertising: 'Campaigns & Posters',
                        ai_art: 'AI Art & Concept',
                        social_media: 'Social Media',
                        retouching: 'Photo Retouching',
                      };
                      setEditingProject((prev) => ({
                        ...prev,
                        category: val,
                        categoryLabel: labelMap[val] || val,
                      }));
                    }}
                    className="w-full px-3 py-2 bg-[#FAFAF7] border border-black/15 rounded-xl text-sm text-[#111111] focus:border-black focus:outline-none"
                  >
                    <option value="branding">Branding & Identity</option>
                    <option value="advertising">Campaigns & Posters</option>
                    <option value="ai_art">AI Art & Concept</option>
                    <option value="social_media">Social Media</option>
                    <option value="retouching">Photo Retouching</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#737373] uppercase mb-1">
                    Année / Client
                  </label>
                  <input
                    type="text"
                    placeholder="2026 • Client X"
                    value={editingProject?.year || '2026'}
                    onChange={(e) => setEditingProject((prev) => ({ ...prev, year: e.target.value }))}
                    className="w-full px-3 py-2 bg-[#FAFAF7] border border-black/15 rounded-xl text-sm text-[#111111] focus:border-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#737373] uppercase mb-1">
                  Description du projet
                </label>
                <textarea
                  rows={3}
                  placeholder="Décrivez la réalisation, l’objectif et le résultat obtenu..."
                  value={editingProject?.description || ''}
                  onChange={(e) => setEditingProject((prev) => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 bg-[#FAFAF7] border border-black/15 rounded-xl text-sm text-[#111111] focus:border-black focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono text-[#737373] uppercase">
                  Visuel du projet (Fichier ou URL)
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="URL de l'image (https://...)"
                    value={editingProject?.imageUrl || ''}
                    onChange={(e) => setEditingProject((prev) => ({ ...prev, imageUrl: e.target.value }))}
                    className="flex-1 px-3 py-2 bg-[#FAFAF7] border border-black/15 rounded-xl text-sm text-[#111111] focus:border-black focus:outline-none"
                  />
                  <label className="px-4 py-2 rounded-xl bg-black/5 hover:bg-black/10 text-xs text-[#111111] font-mono cursor-pointer flex items-center justify-center gap-1.5 shrink-0 border border-black/10">
                    <ImageIcon className="w-4 h-4 text-[#111111]" />
                    <span>Choisir fichier</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="text-xs text-[#737373] hover:text-[#111111] underline cursor-pointer"
                >
                  Réinitialiser les exemples
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsManagerOpen(false)}
                    className="px-4 py-2 rounded-full bg-black/5 text-[#737373] text-xs font-mono hover:text-[#111111]"
                  >
                    Fermer
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#111111] text-[#B6FF00] font-heading font-bold text-xs uppercase tracking-wider"
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
