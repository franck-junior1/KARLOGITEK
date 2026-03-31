import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SMARTPHONES } from '../data';

const BRAND_KEYS = ['iphone', 'samsung', 'pixel', 'xiaomi', 'tecno', 'motorola'];
const BRAND_IMGS = {
  iphone: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80',
  samsung: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80',
  pixel: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=600&q=80',
  xiaomi: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80',
  tecno: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
  motorola: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?w=600&q=80',
};

export default function SmartphonesIndex() {
  return (
    <div className="min-h-screen bg-dark-800 pt-24 pb-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-badge inline-flex mb-4">
            <span className="badge-dot" /><span className="badge-text">CATALOGUE SMARTPHONES</span>
          </div>
          <h1 className="page-title text-4xl md:text-6xl font-syne font-extrabold">📱 Smartphones</h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto font-dm text-sm leading-relaxed">
            Toutes les grandes marques, 100% authentiques, avec documents et garantie constructeur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_KEYS.map((key) => {
            const brand = SMARTPHONES[key];
            return (
              <Link to={`/smartphones/${key}`} key={key}
                className="card-dark overflow-hidden group no-underline block"
                style={{ borderTopWidth: '3px', borderTopColor: brand.color }}>
                <div className="h-48 relative overflow-hidden">
                  <img src={BRAND_IMGS[key]} alt={brand.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[8px] font-mono font-bold uppercase tracking-widest"
                    style={{ background: brand.color + '25', border: `1px solid ${brand.color}50`, color: brand.color }}>
                    {brand.products.length} modèles
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl">{brand.icon}</span>
                      <h3 className="font-syne text-lg font-extrabold text-white mt-1">{brand.label}</h3>
                      <p className="text-xs text-gray-500 font-dm">Voir les {brand.products.length} modèles disponibles</p>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-dark-300 flex items-center justify-center text-gray-400 group-hover:border-brand-green group-hover:text-brand-green transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
