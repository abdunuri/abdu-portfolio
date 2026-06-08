'use client'

import { useEffect, useRef, useState } from 'react'
import { experience, certifications } from '@/data'

const typeColors = {
  Freelance: 'cyan',
  Builder: 'violet',
  Education: 'cyan',
} as const

export default function Experience() {
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
    <section id="experience" ref={ref} className="scroll-mt-24 py-24 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-cyan/60 tracking-widest uppercase">05. Journey</span>
            <div className="flex-1 h-px bg-border max-w-[80px]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-text mb-4">
            Experience <span className="gradient-text">&</span> Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Timeline */}
          <div className="lg:col-span-2 relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-border to-transparent" />

            <div className="space-y-8">
              {experience.map((item, i) => {
                const color = typeColors[item.type as keyof typeof typeColors] || 'cyan'
                return (
                  <div key={i} className="relative pl-12">
                    {/* Dot */}
                    <div className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold
                      ${color === 'cyan'
                        ? 'border-cyan bg-cyan/10 text-cyan'
                        : 'border-violet-bright bg-violet/10 text-violet-bright'
                      }`}>
                      {i + 1}
                    </div>

                    <div className="glass border border-border rounded-2xl p-6 hover:border-cyan/20 transition-all group">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-display font-bold text-text text-lg group-hover:text-cyan transition-colors">
                            {item.role}
                          </h3>
                          <p className="font-body text-text-muted text-sm">{item.company}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className={`tag ${color === 'violet' ? 'tag-violet' : ''} text-xs`}>
                            {item.type}
                          </span>
                          <span className="font-mono text-xs text-text-dim">{item.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {item.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm font-body text-text-dim">
                            <span className="text-cyan mt-0.5 shrink-0">›</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Certifications sidebar */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-text text-lg">Certifications</h3>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="glass border border-border rounded-xl p-4 hover:border-cyan/20 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center shrink-0 group-hover:border-cyan/30 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-sm text-text font-medium leading-snug mb-1">
                        {cert.name}
                      </p>
                      <p className="font-mono text-xs text-text-dim">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upwork badge */}
            <div className="mt-4 glass border border-cyan/20 rounded-xl p-4 bg-cyan/[0.03]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="font-mono text-xs text-cyan font-medium">Upwork Verified</span>
              </div>
              <p className="font-body text-sm text-text-muted mb-1">100% Job Success Score</p>
              <p className="font-body text-sm text-text-muted">5-star rating · 2 completed jobs</p>
              <a
                href="https://www.upwork.com/freelancers/~01f82185cb154c03a9?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs font-mono text-cyan hover:text-cyan-dim transition-colors"
              >
                View profile ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
