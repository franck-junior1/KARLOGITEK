import React, { useState } from 'react'
import { waLink } from '../data'

const WaIcon = ({ size = 16, color = 'white' }) => <svg viewBox="0 0 24 24" fill={color} width={size} height={size}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>

const inputCls = "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-body placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all"

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', msg: '' })
  const [sent, setSent] = useState(false)
  const ok = form.nom && form.email && form.msg

  const QUICK_LINKS = ['Commander un smartphone', 'Demander une réparation', 'Pack Accessibilité', 'Assistance technique', 'Conseil personnalisé', 'Devis entreprise']

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <div className="relative py-16 px-[5%] bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0 grid-bg-light dark:grid-bg pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-5xl mb-3">✉️</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 dark:text-white mb-4">Contactez-nous</h1>
          <p className="font-body text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Disponibles 7j/7 de 8h à 22h. WhatsApp, formulaire — réponse garantie sous 2h.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-[5%] py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: info */}
        <div className="flex flex-col gap-5">
          {[
            { icon: '💬', label: 'WhatsApp (principal)', val: '+237 679 680 586', color: '#22C55E' },
            { icon: '📍', label: 'Localisation', val: 'Douala, Cameroun', color: '#0EA5E9' },
            { icon: '🕐', label: 'Disponibilité', val: '7j/7 • 8h00 – 22h00', color: '#F97316' },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 hover:border-brand-green transition-colors">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${c.color}12`, border: `1px solid ${c.color}20` }}>{c.icon}</div>
              <div>
                <p className="font-mono text-[9px] text-gray-400 tracking-widest uppercase mb-0.5">{c.label}</p>
                <p className="font-display font-bold text-base text-gray-900 dark:text-white">{c.val}</p>
              </div>
            </div>
          ))}

          <a href={waLink('Bonjour KARLOGITEK 👋, je souhaite vous contacter.')} target="_blank" rel="noreferrer"
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl grad-green-blue text-white font-body font-bold text-sm shadow-lg shadow-green-500/20 hover:scale-[1.02] transition-all">
            <WaIcon size={18} /> Écrire sur WhatsApp maintenant
          </a>

          <div>
            <p className="font-mono text-[9px] tracking-[3px] uppercase text-gray-400 mb-3">Accès rapide</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_LINKS.map(item => (
                <a key={item} href={waLink(`Bonjour KARLOGITEK 👋, je souhaite : ${item}`)} target="_blank" rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-body font-semibold text-gray-600 dark:text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all">
                  {item} →
                </a>
              ))}
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 flex items-center gap-4">
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&color=22C55E&bgcolor=FFFFFF&data=${encodeURIComponent('https://wa.me/237679680586')}`} alt="QR WhatsApp" className="w-16 h-16 rounded-lg" />
            <div>
              <p className="font-display font-bold text-sm text-gray-900 dark:text-white mb-1">Scanner pour WhatsApp</p>
              <p className="text-xs text-gray-500 font-body">Redirige vers notre chat professionnel</p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        {sent ? (
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-12 text-center">
            <div className="text-6xl mb-4">💌</div>
            <h3 className="font-display font-bold text-2xl text-brand-green mb-2">Message envoyé !</h3>
            <p className="font-body text-sm text-gray-500 mb-6">Nous vous répondrons dans les 24 heures.</p>
            <button onClick={() => { setSent(false); setForm({ nom: '', email: '', sujet: '', msg: '' }) }}
              className="px-6 py-3 rounded-full grad-green-blue text-white font-body font-bold text-sm">
              Nouveau message
            </button>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-4 shadow-xl shadow-black/5 dark:shadow-black/20">
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Formulaire de contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[9px] tracking-[2px] uppercase text-brand-green mb-2">Nom</label>
                <input type="text" value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} placeholder="Votre nom" className={inputCls} />
              </div>
              <div>
                <label className="block font-mono text-[9px] tracking-[2px] uppercase text-brand-green mb-2">Email</label>
                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="votre@email.com" className={inputCls} />
              </div>
            </div>
            <div>
              <label className="block font-mono text-[9px] tracking-[2px] uppercase text-brand-green mb-2">Sujet</label>
              <select value={form.sujet} onChange={e => setForm({...form, sujet: e.target.value})} className={inputCls}>
                <option value="" disabled>Choisir un sujet...</option>
                <option>Commander un smartphone</option>
                <option>Demander une réparation</option>
                <option>Pack Accessibilité</option>
                <option>Assistance technique</option>
                <option>Recherche personnalisée</option>
                <option>Commande entreprise</option>
                <option>Autre demande</option>
              </select>
            </div>
            <div>
              <label className="block font-mono text-[9px] tracking-[2px] uppercase text-brand-green mb-2">Message</label>
              <textarea value={form.msg} rows={5} onChange={e => setForm({...form, msg: e.target.value})} placeholder="Décrivez votre demande..." className={`${inputCls} resize-none`} />
            </div>
            <button onClick={() => ok && setSent(true)} disabled={!ok}
              className={`w-full py-3.5 rounded-xl font-body font-bold text-sm transition-all ${ok ? 'grad-green-blue text-white shadow-lg shadow-green-500/20 hover:scale-[1.02]' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'}`}>
              Envoyer le message ◆
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
