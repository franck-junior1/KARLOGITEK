import React, { useState, useEffect } from 'react'
import { waLink, COLOR_MAP } from '../data'

const WaIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i <= count ? '#EAB308' : '#374151'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

function Modal({ item, onClose }) {
  const c = item.badgeColor ? COLOR_MAP[item.badgeColor] : COLOR_MAP.green

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.2s ease' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-2xl w-full grid md:grid-cols-2 shadow-2xl max-h-[90vh]"
        style={{ border: `1px solid ${c.hex}30`, animation: 'fadeUp 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        {/* Image side */}
        <div className="relative h-56 md:h-auto overflow-hidden">
          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {item.badge && (
            <div className="absolute top-3 left-3">
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase"
                style={{ background: `${c.hex}20`, border: `1px solid ${c.hex}40`, color: c.hex }}
              >
                {item.badge}
              </span>
            </div>
          )}
          <div className="absolute bottom-3 left-3"><Stars /></div>
        </div>

        {/* Info side */}
        <div className="p-6 overflow-y-auto flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-mono text-[10px] tracking-[3px] uppercase mb-1" style={{ color: c.hex }}>{item.brand}</p>
              <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white leading-tight">{item.name}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-sm px-2 py-1 rounded border border-gray-200 dark:border-gray-700 font-mono"
            >✕</button>
          </div>

          <p className="font-display font-bold text-lg shimmer-text-blue">{item.price}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-body">{item.desc}</p>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-3">
            <p className="font-mono text-[9px] tracking-[2px] uppercase mb-2" style={{ color: c.hex }}>Caractéristiques</p>
            <div className="flex flex-col gap-1.5">
              {(item.specs || item.details || []).map((d, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.hex }} />
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-body">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-auto pt-2">
            <a
              href={waLink(`Bonjour KARLOGITEK 👋, je souhaite commander le ${item.brand} ${item.name}.`)}
              target="_blank" rel="noreferrer"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl grad-green-blue text-white font-body font-bold text-sm"
            >
              <WaIcon size={16} /> Commander
            </a>
            <button
              onClick={onClose}
              className="px-4 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >✕</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductCard({ item, idx = 0 }) {
  const [modal, setModal] = useState(false)
  const [wish, setWish] = useState(false)
  const c = item.badgeColor ? COLOR_MAP[item.badgeColor] : COLOR_MAP.green

  return (
    <>
      {modal && <Modal item={item} onClose={() => setModal(false)} />}
      <div
        onClick={() => setModal(true)}
        className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40"
        style={{
          animation: `fadeUp 0.6s ${idx * 0.06}s cubic-bezier(0.16,1,0.3,1) both`,
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity z-10"
          style={{ background: `linear-gradient(90deg, ${c.hex}, transparent)` }}
        />

        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-gray-50 dark:bg-gray-800">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {item.badge && (
            <div className="absolute top-2.5 left-2.5">
              <span
                className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase"
                style={{ background: `${c.hex}20`, border: `1px solid ${c.hex}50`, color: c.hex }}
              >{item.badge}</span>
            </div>
          )}

          <button
            onClick={(e) => { e.stopPropagation(); setWish(!wish) }}
            className="absolute top-2 right-2.5 text-base transition-transform hover:scale-110"
          >
            {wish ? '❤️' : '🤍'}
          </button>

          <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
            <Stars />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-1.5">
          <p className="font-mono text-[9px] font-bold tracking-[2px] uppercase" style={{ color: c.hex }}>{item.brand}</p>
          <h3 className="font-display font-bold text-base text-gray-900 dark:text-white leading-tight">{item.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed line-clamp-2 font-body">{item.desc}</p>
          <div className="flex justify-between items-center pt-1">
            <span className="font-display font-bold text-sm shimmer-text-blue">{item.price}</span>
            <span className="text-[10px] font-mono transition-colors" style={{ color: c.hex }}>Voir →</span>
          </div>
        </div>
      </div>
    </>
  )
}
