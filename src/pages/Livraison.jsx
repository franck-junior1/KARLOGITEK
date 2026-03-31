import React from 'react'
import { Link } from 'react-router-dom'
import { waLink } from '../data'

const zones = [
  { icon: '🏠', title: 'Douala — Express', delay: 'Sous 24h', price: '2 000 – 5 000 XAF', color: '#22C55E', desc: 'Livraison à domicile dans tout Douala. Akwa, Bonanjo, Deido, Bali, Makepe, Logpom, PK, Bonamoussadi et plus.' },
  { icon: '🚗', title: 'Yaoundé & Villes Principales', delay: '48 – 72h', price: '8 000 – 15 000 XAF', color: '#0EA5E9', desc: 'Couverture nationale via transporteurs partenaires fiables. Livraison domicile ou point relais.' },
  { icon: '✈️', title: 'International', delay: '5 – 10 jours ouvrables', price: 'Sur devis', color: '#F97316', desc: 'Expédition mondiale disponible. Emballage sécurisé renforcé pour tous vos appareils.' },
]

const garanties = [
  { icon: '📦', title: 'Emballage sécurisé', desc: 'Chaque appareil est emballé avec soin dans une boîte de transport sécurisée avec protection anti-choc.', color: '#0EA5E9' },
  { icon: '🔒', title: 'Paiement sécurisé', desc: 'Paiement à la livraison disponible à Douala. Mobile Money (Orange, MTN) & virement acceptés.', color: '#22C55E' },
  { icon: '📍', title: 'Suivi en temps réel', desc: 'Numéro de suivi fourni pour chaque commande. Mises à jour WhatsApp à chaque étape.', color: '#F97316' },
  { icon: '↩️', title: 'Retour & Échange', desc: '7 jours pour retourner un article non conforme. Échange ou remboursement garanti sans conditions.', color: '#EF4444' },
]

export default function Livraison() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <div className="relative py-16 px-[5%] bg-blue-50 dark:bg-blue-950/10 border-b border-blue-100 dark:border-blue-900/20">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #0EA5E9, #22C55E, transparent)' }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-5xl mb-3">🚚</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 dark:text-white mb-4">Livraison</h1>
          <p className="font-body text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Nous livrons vos smartphones avec soin partout au Cameroun et à l'international.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-[5%] py-16">
        {/* Zones */}
        <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6 text-center">Zones de livraison</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {zones.map((z, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 transition-all"
              style={{ borderTopWidth: '3px', borderTopColor: z.color, animation: `fadeUp 0.6s ${i * 0.08}s both` }}>
              <span className="text-4xl block mb-4">{z.icon}</span>
              <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">{z.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold" style={{ background: `${z.color}12`, border: `1px solid ${z.color}30`, color: z.color }}>⏱ {z.delay}</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold" style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.3)', color: '#0EA5E9' }}>💰 {z.price}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-body">{z.desc}</p>
            </div>
          ))}
        </div>

        {/* Garanties */}
        <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6 text-center">Nos garanties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {garanties.map((g, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 flex gap-4">
              <span className="text-3xl flex-shrink-0">{g.icon}</span>
              <div>
                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-1">{g.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-body">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-10 text-center">
          <p className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">Prêt à commander ?</p>
          <p className="font-body text-gray-500 dark:text-gray-400 text-sm mb-7">Contactez-nous via WhatsApp pour passer votre commande. Livraison assurée partout.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={waLink('Bonjour KARLOGITEK 👋, je souhaite commander et me renseigner sur la livraison.')} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-body font-bold text-sm hover:scale-105 transition-all">
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp — 679 680 586
            </a>
            <Link to="/contact" className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-body font-semibold text-sm hover:border-brand-blue hover:text-brand-blue transition-all">
              Formulaire de contact →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
