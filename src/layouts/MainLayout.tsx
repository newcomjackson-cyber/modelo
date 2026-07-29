import React from 'react';
import Sidebar from '../components/Sidebar';
import { ViewState } from '../types';

interface MainLayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
  hideSidebar?: boolean;
}

export default function MainLayout({ children, currentView, setView, hideSidebar = false }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-newcom-bg text-newcom-text">
      {!hideSidebar && <Sidebar currentView={currentView} setView={setView} />}
      <main className="flex-1 h-full flex flex-col min-w-0 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
