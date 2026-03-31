import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Logo from './Logo'
import { waLink } from '../data'

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  {
    to: '/smartphones', label: 'Smartphones', sub: [
      { to: '/smartphones/iphone', label: '🍎 iPhone' },
      { to: '/smartphones/samsung', label: '📱 Samsung' },
      { to: '/smartphones/pixel', label: '🔍 Google Pixel' },
      { to: '/smartphones/tecno', label: '⚡ Tecno' },
      { to: '/smartphones/xiaomi', label: '🔴 Xiaomi' },
      { to: '/smartphones/motorola', label: '🏍️ Motorola' },
    ]
  },
  {
    to: '/accessoires', label: 'Accessoires', sub: [
      { to: '/accessoires/bluetooth', label: '🎧 Kit Bluetooth' },
      { to: '/accessoires/smartwatch', label: '⌚ Montres connectées' },
      { to: '/accessoires/chargeurs', label: '⚡ Chargeurs intelligents' },
    ]
  },
  { to: '/reparation', label: 'Réparation' },
  { to: '/services', label: 'Services' },
  { to: '/packs', label: 'Packs' },
  { to: '/contact', label: 'Contact' },
]

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mob, setMob] = useState(false)
  const [openSub, setOpenSub] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setMob(false); setOpenSub(null) }, [location])
  useEffect(() => { document.body.style.overflow = mob ? 'hidden' : '' }, [mob])

  const isActive = (to) => location.pathname === to || (to !== '/' && location.pathname.startsWith(to))

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[5%] ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo size="sm" showText={true} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? 'text-brand-green bg-green-50 dark:bg-green-950/40'
                      : 'text-gray-600 dark:text-gray-400 hover:text-brand-green hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
                >
                  {link.label}
                  {link.sub && <span className="text-[10px] opacity-60">▾</span>}
                </Link>

                {link.sub && (
                  <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl shadow-black/10 dark:shadow-black/40 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                    {link.sub.map(s => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-brand-green transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-brand-green hover:text-brand-green transition-all"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href={waLink('Bonjour KARLOGITEK 👋')}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full grad-green-blue text-white text-sm font-body font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all duration-200"
            >
              <WaIcon /> WhatsApp
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMob(!mob)}
              className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300"
            >
              {mob ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mob && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-950 overflow-y-auto" style={{ animation: 'fadeIn 0.2s ease' }}>
          <div className="flex flex-col pt-20 pb-10 px-6">
            {NAV_LINKS.map((link, i) => (
              <div key={link.to} style={{ animation: `fadeUp 0.4s ${i * 0.04}s cubic-bezier(0.16,1,0.3,1) both` }}>
                {link.sub ? (
                  <div>
                    <button
                      onClick={() => setOpenSub(openSub === link.to ? null : link.to)}
                      className="w-full flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 text-left"
                    >
                      <span className="font-display font-bold text-xl text-gray-900 dark:text-white">{link.label}</span>
                      <span className="text-gray-400 text-sm">{openSub === link.to ? '▲' : '▼'}</span>
                    </button>
                    {openSub === link.to && (
                      <div className="pl-4 pb-2">
                        {link.sub.map(s => (
                          <Link
                            key={s.to}
                            to={s.to}
                            className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-green transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    className={`block py-4 border-b border-gray-100 dark:border-gray-800 font-display font-bold text-xl transition-colors ${
                      isActive(link.to) ? 'text-brand-green' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <a
              href={waLink('Bonjour KARLOGITEK 👋')}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-3 py-4 rounded-2xl grad-green-blue text-white font-body font-bold text-base"
            >
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp — 679 680 586
            </a>
          </div>
        </div>
      )}
    </>
  )
}
