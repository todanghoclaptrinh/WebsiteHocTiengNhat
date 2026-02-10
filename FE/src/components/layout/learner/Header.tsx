import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 backdrop-blur-md border-b border-[#f4f0f2] px-8 py-4">
      <div className="flex items-center gap-4">
        <h2 className="text-[#181114] text-xl font-bold tracking-tight">Learner Dashboard</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#886373] text-[20px]">search</span>
          <input 
            className="w-full pl-10 pr-4 py-2 bg-white border-none rounded-full text-sm placeholder:text-[#886373] focus:ring-2 focus:ring-primary/20 outline-none" 
            placeholder="Search kanji, grammar..."
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-full size-10 bg-white text-[#181114] border border-[#f4f0f2] hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="flex items-center justify-center rounded-full size-10 bg-white text-[#181114] border border-[#f4f0f2] hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8SMNC3nIOFUVSJQga6Z6FSJjaurDPHzpdjzFGk1roIZWaPUpkHt9d6j1ylFZWdNsOABZ2QbBYT9saB05OiHJG3l71uFG6UEMJ38AmNH3aLsayJoW8pCB-nottUtoXhNmKSyny9ZHse9E9hhck52yl8e83ibakWVD0FUaRkRoGHm_Gb3EmdbqzVHYGJEELfUAz588EwiWHSwjQAhw93BUrTMQmSN1EzqYkhwoyTC9V5lT9S20I1vY5fQoXTHMOnC3VCZcdCwWG5pZ8")' }}
        ></div>
      </div>
    </header>
  );
};

const IconButton: React.FC<{ icon: string }> = ({ icon }) => (
  <button className="flex items-center justify-center rounded-full size-10 bg-white dark:bg-zinc-900 text-[#181114] dark:text-white border border-[#f4f0f2] dark:border-zinc-800">
    <span className="material-symbols-outlined">{icon}</span>
  </button>
);

export default Header;