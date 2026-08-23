export default function Marquee() {
  const marqueeItems = [
    'GRAPHIC DESIGN',
    '✦',
    'BRANDING',
    '✦',
    'AI CREATIVE',
    '✦',
    'VISUAL DESIGN',
    '✦',
    'PHOTOSHOP',
    '✦',
    'ILLUSTRATOR',
    '✦',
    'FIGMA',
    '✦',
    'CREATIVE TECHNOLOGY',
    '✦',
  ];

  return (
    <div className="w-full bg-[#111111] text-[#FAFAF7] py-4 overflow-hidden select-none border-y border-black">
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap font-heading font-black text-sm sm:text-base uppercase tracking-[0.2em]">
        {/* First set */}
        {marqueeItems.map((item, idx) => (
          <span
            key={`m1-${idx}`}
            className={item === '✦' ? 'text-[#B6FF00] px-2 text-xs' : 'hover:text-[#B6FF00] transition-colors'}
          >
            {item}
          </span>
        ))}
        {/* Duplicate set for infinite loop */}
        {marqueeItems.map((item, idx) => (
          <span
            key={`m2-${idx}`}
            className={item === '✦' ? 'text-[#B6FF00] px-2 text-xs' : 'hover:text-[#B6FF00] transition-colors'}
          >
            {item}
          </span>
        ))}
        {/* Third set for ultra wide viewports */}
        {marqueeItems.map((item, idx) => (
          <span
            key={`m3-${idx}`}
            className={item === '✦' ? 'text-[#B6FF00] px-2 text-xs' : 'hover:text-[#B6FF00] transition-colors'}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
