'use client'

import { useEffect, useRef, useState } from 'react'
import { whatIBuild } from '@/data'

export default function WhatIBuild() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-cyan/60 tracking-widest uppercase">01. Capabilities</span>
            <div className="flex-1 h-px bg-border max-w-[80px]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-text mb-4">
            What I <span className="gradient-text">Build</span>
          </h2>
          <p className="font-body text-text-muted max-w-xl">
            I build across the stack — from polished web interfaces to deep workflow automation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatIBuild.map((item, i) => (
            <div
              key={i}
              className="group glass border border-border hover:border-cyan/25 rounded-2xl p-6 transition-all duration-300 hover:shadow-card-hover relative overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan/[0.04] to-transparent rounded-2xl pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center mb-4 group-hover:border-cyan/30 group-hover:bg-cyan/5 transition-all">
                <span className="text-2xl text-cyan/80 group-hover:text-cyan transition-colors font-mono">
                  {item.icon}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-bold text-text text-lg mb-2 group-hover:text-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
