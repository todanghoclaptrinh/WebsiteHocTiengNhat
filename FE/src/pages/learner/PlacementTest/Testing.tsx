import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlacementTestQuiz: React.FC = () => {
  // Giả lập trạng thái câu hỏi hiện tại
  const [currentQuestion, setCurrentQuestion] = useState(14);
  const totalQuestions = 30;
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="flex h-full bg-white font-display overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-background-light">
        {/* Header - Thanh tiến trình và AI Status */}
        <header className="bg-white border-b border-[#f4f0f2] px-8 py-6">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
                  Question {currentQuestion} of {totalQuestions}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm animate-pulse">auto_awesome</span>
                  <span className="text-xs font-medium text-[#886373]">AI analyzing your proficiency level...</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-[#181114]">
                  Est. Level: <span className="text-primary">JLPT N3</span>
                </span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden relative">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-700 relative progress-glow shadow-[0_0_15px_rgba(242,133,173,0.4)]"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Question Area */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-12">
            
            {/* Left: Question Text */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="inline-flex px-4 py-2 rounded-lg bg-white shadow-sm text-[#181114] font-medium text-sm border border-[#f4f0f2]">
                  Grammar & Particles
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#181114] leading-tight">
                    下の文の（　）に入れるのに最もよいものを、１・２・３・４から一つ選びなさい。
                  </h3>
                  <div className="p-8 bg-white rounded-3xl border-2 border-primary/10 shadow-sm">
                    <p className="text-2xl lg:text-3xl text-[#181114] leading-relaxed font-medium">
                      来週のパーティーには、仕事が忙しくて（　　）そうにありません。
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#886373]">
                  <span className="material-symbols-outlined">lightbulb</span>
                  <p className="text-sm italic">Tip: Pay attention to the negative potential form and expectation.</p>
                </div>
              </div>
            </div>

            {/* Right: Answer Options */}
            <div className="w-full lg:w-112.5 flex flex-col justify-center">
              <div className="grid grid-cols-1 gap-4">
                <AnswerOption number="1" text="行け" />
                <AnswerOption number="2" text="行けそうに" selected />
                <AnswerOption number="3" text="行く" />
                <AnswerOption number="4" text="行けて" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Điều hướng bài thi */}
        <footer className="p-8 bg-white/80 backdrop-blur-sm border-t border-[#f4f0f2]">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 text-[#886373] font-bold hover:bg-zinc-50 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>
            <div className="flex gap-4">
              <Link to="../placement-test/success">
                <button className="px-8 py-3 rounded-full bg-zinc-100 text-[#181114] font-bold hover:bg-zinc-200 transition-colors">
                    Skip
                </button>
              </Link>
              <button className="flex items-center gap-2 px-10 py-3 rounded-full bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
                Next Question
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

// Component con cho các Item trong Sidebar
const NavItem = ({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) => (
  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-full cursor-pointer transition-all ${
    active ? 'bg-primary/10 text-primary font-semibold' : 'text-[#181114] hover:bg-zinc-100 font-medium'
  }`}>
    <span className={`material-symbols-outlined ${active ? 'fill-1' : ''}`}>{icon}</span>
    <p className="text-sm">{label}</p>
  </div>
);

// Component con cho các lựa chọn trả lời
const AnswerOption = ({ number, text, selected = false }: { number: string; text: string; selected?: boolean }) => (
  <button className={`group flex items-center p-6 rounded-2xl transition-all text-left shadow-sm border-2 ${
    selected 
      ? 'border-primary bg-primary/5 shadow-md' 
      : 'border-[#f4f0f2] bg-white hover:border-primary hover:bg-primary/5'
  }`}>
    <div className={`size-10 rounded-full flex items-center justify-center font-bold transition-colors mr-4 shrink-0 text-lg ${
      selected ? 'bg-primary text-white' : 'bg-zinc-100 group-hover:bg-primary group-hover:text-white text-[#181114]'
    }`}>
      {number}
    </div>
    <span className="text-xl font-semibold text-[#181114]">{text}</span>
  </button>
);

export default PlacementTestQuiz;