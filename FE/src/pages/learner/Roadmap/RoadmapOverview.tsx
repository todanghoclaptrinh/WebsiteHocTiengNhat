import React from 'react';
import { Link } from 'react-router-dom';

const RoadmapPage: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-white font-display text-[#181114]">

      <main className="flex-1 overflow-hidden flex">
        {/* CENTER CONTENT */}
        <div className="flex-1 flex flex-col min-w-0">
          <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-[#f4f0f2]/50">
            <div>
              <h2 className="text-[#181114] text-2xl font-black tracking-tight">JLPT N3 Learning Path</h2>
              <p className="text-[#886373] text-sm mt-1">AI Personalized S-Curve Curriculum</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#f4f0f2] text-xs font-semibold">
                <span className="size-2 rounded-full bg-[#f287ae]"></span> In Progress
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#f4f0f2] text-xs font-semibold text-zinc-400">
                <span className="size-2 rounded-full bg-zinc-300"></span> Locked
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-8 relative scrollbar-hide">
            <div className="max-w-4xl mx-auto min-h-300 relative">
              {/* S-Curve Path SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewBox="0 0 800 1200">
                <path 
                  d="M400 50 C 600 150, 600 350, 400 450 C 200 550, 200 750, 400 850 C 600 950, 600 1150, 400 1250" 
                  stroke="#f4f0f2" strokeWidth="12" strokeLinecap="round" 
                />
                <path 
                  d="M400 50 C 600 150, 600 350, 400 450 C 200 550, 200 750, 400 850" 
                  stroke="#f287ae" strokeWidth="12" strokeLinecap="round" strokeOpacity="0.3"
                />
              </svg>

              {/* Node 1: Completed */}
              <div className="absolute top-12.5 left-100 -translate-x-1/2 -translate-y-1/2 group">
                <div className="size-16 bg-[#f287ae] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer ring-4 ring-white">
                  <span className="material-symbols-outlined fill-1">check</span>
                </div>
              </div>

              {/* Node 2: Completed */}
              <div className="absolute top-62.5 left-137.5 -translate-x-1/2 -translate-y-1/2 group">
                <div className="size-16 bg-[#f287ae] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer ring-4 ring-white">
                  <span className="material-symbols-outlined fill-1">check</span>
                </div>
              </div>

              {/* Node 3: Active (Current Focus) */}
              <div className="absolute top-112.5 left-100 -translate-x-1/2 -translate-y-1/2">
                <div className="size-20 bg-white rounded-full flex items-center justify-center text-[#f287ae] shadow-xl cursor-pointer ring-4 ring-[#f287ae] animate-[pulse_2s_infinite]">
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </div>
                <div className="absolute -top-4 left-24 w-60 bg-white p-5 rounded-2xl border-2 border-[#f287ae] shadow-2xl z-20">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] font-bold text-[#f287ae] uppercase">Current Focus</p>
                    <span className="px-1.5 py-0.5 rounded bg-[#f287ae]/10 text-[9px] font-bold text-[#f287ae]">UNIT 3</span>
                  </div>
                  <p className="text-base font-bold text-[#181114] leading-tight">Honorifics & Keigo Basics</p>
                  <Link to="./:level">
                    <button className="w-full mt-3 bg-[#f287ae] text-white text-xs font-bold py-2.5 rounded-xl hover:bg-[#e07198] transition-all">
                        Continue Lesson
                    </button>
                  </Link>
                </div>
              </div>

              {/* Node 4: Locked */}
              <div className="absolute top-162.5 left-62.5 -translate-x-1/2 -translate-y-1/2 opacity-60">
                <div className="size-14 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 ring-4 ring-white">
                  <span className="material-symbols-outlined">lock</span>
                </div>
              </div>

              {/* Final: Goal */}
              <div className="absolute top-262.5 left-137.5 -translate-x-1/2 -translate-y-1/2">
                <div className="size-24 bg-linear-to-br from-amber-300 to-orange-400 rounded-3xl rotate-12 flex items-center justify-center text-white shadow-2xl ring-4 ring-white">
                  <span className="material-symbols-outlined text-4xl -rotate-12 fill-1">emoji_events</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR (Stats) */}
        <aside className="w-80 bg-white border-l border-[#f4f0f2] flex flex-col p-6 gap-8 overflow-y-auto">
          <div className="bg-[#f287ae]/5 rounded-2xl p-6 border border-[#f287ae]/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#f287ae] text-xl">auto_awesome</span>
                <h3 className="text-sm font-bold text-[#f287ae] uppercase tracking-wide">AI Forecast</h3>
              </div>
              <p className="text-xs text-[#886373] font-medium">Estimated Completion</p>
              <p className="text-2xl font-black text-[#181114] mt-1">Oct 14, 2024</p>
              <div className="mt-4 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit">
                2 weeks ahead
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-black px-2">Milestones</h3>
            <div className="space-y-3">
              {[
                { title: 'Vocab Checkpoint', desc: 'Master 300 N3 words', progress: 80, locked: false },
                { title: 'Listening Drill', desc: 'Natural news broadcasts', progress: 0, locked: true }
              ].map((m, i) => (
                <div key={i} className="bg-zinc-50 p-4 rounded-xl border border-[#f4f0f2] flex gap-4">
                  <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${m.locked ? 'bg-zinc-200' : 'bg-[#f287ae]/20'}`}>
                    <span className={`material-symbols-outlined ${m.locked ? 'text-zinc-400' : 'text-[#f287ae]'}`}>
                      {m.locked ? 'headphones' : 'spellcheck'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">{m.title}</p>
                    <p className="text-[11px] text-[#886373] mt-0.5">{m.desc}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 bg-zinc-200 h-1 rounded-full overflow-hidden">
                        <div className="bg-[#f287ae] h-full" style={{ width: `${m.progress}%` }}></div>
                      </div>
                      <span className="text-[10px] font-bold">{m.locked ? 'Locked' : `${m.progress}%`}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto bg-zinc-900 rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-amber-400 text-sm">lightbulb</span>
              <h4 className="text-[10px] font-bold uppercase tracking-widest">Daily Tip</h4>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed italic">"Shadowing for 10 min today will boost Keigo recall by 40%."</p>
            <button className="w-full mt-4 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-xs font-bold transition-all">Start Drill</button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default RoadmapPage;