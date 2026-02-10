import React from 'react';

const VideoLearning: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-white font-display text-[#181114]">

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden bg-white">

          {/* Video Player Area */}
          <div className="relative bg-black aspect-video w-full shrink-0 flex flex-col overflow-hidden group">
            <img alt="Japanese landscape" className="w-full h-full object-cover opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6lx6ZSgvcqrfnmnOHGnB3HQ95Qp1hRavpqc2gOEpg6Ofngb5SkwRhN16V67no6Ua-CzSoiuTsGyOuPVryIvJivksP_I-UVSkCT_iSxXU_-LT0v6v-dbftPSjDZ64c7sLchN679f074mACTcv1WEjAfFGBOV6t_gPXqenm_FYyqECGCmoup9FLAx_3EEvPvUK-GJXZzRIyLTR5RIayV7R-6_VD8xdoeRRw80g3URnMU1TP8Kzx56cs_Sg3HpV9kEHOStxLZ5Hgdq7n" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="size-16 md:size-20 bg-primary/95 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                <span className="material-symbols-outlined text-4xl md:text-5xl fill-1">play_arrow</span>
              </button>
            </div>
            {/* Player Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex flex-col gap-3">
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer relative">
                  <div className="absolute top-0 left-0 h-full w-[35%] bg-primary"></div>
                  <div className="absolute top-1/2 left-[35%] -translate-y-1/2 size-3 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-6">
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">play_arrow</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">skip_next</span>
                    <div className="flex items-center gap-2">
                       <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">volume_up</span>
                       <div className="w-16 h-1 bg-white/30 rounded-full"><div className="w-3/4 h-full bg-white rounded-full"></div></div>
                    </div>
                    <span className="text-[11px] font-medium font-mono">04:12 / 12:45</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">closed_caption</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">settings</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">fullscreen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transcript Area - Nền trắng sạch sẽ */}
          <div className="flex-1 overflow-y-auto bg-white p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold flex items-center gap-2.5 text-lg">
                <span className="material-symbols-outlined text-primary font-light">subtitles</span>
                Transcript
              </h3>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 rounded-full border border-primary/20 text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors">Auto-scroll</button>
                <button className="px-4 py-1.5 rounded-full border border-zinc-200 text-xs font-bold text-[#886373] hover:bg-zinc-50 transition-colors">VI</button>
              </div>
            </div>
            <div className="space-y-2">
              <TranscriptLine 
                time="04:05"
                jp="今日は「は」と「が」の違いについて説明します。"
                vi="Hôm nay, tôi sẽ giải thích về sự khác biệt giữa 'wa' và 'ga'."
              />
              <TranscriptLine 
                time="04:12"
                jp="主語を強調したいときは「が」を使い、主題を提示するときは「は」を使います。"
                vi="Khi muốn nhấn mạnh chủ ngữ thì dùng 'ga', khi muốn đưa ra chủ đề thì dùng 'wa'."
                active
              />
              <TranscriptLine 
                time="04:20"
                jp="例えば、「私が食べました」と言う場合、誰が食べたかを強調しています。"
                vi="Ví dụ, trong câu 'Watashi ga tabemashita', người nói đang nhấn mạnh ai là người đã ăn."
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar - Nền trắng tối giản */}
        <aside className="w-80 bg-white border-l border-[#f4f0f2] flex flex-col overflow-hidden shrink-0 lg:flex">
          <div className="p-6 border-b border-[#f4f0f2]">
            <h3 className="text-[10px] font-black text-[#886373] mb-4 uppercase tracking-[0.2em]">Next Lessons</h3>
            <div className="flex flex-col gap-2">
              <PlaylistCard title="13: Passive Form Mastery" meta="15 mins • Grammar" />
              <PlaylistCard title="14: Causative Verbs" meta="12 mins • Grammar" />
              <PlaylistCard title="15: Honorifics Intro" meta="20 mins • JLPT N3" locked />
            </div>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto">
            <h3 className="text-[10px] font-black text-[#886373] mb-4 uppercase tracking-[0.2em]">Resources</h3>
            <div className="flex flex-col gap-2">
              <ResourceCard name="Particle Cheat Sheet" size="PDF • 1.2 MB" />
              <ResourceCard name="Lesson Slides" size="PDF • 4.5 MB" />
            </div>

            <div className="mt-8 bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
              <h4 className="text-[10px] font-black text-primary uppercase mb-2 tracking-widest">AI Tutor Note</h4>
              <p className="text-[11px] leading-relaxed text-[#886373] font-medium italic">
                Kenji, you often struggle with the particle 'ni' when used with passive verbs. I've highlighted the relevant section at 08:45 in this video.
              </p>
            </div>
          </div>

          <div className="p-6 mt-auto">
            <button className="w-full bg-primary text-white py-3.5 rounded-full font-bold text-sm shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:translate-y-0">
              Practice Now
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

