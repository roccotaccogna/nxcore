export default function Hero() {
  return (
    <section className="pt-14 min-h-screen bg-stone-100 flex flex-col justify-between relative overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-stone-200 opacity-60" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-stone-200 opacity-40" />
      </div>

      {/* Accent tag */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-16">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-red-600 rounded-full" />
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500">
            Industrial Intelligence Platform
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-stone-900"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Built on
            <br />
            <span className="text-red-600 italic">Method.</span>
            <br />
            Driven by
            <br />
            <span className="relative inline-block">
              Precision.
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-stone-900" />
            </span>
          </h1>
        </div>

        {/* Subtext + CTA row */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="max-w-xs text-sm text-stone-500 leading-relaxed font-medium">
            End-to-end production systems engineered for industries that can't afford to compromise on quality or uptime.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#solutions"
              className="bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-4 hover:bg-stone-900 transition-colors duration-300"
            >
              Explore Solutions
            </a>
            <a
              href="#about"
              className="text-xs font-bold tracking-widest uppercase text-stone-500 flex items-center gap-2 hover:text-stone-900 transition-colors"
            >
              <span className="w-8 h-px bg-stone-400" />
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-6 w-full pb-10 mt-16 md:mt-0">
        <div className="border-t border-stone-300 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "2009", label: "Founded" },
            { value: "200+", label: "Global Clients" },
            { value: "18", label: "Countries" },
            { value: "4.9", label: "Avg. Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl md:text-5xl font-black text-stone-900 tabular-nums"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero image block — abstract geometric accent */}
      <div className="absolute right-0 top-20 md:top-14 w-40 md:w-64 h-40 md:h-64 bg-red-600 opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-12 top-32 md:right-24 md:top-24 w-24 h-24 border-2 border-red-600 opacity-20 rotate-12 pointer-events-none" />
    </section>
  );
}
