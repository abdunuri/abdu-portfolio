'use client'

import { useEffect, useRef, useState } from 'react'
import { skills } from '@/data'

const categories = [
  { key: 'frontend', label: 'Frontend', icon: '◈', color: 'cyan' },
  { key: 'backend', label: 'Backend', icon: '⬡', color: 'cyan' },
  { key: 'automation', label: 'Automation & Bots', icon: '⚙', color: 'violet' },
  { key: 'database', label: 'Database', icon: '▦', color: 'violet' },
  { key: 'tools', label: 'Tools & DevOps', icon: '◎', color: 'cyan' },
] as const

const colorStyles = {
  cyan: {
    card: 'hover:border-cyan/30',
    icon: 'bg-cyan/10 border-cyan/20 text-cyan group-hover:bg-cyan/15',
  },
  violet: {
    card: 'hover:border-violet/30',
    icon: 'bg-violet/10 border-violet/20 text-violet group-hover:bg-violet/15',
  },
} as const

export default function Skills() {
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
    <section id="skills" ref={ref} className="scroll-mt-24 py-24 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-cyan/60 tracking-widest uppercase">04. Stack</span>
            <div className="flex-1 h-px bg-border max-w-[80px]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-text mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="font-body text-text-muted max-w-xl">
            Tools I use daily to build full-stack products, automate workflows, and ship real software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.key}
              className={`glass border border-border rounded-2xl p-6 ${colorStyles[cat.color].card} transition-all duration-300 group ${i === 0 ? 'lg:col-span-2' : ''}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-mono text-lg ${colorStyles[cat.color].icon} transition-colors`}>
                  {cat.icon}
                </div>
                <span className="font-display font-semibold text-text text-sm">{cat.label}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200
                      ${cat.color === 'cyan'
                        ? 'bg-surface-2 border-border text-text-muted hover:border-cyan/40 hover:text-cyan hover:bg-cyan/5'
                        : 'bg-surface-2 border-border text-text-muted hover:border-violet/40 hover:text-violet-bright hover:bg-violet/5'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages callout */}
        <div className="mt-4 glass border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-text-dim tracking-wider">LANGUAGES</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-wrap gap-3">
            {['TypeScript', 'Python', 'JavaScript', 'SQL', 'C++'].map((lang) => (
              <div key={lang} className="flex items-center gap-2 px-4 py-2 rounded-xl glass-strong border border-border-2">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span className="font-mono text-sm text-text-muted">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
