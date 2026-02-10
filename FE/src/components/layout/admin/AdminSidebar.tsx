import React from 'react';
import { logout } from '../../../store/auth.slice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };
  return (
    <aside className="w-64 flex flex-col bg-white border-r border-[#f4f0f2] shrink-0">
      <div className="p-6 flex flex-col gap-8 h-full">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <div className="bg-primary rounded-full size-10 flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold leading-none">JQuiz Admin</h1>
            <p className="text-[#886373] text-xs font-normal">Management Console</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 flex-1">
          <NavItem icon="dashboard" label="Overview" active />
          <NavItem icon="layers" label="Content" />
          <NavItem icon="quiz" label="Questions" />
          <NavItem icon="assignment" label="Exams" />
          <NavItem icon="group" label="Users" />
          <div className="my-4 border-t border-[#f4f0f2]"></div>
          <NavItem icon="neurology" label="AI Settings" />
        </nav>

        {/* User Info Footer */}
        <div className="mt-auto pt-6">
          <div className="bg-[#f4f0f2] p-4 rounded-xl flex items-center gap-3">
            <div className="size-9 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5nAyQn9mpm0lCW02L0BhmFDjM6W3k8Mj-4D7EdVTqoCHeIyPskZJlHJ6GjGozV3S_JKG4wPNLvz_QExnSfgRch1QzyK11X0bXJnwrJ8jYFz0QVsz61ODktkRQCGVCMQK4uS2QbpQV3pubpHIh-p7r4Vfoh7ykrFdREnIRKp3wbzAuKDo5py6Xt3n-dhI-bisVKraU3IZA9Cy-wfenj5aS3VmP_Viz86p68BufHpb6qcliDjcCcFulQQ1r8Ep4KLuIE06NbhEwvKDx')" }}></div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold truncate">Administrator</p>
              <p className="text-[10px] text-[#886373] truncate">system@jquiz.ai</p>
            </div>
          </div>
        </div>
      </div>

       {/* Logout Button */}
      <div className="mt-auto pt-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 w-full"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="text-sm font-medium">Đăng xuất</span>
        </button>
      </div>

    </aside>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: string, label: string, active?: boolean }) => (
  <a className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${active ? 'bg-primary/10 text-primary' : 'text-[#886373] hover:bg-[#f4f0f2]'}`} href="#">
    <span className="material-symbols-outlined" style={active ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </a>
);

export default Sidebar;