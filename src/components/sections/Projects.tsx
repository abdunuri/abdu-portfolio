'use client'

import { useEffect, useRef, useState } from 'react'
import { projects } from '@/data'

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ProjectCard({ project, className = '' }: { project: typeof projects[0]; className?: string }) {
  const isLarge = project.size === 'large'

  return (
    <div
      className={`group relative glass border border-border hover:border-cyan/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-card-hover overflow-hidden ${className}`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 rounded-2xl ${project.statusColor === 'cyan' ? 'bg-cyan/[0.03]' : 'bg-violet/[0.04]'}`} />
      </div>

      {/* Top row */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`tag ${project.statusColor === 'violet' ? 'tag-violet' : ''}`}>
            {project.category}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-mono ${project.statusColor === 'cyan' ? 'text-cyan/70' : 'text-violet-bright/70'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor === 'cyan' ? 'bg-cyan' : 'bg-violet-bright'} animate-pulse`} />
            {project.status}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
          {project.github && !project.githubPrivate && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-dim hover:text-text hover:bg-surface-2 transition-colors"
              title="View source"
            >
              <GitHubIcon />
            </a>
          )}
          {project.githubPrivate && (
            <span className="p-2 rounded-lg text-text-dim/40 cursor-default" title="Private repo">
              <GitHubIcon />
            </span>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-dim hover:text-cyan hover:bg-cyan/10 transition-colors"
              title="View live"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      {/* Title & tagline */}
      <div className="relative z-10 mb-3">
        <h3 className={`font-display font-bold text-text group-hover:text-cyan transition-colors mb-1.5 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
          {project.title}
        </h3>
        <p className="text-text-muted text-sm font-body leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Highlights (large cards only) */}
      {isLarge && (
        <ul className="relative z-10 mb-4 space-y-1.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-dim font-body">
              <span className="text-cyan mt-0.5 shrink-0">›</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="relative z-10 flex flex-wrap gap-1.5 mt-4">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono bg-surface-2 border border-border text-text-muted">
            {t}
          </span>
        ))}
      </div>

      {/* Featured indicator */}
      {project.featured && (
        <div className="absolute top-0 right-6 w-px h-8 bg-gradient-to-b from-cyan/60 to-transparent" />
      )}
    </div>
  )
}

export default function Projects() {
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

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" ref={ref} className="scroll-mt-24 py-24 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-cyan/60 tracking-widest uppercase">02. Work</span>
            <div className="flex-1 h-px bg-border max-w-[80px]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-text mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="font-body text-text-muted max-w-xl leading-relaxed">
            Real systems built for real workflows. Not tutorial clones — these are live products solving actual business problems.
          </p>
        </div>

        {/* Bento grid — featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Gagari — large featured card spanning 2 cols */}
          <div className="lg:col-span-2">
            <ProjectCard project={featured[0]} className="h-full" />
          </div>

          {/* Techvent */}
          <ProjectCard project={featured[1]} className="h-full" />

          {/* Passport bot */}
          <ProjectCard project={featured[2]} className="h-full" />

          {/* NURSAD TECH & Trade bot */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>

        {/* View more CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/abdunuri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-border-2 hover:border-cyan/40 rounded-xl text-sm font-body text-text-muted hover:text-cyan transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            See all repos on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
