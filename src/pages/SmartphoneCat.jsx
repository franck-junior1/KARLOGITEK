import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'
import { PHONES, waLink } from '../data'

const META = {
  iphone:   { label: 'iPhone', emoji: '🍎', color: '#0EA5E9', desc: 'La gamme Apple complète. Design premium, puce A-series, écosystème iOS robuste.' },
  samsung:  { label: 'Samsung', emoji: '📱', color: '#F97316', desc: 'Des flagships Galaxy aux séries A, l\'excellence coréenne pour tous les budgets.' },
  pixel:    { label: 'Google Pixel', emoji: '🔍', color: '#22C55E', desc: 'L\'IA Google au service de la photo. Android pur, mises à jour garanties 7 ans.' },
  tecno:    { label: 'Tecno', emoji: '⚡', color: '#EAB308', desc: 'Le meilleur du rapport qualité/prix africain. 5G, AMOLED, batteries généreuses.' },
  xiaomi:   { label: 'Xiaomi', emoji: '🔴', color: '#EF4444', desc: 'Innovation chinoise à prix défiants. Charge rapide, caméra Leica, performances.' },
  motorola: { label: 'Motorola', emoji: '🏍️', color: '#22C55E', desc: 'Fiabilité américaine, design soigné, expérience Android quasi-stock.' },
}

export default function SmartphoneCat() {
  const { brand = 'iphone' } = useParams()
  const items = PHONES[brand] || []
  const meta = META[brand] || { label: brand, emoji: '📱', color: '#22C55E', desc: '' }

  const brandLinks = Object.entries(META).map(([k, v]) => ({ key: k, ...v }))

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      {/* Header */}
      <div className="relative py-16 px-[5%] overflow-hidden" style={{ background: `${meta.color}08` }}>
        <div className="absolute inset-0 grid-bg-light dark:grid-bg pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${meta.color}, ${meta.color}60, transparent)` }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Link to="/smartphones" className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-brand-green mb-6 transition-colors">← Tous les smartphones</Link>
          <div className="text-5xl mb-3">{meta.emoji}</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 dark:text-white mb-3">{meta.label}</h1>
          <p className="font-body text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-base">{meta.desc}</p>
        </div>
      </div>

      {/* Brand nav */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 py-3 px-[5%]">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {brandLinks.map(b => (
            <Link key={b.key} to={`/smartphones/${b.key}`}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-all ${brand === b.key ? 'text-white shadow-sm' : 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800'}`}
              style={brand === b.key ? { background: b.color } : {}}>
              <span>{b.emoji}</span> {b.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-[5%] py-12">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, i) => <ProductCard key={item.id} item={item} idx={i} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-gray-400">Catalogue en cours de mise à jour.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">Vous ne trouvez pas votre modèle ?</h3>
          <p className="font-body text-gray-500 dark:text-gray-400 text-sm mb-5">On le trouve en 48–72h au meilleur prix, avec documents et garantie.</p>
          <a href={waLink(`Bonjour KARLOGITEK 👋, je cherche un ${meta.label} spécifique.`)} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full grad-green-blue text-white font-body font-bold text-sm shadow-lg shadow-green-500/20 hover:scale-105 transition-all">
            <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Demander via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
