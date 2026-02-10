import React from 'react';

const Furigana: React.FC<{ kanji: string; rt: string }> = ({ kanji, rt }) => (
  <ruby className="[ruby-align:center] leading-none">
    {kanji}
    <rt className="text-[0.55em] font-medium text-[#886373] select-none pb-1 uppercase tracking-tighter">
      {rt}
    </rt>
  </ruby>
);

const ExampleCard: React.FC<{ 
  furiganaText: Array<{ kanji?: string; rt?: string; text?: string }>; 
  translation: string; 
  breakdown: string;
}> = ({ furiganaText, translation, breakdown }) => (
  <div className="group bg-white p-6 rounded-xl border border-[#f4f0f2] hover:border-primary/30 transition-all shadow-sm">
    <div className="flex justify-between items-start gap-4">
      <div className="space-y-4">
        {/* items-baseline là mấu chốt để các chữ không bị nhảy lên xuống */}
        <div className="flex flex-wrap items-baseline gap-x-0.5 text-2xl font-medium text-[#181114] leading-[2.8]">
          {furiganaText.map((item, idx) => (
            item.kanji ? (
              <Furigana key={idx} kanji={item.kanji} rt={item.rt!} />
            ) : (
              <span key={idx} className="self-baseline">{item.text}</span>
            )
          ))}
        </div>
        <p className="text-[#886373] text-sm font-normal">{translation}</p>
      </div>
      <button className="size-10 mt-3 flex items-center justify-center rounded-full bg-zinc-50 group-hover:bg-primary group-hover:text-white transition-colors text-zinc-400 shrink-0">
        <span className="material-symbols-outlined text-xl">volume_up</span>
      </button>
    </div>
    <div className="mt-4 pt-4 border-t border-zinc-50 flex items-center gap-4">
      <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded tracking-wider">BREAKDOWN</span>
      <p className="text-[11px] text-[#886373] font-medium tracking-tight">{breakdown}</p>
    </div>
  </div>
);

const NavItem = ({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) => (
  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-full cursor-pointer transition-colors ${
    active ? 'bg-primary/10 text-primary font-semibold' : 'text-[#181114] hover:bg-zinc-100 font-medium'
  }`}>
    <span className={`material-symbols-outlined ${active ? 'fill-1' : ''}`}>{icon}</span>
    <p className="text-sm">{label}</p>
  </div>
);

const OutlineItem = ({ number, label, active = false }: { number: string; label: string; active?: boolean }) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
    active ? 'text-primary bg-primary/5 border-l-4 border-primary font-semibold' : 'text-[#181114] hover:bg-zinc-100 font-medium opacity-60'
  }`}>
    <span className="text-[10px] font-bold">{number}</span>
    <p className="text-sm">{label}</p>
  </div>
);

const FooterLink = ({ label, title, align = 'left' }: { label: string; title: string; align?: 'left' | 'right' }) => (
  <div className={`flex flex-col gap-1 ${align === 'right' ? 'text-right' : ''}`}>
    <p className="text-[10px] font-bold text-[#886373] uppercase tracking-wider">{label}</p>
    <p className="text-sm font-bold text-[#181114] cursor-pointer hover:text-primary transition-colors">{title}</p>
  </div>
);

// --- Main Page Component ---

const GrammarLessonDetail: React.FC = () => {
  return (
        <div className="p-8 max-w-4xl mx-auto space-y-12">
          {/* Intro Section */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">auto_stories</span>
              Introduction
            </div>
            <h1 className="text-4xl font-black tracking-tight leading-tight">
              Advanced Particle Usage: は (wa) vs が (ga) in Complex Clauses
            </h1>
            <p className="text-[#886373] text-lg leading-relaxed font-normal">
              One of the most challenging aspects of Japanese grammar is distinguishing between the topic marker <b className="text-[#181114]">は</b> and the identifier marker <b className="text-[#181114]">が</b>.
            </p>
          </section>

          {/* Rule Box */}
          <div className="bg-white rounded-4xl p-8 shadow-sm border border-[#f4f0f2] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-xs font-black text-primary uppercase tracking-widest">Topic Marker は</p>
              <p className="text-sm text-[#886373] leading-relaxed">Used for the overall topic. In complex sentences, the main subject is often marked with は.</p>
            </div>
            <div className="space-y-3 md:border-l border-zinc-100 md:pl-8">
              <p className="text-xs font-black text-primary uppercase tracking-widest">Subject Marker が</p>
              <p className="text-sm text-[#886373] leading-relaxed">Used for the subject of a subordinate clause or when introducing new information.</p>
            </div>
          </div>

          {/* Examples Section */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Example Sentences</h3>
              <button className="text-primary text-sm font-bold flex items-center gap-1 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-sm">volume_up</span>
                Listen All
              </button>
            </div>

            <div className="space-y-4">
              <ExampleCard 
                furiganaText={[
                  { kanji: '私', rt: 'わたし' }, { text: 'は、' },
                  { kanji: '彼', rt: 'かれ' }, { text: 'が' },
                  { kanji: '書', rt: 'か' }, { text: 'いた' },
                  { kanji: '本', rt: 'ほん' }, { text: 'を' },
                  { kanji: '読', rt: 'よ' }, { text: 'みました。' }
                ]}
                translation="I read the book that he wrote."
                breakdown="私 (Topic) + 彼 (Subordinate Subject) + 書いた (Modifier)"
              />

              <ExampleCard 
                furiganaText={[
                  { kanji: '雨', rt: 'あめ' }, { text: 'が' },
                  { kanji: '降', rt: 'ふ' }, { text: 'ったら、' },
                  { kanji: '家', rt: 'いえ' }, { text: 'に' },
                  { kanji: '居', rt: 'い' }, { text: 'ます。' }
                ]}
                translation="If it rains, I will stay at home."
                breakdown="雨 (Identifier in condition) + 降ったら (Conditional form)"
              />
            </div>
          </section>

          {/* Exercise Banner */}
          <section className="bg-zinc-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden group">
            <div className="relative z-10 space-y-4">
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">Up Next</p>
              <h3 className="text-3xl font-bold">Practice Exercise</h3>
              <p className="text-zinc-400 text-base max-w-md">Test your knowledge with 5 interactive questions about particle placement.</p>
              <button className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Start Exercise
              </button>
            </div>
            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 bg-primary/40 blur-[100px] group-hover:opacity-20 transition-opacity"></div>
          </section>

          {/* Pagination */}
          <div className="flex justify-between items-center py-10 border-t border-zinc-200">
            <FooterLink label="Previous Lesson" title="Lesson 11: Passive Voice Basics" />
            <FooterLink label="Next Lesson" title="Lesson 13: Causative Forms" align="right" />
          </div>
        </div>
  );
};

export default GrammarLessonDetail;