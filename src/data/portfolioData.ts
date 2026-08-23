import { Project, Service, ToolItem, Testimonial, FaqItem } from '../types';

import portraitImg from '../assets/images/daniel_original_photo.png';
// User's official logo from Google Drive
export const logoImg = 'https://lh3.googleusercontent.com/d/1ngRBxXV7R3Su4PXxmA1x4vOnQXVh6jH-';
import nobleServiceImg from '../assets/images/branding_noble_service_1787487228311.jpg';
import conqueteImg from '../assets/images/conquete_campaign_1787487242919.jpg';
import aiArtImg from '../assets/images/ai_creative_art_1787487257239.jpg';
import retouchBeforeImg from '../assets/images/retouch_before_1787487273816.jpg';
import retouchAfterImg from '../assets/images/retouch_after_1787487287631.jpg';

export { portraitImg, nobleServiceImg, conqueteImg, aiArtImg, retouchBeforeImg, retouchAfterImg };

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export const STATISTICS_DATA: StatItem[] = [
  {
    value: '50+',
    label: 'PROJETS RÉALISÉS',
    description: 'Identités visuelles, campagnes publicitaires et directions artistiques livrées avec succès.',
  },
  {
    value: '10+',
    label: 'CLIENTS & MARQUES',
    description: 'Entreprises, entrepreneurs et créateurs accompagnés dans leur croissance visuelle.',
  },
  {
    value: '03',
    label: 'OUTILS MAÎTRISÉS',
    description: 'Photoshop, Illustrator et Figma exploités au plus haut niveau d’exigence.',
  },
  {
    value: '∞',
    label: 'POSSIBILITÉS CRÉATIVES',
    description: 'L’alliance du design humain et de l’intelligence artificielle générative.',
  },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-01',
    number: '01',
    title: 'NOBLE SERVICE',
    subtitle: 'Brand Identity / Graphic Design',
    category: 'branding',
    categoryLabel: 'Brand Identity / Graphic Design',
    description: 'Conception d’un univers d’identité de marque complet : logotype statutaire, typographies sur-mesure, palette d’entreprise et papeterie corporate pour asseoir une présence premium.',
    services: ['Identité visuelle', 'Logotype vectoriel', 'Charte graphique', 'Direction photographique'],
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    imageUrl: nobleServiceImg,
    year: '2026',
    client: 'Noble Service Group',
    deliverables: ['Logotype principal & monogrammes', 'Guide de marque 40 pages', 'Cartes de visite & papier entête', 'Déclinaisons digitales'],
    challenge: 'Créer une image de marque pérenne et statutaire inspirant une confiance immédiate aux clients grands comptes.',
    solution: 'Création d’un symbole épuré combiné à un contraste noir/blanc/or subtil et une grille de composition typographique stricte.'
  },
  {
    id: 'proj-02',
    number: '02',
    title: 'CONQUÊTE',
    subtitle: 'Event Campaign / Art Direction',
    category: 'advertising',
    categoryLabel: 'Event Campaign / Art Direction',
    description: 'Direction artistique et conception d’une campagne visuelle monumentale pour événement d’envergure. Visuels dynamiques pensés pour l’affichage urbain et le digital.',
    services: ['Direction artistique', 'Affiches grand format', 'Social media kit', 'Campagne de lancement'],
    tools: ['Adobe Photoshop', 'AI Art Direction', 'Illustrator'],
    imageUrl: conqueteImg,
    year: '2026',
    client: 'Festival & Conférence Conquête',
    deliverables: ['Affiches grand format 4x3 & abribus', 'Bannières promotionnelles web', 'Kit réseaux sociaux (Stories, Reels, Feed)', 'Passes VIP & signalétique'],
    challenge: 'Capter l’attention en moins d’une seconde dans un flux visuel saturé en milieu urbain et sur mobile.',
    solution: 'Typographie monumentale en néon, palette chromatique électrisante et gestion cinématique des éclairages de scène.'
  },
  {
    id: 'proj-03',
    number: '03',
    title: 'DANI GRAPHIC DESIGN',
    subtitle: 'Personal Branding / Creative Identity',
    category: 'branding',
    categoryLabel: 'Personal Branding',
    description: 'Identité personnelle et univers éditorial pour DaniGraphic. Scénographie studio, direction d’art minimaliste et positionnement haut de gamme.',
    services: ['Direction artistique', 'Scénographie studio', 'Retouche photo & Étalonnage', 'Charte visuelle'],
    tools: ['Adobe Photoshop', 'Illustrator', 'Lightroom'],
    imageUrl: portraitImg,
    year: '2026',
    client: 'Daniel Dossou M.',
    deliverables: ['Série visuelle studio haute définition', 'Key visuals éditoriaux', 'Monogramme DD & Logo officiel', 'Supports portfolio'],
    challenge: 'Affirmer un statut de Creative Director / Designer contemporain qui allie maîtrise classique et innovation.',
    solution: 'Composition studio épurée, intégration subtile d’œuvres en arrière-plan et contraste maîtrisé.'
  },
  {
    id: 'proj-04',
    number: '04',
    title: 'AI CREATIVE EXPERIMENTS',
    subtitle: 'AI Art Direction / Photoshop Compositing',
    category: 'ai_art',
    categoryLabel: 'AI Art Direction / Photoshop',
    description: 'Exploration d’univers visuels futuristes et concepts impossibles créés par IA, puis retravaillés chirurgicalement sous Photoshop calque par calque.',
    services: ['AI Prompt Engineering', 'Compositing Photoshop', 'Retouche de matière & lumière', 'Color grading'],
    tools: ['AI Engines', 'Adobe Photoshop', 'Camera Raw'],
    imageUrl: aiArtImg,
    year: '2026',
    client: 'Laboratoire Créatif DaniGraphic',
    deliverables: ['Key visuals 8K', 'Explorations sculpturales & fluides', 'Pochettes & Artworks'],
    challenge: 'Dépasser l’aspect générique de l’IA brute pour créer des pièces d’art visuel cohérentes, tangibles et uniques.',
    solution: 'Combinaison de prompts spécifiques, retouches manuelles minutieuses et étalonnage cinématique personnalisé.'
  },
  {
    id: 'proj-05',
    number: '05',
    title: 'SOCIAL MEDIA CAMPAIGNS',
    subtitle: 'Social Media Design / High Engagement',
    category: 'social_media',
    categoryLabel: 'Social Media Design',
    description: 'Système graphique complet pour marques et créateurs sur les réseaux sociaux. Formats carrousels, stories et bannières optimisés pour la conversion.',
    services: ['Direction de feed', 'Carrousels narratifs', 'Templates dynamiques', 'Covers & vignettes'],
    tools: ['Figma', 'Adobe Photoshop', 'Illustrator'],
    imageUrl: nobleServiceImg,
    year: '2026',
    client: 'Marques D2C & Créateurs',
    deliverables: ['Templates Figma réutilisables', 'Grille éditoriale 30 jours', 'Kit d’icônes personnalisées'],
    challenge: 'Stopper le scroll et maximiser le taux de rétention sur mobile.',
    solution: 'Hiérarchie visuelle claire, typographies contrastées et accroches impactantes.'
  },
  {
    id: 'proj-06',
    number: '06',
    title: 'CREATIVE PHOTO & RETOUCH',
    subtitle: 'Photo Retouching / Creative Design',
    category: 'retouching',
    categoryLabel: 'Photo Retouching / Creative Design',
    description: 'Sublimation de clichés bruts en images publicitaires et éditoriales de prestige : séparation de fréquences, dodge & burn, color grading cinématographique.',
    services: ['Retouche de peau haute fidélité', 'Détourage & Compositing', 'Color grading cinématographique', 'Effets d’éclairage'],
    tools: ['Adobe Photoshop', 'Camera Raw', 'Lightroom'],
    imageUrl: retouchAfterImg,
    year: '2026',
    client: 'Campagnes Mode & Portraits VIP',
    deliverables: ['Fichiers PSD multi-calques', 'Exports haute définition 300 DPI', 'Versions web optimisées'],
    challenge: 'Sublimer l’image tout en préservant le grain naturel et la texture authentique des sujets.',
    solution: 'Micro-retouche non destructive, harmonisation chromatique et intégration de lumières directionnelles.'
  }
];

