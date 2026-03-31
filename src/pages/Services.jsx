import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { SERVICES, waLink, COLOR_MAP } from '../data'

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <div className="relative py-16 px-[5%] bg-green-50 dark:bg-green-950/10 border-b border-green-100 dark:border-green-900/20">
        <div className="absolute inset-0 grid-bg-light dark:grid-bg pointer-events-none opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-brand-blue" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-5xl mb-3">🛠️</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 dark:text-white mb-4">Nos Services</h1>
          <p className="font-body text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Accompagnement complet 7j/7. Assistance, maintenance, dépannage, conseil — toujours disponibles.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-[5%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {SERVICES.map((s, i) => {
            const c = COLOR_MAP[s.color]
            return (
              <div key={s.id} className="group bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-100 dark:border-gray-800 card-hover hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/30 relative overflow-hidden"
                style={{ animation: `fadeUp 0.6s ${i * 0.06}s both` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${c.hex}, transparent)` }} />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 border" style={{ background: `${c.hex}12`, borderColor: `${c.hex}25` }}>{s.icon}</div>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">{s.title}</h3>
                <p className="font-mono text-[9px] tracking-widest uppercase mb-3 font-bold" style={{ color: c.hex }}>{s.subtitle}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.features.map((f, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-full text-[11px] font-body font-semibold flex items-center gap-1" style={{ background: `${c.hex}10`, border: `1px solid ${c.hex}20`, color: c.hex }}>
                      <span className="text-[9px]">✓</span>{f}
                    </span>
                  ))}
                </div>
                <a href={waLink(`Bonjour KARLOGITEK 👋, je souhaite en savoir plus sur votre service : ${s.title}`)} target="_blank" rel="noreferrer"
                  className="text-xs font-mono font-bold transition-colors hover:opacity-70" style={{ color: c.hex }}>
                  Demander ce service →
                </a>
              </div>
            )
          })}
        </div>

        {/* CTA banner */}
        <div className="rounded-2xl p-10 grad-green-blue flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-green-500/20">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">Besoin d'un service spécifique ?</h3>
            <p className="font-body text-white/80 text-sm">Notre équipe est disponible 7j/7 de 8h à 22h pour vous accompagner.</p>
          </div>
          <a href={waLink('Bonjour KARLOGITEK 👋, je souhaite en savoir plus sur vos services.')} target="_blank" rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white font-body font-bold text-sm text-green-700 hover:scale-105 transition-all shadow-lg">
            <svg viewBox="0 0 24 24" fill="#15803d" width="17" height="17"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  )
}
