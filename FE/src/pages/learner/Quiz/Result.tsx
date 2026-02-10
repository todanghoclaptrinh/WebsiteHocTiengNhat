import React from 'react';

const QuizResult = () => {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen font-display">

      <main className="max-w-7xl mx-auto w-full px-4 md:px-10 py-8">
        {/* Hero Score Section */}
        <section className="flex flex-col items-center text-center mb-12">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary px-5 py-1.5 text-[10px] font-black uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px] mr-2">auto_awesome</span> AI Analysis Complete
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">JLPT N3 Grammar - Final Results</h1>
          <p className="text-slate-500 max-w-lg mx-auto mb-10 font-medium">Excellent effort! You've mastered 85% of the concepts in this set. Let's look at your growth areas.</p>
          
          <div className="relative flex items-center justify-center size-48 md:size-64">
            <svg className="size-full transform -rotate-90 drop-shadow-xl">
              <circle className="text-white" cx="50%" cy="50%" fill="transparent" r="42%" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-primary" cx="50%" cy="50%" fill="transparent" r="42%" stroke="currentColor" strokeWidth="12" strokeDasharray="283" strokeDashoffset="42.45" strokeLinecap="round"></circle>
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl font-black text-slate-900 leading-none">85</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Score</span>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Time Spent', val: '12:45', sub: 'Faster than average', subCol: 'text-green-500' },
            { label: 'Accuracy', val: '85%', sub: '+5% improvement', subCol: 'text-primary' },
            { label: 'XP Earned', val: '450 XP', sub: 'Double streak bonus!', subCol: 'text-amber-500' },
            { label: 'Global Rank', val: '#1,402', sub: 'Top 12% today', subCol: 'text-blue-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col shadow-sm">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</span>
              <span className="text-2xl font-black text-slate-800">{stat.val}</span>
              <span className={`text-[10px] font-bold mt-2 ${stat.subCol}`}>{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Main Analysis Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Radar Chart */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-[0.15em] mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary fill-1">analytics</span> Skill Radar
              </h3>
              <div className="relative w-full aspect-square flex items-center justify-center p-4">
                <svg className="w-full h-full text-slate-100" viewBox="0 0 100 100">
                  <polygon fill="none" points="50,10 90,40 75,90 25,90 10,40" stroke="currentColor" strokeWidth="0.5"></polygon>
                  <polygon fill="none" points="50,25 80,48 68,80 32,80 20,48" stroke="currentColor" strokeWidth="0.5"></polygon>
                  <polygon fill="rgba(242, 136, 182, 0.2)" points="50,15 85,45 65,85 30,75 25,35" stroke="#f288b6" strokeWidth="2"></polygon>
                </svg>
                {/* Labels */}
                <span className="absolute top-0 font-black text-[9px] uppercase text-slate-400">Grammar</span>
                <span className="absolute top-[40%] right-0 font-black text-[9px] uppercase text-slate-400">Vocab</span>
                <span className="absolute bottom-0 right-[15%] font-black text-[9px] uppercase text-slate-400">Listening</span>
                <span className="absolute bottom-0 left-[15%] font-black text-[9px] uppercase text-slate-400">Reading</span>
                <span className="absolute top-[40%] left-0 font-black text-[9px] uppercase text-slate-400">Kanji</span>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50">
                <p className="text-sm leading-relaxed text-slate-600 font-medium italic">
                  "Your Kanji recognition is exceptionally strong, but you struggled with passive verb forms. Focus on 'Potential' vs 'Passive' conjugations."
                </p>
              </div>
            </div>

            {/* AI Next Steps */}
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <h3 className="text-sm font-black uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary fill-1">school</span> Next Steps
              </h3>
              <div className="space-y-4">
                {[
                  { tag: 'Lesson 12', title: 'Advanced Passive Forms', desc: 'Focus on: ~れる / ~られる nuances' },
                  { tag: 'Flashcards', title: 'N3 Grammar Bundle', desc: 'Reviewing 12 missed particles' }
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer bg-white p-5 rounded-2xl border border-slate-100 hover:border-primary transition-all shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest">{item.tag}</span>
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
                    </div>
                    <h4 className="font-black text-slate-800 tracking-tight">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Question Review */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-black tracking-tight">Question Review</h3>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 rounded-full bg-slate-200 text-[10px] font-black uppercase tracking-widest">All</button>
                <button className="px-4 py-1.5 rounded-full bg-red-100 text-red-500 text-[10px] font-black uppercase tracking-widest">Wrong</button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Incorrect Question Template */}
              <div className="bg-white rounded-3xl border-l-[6px] border-red-400 p-8 shadow-sm border">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center size-10 rounded-xl bg-red-50 text-red-500 text-sm font-black">14</span>
                    <p className="text-lg font-bold japanese-text">雨が___、出かけません。</p>
                  </div>
                  <span className="material-symbols-outlined text-red-400 fill-1">cancel</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-red-50/50 border border-red-100">
                    <p className="text-[9px] uppercase font-black text-red-400 mb-1 tracking-widest">Your Answer</p>
                    <p className="font-black text-slate-800">降れば</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-green-50/50 border border-green-100">
                    <p className="text-[9px] uppercase font-black text-green-500 mb-1 tracking-widest">Correct Answer</p>
                    <p className="font-black text-slate-800">降ったら</p>
                  </div>
                </div>
                <div className="bg-background-light rounded-2xl p-5 flex gap-4 border border-slate-100">
                  <div className="size-10 rounded-full bg-white shrink-0 flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined fill-1">psychology</span>
                  </div>
                  <div>
                    <h5 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-1">AI Insight</h5>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      You used the "eba" conditional (general logic). "Tara" is preferred for specific future events.
                    </p>
                  </div>
                </div>
              </div>

              {/* Simple Correct Question */}
              <div className="bg-white/60 rounded-3xl border-l-[6px] p-6 shadow-sm border border-slate-100 opacity-60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center size-8 rounded-lg bg-green-50 text-green-500 text-xs font-black">15</span>
                    <p className="text-md font-bold text-slate-500">日本に___、富士山を見たいです。</p>
                  </div>
                  <span className="material-symbols-outlined text-green-400">check_circle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Footer Actions */}
      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-50">
        <div className="bg-white/80 backdrop-blur-lg border border-slate-200 p-3 rounded-full shadow-2xl flex items-center gap-3">
          <button className="flex-1 h-12 rounded-full border-2 border-primary text-primary text-xs font-black uppercase tracking-widest hover:bg-primary/5 transition-all">
            Retry Quiz
          </button>
          <button className="flex-1 h-12 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/20">
            Dashboard
          </button>
        </div>
      </footer>

      <div className="h-24"></div>
    </div>
  );
};

export default QuizResult;