export interface CreativeEngineNode {
  id: string;
  name: string;
  category: 'core' | 'tool' | 'discipline';
  role: string;
  description: string;
  x: number; // percentage in SVG coordinate space (0-100)
  y: number;
  color: string;
  badge: string;
  tools: string[];
}

export const CREATIVE_ENGINE_NODES: CreativeEngineNode[] = [
  {
    id: 'center',
    name: 'DANIEL DOSSOU',
    category: 'core',
    role: 'Creative Director & AI Strategist',
    description: 'Le chef d’orchestre créatif : vision stratégique, direction artistique humaine et pilotage de chaque étape.',
    x: 50,
    y: 50,
    color: '#B6FF00',
    badge: 'LEAD',
    tools: ['Direction Artistique', 'Vision Stratégique', 'Design Management'],
  },
  {
    id: 'photoshop',
    name: 'PHOTOSHOP',
    category: 'tool',
    role: 'Retouche, Compositing & Textures',
    description: 'Manipulation pixel par pixel, détourage chirurgical, étalonnage colorimétrique et composition multi-calques avancée.',
    x: 20,
    y: 22,
    color: '#31A8FF',
    badge: 'PS',
    tools: ['Compositing', 'Dodge & Burn', 'Color Grading', 'Photomontage'],
  },
  {
    id: 'illustrator',
    name: 'ILLUSTRATOR',
    category: 'tool',
    role: 'Identité Vectorielle & Logos',
    description: 'Création de formes vectorielles pures, typographies sur-mesure, logotypes et préparation irréprochable pour le print.',
    x: 80,
    y: 22,
    color: '#FF9A00',
    badge: 'AI',
    tools: ['Logotypes', 'Vecteurs purs', 'Typographie', 'Print CMJN'],
  },
  {
    id: 'figma',
    name: 'FIGMA',
    category: 'tool',
    role: 'UI Design & Systèmes Visuels',
    description: 'Architecture d’écrans modernes, conception de design systems modulaires, prototypage interactif et grilles strictes.',
    x: 18,
    y: 78,
    color: '#A259FF',
    badge: 'FIG',
    tools: ['UI Design', 'Design Systems', 'Auto-layout', 'Prototypes'],
  },
  {
    id: 'ai',
    name: 'AI CREATIVE',
    category: 'tool',
    role: 'Génération & Exploration Conceptuelle',
    description: 'Exploration d’univers visuels audacieux, prompt engineering de pointe et génération de décors réalistes impossibles en photo classique.',
    x: 82,
    y: 78,
    color: '#7C3AED',
    badge: '✦ AI',
    tools: ['Prompt Engineering', 'Midjourney', 'Flux', 'Concept Art'],
  },
  {
    id: 'branding',
    name: 'BRANDING',
    category: 'discipline',
    role: 'Stratégie de Marque & Positionnement',
    description: 'Définition de l’ADN de marque, cohérence multicanale et conception de systèmes d’identité visuelle mémorables.',
    x: 50,
    y: 12,
    color: '#B6FF00',
    badge: 'BRAND',
    tools: ['Positionnement', 'Chartes Graphiques', 'Brand Guidelines'],
  },
  {
    id: 'retouching',
    name: 'RETOUCHING',
    category: 'discipline',
    role: 'Finition Haute Définition',
    description: 'Élévation de chaque détail visuel, correction de la lumière, séparation de fréquences et perfection du rendu final.',
    x: 50,
    y: 88,
    color: '#B6FF00',
    badge: 'HD',
    tools: ['Séparation de fréquences', 'Éclairage volumétrique', 'Texture HD'],
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'srv-01',
    number: '01',
    title: 'Identité Visuelle & Branding',
    tag: 'Fondation de marque',
    shortDescription: 'Logos, branding, direction artistique et supports de communication pour construire une marque forte et mémorable.',
    fullDescription: 'Un logo n’est que le point de départ. Je conçois pour votre entreprise un écosystème visuel complet qui inspire confiance, captive votre audience et installe votre autorité sur votre marché.',
    iconName: 'Sparkles',
    deliverables: [
      'Logotype principal, secondaire et monogramme vectoriel',
      'Charte graphique détaillée (règles d’usage, palette chromatique, typographies)',
      'Déclinaisons papeterie corporate (cartes de visite, entêtes, pochettes)',
      'Guide d’application pour supports physiques et digitaux'
    ]
  },
  {
    id: 'srv-02',
    number: '02',
    title: 'Design Publicitaire & Affiches',
    tag: 'Visibilité & Impact',
    shortDescription: 'Affiches, flyers, bannières et campagnes visuelles percutantes destinées à capter le regard en une seconde.',
    fullDescription: 'Dans un univers saturé d’informations, votre communication doit frapper fort. Je combine composition dynamique, hiérarchie typographique et contrastes puissants pour convertir l’attention en engagement.',
    iconName: 'Megaphone',
    deliverables: [
      'Affiches événementielles, lancements de produits et salons',
      'Visuels pour affichage urbain 4x3, abribus et roll-up',
      'Bannières publicitaires digitales (Display, Google Ads, Meta Ads)',
      'Supports promotionnels pour offres commerciales'
    ]
  },
  {
    id: 'srv-03',
    number: '03',
    title: 'Social Media Design',
    tag: 'Engagement & Croissance',
    shortDescription: 'Création de contenus graphiques pour les réseaux sociaux (Instagram, Facebook, LinkedIn, TikTok).',
    fullDescription: 'Arrêtez le scroll avec des visuels au design soigné. Je structure vos formats pour maximiser la visibilité, fidéliser votre communauté et valoriser votre expertise au quotidien.',
    iconName: 'Share2',
    deliverables: [
      'Carrousels informatifs et éducatifs à fort engagement',
      'Templates de Stories et Reels dynamiques',
      'Bannières de profils et couvertures de marque',
      'Kits de publication pour campagnes sponsorisées'
    ]
  },
  {
    id: 'srv-04',
    number: '04',
    title: 'Retouche Photo Professionnelle',
    tag: 'Perfection du détail',
    shortDescription: 'Retouche, compositing, correction et création artistique pour sublimer vos clichés.',
    fullDescription: 'Je donne une dimension cinématographique et luxueuse à vos clichés. Du nettoyage minutieux à l’étalonnage colorimétrique sur mesure, vos visuels gagnent en prestige.',
    iconName: 'Image',
    deliverables: [
      'Nettoyage de peau et retouche de portrait éditorial haute couture',
      'Détourage complexe et changement d’environnement',
      'Color grading et harmonisation chromatique cinématographique',
      'Restauration et compositing multi-sources'
    ]
  },
  {
    id: 'srv-05',
    number: '05',
    title: 'AI Creative & Concept Visuals',
    tag: 'Innovation & Vitesse',
    shortDescription: 'Création d’images et de concepts visuels assistés par intelligence artificielle.',
    fullDescription: 'L’IA repousse les frontières du possible sans exploser vos budgets de production. J’explore des concepts avant-gardistes puis les affine avec une exigence de designer professionnel sous Photoshop.',
    iconName: 'Cpu',
    deliverables: [
      'Génération de concepts visuels et moodboards futuristes',
      'Création de personnages et décors réalistes sur mesure',
      'Compositing et finitions manuelles sous Photoshop',
      'Direction artistique de visuels impossibles en photo classique'
    ]
  },
  {
    id: 'srv-06',
    number: '06',
    title: 'UI Design & Expériences Digitales',
    tag: 'Expérience & Clarté',
    shortDescription: 'Interfaces modernes et expériences digitales conçues sous Figma pour sites web et applications.',
    fullDescription: 'Une belle interface qui ne convertit pas est inutile. Je conçois des écrans élégants et ergonomiques qui guident l’utilisateur avec fluidité et renforcent l’ADN de votre produit.',
    iconName: 'Layout',
    deliverables: [
      'Maquettage UX/UI Desktop, Tablette et Mobile responsive',
      'Prototypes interactifs prêts pour les tests utilisateurs',
      'Design System complet avec composants modulaires',
      'Préparation des fichiers et spécifications pour les développeurs'
    ]
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: 'Adobe Photoshop',
    role: 'Retouche · Compositing · Creative Design',
    level: 'ADVANCED / EXPERT',
    percentage: 96,
    description: 'Manipulation pixel par pixel, séparation de fréquences, compositing multi-calques, photomontages publicitaires et colorimétrie cinématographique.',
    tags: ['Retouche Photo', 'Compositing', 'Détourage', 'Color Grading', 'Manipulation'],
    highlight: 'Maîtrise complète du workflow de retouche et de finition publicitaire'
  },
  {
    name: 'Adobe Illustrator',
    role: 'Logo · Branding · Vector Design',
    level: 'ADVANCED / EXPERT',
    percentage: 94,
    description: 'Création de logotypes vectoriels au millimètre, typographie personnalisée, illustration géométrique et préparation de fichiers d’impression de grande envergure.',
    tags: ['Logos', 'Branding', 'Iconographie', 'Vectoriel Print', 'Chartes Graphiques'],
    highlight: 'Conception d’identités pérennes et évolutives'
  },
  {
    name: 'Figma',
    role: 'UI Design · Interface · Prototypage',
    level: 'PROFICIENT / AVANCÉ',
    percentage: 90,
    description: 'Architecture d’interfaces digitales modernes, wireframes, prototypes interactifs, respect strict des grilles, composants modulaires et tokens de style.',
    tags: ['UI Design', 'Design Systems', 'Auto-layout', 'Prototypage', 'Design Digital'],
    highlight: 'Interfaces modernes, épurées et centrées sur l’expérience utilisateur'
  },
  {
    name: 'AI Creative',
    role: 'Concept · Generation · Creative Direction',
    level: 'ADVANCED CREATIVE',
    percentage: 95,
    description: 'Prompt engineering de pointe, génération de concepts et environnements réalistes, intégration fluide dans le workflow traditionnel de design.',
    tags: ['Midjourney / Flux', 'Prompt Engineering', 'Concept Visuals', 'Photoshop AI', 'Direction Artistique'],
    highlight: 'Accélérateur créatif pour concevoir ce qui était jusqu’ici inaccessible'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'DISCOVERY',
    subtitle: 'Comprendre le besoin & Cadrage',
    description: 'Nous échangeons en profondeur sur vos objectifs, votre cible, votre univers de marque et vos attentes précises.',
    details: 'Définition du cahier des charges et recueil des éléments clés.'
  },
  {
    number: '02',
    title: 'CONCEPT',
    subtitle: 'Définir la direction créative',
    description: 'Élaboration de la direction artistique, moodboards, choix typographiques et premiers axes graphiques directeurs.',
    details: 'Validation de l’orientation créative avant la production.'
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'Design + IA + Outils Professionnels',
    description: 'Création de la composition avec Photoshop, Illustrator, Figma et intégration de l’IA pour les textures et scènes spécifiques.',
    details: 'Construction rigoureuse de la hiérarchie visuelle et des contrastes.'
  },
  {
    number: '04',
    title: 'REFINE',
    subtitle: 'Retouche & Perfectionnement',
    description: 'Ajustements minutieux des détails, harmonisation colorimétrique, retouches chirurgicales et itérations avec vous.',
    details: 'Phase d’ajustement pour atteindre un résultat sans compromis.'
  },
  {
    number: '05',
    title: 'DELIVER',
    subtitle: 'Livraison du résultat final',
    description: 'Livraison de tous vos fichiers structurés, en très haute définition, optimisés pour le print et le digital.',
    details: 'Exports tous formats (PDF HD print, PNG, SVG, WebP, PSD/AI sources).'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-01',
    quote: 'Un travail remarquable et une réactivité exemplaire. Daniel a su capter l’essence de notre projet et nous livrer une identité visuelle au-delà de nos attentes.',
    author: 'Directeur Général',
    role: 'Client Entreprise',
    company: 'Secteur Conseil & Services',
    avatarLetter: 'D'
  },
  {
    id: 't-02',
    quote: 'Daniel a transformé notre idée en un visuel extrêmement percutant. Sa maîtrise conjointe du design classique et des outils IA apporte une vraie valeur ajoutée.',
    author: 'Fondateur & CEO',
    role: 'Entrepreneur',
    company: 'E-commerce & Tech',
    avatarLetter: 'F'
  },
  {
    id: 't-03',
    quote: 'Une grande créativité, un sens aiguisé du détail et une communication fluide du début à la fin. Les délais sont toujours scrupuleusement respectés.',
    author: 'Responsable Communication',
    role: 'Organisation Événementielle',
    company: 'Culture & Média',
    avatarLetter: 'R'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Travaillez-vous uniquement avec l’intelligence artificielle ?',
    answer: 'Non, absolument pas. L’IA est un accélérateur créatif et un outil d’exploration intégré dans mon workflow, mais toutes mes réalisations reposent sur les règles fondamentales du graphisme et sont façonnées sous Photoshop, Illustrator et Figma avec une exigence humaine rigoureuse.'
  },
  {
    question: 'Quels types de projets réalisez-vous ?',
    answer: 'J’interviens sur la création d’identités visuelles et logos, le design d’affiches et campagnes publicitaires, les kits visuels pour réseaux sociaux, la retouche photo éditoriale et publicitaire, la création d’univers visuels avec IA, le maquettage UI sous Figma et les supports imprimés (flyers, brochures, kakémonos).'
  },
  {
    question: 'Travaillez-vous avec des clients internationaux ?',
    answer: 'Oui, tout à fait. Je collabore régulièrement à distance avec des entreprises, agences, entrepreneurs et créateurs basés au Bénin, en France, au Canada, aux États-Unis et partout dans le monde.'
  },
  {
    question: 'Comment démarrer un projet ensemble ?',
    answer: 'Il vous suffit de m’écrire via le formulaire du portfolio, par email à danieldossou32@gmail.com ou directement sur WhatsApp au (+229) 01 44 79 00 49. Nous conviendrons d’un court échange pour cadrer votre besoin et je vous remettrai un devis détaillé.'
  },
  {
    question: 'Quels sont les délais moyens de livraison ?',
    answer: 'Les délais varient selon l’ampleur : généralement 3 à 5 jours ouvrés pour une affiche publicitaire ou un pack réseaux sociaux, et 1 à 3 semaines pour une identité visuelle complète ou une interface digitale. Un planning précis est convenu dès le lancement.'
  }
];

export const CONTACT_INFO = {
  name: 'Daniel Dossou M.',
  title: 'Créatif Digital · Graphiste Designer · AI Creative',
  tagline: 'DESIGNING IDEAS. CREATING IMPACT.',
  email: 'danieldossou32@gmail.com',
  phones: [
    { label: 'Principal', number: '(+229) 01 44 79 00 49', raw: '+2290144790049' },
    { label: 'Secondaire', number: '(+229) 01 56 73 87 10', raw: '+2290156738710' }
  ],
  whatsappLink: 'https://wa.me/2290144790049',
  location: 'Bénin (Disponible à l’international)',
  availability: 'Disponible pour des projets freelance, directions artistiques et collaborations créatives.',
  socials: [
    { name: 'Facebook', label: 'Daniel Dossou', url: 'https://facebook.com' },
    { name: 'Facebook Page', label: 'DaniGraphic Design', url: 'https://facebook.com' },
    { name: 'LinkedIn', label: 'Daniel Dossou', url: 'https://linkedin.com' },
    { name: 'Pinterest', label: 'Daniel Dossou Mehoumonto', url: 'https://pinterest.com' }
  ]
};
