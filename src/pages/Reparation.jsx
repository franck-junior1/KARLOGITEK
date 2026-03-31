import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { REPAIRS, waLink, COLOR_MAP } from '../data'

const PROCESS = [
  { step: '01', title: 'Diagnostic', desc: 'Évaluation complète et gratuite de votre appareil.', color: 'blue' },
  { step: '02', title: 'Devis', desc: 'Devis transparent et détaillé avant toute intervention.', color: 'green' },
  { step: '03', title: 'Réparation', desc: 'Intervention par nos techniciens certifiés avec pièces garanties.', color: 'orange' },
  { step: '04', title: 'Test & Livraison', desc: 'Tests complets puis remise de votre appareil comme neuf.', color: 'gold' },
]

const BRANDS = ['iPhone', 'Samsung', 'Huawei', 'Xiaomi', 'Tecno', 'Infinix', 'Motorola', 'Google Pixel', 'OnePlus', 'Oppo']

export default function Reparation() {
  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      {/* Hero */}
      <div className="relative py-16 px-[5%] overflow-hidden bg-red-50 dark:bg-red-950/10 border-b border-red-100 dark:border-red-900/20">
        <div className="absolute inset-0 grid-bg-light dark:grid-bg pointer-events-none opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #EF4444, #F97316, transparent)' }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-950/40 border border-red-200 dark:border-red-800/40 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-blink" />
            <span className="font-mono text-[9px] font-bold tracking-[3px] uppercase text-brand-red">KARLOGITEK — RÉPARATION</span>
          </div>
          <div className="text-5xl mb-3">🔧</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 dark:text-white mb-4">Centre de Réparation</h1>
          <p className="font-body text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base leading-relaxed">Diagnostic gratuit · Pièces certifiées · Techniciens qualifiés · Garantie sur toutes réparations</p>
          <div className="flex flex-wrap gap-3 justify-center mt-7">
            <a href={waLink('Bonjour KARLOGITEK 👋, je souhaite faire réparer mon smartphone. Pouvez-vous me faire un diagnostic ?')} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red text-white font-body font-bold text-sm shadow-lg shadow-red-500/25 hover:scale-105 transition-all">
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Diagnostic gratuit WhatsApp
            </a>
            <a href="#services" className="px-6 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-body font-semibold text-sm hover:border-brand-red hover:text-brand-red transition-all">
              Voir les services ↓
            </a>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-14 px-[5%] bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-center text-gray-900 dark:text-white mb-8">Notre processus en 4 étapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {PROCESS.map((p, i) => {
              const c = COLOR_MAP[p.color]
              return (
                <div key={i} className="relative text-center p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  {i < 3 && <div className="hidden md:block absolute top-7 -right-2 z-10 w-4 h-4 rotate-45 border-r border-t border-gray-200 dark:border-gray-700" />}
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center font-mono font-bold text-sm text-white" style={{ background: c.hex }}>
                    {p.step}
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-1">{p.title}</h3>
                  <p className="text-xs text-gray-500 font-body leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Repair services */}
      <div id="services" className="py-16 px-[5%] bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeader sub="Nos réparations" title="Services de dépannage" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {REPAIRS.map((r, i) => {
              const c = COLOR_MAP[r.color]
              const isOpen = active === r.id
              return (
                <div key={r.id}
                  onClick={() => setActive(isOpen ? null : r.id)}
                  className="cursor-pointer bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden card-hover hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 transition-all"
                  style={{ animation: `fadeUp 0.5s ${i * 0.05}s both`, borderTopWidth: '3px', borderTopColor: c.hex }}>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{r.icon}</span>
                      <div className="flex flex-col items-end gap-1">
                        {r.badge && <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider" style={{ background: `${c.hex}15`, border: `1px solid ${c.hex}30`, color: c.hex }}>{r.badge}</span>}
                        <span className="text-[9px] font-mono text-gray-400">⏱ {r.duration}</span>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-2">{r.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mb-3">{r.desc}</p>
                    <button className="text-xs font-mono font-bold transition-colors" style={{ color: c.hex }}>
                      {isOpen ? 'Masquer ▲' : 'Ce qui est inclus ▼'}
                    </button>
                    {isOpen && (
                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 space-y-1.5">
                        {r.includes.map((inc, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.hex }} />
                            <span className="text-xs text-gray-600 dark:text-gray-400 font-body">{inc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="px-5 pb-4">
                    <a href={waLink(`Bonjour KARLOGITEK 👋, j'ai besoin d'une réparation : ${r.title}. Pouvez-vous m'aider ?`)} target="_blank" rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-xs font-body font-bold transition-all hover:scale-105"
                      style={{ background: `linear-gradient(135deg, ${c.hex}, #0EA5E9)` }}>
                      <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Demander ce service
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Brands supported */}
          <div className="mt-14 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-5 text-center">Marques prises en charge</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {BRANDS.map(b => (
                <span key={b} className="px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-body font-semibold text-gray-700 dark:text-gray-300">{b}</span>
              ))}
            </div>
          </div>

          {/* Emergency CTA */}
          <div className="mt-8 p-8 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, #EF4444, #F97316)' }}>
            <h3 className="font-display font-bold text-2xl text-white mb-2">🚨 Urgence réparation ?</h3>
            <p className="font-body text-white/80 mb-5 text-sm">Contact direct WhatsApp, réponse en moins de 30 minutes.</p>
            <a href={waLink('🚨 URGENT — Bonjour KARLOGITEK, j\'ai un problème avec mon smartphone et j\'ai besoin d\'une réparation urgente !')} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white font-body font-bold text-sm text-red-600 hover:scale-105 transition-all shadow-lg">
              <svg viewBox="0 0 24 24" fill="#DC2626" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Urgence WhatsApp — 679 680 586
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
