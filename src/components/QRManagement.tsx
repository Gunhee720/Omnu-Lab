import React from 'react';
import { 
  QrCode, 
  Search, 
  Filter, 
  Plus, 
  Download, 
  ExternalLink,
  Calendar,
  MapPin,
  Tag,
  CheckCircle2,
  PauseCircle,
  XCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const qrList = [
  { id: 1, name: 'Summer Promo', store: 'Flagship NY', zone: 'Aisle 1', campaign: 'Summer 24', status: 'Active', scans: '1,240', date: '2024-05-01' },
  { id: 2, name: 'Flash Sale', store: 'LA Boutique', zone: 'Checkout', campaign: 'Flash 15', status: 'Paused', scans: '850', date: '2024-06-12' },
  { id: 3, name: 'Member Hub', store: 'Chicago Hub', zone: 'Entrance', campaign: 'Loyalty', status: 'Expired', scans: '3,100', date: '2023-12-20' },
];

export const QRManagement: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black tracking-tight">QR 관리</h2>
        <p className="text-slate-500 text-sm max-w-2xl">
          옴니채널 QR 코드를 생성, 모니터링 및 배포하여 물리적 위치 전반에서 오프라인에서 온라인으로의 고객 여정을 추적하세요.
        </p>
      </div>

      <div className="border-b border-slate-200">
        <div className="flex gap-8">
          <button className="pb-4 text-sm font-bold border-b-2 border-primary text-primary transition-all">QR 목록</button>
          <button className="pb-4 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-primary transition-all">신규 생성</button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex-1 min-w-[300px] max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="이름, 캠페인 또는 매장으로 검색..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:shadow-md transition-all">
            <Filter size={18} />
            <span>필터</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-all">
            <Plus size={18} />
            <span>QR 생성</span>
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-100">
              <th className="px-8 py-4">이름</th>
              <th className="px-8 py-4">매장</th>
              <th className="px-8 py-4">구역</th>
              <th className="px-8 py-4">캠페인</th>
              <th className="px-8 py-4">상태</th>
              <th className="px-8 py-4">스캔 수</th>
              <th className="px-8 py-4">생성일</th>
              <th className="px-8 py-4 text-right">작업</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {qrList.map((qr) => (
              <tr key={qr.id} className="hover:bg-primary/5 transition-colors group">
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <QrCode size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{qr.name}</span>
                  </div>
                </td>
                <td className="px-8 py-4 text-sm text-slate-500">{qr.store}</td>
                <td className="px-8 py-4 text-sm text-slate-500">{qr.zone}</td>
                <td className="px-8 py-4 text-sm text-slate-500">{qr.campaign}</td>
                <td className="px-8 py-4">
                  <span className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    qr.status === 'Active' ? "bg-emerald-50 text-emerald-600" :
                    qr.status === 'Paused' ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-500"
                  )}>
                    {qr.status === 'Active' ? '활성' : qr.status === 'Paused' ? '일시정지' : '만료'}
                  </span>
                </td>
                <td className="px-8 py-4 text-sm font-mono font-bold text-slate-600">{qr.scans}</td>
                <td className="px-8 py-4 text-sm text-slate-400">{qr.date}</td>
                <td className="px-8 py-4 text-right">
                  <button className="text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 justify-end ml-auto hover:underline">
                    <Download size={14} />
                    <span>다운로드</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">신규 QR 코드 생성</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">QR 이름</label>
                  <input className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none transition-all" placeholder="예: 겨울 세일 입구" type="text"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">만료일</label>
                  <input className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none transition-all" type="date"/>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">매장 위치</label>
                  <select className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none transition-all">
                    <option>매장 선택</option>
                    <option>Flagship NY</option>
                    <option>LA Boutique</option>
                    <option>Chicago Hub</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">구역 / 통로</label>
                  <select className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none transition-all">
                    <option>구역 선택</option>
                    <option>Entrance</option>
                    <option>Main Aisle</option>
                    <option>Checkout Counter</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-6 border-t border-slate-50">
                <button className="px-6 py-3 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50 transition-all" type="button">취소</button>
                <button className="px-8 py-3 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-all" type="submit">QR 코드 생성</button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center">
          <h3 className="text-lg font-bold mb-8 w-full text-left">QR 미리보기</h3>
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 mb-6 w-full aspect-square flex items-center justify-center">
            <div className="relative group">
              <QrCode size={120} className="text-slate-300 group-hover:text-primary transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 backdrop-blur p-2 rounded-lg shadow-xl">
                  <ExternalLink size={20} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 font-mono mb-6">동적 연결 주소: https://omni.lab/q/X9Z2...</p>
          <button className="w-full py-3 rounded-xl border-2 border-primary text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all">
            SVG 다운로드
          </button>
          <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">PNG, EPS 형식 지원</p>
        </div>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
