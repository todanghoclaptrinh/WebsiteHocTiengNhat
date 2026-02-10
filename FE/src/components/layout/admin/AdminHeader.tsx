import React from 'react';

const AdminHeader: React.FC = () => {
  return (
    <header className="h-20 bg-white border-b border-[#f4f0f2] flex items-center justify-between px-8 z-10">
      <h2 className="text-xl font-bold text-[#181114]">Admin Overview</h2>
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#886373]">search</span>
          <input 
            className="bg-[#f4f0f2] border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-[#F285AD]/50 text-[#181114]" 
            placeholder="Search analytics..." 
            type="text"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="size-10 rounded-full bg-[#f4f0f2] flex items-center justify-center text-[#181114] relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-[#F285AD] rounded-full"></span>
          </button>
          <button className="size-10 rounded-full bg-[#f4f0f2] flex items-center justify-center text-[#181114]">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;