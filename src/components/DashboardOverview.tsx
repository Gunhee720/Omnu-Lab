import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { TrendingUp, TrendingDown, Store, Zap, Rocket, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'motion/react';

const kpiData = [
  { label: 'QR Visit Rate', value: '24.5%', trend: '+2.1%', trendUp: true, color: '#895af6' },
  { label: 'Identified Rate', value: '62.0%', trend: '-0.5%', trendUp: false, color: '#895af6' },
  { label: 'O2O Rate', value: '15.0%', trend: '+1.2%', trendUp: true, color: '#895af6' },
  { label: 'Store Revenue', value: '$142,000', trend: '+8.4%', trendUp: true, color: '#895af6' },
];

const chartData = [
  { name: 'May 01', online: 200, omni: 220 },
  { name: 'May 08', online: 190, omni: 250 },
  { name: 'May 15', online: 230, omni: 280 },
  { name: 'May 22', online: 210, omni: 310 },
  { name: 'May 29', online: 190, omni: 340 },
];

const activityFeed = [
  { id: 1, event: 'Offline QR Scan', context: 'Seongsu Flagship Store', time: '2m ago', status: 'Success', type: 'qr' },
  { id: 2, event: 'New Identity Stitch', context: 'User #842 (Web Cookie matched)', time: '5m ago', status: 'Linked', type: 'user' },
  { id: 3, event: 'O2O Conversion', context: 'Gangnam Premium Outlet', time: '12m ago', status: 'Confirmed', type: 'conversion' },
  { id: 4, event: 'Expired QR Access', context: 'Flash Sale Campaign', time: '18m ago', status: 'Denied', type: 'error' },
];

export const DashboardOverview: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">대시보드 개요</h2>
          <p className="text-slate-500 mt-1">Cross-channel performance and identity stitching data.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors">
            보고서 내보내기
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={kpi.label} 
            className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-all flex flex-col gap-2"
          >
            <div className="flex justify-between items-start">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">{kpi.label}</span>
              <div className={cn(
                "px-2 py-0.5 rounded text-[10px] font-bold",
                kpi.trendUp ? "bg-emerald-50 text-emerald-500" : "bg-rose-50 text-rose-500"
              )}>
                {kpi.trend}
              </div>
            </div>
            <div className="text-3xl font-bold tracking-tight">{kpi.value}</div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full" 
                style={{ width: kpi.value.includes('%') ? kpi.value : '75%' }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-white rounded-3xl border border-primary/5 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">매출 트렌드: 온라인 vs 총 옴니</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">매장 지원 기여도를 포함한 30일 성과 추적</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-slate-400"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">온라인 전용</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-[10px] font-bold text-primary uppercase">총 옴니</span>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorOmni" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#895af6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#895af6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="omni" 
                  stroke="#895af6" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorOmni)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="online" 
                  stroke="#cbd5e1" 
                  strokeWidth={2} 
                  strokeDasharray="5 5" 
                  fill="none" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Zap size={20} />
              </div>
              <h4 className="font-bold text-lg text-slate-900">AI 최적화 활성화됨</h4>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              스마트 라우팅이 현재 전환율을 자동으로 <span className="text-primary font-bold">4.2% 향상</span>시키고 있습니다.
            </p>
            <button className="mt-auto pt-4 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider cursor-pointer hover:gap-3 transition-all">
              <span>상세 보기</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-primary/5 p-8 shadow-sm flex-1">
            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Rocket size={20} className="text-primary" />
              빠른 작업
            </h4>
            <div className="space-y-4">
              {['실시간 유입 확인', '옴니 ROAS 분석', '신규 매장 등록'].map((action) => (
                <button 
                  key={action}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <span className="text-sm font-bold text-slate-700">{action}</span>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-primary/5 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Activity size={20} className="text-primary" />
            최근 활동 피드
          </h3>
          <button className="text-primary text-xs font-bold hover:underline">전체 보기</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <th className="px-8 py-4">Event Description</th>
                <th className="px-8 py-4">Location / Context</th>
                <th className="px-8 py-4">Time</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {activityFeed.map((item) => (
                <tr key={item.id} className="hover:bg-primary/5 transition-colors">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Zap size={16} />
                      </div>
                      <span className="font-bold text-slate-700">{item.event}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-slate-500">{item.context}</td>
                  <td className="px-8 py-4 text-slate-400 font-medium">{item.time}</td>
                  <td className="px-8 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                      item.status === 'Success' || item.status === 'Confirmed' ? "bg-emerald-50 text-emerald-500" :
                      item.status === 'Linked' ? "bg-blue-50 text-blue-500" : "bg-rose-50 text-rose-500"
                    )}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
