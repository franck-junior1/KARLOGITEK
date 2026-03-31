import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { PACKS, TESTIMONIALS, waLink, COLOR_MAP } from '../data'

const WaIcon = ({ size = 16, color = 'white' }) => <svg viewBox="0 0 24 24" fill={color} width={size} height={size}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>

export default function Packs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <div className="relative py-16 px-[5%] bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0 grid-bg-light dark:grid-bg pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-5xl mb-3">⭐</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 dark:text-white mb-4">Packs & Offres</h1>
          <p className="font-body text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Des formules adaptées à chaque besoin, pour particuliers et entreprises.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-[5%] py-16">
        {/* Featured pack */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-2xl shadow-black/5 dark:shadow-black/30">
          <div className="grad-green-blue p-6 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[3px] uppercase text-white/70 mb-1">Notre offre vedette</p>
              <h2 className="font-display font-black text-2xl text-white">Pack Accessibilité</h2>
            </div>
            <span className="text-5xl">🏆</span>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display font-black text-6xl text-gray-900 dark:text-white">2 500</span>
              <span className="font-mono font-bold text-xl text-brand-green">FCFA</span>
            </div>
            <p className="font-body text-sm text-gray-400 mb-8">par an — soit moins de <strong className="text-brand-green">210 FCFA/mois</strong></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[['📞','Assistance technique 7j/7'],['🔍','Software checking mensuel'],['🔧','Dépannage matériel & logiciel'],['⚡','Réponse prioritaire sous 2h'],['📱','Conseil & configuration illimités'],['🛡️','Suivi personnalisé toute l\'année']].map(([icon, text], i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/40 flex items-center justify-center text-base flex-shrink-0">{icon}</div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-body">{text}</span>
                </div>
              ))}
            </div>
            <div className="h-px bg-gray-100 dark:bg-gray-800 mb-6" />
            <a href={waLink('Bonjour KARLOGITEK 👋, je souhaite souscrire au Pack Accessibilité à 2500 FCFA/an.')} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full grad-green-blue text-white font-body font-bold text-base shadow-lg shadow-green-500/25 hover:scale-105 transition-all">
              <WaIcon size={18} /> S'abonner maintenant
            </a>
          </div>
        </div>

        {/* Other packs */}
        <div className="space-y-4 mb-14">
          {PACKS.slice(1).map((pk, i) => {
            const c = COLOR_MAP[pk.color]
            return (
              <div key={pk.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 flex"
                style={{ animation: `fadeUp 0.6s ${i * 0.08}s both` }}>
                <div className="w-1.5 flex-shrink-0" style={{ background: `linear-gradient(to bottom, ${c.hex}, ${c.hex}60)` }} />
                <div className="p-7 flex-1">
                  <div className="flex items-start gap-5 flex-wrap mb-4">
                    <span className="text-4xl">{pk.icon}</span>
                    <div className="flex-1">
                      <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-0.5">{pk.title}</h2>
                      <p className="font-mono text-sm font-bold" style={{ color: c.hex }}>{pk.price} <span className="font-body font-normal text-gray-400 text-xs">— {pk.priceNote}</span></p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 font-body">{pk.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {pk.items.map(it => (
                      <span key={it} className="px-3 py-1 rounded-full text-xs font-body font-semibold" style={{ background: `${c.hex}10`, border: `1px solid ${c.hex}25`, color: c.hex }}>✦ {it}</span>
                    ))}
                  </div>
                  <a href={waLink(`Bonjour KARLOGITEK 👋, je souhaite en savoir plus sur le ${pk.title}.`)} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-body font-bold text-sm hover:scale-105 transition-all">
                    <WaIcon size={15} /> Demander ce pack
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <SectionHeader sub="Avis clients" title="Ils nous font confiance" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.slice(0, 6).map((rv, i) => {
            const c = COLOR_MAP[rv.color]
            return (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-0.5">{[1,2,3,4,5].map(s => <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={s<=rv.stars?'#EAB308':'#374151'}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest" style={{ background: `${c.hex}12`, border: `1px solid ${c.hex}25`, color: c.hex }}>{rv.tag}</span>
                </div>
                <p className="font-body italic text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">«{rv.text}»</p>
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
    </div>
  )
}
