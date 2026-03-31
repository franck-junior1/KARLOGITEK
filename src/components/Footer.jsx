import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { waLink } from '../data'

const WaIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size="md" showText={true} />
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs font-body">Votre expert digital de confiance à Douala. Smartphones authentiques, équipements tech et assistance 7j/7.</p>
            <a href={waLink('Bonjour KARLOGITEK 👋')} target="_blank" rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-950 border border-green-800 text-brand-green text-sm font-body font-semibold hover:bg-green-900 transition-colors">
              <WaIcon /> +237 679 680 586
            </a>
          </div>

          {/* Smartphones */}
          <div>
            <p className="font-mono text-[9px] tracking-[3px] uppercase text-brand-green mb-4 font-bold">Smartphones</p>
            {[['iPhone', '/smartphones/iphone'], ['Samsung', '/smartphones/samsung'], ['Google Pixel', '/smartphones/pixel'], ['Tecno', '/smartphones/tecno'], ['Xiaomi', '/smartphones/xiaomi'], ['Motorola', '/smartphones/motorola']].map(([l, t]) => (
              <Link key={t} to={t} className="block text-sm text-gray-500 hover:text-brand-green mb-2 transition-colors font-body">{l}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[9px] tracking-[3px] uppercase text-brand-blue mb-4 font-bold">Services</p>
            {[['Assistance Technique', '/services'], ['Maintenance', '/services'], ['Réparation Écran', '/reparation'], ['Micro & Son', '/reparation'], ['Batterie', '/reparation'], ['Dépannage complet', '/reparation']].map(([l, t]) => (
              <Link key={l} to={t} className="block text-sm text-gray-500 hover:text-brand-blue mb-2 transition-colors font-body">{l}</Link>
            ))}
          </div>

          {/* Info */}
          <div>
            <p className="font-mono text-[9px] tracking-[3px] uppercase text-brand-orange mb-4 font-bold">Infos</p>
            {[['Packs & Offres', '/packs'], ['Accessoires', '/accessoires'], ['Livraison', '/livraison'], ['Contact', '/contact'], ['Accueil', '/']].map(([l, t]) => (
              <Link key={t} to={t} className="block text-sm text-gray-500 hover:text-brand-orange mb-2 transition-colors font-body">{l}</Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-600 font-mono">📍 Douala, Cameroun</p>
              <p className="text-xs text-gray-600 font-mono mt-1">🕐 7j/7 • 8h–22h</p>
            </div>
          </div>
        </div>

        {/* Rainbow bar */}
        <div className="h-[3px] rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #22C55E, #0EA5E9, #F97316, #EF4444, #EAB308, #22C55E)' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600 font-body">© {new Date().getFullYear()} KARLOGITEK TELECOM. Tous droits réservés.</p>
          <p className="text-xs text-gray-600 font-body italic">L'excellence au bout des doigts</p>
        </div>
      </div>
    </footer>
  )
}
