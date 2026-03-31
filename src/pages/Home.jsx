import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { PHONES, ACCESSORIES, SERVICES, PACKS, TESTIMONIALS, STATS, waLink, COLOR_MAP } from '../data'

const WaIcon = ({ size = 16, color = 'white' }) => <svg viewBox="0 0 24 24" fill={color} width={size} height={size}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>

const CATEGORIES = [
  { label: 'iPhone', emoji: '🍎', to: '/smartphones/iphone', color: 'blue', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80' },
  { label: 'Samsung', emoji: '📱', to: '/smartphones/samsung', color: 'orange', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80' },
  { label: 'Google Pixel', emoji: '🔍', to: '/smartphones/pixel', color: 'green', img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80' },
  { label: 'Tecno', emoji: '⚡', to: '/smartphones/tecno', color: 'gold', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80' },
  { label: 'Xiaomi', emoji: '🔴', to: '/smartphones/xiaomi', color: 'red', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80' },
  { label: 'Motorola', emoji: '🏍️', to: '/smartphones/motorola', color: 'green', img: 'https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=600&q=80' },
  { label: 'Kit Bluetooth', emoji: '🎧', to: '/accessoires/bluetooth', color: 'blue', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80' },
  { label: 'Montres connectées', emoji: '⌚', to: '/accessoires/smartwatch', color: 'gold', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80' },
  { label: 'Chargeurs', emoji: '⚡', to: '/accessoires/chargeurs', color: 'orange', img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80' },
]

function Stars({ n = 5 }) {
  return <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i <= n ? '#EAB308' : '#374151'}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
}

export default function Home() {
  const featured = [PHONES.iphone[0], PHONES.samsung[0], PHONES.xiaomi[0], PHONES.tecno[0]]

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden bg-white dark:bg-gray-950">
        <div className="absolute inset-0 grid-bg-light dark:grid-bg pointer-events-none" />
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none animate-float" style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)', animation: 'float 10s 2s ease-in-out infinite' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)' }} />

        {/* Circuit decoration */}
        <svg className="absolute top-20 right-16 opacity-10 dark:opacity-15 pointer-events-none hidden md:block" width="180" height="180" viewBox="0 0 180 180">
          <path d="M20 20 H80 V60 H140 V120 H170" stroke="#22C55E" strokeWidth="1.5" fill="none" strokeDasharray="600" style={{ animation: 'circuit 4s linear infinite' }}/>
          <path d="M60 20 V100 H160 V150" stroke="#0EA5E9" strokeWidth="1" fill="none" strokeDasharray="600" style={{ animation: 'circuit 5s 1s linear infinite' }}/>
          <circle cx="80" cy="60" r="4" fill="#22C55E"/>
          <circle cx="140" cy="120" r="4" fill="#0EA5E9"/>
        </svg>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/50 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-blink" />
            <span className="font-mono text-[10px] font-bold tracking-[3px] uppercase text-brand-green">Concierge Digital — Douala</span>
          </div>

          <div className="mb-6" style={{ animation: 'fadeUp 0.6s 0.1s cubic-bezier(0.16,1,0.3,1) both' }}>
            <Logo size="xl" showText={true} />
          </div>

          <p className="font-body italic text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10" style={{ animation: 'fadeUp 0.6s 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
            Smartphones authentiques · Équipements tech · Réparation · Assistance 7j/7
          </p>

          <div className="flex flex-wrap gap-3 justify-center" style={{ animation: 'fadeUp 0.6s 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
            <a href={waLink('Bonjour KARLOGITEK 👋, je souhaite commander.')} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full grad-green-blue text-white font-body font-bold text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all duration-200">
              <WaIcon size={17} /> Commander maintenant
            </a>
            <Link to="/smartphones" className="px-7 py-3.5 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-body font-semibold text-sm hover:border-brand-green hover:text-brand-green transition-all duration-200">
              Voir le catalogue →
            </Link>
            <Link to="/reparation" className="px-7 py-3.5 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-500 font-body font-medium text-sm hover:border-brand-blue hover:text-brand-blue transition-all duration-200">
              🔧 Réparation
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[8px] tracking-[4px] uppercase text-gray-400">Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(#22C55E, transparent)' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 py-6">
        <div className="max-w-5xl mx-auto px-[5%] grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 dark:divide-gray-800">
          {STATS.map((s, i) => {
            const c = COLOR_MAP[s.color]
            return (
              <div key={i} className="flex flex-col items-center py-4 px-2 text-center">
                <span className="text-2xl mb-1">{s.icon}</span>
                <div className={`font-display font-black text-3xl md:text-4xl shimmer-text`}>{s.val}</div>
                <div className="font-body text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20 px-[5%] bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeader sub="Nos univers" title="Explorez nos catégories" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat, i) => {
              const c = COLOR_MAP[cat.color]
              return (
                <Link key={cat.to} to={cat.to}
                  className="group relative h-44 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 card-hover hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40"
                  style={{ animation: `fadeUp 0.6s ${i * 0.06}s cubic-bezier(0.16,1,0.3,1) both` }}>
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${c.hex}, transparent)` }} />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-lg block mb-1">{cat.emoji}</span>
                    <h3 className="font-display font-bold text-base text-white leading-tight">{cat.label}</h3>
                  </div>
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[8px] font-mono font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity" style={{ background: `${c.hex}20`, border: `1px solid ${c.hex}40`, color: c.hex }}>VOIR →</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-20 px-[5%] bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeader sub="Sélection" title="Smartphones à la une" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((item, i) => <ProductCard key={item.id} item={item} idx={i} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/smartphones" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-body font-semibold hover:border-brand-green hover:text-brand-green transition-all">
              Tout le catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-20 px-[5%] bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeader sub="Nos services" title="Un accompagnement complet" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((s, i) => {
              const c = COLOR_MAP[s.color]
              return (
                <div key={s.id} className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 card-hover hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 relative overflow-hidden"
                  style={{ animation: `fadeUp 0.6s ${i * 0.06}s cubic-bezier(0.16,1,0.3,1) both` }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${c.hex}, transparent)` }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3 border" style={{ background: `${c.hex}12`, borderColor: `${c.hex}25` }}>{s.icon}</div>
                  <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-1">{s.title}</h3>
                  <p className="font-mono text-[9px] tracking-widest uppercase mb-2 font-bold" style={{ color: c.hex }}>{s.subtitle}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/services" className="px-6 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-semibold font-body hover:border-brand-green hover:text-brand-green transition-all">
              Tous les services →
            </Link>
            <Link to="/reparation" className="px-6 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-semibold font-body hover:border-brand-red hover:text-brand-red transition-all">
              🔧 Page Réparation →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PACKS ── */}
      <section className="py-20 px-[5%] bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeader sub="Offres spéciales" title="Nos packs & abonnements" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PACKS.map((pk, i) => {
              const c = COLOR_MAP[pk.color]
              return (
                <Link key={pk.id} to="/packs"
                  className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 card-hover hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 relative overflow-hidden block"
                  style={{ animation: `fadeUp 0.6s ${i * 0.07}s both` }}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: `linear-gradient(to bottom, ${c.hex}, ${c.hex}60)` }} />
                  <div className="pl-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{pk.icon}</span>
                      <div>
                        <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">{pk.title}</h3>
                        <p className="font-mono text-[10px] font-bold" style={{ color: c.hex }}>{pk.price}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mb-3">{pk.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pk.items.slice(0, 4).map(it => (
                        <span key={it} className="px-2 py-0.5 rounded-full text-[10px] font-semibold font-body" style={{ background: `${c.hex}10`, border: `1px solid ${c.hex}25`, color: c.hex }}>✓ {it}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/packs" className="px-6 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-semibold font-body hover:border-brand-green hover:text-brand-green transition-all">
              Voir tous les offres →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-[5%] bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeader sub="Avis clients" title="Ils nous font confiance" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((rv, i) => {
              const c = COLOR_MAP[rv.color]
              return (
                <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 transition-all"
                  style={{ animation: `fadeUp 0.6s ${i * 0.06}s both` }}>
                  <div className="flex justify-between items-center mb-3">
                    <Stars n={rv.stars} />
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest" style={{ background: `${c.hex}12`, border: `1px solid ${c.hex}25`, color: c.hex }}>{rv.tag}</span>
                  </div>
                  <p className="font-body italic text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">«{rv.text}»</p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-sm text-white" style={{ background: `linear-gradient(135deg, ${c.hex}, #0EA5E9)` }}>{rv.avatar}</div>
                    <div>
                      <p className="font-display font-bold text-sm text-gray-900 dark:text-white">{rv.name}</p>
                      <p className="text-xs text-gray-400 font-body">📍 {rv.city}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-[5%] grad-green-blue">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-3">Besoin d'un smartphone ou d'une réparation ?</h2>
          <p className="font-body text-white/80 mb-8 text-lg">Notre équipe est disponible 7j/7 de 8h à 22h pour vous accompagner.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={waLink('Bonjour KARLOGITEK 👋')} target="_blank" rel="noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-green-700 font-body font-bold text-sm shadow-lg hover:scale-105 transition-all duration-200">
              <WaIcon size={17} color="#15803d" /> WhatsApp — 679 680 586
            </a>
            <Link to="/contact" className="px-7 py-3.5 rounded-full border-2 border-white/50 text-white font-body font-semibold text-sm hover:bg-white/10 transition-all">
              Formulaire de contact →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
