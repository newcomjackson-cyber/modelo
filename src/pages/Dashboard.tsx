import React from 'react';
import { ViewState } from '../types';
import { Plus, Folder, Monitor, Calendar } from 'lucide-react';

interface DashboardProps {
  setView: (view: ViewState) => void;
}

export default function Dashboard({ setView }: DashboardProps) {
  return (
    <div className="flex-1 overflow-y-auto p-8 flex gap-8">
      <div className="flex-1 flex flex-col max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">bom dia, admin! 👋</h2>
          <p className="text-newcom-text-sec text-lg">o que você deseja fazer hoje?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="criar conteúdo"
            subtitle="monte seus slides do zero"
            icon={<Plus className="w-8 h-8 text-newcom-green" strokeWidth={1.5} />}
            onClick={() => setView('formats')}
          />
          <DashboardCard
            title="biblioteca"
            subtitle="acesse seus conteúdos"
            icon={<Folder className="w-8 h-8 text-newcom-green" strokeWidth={1.5} />}
            onClick={() => setView('library')}
          />
          <DashboardCard
            title="players"
            subtitle="gerencie suas telas"
            icon={<Monitor className="w-8 h-8 text-newcom-green" strokeWidth={1.5} />}
            onClick={() => setView('players')}
          />
          <DashboardCard
            title="agendamentos"
            subtitle="programe suas campanhas"
            icon={<Calendar className="w-8 h-8 text-newcom-green" strokeWidth={1.5} />}
            onClick={() => setView('campaigns')}
          />
        </div>

        <div className="mt-8 bg-newcom-surface/30 border border-newcom-border p-6 rounded-[32px] flex items-center justify-between hover:bg-newcom-surface transition-colors cursor-pointer" onClick={() => setView('campaigns')}>
           <div>
             <h3 className="text-xl font-bold mb-1">publicar campanha</h3>
             <p className="text-newcom-text-sec">envie seu conteúdo para as telas</p>
           </div>
           <div className="w-14 h-14 rounded-full border-2 border-newcom-green flex items-center justify-center text-newcom-green bg-[#11161A]/50">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
           </div>
        </div>
      </div>
      
      <div className="w-80 shrink-0 border-l border-newcom-border pl-8">
        <h3 className="text-[10px] font-bold text-newcom-text-sec mb-6 uppercase tracking-[0.2em]">atividade recente</h3>
        
        <div className="flex flex-col gap-8">
          <ActivityItem
            title="Promoção Verão"
            subtitle="publicado em 2 telas"
            time="há 10 min"
            icon={<Monitor className="w-5 h-5 text-white" strokeWidth={1.5} />}
          />
          <ActivityItem
            title="Campanha Loja SP"
            subtitle="agendada para hoje"
            time="há 1 h"
            icon={<Calendar className="w-5 h-5 text-red-400" strokeWidth={1.5} />}
          />
          <ActivityItem
            title="Player TV Shopping"
            subtitle="ficou online"
            time="há 2 h"
            icon={<Monitor className="w-5 h-5 text-blue-400" strokeWidth={1.5} />}
          />
          <ActivityItem
            title="Conteúdo atualizado"
            subtitle="Banner Liquidação"
            time="há 3 h"
            icon={<Folder className="w-5 h-5 text-orange-400" strokeWidth={1.5} />}
          />
           <button className="text-newcom-text-sec text-xs font-medium hover:text-white border border-newcom-border rounded-xl py-3 mt-4 transition-colors">
             ver todas
           </button>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, subtitle, icon, onClick }: { title: string, subtitle: string, icon: React.ReactNode, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-newcom-surface/40 hover:bg-[#151b21] border border-newcom-border hover:border-newcom-border/80 transition-all rounded-[32px] p-6 flex flex-col items-center justify-center text-center cursor-pointer group h-64 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(34,197,94,0.05)]"
    >
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-newcom-text-sec text-[13px] mb-8 px-2 leading-relaxed">{subtitle}</p>
      <div className="w-16 h-16 rounded-full border border-newcom-border group-hover:border-newcom-green flex items-center justify-center bg-newcom-bg transition-colors">
        {icon}
      </div>
    </div>
  );
}

function ActivityItem({ title, subtitle, time, icon }: { title: string, subtitle: string, time: string, icon: React.ReactNode }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-xl bg-newcom-surface border border-newcom-border flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-[13px] text-white">{title}</h4>
        <p className="text-[11px] text-newcom-text-sec mt-1">{subtitle}</p>
        <span className="text-[10px] text-newcom-text-sec mt-1 block">{time}</span>
      </div>
    </div>
  );
}
