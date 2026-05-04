const categories = [
  {
    tag: "Module A",
    title: "Process Automation",
    items: [
      { name: "Flow Control", desc: "Adaptive regulation for continuous industrial lines." },
      { name: "Batch Management", desc: "Precision scheduling with real-time deviation alerts." },
      { name: "Inline QC", desc: "Vision-based quality checks at production speed." },
    ],
    accent: "bg-red-600",
  },
  {
    tag: "Module B",
    title: "Systems Integration",
    items: [
      { name: "ERP Bridge", desc: "Native connectors to SAP, Oracle, and open standards." },
      { name: "SCADA Layer", desc: "Unified supervisory control with full audit trails." },
      { name: "API Mesh", desc: "RESTful and event-driven integrations at any scale." },
    ],
    accent: "bg-stone-900",
  },
  {
    tag: "Module C",
    title: "Data & Analytics",
    items: [
      { name: "OEE Dashboard", desc: "Overall equipment effectiveness tracked live." },
      { name: "Predictive Alerts", desc: "ML-driven maintenance forecasting cuts downtime." },
      { name: "Custom Reports", desc: "Exportable insights aligned to your KPIs." },
    ],
    accent: "bg-stone-400",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-stone-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-stone-200 pb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 mb-4">
              <span className="w-4 h-px bg-red-600" /> What We Build
            </span>
            <h2
              className="text-4xl md:text-6xl font-black leading-tight text-stone-900"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Comprehensive
              <br />
              system portfolio.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-stone-500 leading-relaxed">
            Every module is engineered to integrate seamlessly, delivering coherent value from day one.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-200">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`p-8 md:p-10 ${i < categories.length - 1 ? "border-b md:border-b-0 md:border-r border-stone-200" : ""}`}
            >
              {/* Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className={`w-1.5 h-1.5 rounded-full ${cat.accent}`} />
                <span className="text-xs font-bold tracking-widest uppercase text-stone-400">
                  {cat.tag}
                </span>
              </div>

              <h3
                className="text-2xl font-black text-stone-900 mb-8"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {cat.title}
              </h3>

              <div className="space-y-6">
                {cat.items.map((item) => (
                  <div key={item.name} className="border-t border-stone-200 pt-5">
                    <p className="text-sm font-bold text-stone-800 mb-1">{item.name}</p>
                    <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mt-10 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-stone-400 hover:text-red-600 transition-colors"
              >
                Learn more <span className="text-lg leading-none">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
