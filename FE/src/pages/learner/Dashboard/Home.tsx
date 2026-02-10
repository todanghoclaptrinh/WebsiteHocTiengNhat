import React from 'react';

const LearnerDashboard: React.FC = () => {
  return (
    <>
      {/* Welcome Heading */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[#181114] text-4xl font-black tracking-tight">Welcome back, Kenji!</h1>
        <p className="text-[#886373] text-lg">Your AI tutor has prepared your roadmap for today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Recommended Lesson */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-[#f4f0f2] relative overflow-hidden group">
          <div className="flex flex-col h-full justify-between gap-6 relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">auto_awesome</span> AI Recommended
              </div>
              <div>
                <h3 className="text-[#181114] text-2xl font-bold">Lesson 12: Advanced Particle Usage</h3>
                <p className="text-[#886373] mt-2 max-w-md">Focuses on N3 particle distinctions like は vs が in complex clauses based on your recent errors.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm shadow-md hover:shadow-primary/30 transition-all active:scale-95">
                Start Lesson
              </button>
              <span className="text-xs text-[#886373] font-medium">Estimated: 15 mins</span>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7afRYAp4ArcI5GTRmYiRFy38jNgAYMZDjCyVr7Hm5q-hCiTXUdk9KRHaJRjxqaSeBH4gzVkNT_ZaA5BN6kZMMCBplMY7crAlyp5BQjf6FZSGQA87cNCpCCKA05UH6jkjO0rV-SevcsMrCnoaUvrk9GSp1aYWMLJyVSQ2DcIpQS2SRmk51tyY5sMGKhkL0ghvbu_84_p2i83u46fbsaWm2g8mcPWbNHZMd2XZOii2Uz9nnLMk1JpPQX0mNuG6JPy9qKDAqlUyabZXk")' }}></div>
        </div>

        {/* Mastery Progress Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f4f0f2] flex flex-col items-center text-center">
          <h3 className="text-[#181114] text-lg font-bold mb-4">JLPT N3 Mastery</h3>
          <ProgressCircle percentage={65} />
          <p className="text-sm text-[#886373] mt-4">You are <span className="font-bold text-[#181114]">12 lessons</span> away from N3 completion!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weakness Radar Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f4f0f2]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[#181114] text-lg font-bold">Weakness Analysis</h3>
            <button className="text-xs text-primary font-bold hover:underline">Full Report</button>
          </div>
          <RadarChart />
          <div className="mt-4 p-3 bg-zinc-50 rounded-lg flex items-start gap-3">
            <span className="material-symbols-outlined text-amber-500">info</span>
            <p className="text-xs text-[#886373]">Focus on <span className="font-bold text-zinc-900">Reading</span> today. Performance dropped 5%.</p>
          </div>
        </div>

        {/* Daily Goals List */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f4f0f2]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[#181114] text-lg font-bold">Daily Goals</h3>
            <span className="text-xs text-[#886373]">3 of 5 completed</span>
          </div>
          <div className="space-y-4">
            <GoalItem icon="check_circle" title="Learn 10 new Kanji" sub="N3 Nature Kanji" points="+50 XP" done />
            <GoalItem icon="check_circle" title="15-min Listening Drill" sub="Daily Conversations" points="+30 XP" done />
            <GoalItem icon="circle" title="Review 20 Flashcards" sub="Spaced Repetition" points="+25 XP" />
          </div>
        </div>
      </div>

      {/* Footer Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <FooterStat label="Daily Streak" value="12 Days" icon="local_fire_department" iconColor="text-orange-500" />
        <FooterStat label="Total Points" value="2,450" icon="military_tech" iconColor="text-amber-500" />
        <FooterStat label="Kanji Mastered" value="412" icon="translate" iconColor="text-blue-500" />
        <FooterStat label="Mock Exams" value="4" icon="task_alt" iconColor="text-green-500" />
      </div>
    </>
  );
};

// --- Helper Components ---

const ProgressCircle = ({ percentage }: { percentage: number }) => (
  <div className="relative size-32 flex items-center justify-center">
    <svg className="size-full transform -rotate-90">
      <circle className="text-zinc-100" cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" />
      <circle className="text-primary" cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray="364.4" strokeDashoffset={364.4 - (364.4 * percentage) / 100} strokeLinecap="round" />
    </svg>
    <span className="absolute text-3xl font-black text-[#181114]">{percentage}%</span>
  </div>
);

const GoalItem = ({ icon, title, sub, points, done = false }: any) => (
  <div className={`flex items-center justify-between p-3 rounded-xl border transition-all ${done ? 'border-primary/20 bg-primary/5' : 'border-zinc-100 bg-white'}`}>
    <div className="flex items-center gap-3">
      <span className={`material-symbols-outlined ${done ? 'text-primary' : 'text-zinc-300'}`}>{icon}</span>
      <div>
        <p className="text-sm font-bold text-[#181114]">{title}</p>
        <p className="text-xs text-[#886373]">{sub}</p>
      </div>
    </div>
    <span className={`text-xs font-bold ${done ? 'text-primary' : 'text-[#886373]'}`}>{points}</span>
  </div>
);

const RadarChart = () => (
  <div className="aspect-square w-full max-w-[320px] mx-auto relative flex items-center justify-center">
    <svg className="w-full h-full text-zinc-200" viewBox="0 0 200 200">
      <polygon fill="none" points="100,20 180,80 150,170 50,170 20,80" stroke="currentColor" strokeWidth="1" />
      <polygon fill="rgba(242, 135, 182, 0.3)" points="100,40 170,80 140,160 60,150 40,110" stroke="#f287b6" strokeWidth="3" />
      <text className="text-[10px] fill-[#886373] font-bold" textAnchor="middle" x="100" y="15">Grammar</text>
      <text className="text-[10px] fill-[#886373] font-bold" textAnchor="start" x="175" y="85">Vocab</text>
      <text className="text-[10px] fill-[#886373] font-bold" textAnchor="middle" x="100" y="195">Listening</text>
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
      <span className="material-symbols-outlined text-primary text-4xl">radar</span>
    </div>
  </div>
);

const FooterStat = ({ label, value, icon, iconColor }: any) => (
  <div className="bg-white p-4 rounded-xl border border-[#f4f0f2] shadow-sm">
    <p className="text-xs text-[#886373] font-medium uppercase">{label}</p>
    <div className="flex items-center gap-2 mt-1">
      <span className={`material-symbols-outlined fill-1 ${iconColor}`}>{icon}</span>
      <span className="text-2xl font-black text-[#181114]">{value}</span>
    </div>
  </div>
);

export default LearnerDashboard;