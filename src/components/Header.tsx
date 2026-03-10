import React from 'react';
import { Search, Bell, HelpCircle, Calendar, Plus } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-20 flex items-center justify-between px-8 border-b border-primary/5 bg-white/80 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
        <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block"></div>
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="데이터, QR 또는 사용자 검색..." 
            className="w-full bg-slate-100 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
          <Calendar size={16} className="text-primary" />
          <span className="text-xs font-bold text-slate-600">최근 30일</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="size-10 rounded-xl flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-primary/10 hover:text-primary transition-all">
            <Bell size={20} />
          </button>
          <button className="size-10 rounded-xl flex items-center justify-center bg-slate-100 text-slate-500 hover:bg-primary/10 hover:text-primary transition-all">
            <HelpCircle size={20} />
          </button>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-all ml-2">
          <Plus size={18} />
          <span>새 QR 생성</span>
        </button>
      </div>
    </header>
  );
};
