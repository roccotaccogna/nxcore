const team = [
  { name: "Carla Merton", role: "Chief Executive Officer", initials: "CM", color: "bg-red-100 text-red-700" },
  { name: "Jonas Ahlberg", role: "Head of Engineering", initials: "JA", color: "bg-stone-200 text-stone-700" },
  { name: "Nadia Ferretti", role: "VP of Operations", initials: "NF", color: "bg-stone-800 text-stone-100" },
  { name: "Tariq Osei", role: "Director of Partnerships", initials: "TO", color: "bg-red-600 text-white" },
  { name: "Lena Kovač", role: "Lead System Architect", initials: "LK", color: "bg-stone-100 text-stone-600" },
  { name: "Max Delvigne", role: "R&D Manager", initials: "MD", color: "bg-stone-900 text-stone-100" },
];

export default function Team() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 mb-4">
              <span className="w-4 h-px bg-red-600" /> The People
            </span>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight text-stone-900"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Meet the team
              <br />
              making it happen.
            </h2>
          </div>
          <a
            href="#"
            className="text-xs font-bold tracking-widest uppercase text-stone-400 hover:text-red-600 transition-colors flex items-center gap-2 self-end"
          >
            All Positions <span>→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-stone-200">
          {team.map((member) => (
            <div key={member.name} className="bg-white p-4 md:p-6 text-center group hover:bg-stone-50 transition-colors">
              {/* Avatar */}
              <div
                className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-black ${member.color}`}
              >
                {member.initials}
              </div>
              <p className="text-xs font-black text-stone-800 leading-tight">{member.name}</p>
              <p className="text-xs text-stone-400 mt-1 leading-tight">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
