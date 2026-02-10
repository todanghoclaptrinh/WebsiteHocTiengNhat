import React from 'react';
import { Link } from 'react-router-dom';

const PlacementTestResult: React.FC = () => {
  return (
    <div className="flex h-full bg-white font-display overflow-hidden">
      {/* main - Nội dung chính */}
      <main className="flex-1 overflow-y-auto relative bg-white">
        {/* Confetti Background Effect */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle, #f285ad 20%, transparent 20%),
              radial-gradient(circle, #ffca3a 20%, transparent 20%),
              radial-gradient(circle, #8ac926 20%, transparent 20%),
              radial-gradient(circle, #1982c4 20%, transparent 20%)
            `,
            backgroundSize: '15px 15px, 18px 18px, 12px 12px, 20px 20px',
            backgroundPosition: '0 0, 50px 50px, 100px 10px, 20px 80px'
          }}
        ></div>

        <div className="relative z-10 p-8 max-w-4xl mx-auto space-y-10">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center size-24 bg-primary/10 rounded-full text-primary mb-4 ring-8 ring-primary/5">
              <span className="material-symbols-outlined text-6xl fill-1">celebration</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-[#886373] text-xl font-medium">Congratulations!</h2>
              <h1 className="text-[#181114] text-6xl font-black tracking-tight">
                Your level is <span className="text-primary">N3!</span>
              </h1>
            </div>
            <p className="text-[#886373] text-lg max-w-lg mx-auto leading-relaxed">
              You've demonstrated a strong grasp of intermediate Japanese. Our AI has analyzed your performance to build your custom path.
            </p>
          </div>

          {/* AI Assessment Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#f4f0f2]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
              </div>
              <h3 className="text-[#181114] text-xl font-bold">AI Assessment Breakdown</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Progress Item 1 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold text-[#181114]">Grammar & Syntax</span>
                    <span className="text-xs font-bold text-primary">Advanced Intermediate</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[78%] rounded-full"></div>
                  </div>
                  <p className="text-sm text-[#886373] leading-relaxed">
                    Strong understanding of passive and causative forms. Consistent usage of polite vs. casual registers.
                  </p>
                </div>
                {/* Progress Item 2 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold text-[#181114]">Vocabulary & Kanji</span>
                    <span className="text-xs font-bold text-primary">Intermediate</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[62%] rounded-full"></div>
                  </div>
                  <p className="text-sm text-[#886373] leading-relaxed">
                    Mastery of ~400 Kanji. Some hesitation with technical or abstract N2-level vocabulary.
                  </p>
                </div>
              </div>

              {/* AI Recommendation Box */}
              <div className="bg-zinc-50 p-6 rounded-xl space-y-4 border border-zinc-100">
                <h4 className="text-[#181114] font-bold text-sm uppercase tracking-wider">AI Recommendation</h4>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0">lightbulb</span>
                  <p className="text-sm text-[#886373] dark:text-zinc-400 leading-relaxed">
                    "While your grammar is approaching N2, your Kanji speed is currently at an N4/N3 boundary. We've adjusted your roadmap to prioritize <span className="text-[#181114] font-semibold">Kanji recognition drills</span>."
                  </p>
                </div>
                <div className="pt-2 border-t border-zinc-200 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
                  <span className="text-xs font-medium text-[#181114]">Path: N3 Mastery Stream</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="../roadmap">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#181114] rounded-full font-bold text-base shadow-sm border border-[#f4f0f2] hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">map</span>
                View My Roadmap
              </button>
            </Link>
            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-full font-bold text-base shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              Start First Lesson
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center gap-12 py-6 opacity-60">
            <StatItem value="45/50" label="Test Score" />
            <StatItem value="42m" label="Time Taken" />
            <StatItem value="N3" label="Level" />
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper Components
const NavItem = ({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) => (
  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-full cursor-pointer transition-all ${
    active ? 'bg-primary/10 text-primary font-semibold' : 'text-[#181114] hover:bg-zinc-100 font-medium'
  }`}>
    <span className={`material-symbols-outlined ${active ? 'fill-1' : ''}`}>{icon}</span>
    <p className="text-sm">{label}</p>
  </div>
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl font-black text-[#181114]">{value}</span>
    <span className="text-[10px] uppercase font-bold tracking-widest text-[#886373]">{label}</span>
  </div>
);

export default PlacementTestResult;