import React from 'react';

const ExamInterface = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light font-display text-[#181114]">

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header: Countdown & Progress */}
        <header className="h-20 bg-white border-b border-[#e5dcdf] px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold truncate uppercase tracking-tight">JLPT N3 Reading Exam: Section 3</h1>
            <span className="px-3 py-1 bg-background-light text-[10px] font-black rounded-full text-[#886370] tracking-widest">QUESTION 13 / 20</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-6 py-2 bg-background-light rounded-full border border-[#e5dcdf]">
              <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
              <span className="text-xl font-bold tracking-widest tabular-nums">00:45:12</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-background-light rounded-full transition-colors text-[#886370] font-bold text-sm">
              <span className="material-symbols-outlined text-[20px]">outlined_flag</span>
              <span>Flag for Review</span>
            </button>
          </div>
          {/* Linear Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e5dcdf]">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: '65%' }}></div>
          </div>
        </header>

        {/* Split View: Passage & Questions */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Pane: Reading Passage */}
          <section className="flex-1 overflow-y-auto p-10 custom-scrollbar border-r border-[#e5dcdf] bg-white/50">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-extrabold mb-8 text-[#181114] leading-snug japanese-text">
                環境保全と日本の伝統文化：持続可能な未来への鍵
              </h2>
              <div className="japanese-text text-lg text-[#3d2a31] space-y-6 leading-[2.2]">
                <p>
                  日本は古くから自然を敬い、共生する文化を育んできた。それは建築様式から食文化、年中行事に至るまで、生活のあらゆる場面に息づいている。例えば、伝統的な日本家屋は木材や紙、土といった再生可能な素材を主に使用し、風通しを考慮した設計によって四季の変化に柔軟に対応している。
                </p>
                <p>
                  しかし、戦後の急速な経済成長と都市化の進展により、こうした伝統的な知恵は一時的に顧みられなくなった。大量生産・大量消費のライフスタイルが主流となり、使い捨ての製品が溢れる社会へと変化したのである。その結果として生じた環境問題は、今や無視できない深刻な段階に達している。
                </p>
                <p>
                  近年、グローバルな課題としての持続可能性（サステナビリティ）が注目される中で、日本の「もったいない」という精神が再評価されている。これは単に物を大切にするというだけでなく、資源の有限性を認識し、全ての万物に敬意を払うという深い倫理観に基づいている。
                </p>
              </div>
            </div>
          </section>

          {/* Right Pane: Questions */}
          <section className="w-112.5 overflow-y-auto p-10 bg-white custom-scrollbar shrink-0">
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">Question 13</h3>
                <p className="text-lg font-bold leading-relaxed mb-6 text-[#181114]">
                  筆者が考える「循環型社会の構築」とはどのようなことか。
                </p>
                <div className="flex flex-col gap-3">
                  {/* Option Active */}
                  <label className="flex items-start gap-4 p-5 rounded-2xl border-2 border-primary bg-primary/5 cursor-pointer group transition-all">
                    <div className="mt-1 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-base font-semibold">伝統的な知恵と現代の技術を組み合わせ、新しく社会を作り直すこと。</span>
                  </label>
                  
                  {/* Option Inactive */}
                  {["戦前の質素な生活様式に戻り、大量消費を完全にやめること。", 
                    "「もったいない」という言葉を世界中に広め、資源を大切にすること。",
                    "最新のテクノロジーのみを用いて、効率的なリサイクルシステムを作ること。"
                  ].map((text, idx) => (
                    <label key={idx} className="flex items-start gap-4 p-5 rounded-2xl border-2 border-[#f4f0f2] hover:border-primary/50 cursor-pointer group transition-all">
                      <div className="mt-1 w-5 h-5 rounded-full border-2 border-[#e5dcdf] group-hover:border-primary/50 flex items-center justify-center shrink-0"></div>
                      <span className="text-base font-medium text-[#3d2a31]">{text}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons inside right pane */}
              <div className="flex items-center gap-3 mt-4 pt-6 border-t border-[#f4f0f2]">
                <button className="flex-1 h-14 rounded-full border-2 border-[#e5dcdf] text-[#886370] font-black hover:bg-zinc-50 transition-colors uppercase tracking-widest text-sm">Back</button>
                <button className="flex-1 h-14 rounded-full bg-primary text-white font-black shadow-lg shadow-primary/25 hover:opacity-90 transition-all uppercase tracking-widest text-sm">Next</button>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Footer bar */}
        <footer className="h-20 bg-white border-t border-[#e5dcdf] px-8 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-[#886370]">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/10"></span> Current</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#e5dcdf]"></span> Unanswered</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-400"></span> Flagged</span>
          </div>
          <button className="px-12 h-12 bg-primary text-white font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-md uppercase tracking-widest text-sm">
            Submit Exam
          </button>
        </footer>
      </main>

      {/* Right Side Panel: Question Grid */}
      <aside className="w-80 bg-background-light border-l border-[#e5dcdf] flex flex-col p-6 shrink-0">
        <h3 className="text-[11px] font-black text-[#886370] uppercase tracking-[0.2em] mb-6">Question Navigator</h3>
        <div className="grid grid-cols-5 gap-3 mb-auto">
          {[...Array(20)].map((_, i) => {
            const num = i + 1;
            let statusClasses = "bg-white border-[#e5dcdf] text-[#886370]";
            if (num < 13) statusClasses = "bg-primary text-white border-primary shadow-sm shadow-primary/20";
            if (num === 13) statusClasses = "bg-white border-primary text-primary ring-4 ring-primary/10 animate-pulse";
            if (num === 8) statusClasses = "bg-amber-400 text-white border-amber-400";

            return (
              <div key={num} className={`aspect-square flex items-center justify-center rounded-xl border-2 font-black text-sm cursor-pointer transition-all hover:scale-110 relative ${statusClasses}`}>
                {num}
                {num === 8 && <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-white rounded-3xl border border-[#e5dcdf] shadow-sm">
          <p className="text-[10px] font-black text-[#886370] uppercase tracking-widest mb-4">Exam Summary</p>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-[#886370] font-medium">Answered</span>
              <span className="font-black text-primary">12 / 20</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#886370] font-medium">Flagged</span>
              <span className="font-black text-amber-500">1</span>
            </div>
            <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ExamInterface;