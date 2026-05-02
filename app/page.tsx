export default function HomePage() {
  return (
    <main className="relative min-h-[calc(100vh-52px)] flex flex-col items-center justify-center overflow-hidden px-6">

      {/* ── Ambient grid background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent 60%, #0a0a0a 100%),
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        }}
      />

      {/* ── Radial glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Hero content ── */}
      <div className="flex flex-col items-center text-center max-w-2xl gap-6 animate-fade-in">

        {/* Badge */}
        <span className="
          inline-flex items-center gap-1.5
          px-3 py-1 rounded-full
          border border-white/10 bg-white/5
          font-mono text-[11px] text-neutral-400
          tracking-widest uppercase
          select-none
        ">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open Source · Free Forever
        </span>

        {/* Heading */}
        <h1 className="
          font-mono font-bold
          text-5xl sm:text-6xl lg:text-7xl
          text-white leading-[1.05] tracking-tighter
        ">
          Short links,{" "}
          <span className="
            relative inline-block
            text-transparent bg-clip-text
            bg-gradient-to-r from-neutral-100 to-neutral-400
          ">
            your way.
          </span>
        </h1>

        {/* Description */}
        <p className="
          text-base sm:text-lg
          text-neutral-500 dark:text-neutral-400
          leading-relaxed max-w-md
        ">
          href.dev is an open-source link shortener — clean, fast, and fully in your control.
          Built by{" "}
          <a
            href="https://marcfernandez.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Marc Fernandez's website"
            className="
              relative text-neutral-300
              underline underline-offset-4 decoration-neutral-600
              hover:decoration-neutral-300
              transition-all duration-150
            "
          >
            Marc Fernandez
          </a>
          .
        </p>

        {/* CTA row */}
        <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
          <a
            href="/dashboard"
            className="
              inline-flex items-center gap-2
              px-5 h-10 rounded-[8px]
              bg-white text-neutral-900
              font-mono text-sm font-semibold tracking-tight
              hover:bg-neutral-200
              active:translate-y-0.5
              transition-all duration-150
              select-none
            "
          >
            Create a link
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="https://github.com/marcfernandezo/href.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="
              inline-flex items-center gap-2
              px-5 h-10 rounded-[8px]
              border border-white/10 bg-white/5
              text-neutral-300
              font-mono text-sm font-medium tracking-tight
              hover:bg-white/10 hover:border-white/20 hover:text-white
              active:translate-y-0.5
              transition-all duration-150
              select-none
            "
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            View on GitHub
          </a>
        </div>

      </div>

      {/* ── Social proof / stats strip ── */}
      <div className="
        absolute bottom-10 left-1/2 -translate-x-1/2
        flex items-center gap-6
        font-mono text-xs text-neutral-600
        select-none
      ">
        {[
          { label: "Open Source", value: "MIT", link: "https://github.com/marcfernandezo/href.dev" },
          { label: "Self-hostable", value: "Yes", link: "https://github.com/marcfernandezo/href.dev" },
        ].map(({ label, value, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            {i > 0 && <span className="w-px h-3 bg-neutral-800" />}
            <span>{label}</span>
            <span className="text-neutral-400 font-semibold">{value}</span>
          </a>
        ))}
      </div>

    </main>
  );
}