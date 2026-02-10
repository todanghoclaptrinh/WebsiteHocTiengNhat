import React from 'react';

const AnalyticsDashboard = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F9FAFB] text-[#111827] antialiased">

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">

        <div className="flex-1 p-8 flex gap-8 custom-scrollbar">
          <div className="w-3/5 space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                  <h3 className="font-bold text-lg text-gray-900">Study Consistency</h3>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-primary">342</p>
                  <p className="text-[10px] text-[#6B7280] uppercase font-bold">Days Streak</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 overflow-x-auto pb-2 custom-scrollbar">
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 w-max">
                  {/* Row 1 */}
                  <div className="w-3 h-3 rounded-xs bg-gray-100"></div><div className="w-3 h-3 rounded-xs bg-primary/40"></div><div className="w-3 h-3 rounded-xs bg-gray-100"></div><div className="w-3 h-3 rounded-xs bg-primary/60"></div><div className="w-3 h-3 rounded-xs bg-primary/80"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-gray-100"></div>
                  {/* Row 2 */}
                  <div className="w-3 h-3 rounded-xs bg-primary/30"></div><div className="w-3 h-3 rounded-xs bg-primary/50"></div><div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-gray-100"></div><div className="w-3 h-3 rounded-xs bg-primary/20"></div><div className="w-3 h-3 rounded-xs bg-primary/40"></div><div className="w-3 h-3 rounded-xs bg-primary/60"></div>
                  {/* Row 3 */}
                  <div className="w-3 h-3 rounded-xs bg-primary"></div><div className="w-3 h-3 rounded-xs bg-primary/80"></div><div className="w-3 h-3 rounded-xs bg-primary/60"></div><div className="w-3 h-3 rounded-xs bg-primary/40"></div><div className="w-3 h-3 rounded-xs bg-primary/20"></div><div className="w-3 h-3 rounded-xs bg-gray-100"></div><div className="w-3 h-3 rounded-xs bg-primary"></div>
                  {/* Cột 4 đến cột 13 được lặp lại theo đúng số lượng trong HTML của bạn */}
                  {[...Array(10)].map((_, col) => (
                    <React.Fragment key={col}>
                      <div className="w-3 h-3 rounded-xs bg-primary/10"></div>
                      <div className="w-3 h-3 rounded-xs bg-primary/30"></div>
                      <div className="w-3 h-3 rounded-xs bg-primary/50"></div>
                      <div className="w-3 h-3 rounded-xs bg-primary/70"></div>
                      <div className="w-3 h-3 rounded-xs bg-primary/90"></div>
                      <div className="w-3 h-3 rounded-xs bg-primary"></div>
                      <div className="w-3 h-3 rounded-xs bg-primary/20"></div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 text-[10px] text-[#6B7280] uppercase font-bold tracking-widest">
                <span>Less</span>
                <div className="w-3 h-3 rounded-xs bg-gray-100 border border-gray-200"></div>
                <div className="w-3 h-3 rounded-xs bg-primary/25"></div>
                <div className="w-3 h-3 rounded-xs bg-primary/50"></div>
                <div className="w-3 h-3 rounded-xs bg-primary/75"></div>
                <div className="w-3 h-3 rounded-xs bg-primary"></div>
                <span>More</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                  <h3 className="font-bold text-lg text-gray-900">Skill Growth Trend</h3>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">LEVEL N3</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded">VOCABULARY</span>
                </div>
              </div>
              <div className="relative h-48 w-full">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 180">
                  <defs>
                    <linearGradient id="gradient-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#F285AD" stopOpacity="0.2"></stop>
                      <stop offset="100%" stopColor="#F285AD" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,150 L50,140 L100,145 L150,120 L200,100 L250,110 L300,80 L350,60 L400,70 L450,40 L500,45 L550,20 L600,10" fill="none" stroke="#F285AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                  <path d="M0,150 L50,140 L100,145 L150,120 L200,100 L250,110 L300,80 L350,60 L400,70 L450,40 L500,45 L550,20 L600,10 L600,180 L0,180 Z" fill="url(#gradient-area)"></path>
                </svg>
                <div className="flex justify-between mt-4 text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">
                  <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-white/10 rounded-full flex items-center justify-center text-primary backdrop-blur-sm border border-white/10">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Tutor Feedback</h3>
                  <p className="text-xs text-gray-400">Based on your last 15 mock tests</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Top Strengths
                  </p>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">• <span className="font-medium text-white">Kanji Recognition (N3)</span></li>
                    <li className="flex items-start gap-2">• <span className="font-medium text-white">Listening Speed (1.25x)</span></li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">warning</span> Areas to Improve
                  </p>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">• <span className="font-medium text-white">Particle Nuances (ga/wa)</span></li>
                    <li className="flex items-start gap-2">• <span className="font-medium text-white">Keigo Usage (Business)</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/5 flex flex-col gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden shadow-sm h-full">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">emoji_events</span>
                    <h3 className="font-bold text-lg text-gray-900">Global Rankings</h3>
                  </div>
                  <span className="text-[10px] font-black text-gray-500 bg-gray-100 px-2 py-1 rounded">GLOBAL</span>
                </div>
                <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                  <button className="flex-1 py-1.5 text-xs font-bold rounded-lg transition-all text-gray-500 hover:text-gray-900">Daily</button>
                  <button className="flex-1 py-1.5 text-xs font-bold bg-white shadow-sm rounded-lg transition-all text-gray-900 border border-gray-100">Weekly</button>
                  <button className="flex-1 py-1.5 text-xs font-bold rounded-lg transition-all text-gray-500 hover:text-gray-900">All-time</button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                {/* Rank 1 */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border-b border-gray-50">
                  <div className="w-8 flex justify-center items-center"><span className="material-symbols-outlined text-yellow-500 text-2xl fill-1">military_tech</span></div>
                  <div className="size-10 rounded-full border-2 border-yellow-500 p-0.5"><img alt="User 1" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRaiDFyLIGnuF7nOi-UARBsANLrbX5tpItQi4QiClQrhUcpPQ8Fye6DoJan88RgjIxY9wZfJOhQ2pZIoaqQZangEwWD2bTUPG3xHfatlhfGmjtIiAE0Td4Y1Mx2qHD9xC5g4cu5HtHRId-giY_O9YR7goQXdWsRUL3JweHbeZX-6wrg_K2S7pqSlfjLQdcEnF04Z3vWVhL_ayO5FvKJuAhAgt6vQK3OLAG8nHIf95Q4pMqq203TlLRu2EqYYapemQWOxgfqE_Z8PCb"/></div>
                  <div className="flex-1"><p className="text-sm font-bold text-gray-900">Haruto Sato</p><p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">Master III</p></div>
                  <div className="text-right"><p className="text-sm font-black text-gray-900">12,492 XP</p></div>
                </div>
                {/* Rank 2 */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border-b border-gray-50">
                  <div className="w-8 text-center font-black text-gray-400 text-lg">2</div>
                  <div className="size-10 rounded-full border-2 border-gray-200 p-0.5"><img alt="User 2" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASQHBSWeygj3TKKgUx-1S8_1t4uRIIOBGBh4jhFeo1N1xoM33ijs3xJOdWGuy_XDoXPegU3Xia1EqJTdFnMY2cr1VFP7-EiMX5yugKtVp4ew2CnGYN1SBR3WfeBZlThZjuiPA8zUlA2C0tM8BMDOoBg-VTTwThzcRoLbg5QuYVJ1B1hzrARIgBxSswSiW0WxonPehvmm8QHU557d0D6s7tJ8ZygpPx5IyfUbnOqqpDsrXk8FRGyitsnE03P1tdwCOAqcqnDBGHiwGs"/></div>
                  <div className="flex-1"><p className="text-sm font-bold text-gray-900">Emma Wilson</p><p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">Expert I</p></div>
                  <div className="text-right"><p className="text-sm font-black text-gray-900">11,204 XP</p></div>
                </div>
                {/* Rank 3 */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border-b border-gray-50">
                  <div className="w-8 text-center font-black text-amber-700/40 text-lg">3</div>
                  <div className="size-10 rounded-full border-2 border-amber-200 p-0.5"><img alt="User 3" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd9IY-qrVztN5arMxzlXXlMtl1ATArk8ZcjAguuxXzfEUVPyQ9Nwks9LOHYN5uMJH-z16RF8msfOZu15sHF7CJCiryJsbkG5RNxBU1kGFDvVePOYpCeVWc5Y_hHJQ2J0a8g42__UB4VYZVy6Kok9033Up7gb8zGsVQjNUygqfR7iSaCROe2W2LYDni03ifYir-9aZpwDdJSaGbPdDEICoq11q7M1hIfG9PE64dT1D6riWmiKrd-Z-rfaEbSrbnwCvMAnW2_H2pAYNO"/></div>
                  <div className="flex-1"><p className="text-sm font-bold text-gray-900">Min-ho Park</p><p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">Expert I</p></div>
                  <div className="text-right"><p className="text-sm font-black text-gray-900">10,850 XP</p></div>
                </div>
                <div className="flex justify-center py-1"><span className="material-symbols-outlined text-gray-300">more_vert</span></div>
                {/* Rank 14 (You) */}
                <div className="bg-primary flex items-center gap-4 p-4 rounded-2xl text-white shadow-md ring-4 ring-primary/10">
                  <div className="w-8 text-center font-black text-lg">14</div>
                  <div className="size-10 rounded-full border-2 border-white/50 p-0.5"><img alt="Current user" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOMsVOzYCcQ5owQb8r5735OBkGikZGvNHs6R6RetmalOyZ-HoqJPwfnS8bFnJABR8mbB3rnqF4Rc3qv6tOqqpN0s2d2I8qOuFI1oSgFRsyuoWfTSX5lrOMgQAU9InMebZJ3mB6DH7N9w9f0Xp6hRB4fCSiQgVzmommYAVPvmBECz3KN3eJmY4CSTqpuXKqvzMKtNOcOAC_uuoXPu-zS6UfbZYCCTZkDLSY--2ABveelKeGaFVJ5xsOQjxwjKncSbzG7YBMe8JLHiFz"/></div>
                  <div className="flex-1"><div className="flex items-center gap-2"><p className="text-sm font-bold">Tanaka Kenji</p><span className="text-[8px] bg-white/30 px-1.5 py-0.5 rounded-full font-black uppercase">You</span></div><p className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Diamond II</p></div>
                  <div className="text-right"><p className="text-sm font-black">7,240 XP</p></div>
                </div>
                {/* Rank 15 */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border-b border-gray-50">
                  <div className="w-8 text-center font-black text-gray-400 text-lg">15</div>
                  <div className="size-10 rounded-full border-2 border-gray-100 p-0.5"><img alt="User 15" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTjH11Aiwz_g7OTjvK7MxqlTrqAdt_L6klZuwFs8jj4frvc8bnVssGJpZepNziVgo9rg0W8Wsa9upcOIXQCmzXuUQ_xGm6OfGJKasvDdsas7B8RKlKslphq0TwCVdAdwPstzeURECJADj5IEpf9wLqpMINJrxa6dqocQjh2Ui96wwjKNHPE7vJ9SsxArqDjbvqiAo88gD9KFEce3fFbKosc5GvFTzMnkYWFEvD7wzYBDE4PQovrCWQ6mYV3uzvVA6FUJRN1bA_z9vT"/></div>
                  <div className="flex-1"><p className="text-sm font-bold text-gray-900">Sarah Connor</p><p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">Diamond I</p></div>
                  <div className="text-right"><p className="text-sm font-black text-gray-900">7,192 XP</p></div>
                </div>
                {/* Rank 16 */}
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-8 text-center font-black text-gray-400 text-lg">16</div>
                  <div className="size-10 rounded-full border-2 border-gray-100 p-0.5"><img alt="User 16" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8_QBZ3_cbEMryv0unEX-eUbFFUM0VMUmTjQg8RYp8HYx9Z6HBI1wabWK2ejP5HHosEd6DIax3fH_5WkqoaD4qRru-9Xkbee4f6yCBe8GJQ3yaJeZlYPsDzPZQXdwFGDuhslxc4Ed7K7s49dz9sbeOpgJXbSVUc2PJkfTuxMVBJ8rOKGXdtOOKllpN5QtbCNxsPYPESy_KpsBJT2lSQEi0wLYsflnuxgQx8yT9BAmKyBQMxnaxJC2NikskWTp3JCSgwxKhsbTuqG7G"/></div>
                  <div className="flex-1"><p className="text-sm font-bold text-gray-900">Elena Gilbert</p><p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">Diamond I</p></div>
                  <div className="text-right"><p className="text-sm font-black text-gray-900">7,040 XP</p></div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6B7280] font-medium">Next rank up in: <span className="text-primary font-bold">800 XP</span></span>
                  <a className="text-primary font-bold hover:underline" href="#">View All Rankings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;