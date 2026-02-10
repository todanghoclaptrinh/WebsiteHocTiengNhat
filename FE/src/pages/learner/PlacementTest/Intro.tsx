import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlacementTestIntro: React.FC = () => {
  const navigate = useNavigate();

  return (
    /* - bg-white: Chuyển body sang màu trắng theo ý bạn.
      - h-full + flex justify-center: Giúp card nằm giữa, triệt tiêu khoảng trống thừa gây scroll dài.
    */
    <div className="h-full w-full background-light font-display flex flex-col items-center justify-center overflow-y-auto">
      
      {/* Container bọc ngoài giảm p-8 xuống p-4 để tiết kiệm không gian dọc */}
      <div className="p-8 md:p-6 max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Main Diagnostic Card - Giữ nguyên p-12 và bóng đổ hồng (ai-glow) */}
          <div className="bg-white rounded-[2.5rem] p-14 border border-[#f4f0f2] max-w-3xl w-full relative overflow-hidden shadow-[0_0_40px_-10px_rgba(242,133,173,0.4)]">
            
            {/* Decorative Glows */}
            <div className="absolute -top-24 -right-24 size-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 size-64 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center">
              
              {/* Robot Avatar Section - Giữ nguyên size-48 cực to */}
              <div className="mb-8 relative">
                <div className="size-48 bg-primary/10 rounded-full flex items-center justify-center relative">
                  {/* SVG Robot chuẩn Material của bạn */}
                  <svg 
                    width="95" 
                    height="128" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M20 9V7C20 5.9 19.1 5 18 5H15C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5H6C4.9 5 4 5.9 4 7V9C2.34 9 1 10.34 1 12C1 13.66 2.34 15 4 15V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V15C21.66 15 23 13.66 23 12C23 10.34 21.66 9 20 9ZM18 19H6V7H18V19ZM9 13C9.82843 13 10.5 12.3284 10.5 11.5C10.5 10.6716 9.82843 10 9 10C8.17157 10 7.5 10.6716 7.5 11.5C7.5 12.3284 8.17157 13 9 13ZM15 13C15.8284 13 16.5 12.3284 16.5 11.5C16.5 10.6716 15.8284 10 15 10C14.1716 10 13.5 10.6716 13.5 11.5C13.5 12.3284 14.1716 13 15 13ZM8 15H16V17H8V15Z" 
                      fill="currentColor"
                    />
                  </svg>
                  
                  {/* Greeting Bubble */}
                  <div className="absolute -right-2 top-4 bg-white p-2 rounded- shadow-md border border-zinc-100">
                    <span className="text-2xl block">こんにちは!</span>
                  </div>
                </div>
                {/* Online Status Indicator */}
                <div className="absolute -bottom-2 right-10 size-6 bg-green-500 border-4 border-white rounded-full"></div>
              </div>

              <h1 className="text-[#181114] text-4xl font-black tracking-tight mb-4">
                Let's find your level
              </h1>
              
              <p className="text-[#886373] text-lg max-w-xl mx-auto leading-relaxed">
                I'll guide you through a quick evaluation of your Japanese skills. This helps me build a 
                <span className="text-primary font-bold tracking-tight mx-1">personalized roadmap</span> 
                focused exactly on where you need to improve for the JLPT.
              </p>

              {/* Features Grid - Giảm nhẹ mt-12 mb-12 xuống mt-10 mb-10 để bớt scroll */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-12 mb-12">
                <div className="flex flex-col items-center gap-2">
                  <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined">speed</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#181114]">Adaptive Difficulty</h4>
                  <p className="text-xs text-[#886373]">Questions adjust based on your answers</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#181114]">Skill Mapping</h4>
                  <p className="text-xs text-[#886373]">Get a breakdown of N5-N3 proficiency</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined">map</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#181114]">Instant Roadmap</h4>
                  <p className="text-xs text-[#886373]">Unlock your daily study plan immediately</p>
                </div>
              </div>

              {/* Action Section */}
              <div className="flex flex-col items-center gap-6 w-full max-w-md">
                <button 
                  onClick={() => navigate('../placement-test/testing')}
                  className="w-full bg-primary hover:bg-[#e0759c] text-white py-4 px-8 rounded-full text-lg font-bold shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-3 group"
                >
                  Start Evaluation
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2 text-[#886373]">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span className="text-sm font-medium">15-20 mins</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#886373]">
                    <span className="material-symbols-outlined text-sm">quiz</span>
                    <span className="text-sm font-medium">35 Questions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tip - Kéo sát mt-8 thành mt-6 */}
          <div className="mt-6 flex items-center gap-3 px-6 py-3 bg-white/50 rounded-full border border-[#f4f0f2]">
            <span className="material-symbols-outlined text-amber-500 text-sm">lightbulb</span>
            <p className="text-xs text-[#886373]">
              Don't worry if you don't know an answer. "I don't know" helps me identify your learning gaps better!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementTestIntro;