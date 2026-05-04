export default function Footer() {
  const links = {
    Platform: ["Overview", "Process Automation", "Systems Integration", "Data & Analytics", "Security"],
    Company: ["About", "Team", "Partners", "Press", "Careers"],
    Resources: ["Documentation", "Case Studies", "Blog", "Webinars", "Support"],
    Legal: ["Privacy Policy", "Terms of Use", "Cookie Settings", "Compliance"],
  };

  return (
    <footer className="bg-stone-950 text-stone-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-black tracking-widest uppercase text-white font-mono mb-4">
              NX<span className="text-red-600">·</span>Core
            </p>
            <p className="text-xs leading-relaxed text-stone-500 max-w-xs">
              Industrial intelligence platform for teams that demand precision at scale.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4">
                {section}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-stone-600 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-stone-700">
            © 2025 NX·Core GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "X (Twitter)", "GitHub"].map((s) => (
              <a key={s} href="#" className="text-xs text-stone-700 hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
