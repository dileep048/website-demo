export function HeroBackground() {
  return (
    <div className="hero-bg pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-[#061f38] via-primary to-[#0a4a7a]" />

      <div className="hero-bg-mesh absolute -inset-[40%] opacity-60" />

      <div className="hero-bg-orb hero-bg-orb-1 absolute h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl" />
      <div className="hero-bg-orb hero-bg-orb-2 absolute h-[360px] w-[360px] rounded-full bg-sky-400/15 blur-3xl" />

      <div className="hero-bg-grid absolute inset-0 opacity-[0.1]" />

      {/* Background machine silhouettes */}
      <svg
        className="hero-bg-silhouette hero-bg-silhouette-1 absolute -left-8 bottom-0 h-[55%] w-auto opacity-[0.07]"
        viewBox="0 0 200 280"
        fill="currentColor"
      >
        <rect x="60" y="40" width="80" height="180" rx="8" />
        <rect x="40" y="80" width="30" height="100" rx="4" />
        <rect x="130" y="100" width="40" height="80" rx="4" />
        <circle cx="100" cy="100" r="28" />
        <rect x="50" y="220" width="100" height="40" rx="4" />
        <rect x="70" y="10" width="60" height="40" rx="4" />
      </svg>

      <svg
        className="hero-bg-silhouette hero-bg-silhouette-2 absolute -right-4 top-8 h-[45%] w-auto opacity-[0.06]"
        viewBox="0 0 220 240"
        fill="currentColor"
      >
        <path d="M110 20 L180 120 L110 220 L40 120 Z" />
        <rect x="95" y="0" width="30" height="40" rx="4" />
        <circle cx="110" cy="120" r="24" />
      </svg>

      {/* Steam / vapor wisps */}
      <div className="hero-steam hero-steam-1 absolute left-[18%] top-[30%] h-24 w-10 rounded-full bg-white/10 blur-md" />
      <div className="hero-steam hero-steam-2 absolute left-[22%] top-[22%] h-20 w-8 rounded-full bg-white/[0.08] blur-md" />
      <div className="hero-steam hero-steam-3 absolute right-[20%] top-[40%] h-28 w-12 rounded-full bg-sky-200/10 blur-md" />

      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-transparent to-primary-dark/35" />
    </div>
  );
}