// --- Sub-components (Đã tinh chỉnh cho giao diện trắng) ---

const NavItem = ({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-full cursor-pointer transition-all ${
    active ? 'bg-primary/10 text-primary' : 'text-[#181114] hover:bg-zinc-50'
  }`}>
    <span className={`material-symbols-outlined text-[22px] ${active ? 'fill-1' : ''}`}>{icon}</span>
    <p className={`text-sm ${active ? 'font-bold' : 'font-medium'}`}>{label}</p>
  </div>
);

const TranscriptLine = ({ time, jp, vi, active = false }: { time: string; jp: string; vi: string; active?: boolean }) => (
  <div className={`p-4 rounded-2xl transition-all cursor-pointer border-2 ${
    active ? 'bg-white border-primary shadow-sm' : 'bg-transparent border-transparent hover:bg-zinc-50'
  }`}>
    <div className="flex items-start gap-5">
      <span className={`text-[11px] font-mono mt-1 ${active ? 'text-primary font-bold' : 'text-zinc-300'}`}>{time}</span>
      <div className="flex flex-col gap-1.5">
        <p className={`text-base md:text-[17px] leading-relaxed ${active ? 'text-[#181114] font-bold' : 'text-zinc-700 font-medium'}`}>{jp}</p>
        <p className={`text-xs md:text-[13px] ${active ? 'text-[#886373]' : 'text-zinc-400'}`}>{vi}</p>
      </div>
    </div>
  </div>
);

const PlaylistCard = ({ title, meta, locked = false }: { title: string; meta: string; locked?: boolean }) => (
  <div className={`group flex gap-3.5 p-3 rounded-xl border border-transparent hover:border-zinc-100 hover:bg-zinc-50 transition-all cursor-pointer ${locked ? 'opacity-40' : ''}`}>
    <div className="size-11 rounded-xl bg-zinc-50 group-hover:bg-white flex items-center justify-center shrink-0 border border-zinc-100">
      <span className="material-symbols-outlined text-xl text-[#886373]">{locked ? 'lock' : 'play_circle'}</span>
    </div>
    <div className="flex flex-col min-w-0 justify-center">
      <p className="text-xs font-bold truncate">{title}</p>
      <p className="text-[10px] text-[#886373] mt-0.5">{meta}</p>
    </div>
  </div>
);

const ResourceCard = ({ name, size }: { name: string; size: string }) => (
  <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-zinc-100 hover:border-primary/20 hover:shadow-sm transition-all group">
    <div className="flex items-center gap-3">
      <div className="size-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 border border-red-100/50">
        <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
      </div>
      <div>
        <p className="text-[11px] font-bold">{name}</p>
        <p className="text-[9px] text-[#886373] uppercase tracking-tighter">{size}</p>
      </div>
    </div>
    <button className="text-primary opacity-40 group-hover:opacity-100 p-2 rounded-full transition-all">
      <span className="material-symbols-outlined text-xl">download</span>
    </button>
  </div>
);

export default VideoLearning;