export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg">
            <span className="gradient-text">AN</span>
            <span className="text-text-dim font-mono text-sm">BU</span>
          </span>
          <span className="text-border-2">·</span>
          <span className="font-body text-xs text-text-dim">Abdulaziz Nuri Beshir</span>
        </div>

        {/* Center */}
        <p className="font-mono text-xs text-text-dim text-center">
          Built with Next.js · TypeScript · Tailwind CSS · Deployed on Vercel
        </p>

        {/* Right */}
        <p className="font-mono text-xs text-text-dim">
          © {year} · Addis Ababa, Ethiopia
        </p>
      </div>
    </footer>
  )
}
