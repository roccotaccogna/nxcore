const testimonials = [
  {
    quote:
      "NX·Core restructured our entire production line visibility in under 90 days. The team's depth of knowledge is unlike any vendor we've worked with.",
    author: "Stefan Löwe",
    company: "Veltrix Industries",
    tag: "Manufacturing",
  },
  {
    quote:
      "We've reduced unplanned downtime by 34% in the first year. That's not a claim — that's on our quarterly report.",
    author: "Priya Shankar",
    company: "Omnex Global",
    tag: "Food & Beverage",
  },
  {
    quote:
      "The integration with our existing ERP was smoother than we had any right to expect. Zero disruption during the transition.",
    author: "Rafael Branco",
    company: "Coreva Systems",
    tag: "Packaging",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-stone-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2
            className="text-4xl md:text-5xl font-black leading-tight text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Built by people,
            <br />
            <em className="not-italic text-red-500">proven in the field.</em>
          </h2>
          <p className="max-w-xs text-xs text-stone-400 leading-relaxed">
            Real results from clients who replaced conventional approaches with something built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-700">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-stone-900 p-8 md:p-10 flex flex-col justify-between min-h-64 hover:bg-stone-800 transition-colors">
              <p className="text-sm text-stone-300 leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <div className="border-t border-stone-700 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-white">{t.author}</p>
                  <p className="text-xs text-stone-500">{t.company}</p>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-red-500 border border-red-900 px-2 py-1">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
