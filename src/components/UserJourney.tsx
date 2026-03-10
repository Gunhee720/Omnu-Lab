import React from 'react';
import { 
  Calendar as CalendarIcon, 
  Fingerprint, 
  Download as DownloadIcon, 
  QrCode, 
  FlaskConical, 
  Ticket, 
  Globe, 
  ShoppingBag as ShoppingBagIcon,
  MapPin,
  Smartphone,
  Monitor,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const timelineEvents = [
  { 
    id: 1, 
    title: '오프라인 QR 스캔', 
    time: '10:15 AM', 
    location: 'Seongsu Flagship - Entrance', 
    device: '매장 내 키오스크', 
    desc: '사용자가 개인화된 경험을 위해 입구 QR 코드를 스캔하여 체크인했습니다.',
    icon: QrCode,
    color: 'primary'
  },
  { 
    id: 2, 
    title: '제품 테스트 요청', 
    time: '10:25 AM', 
    location: 'Cushion Zone', 
    product: 'Silk Glow Cushion', 
    desc: '사용자가 스마트 선반 디스플레이 스캔 후 샘플 처방을 요청했습니다.',
    icon: FlaskConical,
    color: 'slate'
  },
  { 
    id: 3, 
    title: '쿠폰 발급', 
    time: '10:45 AM', 
    coupon: '$5 환영 쿠폰', 
    expiry: 'Exp: 2024-04-01',
    icon: Ticket,
    color: 'amber',
    special: true
  },
  { 
    id: 4, 
    title: '온라인 제품 조회', 
    time: '2:30 PM', 
    channel: '웹 채널', 
    product: 'Silk Glow Cushion', 
    meta: ['UTM: retargeting_01', '세션 ID: 49x-22'],
    icon: Globe,
    color: 'slate'
  },
  { 
    id: 5, 
    title: '온라인 구매', 
    time: '3:00 PM', 
    orderId: '#ORD-99120', 
    total: '$42.00',
    channel: 'Web Store',
    attribution: 'Seongsu Flagship QR',
    icon: ShoppingBagIcon,
    color: 'primary',
    success: true
  },
];

export const UserJourney: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-primary/10 rounded-3xl p-8 shadow-sm"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <div className="relative">
              <div className="size-24 rounded-3xl bg-gradient-to-br from-primary to-primary/40 p-1 shadow-2xl shadow-primary/20">
                <div className="w-full h-full rounded-[20px] bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/user8421/200/200" 
                    alt="User" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 size-6 rounded-full border-4 border-white"></div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold">한소희</h2>
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 rounded-full">VIP 고객</span>
              </div>
              <div className="flex gap-6 mt-3 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-2">
                  <CalendarIcon size={16} className="text-slate-400" />
                  최초 방문: 2024-03-01
                </span>
                <span className="flex items-center gap-2">
                  <Fingerprint size={16} className="text-slate-400" />
                  총 접점 수: 12
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
              <DownloadIcon size={18} />
              데이터 내보내기
            </button>
            <button className="px-5 py-2.5 rounded-xl border border-primary/20 text-primary text-sm font-bold hover:bg-primary/5 transition-all">
              원본 이벤트 보기
            </button>
          </div>
        </div>
      </motion.div>

      <div className="flex border-b border-slate-100 overflow-x-auto no-scrollbar">
        <button className="px-8 py-4 text-sm font-bold border-b-2 border-primary text-primary whitespace-nowrap">통합 여정</button>
        <button className="px-8 py-4 text-sm font-medium text-slate-400 hover:text-slate-600 transition-all whitespace-nowrap flex items-center gap-2">
          익명 세션
          <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-500 text-[10px] font-bold">연결 대기 중</span>
        </button>
        <button className="px-8 py-4 text-sm font-medium text-slate-400 hover:text-slate-600 transition-all whitespace-nowrap">캠페인 히스토리</button>
      </div>

      <div className="relative space-y-8 py-4">
        <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-primary/5 to-transparent"></div>
        
        {timelineEvents.map((event, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={event.id} 
            className="relative flex gap-10"
          >
            <div className="mt-1 relative flex items-center justify-center flex-shrink-0">
              <div className={cn(
                "size-12 rounded-full border-2 flex items-center justify-center z-10 shadow-sm",
                event.success ? "bg-primary border-primary text-white scale-110 shadow-primary/30" : 
                event.special ? "bg-white border-amber-500 text-amber-500" :
                event.color === 'primary' ? "bg-primary/10 border-primary text-primary" : "bg-white border-slate-200 text-slate-400"
              )}>
                <event.icon size={event.success ? 24 : 20} />
              </div>
            </div>
            
            <div className={cn(
              "flex-1 bg-white border border-slate-100 rounded-3xl p-6 hover:border-primary/30 transition-all shadow-sm",
              event.special && "border-l-4 border-l-amber-500",
              event.success && "border-2 border-primary bg-primary/[0.02]"
            )}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={cn("font-bold text-xl", event.success ? "text-primary" : "text-slate-800")}>
                    {event.title}
                  </h3>
                  {event.orderId && <p className="text-xs font-bold text-slate-400 mt-1">주문 ID: {event.orderId}</p>}
                </div>
                <span className={cn(
                  "text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider",
                  event.success ? "bg-primary text-white" : 
                  event.special ? "bg-amber-50 text-amber-500" : "bg-slate-50 text-slate-400"
                )}>
                  {event.time}
                </span>
              </div>

              {event.location && (
                <div className="flex items-center gap-6 text-xs font-bold text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-slate-300" /> {event.location}</span>
                  {event.device && <span className="flex items-center gap-1.5"><Smartphone size={14} className="text-slate-300" /> {event.device}</span>}
                  {event.product && <span className="text-primary">"{event.product}"</span>}
                </div>
              )}

              {event.desc && <p className="text-sm text-slate-600 leading-relaxed mb-4">{event.desc}</p>}

              {event.meta && (
                <div className="flex gap-2">
                  {event.meta.map(m => (
                    <span key={m} className="px-2 py-1 bg-slate-50 rounded text-[10px] font-bold text-slate-400">{m}</span>
                  ))}
                </div>
              )}

              {event.success && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6 border-t border-primary/10 mt-6">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Total</p>
                    <p className="text-lg font-bold text-primary">{event.total}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Channel</p>
                    <p className="text-lg font-bold text-slate-700">{event.channel}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Attribution (Assisted By)</p>
                    <div className="flex items-center gap-2">
                      <QrCode size={14} className="text-primary" />
                      <p className="text-sm font-bold text-slate-700">{event.attribution}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
