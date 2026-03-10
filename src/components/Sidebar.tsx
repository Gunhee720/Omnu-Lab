import React from 'react';
import { 
  LayoutDashboard, 
  QrCode, 
  Activity, 
  BarChart3, 
  UserRound, 
  Settings, 
  LogOut,
  Map,
  Users,
  Smartphone
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'dashboard', label: '대시보드 개요', icon: LayoutDashboard },
  { id: 'monitoring', label: '실시간 모니터링', icon: Activity },
  { id: 'qr', label: 'QR 관리', icon: QrCode },
  { id: 'analysis', label: '성과 분석', icon: BarChart3 },
  { id: 'journey', label: '고객 여정', icon: UserRound },
];

const secondaryItems = [
  { id: 'map', label: '구역별 분석', icon: Map },
  { id: 'users', label: '사용자 인사이트', icon: Users },
  { id: 'devices', label: '기기 로그', icon: Smartphone },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-primary/10 bg-white flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <LayoutDashboard size={24} />
        </div>
        <div>
          <h1 className="text-sm font-bold leading-tight">Omni Lab</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Admin Console</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-2">Main</div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              activeTab === item.id 
                ? "bg-primary/10 text-primary font-semibold" 
                : "text-slate-500 hover:bg-primary/5 hover:text-primary"
            )}
          >
            <item.icon size={20} className={cn(activeTab === item.id ? "text-primary" : "text-slate-400 group-hover:text-primary")} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}

        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mt-6 mb-2">Analysis</div>
        {secondaryItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-primary/5 hover:text-primary transition-all group"
          >
            <item.icon size={20} className="text-slate-400 group-hover:text-primary" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-4 py-6 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-all">
          <Settings size={20} />
          <span className="text-sm">설정</span>
        </button>
        
        <div className="mt-4 p-4 rounded-2xl bg-primary/5">
          <div className="flex items-center gap-2 mb-2">
            <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">시스템 정상</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">모든 노드 정상 작동 중. 인프라 상태 최적.</p>
        </div>

        <div className="mt-6 flex items-center gap-3 px-2">
          <div className="size-10 rounded-full bg-primary/20 border-2 border-primary/10 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/admin/100/100" 
              alt="Admin" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold truncate">Alex Rivera</p>
            <p className="text-[10px] text-slate-500 truncate">Global Admin</p>
          </div>
          <button className="text-slate-400 hover:text-red-500 transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
};
