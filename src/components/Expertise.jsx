export default function Expertise() {
  const services = [
    {
      icon: "◎",
      title: "Lab-Grade Analysis",
      desc: "On-site material and process diagnostics before any integration begins.",
      bg: "bg-red-600",
      text: "text-white",
    },
    {
      icon: "⬡",
      title: "Application Support",
      desc: "Dedicated engineers available 24/7 during critical ramp-up phases.",
      bg: "bg-stone-900",
      text: "text-white",
    },
    {
      icon: "◈",
      title: "Process Auditing",
      desc: "Structured review cycles to maintain compliance and efficiency gains.",
      bg: "bg-stone-100",
      text: "text-stone-900",
    },
  ];

  return (
    <section className="bg-stone-50 py-24 md:py-32 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 mb-4">
            <span className="w-4 h-px bg-red-600" /> Services
          </span>
          <h2
            className="text-4xl md:text-6xl font-black leading-tight text-stone-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Technical expertise,
            <br />
            included as standard.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className={`${s.bg} ${s.text} p-8 md:p-10 flex flex-col justify-between min-h-64`}
            >
              <span className="text-2xl opacity-60">{s.icon}</span>
              <div>
                <h3
                  className="text-xl font-black mb-3"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {s.title}
                </h3>
                <p className={`text-xs leading-relaxed ${s.text === "text-white" ? "opacity-70" : "text-stone-500"}`}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA inline */}
        <div className="mt-12 border border-stone-300 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-stone-800 mb-1">
              Ready to start a conversation?
            </p>
            <p className="text-xs text-stone-400">
              Our team typically responds within one business day.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 hover:bg-stone-900 transition-colors duration-300 whitespace-nowrap"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
}
