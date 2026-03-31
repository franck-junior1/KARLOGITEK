import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width={13} height={13} viewBox="0 0 24 24" fill={i <= n ? '#EAB308' : '#1E2A42'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [pos, setPos] = useState(0);
  const per = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const max = Math.max(0, TESTIMONIALS.length - per);

  useEffect(() => {
    const t = setInterval(() => setPos(p => p >= max ? 0 : p + 1), 5000);
    return () => clearInterval(t);
  }, [max]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-5 transition-transform duration-500"
        style={{ transform: `translateX(calc(-${pos * (100/per)}% - ${pos * 20/per}px))` }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="shrink-0 bg-dark-600 border border-dark-400 rounded-2xl p-5 hover:border-brand-green/40 transition-all duration-300 hover:-translate-y-1"
            style={{ width: `calc(${100/per}% - ${(per-1)*20/per}px)`, minWidth: `calc(${100/per}% - ${(per-1)*20/per}px)` }}>
            <div className="flex items-center justify-between mb-3">
              <Stars n={t.stars} />
              <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-0.5 rounded-full border"
                style={{ color: t.color, borderColor: t.color + '35', background: t.color + '14' }}>
                {t.tag}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed italic font-dm mb-4">"{t.text}"</p>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-syne font-extrabold text-sm text-white"
                style={{ background: `linear-gradient(135deg, ${t.color}, #38BDF8)` }}>
                {t.avatar}
              </div>
              <div>
                <p className="font-syne text-sm font-bold text-white">{t.name}</p>
                <p className="text-xs text-gray-500 font-dm">📍 {t.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-7">
        <button onClick={() => setPos(p => Math.max(0, p-1))} disabled={pos === 0}
          className="w-9 h-9 rounded-full border border-dark-300 flex items-center justify-center text-gray-400 hover:border-brand-green hover:text-brand-green disabled:opacity-30 transition-all bg-dark-600">
          <ChevronLeft size={16} />
        </button>
        {Array.from({ length: max+1 }).map((_, i) => (
          <button key={i} onClick={() => setPos(i)}
            className="h-2 rounded-full transition-all duration-300"
            style={{ width: i === pos ? 20 : 8, background: i === pos ? '#22C55E' : '#2A3A58' }} />
        ))}
        <button onClick={() => setPos(p => Math.min(max, p+1))} disabled={pos >= max}
          className="w-9 h-9 rounded-full border border-dark-300 flex items-center justify-center text-gray-400 hover:border-brand-green hover:text-brand-green disabled:opacity-30 transition-all bg-dark-600">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
