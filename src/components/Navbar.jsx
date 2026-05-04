import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-black tracking-widest uppercase text-stone-900 font-mono">
            NX<span className="text-red-600">·</span>Core
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-stone-500">
          {["Solutions", "Technology", "About", "Cases", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-red-600 transition-colors duration-200">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block text-xs font-bold tracking-widest uppercase border border-stone-900 px-4 py-2 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200"
        >
          Get in Touch
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-px w-6 bg-stone-900 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-stone-900 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-stone-900 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-6 flex flex-col gap-4">
          {["Solutions", "Technology", "About", "Cases", "Contact"].map((item) => (
            <a key={item} href="#" className="text-sm font-bold tracking-widest uppercase text-stone-700 hover:text-red-600">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
