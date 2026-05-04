const reasons = [
  {
    number: "01",
    title: "Partnership First",
    desc: "We embed with your operations team before writing a line of code. Every deployment starts with listening, not selling.",
  },
  {
    number: "02",
    title: "All-in-One Stack",
    desc: "Hardware, software, and services under one roof. No vendor confusion. No integration blame-shifting.",
  },
  {
    number: "03",
    title: "Built to Scale",
    desc: "From single-line pilots to multi-plant rollouts — our architecture expands without re-engineering from scratch.",
  },
  {
    number: "04",
    title: "Domain Know-How",
    desc: "15+ years in industrial environments means we understand your constraints, not just your requirements.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 mb-6">
              <span className="w-4 h-px bg-red-600" /> Why NX·Core
            </span>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight text-stone-900 mb-8"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Why teams choose
              <br />
              <em className="not-italic text-red-600">us, not just</em>
              <br />
              our software.
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed max-w-sm">
              Industrial technology only delivers value when it matches reality. We don't just ship platforms — we take ownership of outcomes.
            </p>

            {/* Metric highlight */}
            <div className="mt-12 border border-stone-200 p-6 inline-block">
              <p
                className="text-5xl font-black text-stone-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                98.4<span className="text-red-600">%</span>
              </p>
              <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mt-2">
                Uptime SLA across all deployments
              </p>
            </div>
          </div>

          {/* Right column — reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200">
            {reasons.map((r) => (
              <div key={r.number} className="bg-white p-6 md:p-8 hover:bg-stone-50 transition-colors group">
                <p
                  className="text-3xl font-black text-stone-200 group-hover:text-red-100 transition-colors mb-4"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {r.number}
                </p>
                <h4 className="text-sm font-black uppercase tracking-wider text-stone-800 mb-3">
                  {r.title}
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
