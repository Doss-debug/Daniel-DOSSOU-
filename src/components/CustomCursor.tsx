import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports hover/touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestInteractive = target.closest(
        'button, a, [role="button"], input, textarea, select, [data-cursor]'
      ) as HTMLElement | null;

      if (closestInteractive) {
        setIsHovered(true);
        const customType = closestInteractive.getAttribute('data-cursor');
        if (customType) {
          setCursorText(customType);
        } else if (closestInteractive.tagName === 'A' || closestInteractive.tagName === 'BUTTON') {
          if (closestInteractive.innerText.toLowerCase().includes('projet') || closestInteractive.innerText.toLowerCase().includes('voir')) {
            setCursorText('VIEW');
          } else if (closestInteractive.innerText.toLowerCase().includes('talk') || closestInteractive.innerText.toLowerCase().includes('contact')) {
            setCursorText('OPEN ↗');
          } else {
            setCursorText('');
          }
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-200 ${
          cursorText
            ? 'w-20 h-20 bg-[#111111] text-[#B6FF00] font-mono font-bold text-[10px] uppercase tracking-widest shadow-2xl scale-100'
            : isHovered
            ? 'w-10 h-10 bg-[#B6FF00] border border-[#111111]/20 scale-110'
            : 'w-3.5 h-3.5 bg-[#111111] shadow-sm'
        }`}
      >
        {cursorText && (
          <span className="animate-in fade-in zoom-in duration-150">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
