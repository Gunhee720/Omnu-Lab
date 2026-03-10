import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';
import { RefreshCcw, Cloud, Search, Bell, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

const kpiData = [
  { label: 'Total Scans Today', value: '1,284', trend: '+12%', trendUp: true },
  { label: 'Identified Users', value: '796', trend: '+8%', trendUp: true },
  { label: 'Anonymous', value: '488', trend: '-3%', trendUp: false },
  { label: 'Coupon Claims', value: '212', trend: '+15%', trendUp: true },
];

const trendData = [
  { time: '00:00', value: 30 },
  { time: '04:00', value: 20 },
  { time: '08:00', value: 60 },
  { time: '12:00', value: 142 },
  { time: '16:00', value: 110 },
  { time: '20:00', value: 80 },
  { time: '23:59', value: 40 },
];

const deviceData = [
  { name: 'iOS', value: 65, color: '#895af6' },
  { name: 'Android', value: 35, color: '#10b981' },
];

const zoneData = [
  { name: '입구', value: 412 },
  { name: '쿠션', value: 796 },
  { name: '립', value: 312 },
  { name: '결제', value: 642 },
];

export const RealTimeMonitoring: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 w-fit mb-4">
            <Cloud size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider">라이브 상태: 연결됨</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">실시간 유입 현황</h2>
          <p className="text-slate-500">오프라인 매장 참여 데이터를 모니터링합니다.</p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
          <RefreshCcw size={14} className="animate-spin-slow" />
          <span>30초마다 자동 갱신</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpiData.map((kpi, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            key={kpi.label} 
            className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all"
          >
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{kpi.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">{kpi.value}</span>
              <span className={cn(
                "text-[10px] font-bold",
                kpi.trendUp ? "text-emerald-500" : "text-rose-500"
              )}>
                {kpi.trend}
              </span>
            </div>
          </motion.div>
        ))}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-primary text-white shadow-lg shadow-primary/30"
        >
          <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">Top Zone</p>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Cushion Test</span>
            <span className="text-[10px] text-white/80 font-medium">Highest retention rate</span>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold">시간대별 스캔 추이</h3>
              <p className="text-sm text-slate-500">관측된 최고치: 시간당 142건</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">최근 24시간</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#895af6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#895af6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" hide />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#895af6" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#trendGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-4 px-2">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">최근 24시간</span>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col items-center">
          <div className="w-full text-left mb-8">
            <h3 className="text-lg font-bold">기기별 분석</h3>
            <p className="text-sm text-slate-500">소스 분포</p>
          </div>
          <div className="relative size-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">1.2k</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">대</span>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-4 mt-8">
            {deviceData.map(device => (
              <div key={device.name} className="flex items-center gap-2">
                <span className="size-2 rounded-full" style={{ backgroundColor: device.color }}></span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold">{device.name}</span>
                  <span className="text-[10px] text-slate-500 font-medium">{device.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
        <div className="mb-8">
          <h3 className="text-lg font-bold">구역별 방문</h3>
          <p className="text-sm text-slate-500">층별 구역 방문 분포</p>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={zoneData}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 11, fontWeight: 700, fill: '#94a3b8' }}
              />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {zoneData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#895af6" fillOpacity={0.8} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
