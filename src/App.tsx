/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardOverview } from './components/DashboardOverview';
import { RealTimeMonitoring } from './components/RealTimeMonitoring';
import { QRManagement } from './components/QRManagement';
import { UserJourney } from './components/UserJourney';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'monitoring':
        return <RealTimeMonitoring />;
      case 'qr':
        return <QRManagement />;
      case 'journey':
        return <UserJourney />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <p className="text-lg font-medium">준비 중인 페이지입니다.</p>
          </div>
        );
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return '성과 개요';
      case 'monitoring': return '실시간 모니터링';
      case 'qr': return 'QR 관리';
      case 'analysis': return '성과 분석';
      case 'journey': return '고객 여정';
      default: return 'Omni Lab';
    }
  };

  return (
    <div className="flex min-h-screen bg-background-light font-sans selection:bg-primary/20 selection:text-primary">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title={getTitle()} />
        
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
          
          <footer className="p-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2024 Omni Channel Lab. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">API Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">System Health</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
