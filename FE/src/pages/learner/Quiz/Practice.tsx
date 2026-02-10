import React from 'react';

const SkillPractice = () => {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen flex font-display">

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center p-8 overflow-y-auto">
        {/* Practice Header */}
        <div className="w-full max-w-4xl flex justify-between items-center mb-8 mt-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Verb Conjugation: ~te form</h2>
            <p className="text-slate-500 text-sm font-medium">Skill Practice • Intermediate Level</p>
          </div>
          <button className="size-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Practice Card */}
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl shadow-pink-900/5 border border-slate-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-50">
            <div className="h-full bg-primary transition-all duration-700" style={{ width: '40%' }}></div>
          </div>
          
          <div className="p-10">
            {/* Question Type & Hint */}
            <div className="flex justify-between items-start mb-8">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.15em]">
                Sentence Ordering
              </span>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                <span className="material-symbols-outlined text-[20px] fill-1">auto_awesome</span>
                AI Hint
              </button>
            </div>

            {/* The Question */}
            <div className="text-center mb-12">
              <h3 className="text-slate-600 text-xl font-medium mb-6">Arrange the words to say: <br/> <span className="font-bold text-slate-800">"Please eat lunch at the restaurant."</span></h3>
              
              {/* Drop Zone */}
              <div className="flex flex-wrap justify-center gap-3 min-h-20 p-6 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                {['レストラン', 'で', '昼ごはん', 'を'].map((word, i) => (
                  <div key={i} className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-lg font-medium shadow-sm japanese-font">
                    {word}
                  </div>
                ))}
                <div className="px-5 py-2.5 rounded-xl bg-primary/10 border-2 border-primary text-lg font-bold text-primary animate-pulse japanese-font">
                  食べて
                </div>
                <div className="px-8 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-lg text-slate-300 font-bold">
                  ___
                </div>
              </div>
            </div>

            {/* Word Pool */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-primary hover:text-primary hover:scale-105 transition-all text-xl font-medium japanese-font">
                ください
              </button>
              <button className="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-300 cursor-not-allowed text-xl font-medium japanese-font line-through">
                食べて
              </button>
              <button className="px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-primary hover:text-primary hover:scale-105 transition-all text-xl font-medium japanese-font">
                飲んで
              </button>
              <button className="px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-primary hover:text-primary hover:scale-105 transition-all text-xl font-medium japanese-font">
                の
              </button>
            </div>

            {/* Feedback Area (Correct State) */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-8 flex gap-4">
              <div className="bg-green-500 text-white size-10 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-green-200">
                <span className="material-symbols-outlined">check</span>
              </div>
              <div>
                <p className="font-black text-green-700 uppercase text-xs tracking-widest mb-1">Correct Answer!</p>
                <p className="text-sm text-green-700/80 leading-relaxed font-medium">
                  The verb <span className="font-bold japanese-font">食べる</span> (taberu) becomes <span className="font-bold japanese-font">食べて</span> (tabete) in the ~te form. Adding <span className="font-bold japanese-font">ください</span> (kudasai) creates a polite request.
                </p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-100">
              <button className="text-slate-400 hover:text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-[18px]">flag</span>
                Report Issue
              </button>
              <div className="flex gap-4">
                <button className="px-10 py-3.5 rounded-full border-2 border-slate-200 font-black text-slate-500 text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Check
                </button>
                <button className="px-10 py-3.5 rounded-full bg-primary text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/30 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 transition-all">
                  Next Question
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Example Card: Grayed out reference */}
        <div className="w-full max-w-4xl mt-10 bg-white/60 rounded-3xl border border-slate-200 p-8 grayscale opacity-60 transition-all hover:opacity-100 hover:grayscale-0 cursor-default group">
          <div className="flex justify-between items-center mb-6">
            <span className="px-3 py-1 rounded-lg bg-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              Upcoming Question
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fill in the blanks</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-2xl font-medium japanese-font text-slate-700">
            <span>あした、</span>
            <span>こうえんへ</span>
            {/* Input styled like a slot */}
            <div className="relative">
              <input 
                type="text" 
                disabled
                className="w-40 h-14 bg-slate-100/50 border-b-4 border-slate-200 rounded-xl text-center text-primary font-bold text-xl japanese-font focus:outline-none transition-all group-hover:bg-white group-hover:border-primary/30"
                placeholder="____"
              />
            </div>
            <span>行きます。</span>
          </div>
          
          <div className="mt-6 flex items-center gap-3 text-slate-400 font-medium">
            <span className="material-symbols-outlined text-sm">translate</span>
            <p className="text-sm italic">"Tomorrow, I will go to the park."</p>
          </div>
        </div>
      </main>

      {/* Global Decoration */}
      <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
    </div>
  );
};

export default SkillPractice;