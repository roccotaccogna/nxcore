export default function CTA() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 mb-6">
              <span className="w-4 h-px bg-red-600" /> Get Connected
            </span>
            <h2
              className="text-4xl md:text-6xl font-black leading-tight text-stone-900 mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Feel free
              <br />
              to connect.
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed max-w-sm mb-10">
              Whether you're evaluating options or ready to scope a project — we'll make the first conversation worth your time.
            </p>

            <div className="flex flex-col gap-3 text-sm text-stone-600">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                <span className="font-mono text-xs">hello@nxcore.io</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-stone-400 rounded-full flex-shrink-0" />
                <span className="font-mono text-xs">+1 (415) 000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-stone-300 rounded-full flex-shrink-0" />
                <span className="font-mono text-xs">San Francisco · Milan · Singapore</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-stone-50 border border-stone-200 p-8 md:p-10">
            <p className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-6">
              Send a message
            </p>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-stone-300 bg-white px-3 py-3 text-sm text-stone-800 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Carla"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-stone-300 bg-white px-3 py-3 text-sm text-stone-800 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Merton"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 mb-1">Company Email</label>
                <input
                  type="email"
                  className="w-full border border-stone-300 bg-white px-3 py-3 text-sm text-stone-800 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="carla@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 mb-1">How can we help?</label>
                <textarea
                  rows={4}
                  className="w-full border border-stone-300 bg-white px-3 py-3 text-sm text-stone-800 focus:outline-none focus:border-red-600 transition-colors resize-none"
                  placeholder="Brief description of your project or question..."
                />
              </div>
              <button className="w-full bg-red-600 text-white text-xs font-bold tracking-widest uppercase py-4 hover:bg-stone-900 transition-colors duration-300 mt-2">
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
