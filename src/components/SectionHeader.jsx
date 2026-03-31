import React from 'react'

export default function SectionHeader({ sub, title, light = false }) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/50 rounded-full px-4 py-1.5 mb-4">
        <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-blink" />
        <span className="font-mono text-[9px] tracking-[3px] uppercase text-brand-green font-bold">{sub}</span>
      </div>
      <h2 className={`font-display font-black text-3xl md:text-4xl lg:text-5xl tracking-tight ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{title}</h2>
    </div>
  )
}
