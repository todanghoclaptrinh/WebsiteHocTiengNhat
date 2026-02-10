import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const LearnerLayout: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden font-display bg-background-light text-[#181114]">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 max-w-9xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* THAY children THÀNH Outlet */}
            <Outlet /> 
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearnerLayout;