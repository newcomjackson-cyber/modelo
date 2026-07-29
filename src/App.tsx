import React, { useState } from 'react';
import { ViewState } from './types';
import MainLayout from './layouts/MainLayout';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Studio from './pages/Studio';
import Formats from './pages/Formats';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  if (currentView === 'studio') {
    return (
      <div className="h-screen w-full flex bg-newcom-bg text-white font-sans overflow-hidden">
        <Studio setView={setCurrentView} />
      </div>
    );
  }

  return (
    <MainLayout currentView={currentView} setView={setCurrentView}>
      <Topbar />
      {currentView === 'dashboard' && <Dashboard setView={setCurrentView} />}
      {currentView === 'formats' && <Formats setView={setCurrentView} />}
      {currentView === 'players' && <div className="p-8 text-newcom-text-sec">Módulo de Players (Em breve)</div>}
      {currentView === 'campaigns' && <div className="p-8 text-newcom-text-sec">Módulo de Campanhas (Em breve)</div>}
      {currentView === 'analytics' && <div className="p-8 text-newcom-text-sec">Módulo de Analytics (Em breve)</div>}
      {currentView === 'library' && <div className="p-8 text-newcom-text-sec">Módulo de Biblioteca (Em breve)</div>}
      {currentView === 'settings' && <div className="p-8 text-newcom-text-sec">Módulo de Configurações (Em breve)</div>}
    </MainLayout>
  );
}
