import React from 'react';

const ModuleDetailBody: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 font-display text-[#181114]">
      {/* 1. Module Hero Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#f4f0f2] relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f285ad]/10 text-[#f285ad] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">school</span>
              Level N3 Module
            </div>
            <h1 className="text-[#181114] text-4xl font-black tracking-tight">Particles Mastery</h1>
            <p className="text-[#886373] max-w-lg">
              Master the nuances of intermediate particles like は vs が, に vs で, and more complex sentence structures.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex-1 max-w-xs h-3 bg-zinc-100 rounded-full overflow-hidden">
                <div className="bg-[#f285ad] h-full w-[42%]"></div>
              </div>
              <span className="text-sm font-bold text-[#181114]">42% Complete</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="text-center px-4 py-2 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-[10px] uppercase font-bold text-[#886373]">Lessons</p>
              <p className="text-xl font-bold text-[#181114]">3/8</p>
            </div>
            <div className="text-center px-4 py-2 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-[10px] uppercase font-bold text-[#886373]">Avg Score</p>
              <p className="text-xl font-bold text-[#181114]">92%</p>
            </div>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute right-5 top-5 size-64 bg-[#f285ad]/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* 2. AI Insight Box */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex gap-5">
        <div className="size-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
          <span className="material-symbols-outlined fill-1">auto_awesome</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-indigo-900 font-bold text-lg">Why this is next</h3>
          <p className="text-indigo-700/80 text-sm leading-relaxed">
            Based on your performance in Lesson 3, you're excelling at subject marking but often hesitate when choosing between 
            <span className="font-bold bg-indigo-100 px-1 rounded mx-1">に (ni)</span> and 
            <span className="font-bold bg-indigo-100 px-1 rounded mx-1">で (de)</span> for location. 
            Lesson 4 will bridge this gap using real-world conversation patterns.
          </p>
        </div>
      </div>

      {/* 3. Lesson Path List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#181114] text-xl font-bold">Module Path</h3>
          <div className="flex items-center gap-2 text-[#886373] text-sm">
            <span className="material-symbols-outlined text-sm">schedule</span>
            Estimated time: 2h 45m
          </div>
        </div>

        <div className="space-y-3">
          {/* Completed Lesson */}
          <div className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#f4f0f2] hover:shadow-md transition-all">
            <div className="size-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px] font-bold">check</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-green-600 uppercase mb-0.5">Lesson 1 • Completed</p>
              <h4 className="text-[#181114] font-bold">Basic Topic Marker は vs が</h4>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1 px-6">
              <span className="text-xs text-[#886373]">Quiz Score</span>
              <span className="text-sm font-bold">98%</span>
            </div>
            <button className="px-4 py-2 text-sm font-bold text-[#886373] hover:text-[#f285ad] transition-colors">Review</button>
          </div>

          {/* Current Active Lesson */}
          <div className="relative group flex items-center gap-4 bg-[#f285ad]/5 p-5 rounded-2xl border-2 border-[#f285ad] shadow-lg shadow-[#f285ad]/10">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#f285ad] rounded-full"></div>
            <div className="size-12 rounded-full bg-[#f285ad] text-white flex items-center justify-center shrink-0 animate-pulse">
              <span className="material-symbols-outlined fill-1">play_arrow</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-[#f285ad] uppercase mb-0.5">Lesson 4 • Current Focus</p>
              <h4 className="text-[#181114] text-lg font-black">Location of Action vs. Existence: で vs に</h4>
              <p className="text-xs text-[#886373] mt-1">Understanding dynamic verbs versus static state verbs.</p>
            </div>
            <button className="px-6 py-2.5 bg-[#f285ad] text-white rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform">
              Start Learning
            </button>
          </div>

          {/* Locked Lesson */}
          <div className="flex items-center gap-4 bg-zinc-50 p-4 rounded-2xl border border-zinc-100 opacity-60">
            <div className="size-10 rounded-full bg-zinc-200 text-zinc-400 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">lock</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-zinc-400 uppercase mb-0.5">Lesson 5 • Locked</p>
              <h4 className="text-zinc-500 font-bold">Object Marker を with Potential Form</h4>
            </div>
            <span className="text-xs text-zinc-400 italic">Complete Lesson 4 to unlock</span>
          </div>

          {/* Milestone Assessment */}
          <div className="flex items-center gap-4 bg-amber-50/50 p-5 rounded-2xl border-2 border-dashed border-amber-200 opacity-60">
            <div className="size-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">emoji_events</span>
            </div>
            <div className="flex-1">
              <h4 className="text-amber-800 font-black">Module Mastery Assessment</h4>
              <p className="text-xs text-amber-700/60">Final test for all N3 Particles</p>
            </div>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold uppercase">Milestone</span>
          </div>
        </div>
      </div>

      {/* 4. Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {[
          { icon: 'timer', label: 'Time Studied', value: '1h 15m', color: 'bg-blue-100 text-blue-500' },
          { icon: 'psychology', label: 'Retained Concepts', value: '14 / 28', color: 'bg-purple-100 text-purple-500' },
          { icon: 'military_tech', label: 'Bonus XP Potential', value: '+450 XP', color: 'bg-[#f285ad]/10 text-[#f285ad]' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-[#f4f0f2] shadow-sm flex items-center gap-4">
            <div className={`size-12 ${stat.color} rounded-xl flex items-center justify-center`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <div>
              <p className="text-xs text-[#886373] font-bold uppercase">{stat.label}</p>
              <p className="text-xl font-black text-[#181114]">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleDetailBody;