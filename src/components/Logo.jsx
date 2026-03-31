import React from 'react'

export default function Logo({ size = 'md', showText = true }) {
  const sizes = { sm: { icon: 40, title: 'text-lg', sub: 'text-[9px]' }, md: { icon: 56, title: 'text-xl', sub: 'text-[9px]' }, lg: { icon: 90, title: 'text-3xl', sub: 'text-[10px]' }, xl: { icon: 140, title: 'text-5xl', sub: 'text-xs' } }
  const s = sizes[size] || sizes.md
  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={s.icon} height={s.icon * 0.85} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 4 L72 4 L80 12 L72 20 L48 20 L40 12 Z" fill="url(#og)" opacity=".95"/>
        <path d="M76 8 L98 8 L106 16 L98 32 L76 32 L68 16 Z" fill="url(#rd)" opacity=".9"/>
        <path d="M8 28 L36 28 L44 44 L36 60 L8 60 L0 44 Z" fill="url(#gn)" opacity=".95"/>
        <path d="M52 44 L80 44 L96 52 L80 68 L52 68 L36 52 Z" fill="url(#bl)" opacity=".95"/>
        <rect x="42" y="22" width="34" height="20" rx="3" fill="white" opacity=".9"/>
        <text x="59" y="35" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0B0F1A" fontFamily="DM Sans,sans-serif">TELECOM</text>
        <circle cx="14" cy="44" r="2.5" fill="#4ADE80" opacity=".9"/>
        <circle cx="90" cy="52" r="2.5" fill="#38BDF8" opacity=".9"/>
        <circle cx="68" cy="12" r="2" fill="#FDE047" opacity=".9"/>
        <path d="M0 70 Q30 72 60 68 Q90 64 120 72" stroke="url(#sp1)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M10 78 Q45 80 80 76 Q100 74 120 80" stroke="url(#sp2)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".5"/>
        <defs>
          <linearGradient id="og" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#F97316"/><stop offset="100%" stopColor="#EF4444"/></linearGradient>
          <linearGradient id="rd" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#EF4444"/><stop offset="100%" stopColor="#B91C1C"/></linearGradient>
          <linearGradient id="gn" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22C55E"/><stop offset="100%" stopColor="#16A34A"/></linearGradient>
          <linearGradient id="bl" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0EA5E9"/><stop offset="100%" stopColor="#1D4ED8"/></linearGradient>
          <linearGradient id="sp1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#22C55E"/><stop offset="50%" stopColor="#0EA5E9"/><stop offset="100%" stopColor="#F97316"/></linearGradient>
          <linearGradient id="sp2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0EA5E9"/><stop offset="100%" stopColor="#EAB308"/></linearGradient>
        </defs>
      </svg>
      {showText && (
        <div className="text-center leading-tight">
          <div className={`font-display font-black tracking-wider shimmer-text ${s.title}`}>KARLOGITEK</div>
          <div className={`font-mono tracking-[0.4em] text-gray-400 dark:text-gray-500 uppercase ${s.sub}`}>— TELECOM —</div>
        </div>
      )}
    </div>
  )
}
