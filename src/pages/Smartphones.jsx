import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { PHONES } from '../data'

const BRANDS = [
  { key: 'iphone', label: 'iPhone', emoji: '🍎', color: '#0EA5E9', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80', desc: 'Design premium, puce A-series' },
  { key: 'samsung', label: 'Samsung', emoji: '📱', color: '#F97316', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80', desc: 'Galaxy S, A et Ultra' },
  { key: 'pixel', label: 'Google Pixel', emoji: '🔍', color: '#22C55E', img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80', desc: 'IA Google, Android pur' },
  { key: 'tecno', label: 'Tecno', emoji: '⚡', color: '#EAB308', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80', desc: '5G, AMOLED, rapport/prix' },
  { key: 'xiaomi', label: 'Xiaomi', emoji: '🔴', color: '#EF4444', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80', desc: 'Charge rapide, caméra Leica' },
  { key: 'motorola', label: 'Motorola', emoji: '🏍️', color: '#22C55E', img: 'https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=600&q=80', desc: 'Fiabilité, Android stock' },
]

export default function Smartphones() {
  const allFeatured = [...PHONES.iphone.slice(0,1), ...PHONES.samsung.slice(0,1), ...PHONES.xiaomi.slice(0,1), ...PHONES.tecno.slice(0,1), ...PHONES.pixel.slice(0,1), ...PHONES.motorola.slice(0,1)]
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <div className="relative py-16 px-[5%] overflow-hidden bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0 grid-bg-light dark:grid-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <SectionHeader sub="Catalogue" title="📱 Smartphones" />
          <p className="font-body text-gray-500 dark:text-gray-400 max-w-lg mx-auto">100% authentiques avec documents et garantie constructeur. Toutes grandes marques disponibles.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-[5%] py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {BRANDS.map((b, i) => (
            <Link key={b.key} to={`/smartphones/${b.key}`}
              className="group relative h-36 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 card-hover hover:shadow-xl"
              style={{ animation: `fadeUp 0.5s ${i * 0.05}s both` }}>
              <img src={b.img} alt={b.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${b.color}, transparent)` }} />
              <div className="absolute bottom-2 left-2">
                <span className="block text-lg mb-0.5">{b.emoji}</span>
                <h3 className="font-display font-bold text-sm text-white">{b.label}</h3>
                <p className="text-[9px] text-white/60 font-body">{b.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">Sélection du moment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allFeatured.map((item, i) => <ProductCard key={item.id} item={item} idx={i} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
