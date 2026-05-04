export default function TrustBanner() {
  const logos = [
    "VELTRIX", "OMNEX", "COREVA", "STRALUX", "DENDRIC", "QUORAM",
  ];

  return (
    <section className="bg-white border-y border-stone-200 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-6 text-center">
          Trusted by leaders across industries
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-black tracking-widest uppercase text-stone-300 hover:text-stone-500 transition-colors font-mono"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
