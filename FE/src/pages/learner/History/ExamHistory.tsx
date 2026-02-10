import React from 'react';

// --- Sub-components ---

const StatCard = ({ icon, label, value, iconColorClass, bgColorClass }: any) => (
  <div className="bg-white p-6 rounded-xl border border-[#f4f0f2] shadow-sm flex items-center gap-4 transition-hover hover:shadow-md transition-shadow">
    <div className={`size-12 rounded-full ${bgColorClass} flex items-center justify-center`}>
      <span className={`material-symbols-outlined ${iconColorClass}`}>{icon}</span>
    </div>
    <div>
      <p className="text-xs text-[#886373] font-medium uppercase tracking-wider">{label}</p>
      <p className="text-2xl font-black text-[#181114]">{value}</p>
    </div>
  </div>
);

const ExamRow = ({ date, time, level, title, score, duration, scoreColor }: any) => (
  <tr className="hover:bg-zinc-50 transition-colors">
    <td className="px-6 py-4">
      <p className="text-sm font-semibold text-[#181114]">{date}</p>
      <p className="text-[10px] text-[#886373]">{time}</p>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${level === 'N4' ? 'bg-amber-100 text-amber-600' : 'bg-primary/10 text-primary'}`}>
          {level}
        </span>
        <p className="text-sm font-medium text-[#181114]">{title}</p>
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="w-16 bg-zinc-100 h-1.5 rounded-full overflow-hidden">
          <div className={`${scoreColor} h-full`} style={{ width: `${score}%` }}></div>
        </div>
        <span className="text-sm font-bold text-[#181114]">{score}%</span>
      </div>
    </td>
    <td className="px-6 py-4">
      <span className="text-sm text-[#886373]">{duration}</span>
    </td>
    <td className="px-6 py-4 text-right">
      <button className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
        View Analysis
        <span className="material-symbols-outlined text-sm">auto_awesome</span>
      </button>
    </td>
  </tr>
);

// --- Main Page Component ---

const ExamHistory = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light font-display">

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">

        <div className="p-8 max-w-6xl mx-auto space-y-8">
          
          {/* Header Section - Chỗ cần sửa */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#181114] text-4xl font-black tracking-tight uppercase">Exam History</h1>
              <p className="text-[#886373] text-lg font-medium">Review your performance and track your JLPT journey.</p>
            </div>

            {/* Filter Group */}
            <div className="flex items-center gap-3">
              {/* Sort by Date - Đã sửa font & style */}
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#f4f0f2] shadow-sm hover:border-primary/30 transition-colors group cursor-pointer">
                <span className="material-symbols-outlined text-[18px] text-primary group-hover:scale-110 transition-transform">filter_list</span>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-black text-[#bcaab2] leading-none tracking-wider">Sort by</span>
                  <select className="bg-transparent border-none text-xs font-extrabold text-[#181114] focus:ring-0 cursor-pointer p-0 pr-6 outline-none appearance-none">
                    <option>Recent Date</option>
                    <option>Highest Score</option>
                    <option>Duration</option>
                  </select>
                </div>
              </div>

              {/* Time Range - Đã bổ sung All Time */}
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#f4f0f2] shadow-sm hover:border-primary/30 transition-colors group cursor-pointer">
                <span className="material-symbols-outlined text-[18px] text-primary group-hover:scale-110 transition-transform">calendar_today</span>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-black text-[#bcaab2] leading-none tracking-wider">Time Range</span>
                  <select className="bg-transparent border-none text-xs font-extrabold text-[#181114] focus:ring-0 cursor-pointer p-0 pr-6 outline-none appearance-none">
                    <option>All Time</option>
                    <option>This Month</option>
                    <option>Last 7 Days</option>
                    <option>Custom Range</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard icon="quiz" label="Total Exams" value="24" iconColorClass="text-primary" bgColorClass="bg-primary/10" />
            <StatCard icon="trending_up" label="Average Score" value="82%" iconColorClass="text-green-600" bgColorClass="bg-green-100" />
            <StatCard icon="timer" label="Total Time" value="12.5 hrs" iconColorClass="text-amber-600" bgColorClass="bg-amber-100" />
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl overflow-hidden border border-[#f4f0f2] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-[#f4f0f2]">
                    <th className="px-6 py-4 text-xs font-bold text-[#886373] uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#886373] uppercase tracking-wider">Exam Title</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#886373] uppercase tracking-wider">Score</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#886373] uppercase tracking-wider">Time Taken</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#886373] uppercase tracking-wider text-right">AI Report</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f4f0f2]">
                  <ExamRow date="Oct 24, 2023" time="14:20 PM" level="N3" title="N3 Full Mock Exam #4" score={88} duration="45:12 min" scoreColor="bg-green-500" />
                  <ExamRow date="Oct 22, 2023" time="09:15 AM" level="N4" title="Grammar Focus: Particles" score={72} duration="12:30 min" scoreColor="bg-primary" />
                  <ExamRow date="Oct 20, 2023" time="18:45 PM" level="N3" title="Kanji Mastery Level 3" score={95} duration="08:15 min" scoreColor="bg-green-500" />
                  <ExamRow date="Oct 15, 2023" time="11:00 AM" level="N3" title="Reading Comprehension B" score={64} duration="28:40 min" scoreColor="bg-amber-500" />
                  <ExamRow date="Oct 12, 2023" time="15:30 PM" level="N3" title="Listening: Daily Life" score={82} duration="15:00 min" scoreColor="bg-green-500" />
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-zinc-50 flex items-center justify-between border-t border-[#f4f0f2]">
              <p className="text-xs text-[#886373]">Showing 5 of 24 exams</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded border border-[#f4f0f2] bg-white text-xs font-bold text-[#886373] hover:bg-zinc-50">Previous</button>
                <button className="px-4 py-1 rounded bg-primary text-white text-xs font-bold shadow-sm hover:bg-primary/90 transition-all">Next</button>
              </div>
            </div>
          </div>

          {/* AI Insight Box */}
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 flex flex-col md:flex-row items-center gap-6">
            <div className="size-16 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
            </div>
            <div className="flex-1">
              <h3 className="text-[#181114] font-bold">AI Tutor Insight</h3>
              <p className="text-sm text-[#886373] mt-1">
                Based on your history, you are consistently scoring <span className="text-primary font-bold">+15% higher</span> in Vocabulary compared to Grammar. We recommend spending your next 3 sessions on N3 Particle Drills to balance your profile.
              </p>
            </div>
            <button className="whitespace-nowrap px-6 py-2 bg-primary text-white text-sm font-bold rounded-full shadow-md hover:bg-primary/90 transition-all">
              Start Drill
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamHistory;