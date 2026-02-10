import React, { useState } from 'react';

// --- Sub-components ---

const SidebarItem = ({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) => (
  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-full cursor-pointer transition-all ${
    active ? 'bg-primary/10 text-primary' : 'text-[#181114] hover:bg-zinc-100'
  }`}>
    <span className={`material-symbols-outlined ${active ? 'fill-1' : ''}`}>{icon}</span>
    <p className={`text-sm ${active ? 'font-semibold' : 'font-medium'}`}>{label}</p>
  </div>
);

const ReviewCard = ({ status, kanji, reading, level, lastReviewed, mastered = false }: any) => {
  const [isMastered, setIsMastered] = useState(mastered);
  
  const statusStyles: any = {
    Mistaken: "bg-red-50 text-red-500",
    Bookmarked: "bg-amber-50 text-amber-600",
    Vocabulary: "bg-primary/10 text-primary",
    Kanji: "bg-primary/10 text-primary",
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f4f0f2] hover:border-primary/30 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-tight ${statusStyles[status] || statusStyles.Vocabulary}`}>
          {status}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#886373]">Mastered</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={isMastered}
              onChange={() => setIsMastered(!isMastered)} 
            />
            <div className="w-8 h-4 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-4xl font-bold text-[#181114] mb-1">{kanji}</h4>
        <p className="text-sm font-medium text-[#886373]">{reading}</p>
      </div>
      <div className="space-y-2 mb-6 text-[#886373]">
        <div className="flex items-center gap-2 text-xs">
          <span className="material-symbols-outlined text-sm">stairs</span>
          <span>Level: {level}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="material-symbols-outlined text-sm">history</span>
          <span>Last reviewed: {lastReviewed}</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-[#f4f0f2]">
        <button className="text-primary text-sm font-bold hover:underline">View Details</button>
        <button className={`${status === 'Bookmarked' ? 'text-primary' : 'text-[#886373] hover:text-primary'} transition-colors`}>
          <span className={`material-symbols-outlined ${status === 'Bookmarked' ? 'fill-1' : ''}`}>
            {status === 'Bookmarked' ? 'bookmark' : 'bookmark_add'}
          </span>
        </button>
      </div>
    </div>
  );
};

// --- Main Page Component ---

const PersonalReviewList = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light font-display">

      {/* Main Content */}
      <main className="flex-1 custom-scrollbar">

        <div className="p-8 max-w-6xl mx-auto space-y-6">
          {/* Recommendation Card */}
          <div className="bg-white rounded-2xl p-6 border-l-4 border-primary shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <span className="material-symbols-outlined text-primary fill-1">auto_awesome</span>
              </div>
              <div>
                <h3 className="text-[#181114] font-bold text-lg">Daily Recommendation</h3>
                <p className="text-[#886373]">You have <span className="text-primary font-bold">15 items</span> to review today.</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-6 py-2 bg-primary text-white rounded-full font-bold text-sm shadow-md hover:bg-primary/90 transition-all">
              Start AI Review
            </button>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <select className="bg-white border-[#f4f0f2] text-[#181114] text-sm rounded-full px-4 py-2 focus:ring-primary outline-none shadow-sm border">
                <option>All JLPT Levels</option>
                <option>N3</option>
                <option>N4</option>
                <option>N5</option>
              </select>
              <div className="flex bg-white p-1 rounded-full border border-[#f4f0f2] shadow-sm">
                <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-primary text-white">All Items</button>
                <button className="px-4 py-1.5 rounded-full text-xs font-bold text-[#886373] hover:text-primary transition-colors">Mistaken</button>
              </div>
            </div>
            <div className="text-[#886373] text-sm font-medium">128 items found</div>
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard status="Mistaken" kanji="準備" reading="じゅんび • Preparation" level="N3" lastReviewed="2 days ago" />
            <ReviewCard status="Bookmarked" kanji="厳しい" reading="きびしい • Strict" level="N3" lastReviewed="5 days ago" />
            <ReviewCard status="Vocabulary" kanji="猫" reading="ねこ • Cat" level="N5" lastReviewed="Today" mastered={true} />
            <ReviewCard status="Mistaken" kanji="複雑" reading="ふくざつ • Complex" level="N3" lastReviewed="1 day ago" />
            <ReviewCard status="Kanji" kanji="経験" reading="けいけん • Experience" level="N3" lastReviewed="3 days ago" />
            <ReviewCard status="Bookmarked" kanji="将来" reading="しょうらい • Future" level="N4" lastReviewed="1 week ago" />
          </div>

          <div className="flex justify-center py-8">
            <button className="px-8 py-3 bg-white border border-[#f4f0f2] rounded-full text-sm font-bold text-[#886373] hover:bg-zinc-50 transition-all shadow-sm">
              Load More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonalReviewList;