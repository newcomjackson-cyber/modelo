import React from 'react';
import { Home, Monitor, Folder, Calendar, BarChart2, Settings, HelpCircle, Triangle } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export default function Sidebar({ currentView, setView }: SidebarProps) {
  return (
    <aside className="w-[72px] h-full bg-[#11161A] border-r border-[#1D252B] flex flex-col items-center py-6 z-50 shrink-0">
      <div className="mb-8 text-[#22C55E]">
        <Triangle className="w-8 h-8 fill-current rotate-90" />
      </div>
      
      <nav className="flex flex-col gap-4 w-full items-center flex-1">
        <NavItem 
          icon={Home} 
          active={currentView === 'dashboard'} 
          onClick={() => setView('dashboard')} 
          tooltip="Home" 
        />
        <NavItem 
          icon={Monitor} 
          active={currentView === 'players'} 
          onClick={() => setView('players')} 
          tooltip="Players" 
        />
        <NavItem 
          icon={Folder} 
          active={currentView === 'library'} 
          onClick={() => setView('library')} 
          tooltip="Biblioteca" 
        />
        <NavItem 
          icon={Calendar} 
          active={currentView === 'campaigns'} 
          onClick={() => setView('campaigns')} 
          tooltip="Agendamentos" 
        />
        <NavItem 
          icon={BarChart2} 
          active={currentView === 'analytics'} 
          onClick={() => setView('analytics')} 
          tooltip="Analytics" 
        />
      </nav>

      <div className="flex flex-col gap-4 w-full items-center mt-auto">
        <NavItem 
          icon={Settings} 
          active={currentView === 'settings'} 
          onClick={() => setView('settings')} 
          tooltip="Configurações" 
        />
        <NavItem 
          icon={HelpCircle} 
          active={false} 
          onClick={() => {}} 
          tooltip="Ajuda" 
        />
      </div>
    </aside>
  );
}

function NavItem({ icon: Icon, active, onClick, tooltip }: { icon: any, active: boolean, onClick: () => void, tooltip: string }) {
  return (
    <button
      onClick={onClick}
      title={tooltip}
      className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 group ${
        active ? 'bg-[#1D252B] text-[#22C55E]' : 'text-[#94A3B8] hover:text-white hover:bg-[#1D252B]/50'
      }`}
    >
      <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 2} />
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#22C55E] rounded-r-full" />
      )}
    </button>
  );
}
