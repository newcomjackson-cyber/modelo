import React from 'react';
import { ViewState } from '../types';
import { Monitor, Smartphone, LayoutGrid, Square, Columns } from 'lucide-react';

interface FormatsProps {
  setView: (view: ViewState) => void;
}

export default function Formats({ setView }: FormatsProps) {
  return (
    <div className="flex-1 overflow-y-auto p-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Escolha um formato</h2>
        <p className="text-newcom-text-sec text-lg mb-12">selecione o formato ideal para o seu conteúdo</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FormatCard
            aspectRatio="16:9"
            name="paisagem"
            icon={<div className="w-20 h-11 border-2 border-newcom-green rounded mt-2"></div>}
            onClick={() => setView('studio')}
          />
          <FormatCard
            aspectRatio="9:16"
            name="retrato"
            icon={<div className="w-11 h-20 border-2 border-newcom-green rounded"></div>}
            onClick={() => setView('studio')}
          />
          <FormatCard
            aspectRatio="painel LED"
            name="personalizado"
            icon={<LayoutGrid className="w-14 h-14 text-newcom-green stroke-[1.5]" />}
            onClick={() => setView('studio')}
          />
          <FormatCard
            aspectRatio="videowall"
            name="matriz de telas"
            icon={<Columns className="w-14 h-14 text-newcom-green stroke-[1.5]" />}
            onClick={() => setView('studio')}
          />
          <FormatCard
            aspectRatio="ultrawide"
            name="21:9"
            icon={<div className="w-24 h-9 border-2 border-newcom-green rounded mt-4"></div>}
            onClick={() => setView('studio')}
          />
          <FormatCard
            aspectRatio="tv"
            name="4:3"
            icon={<Monitor className="w-14 h-14 text-newcom-green stroke-[1.5]" />}
            onClick={() => setView('studio')}
          />
          <FormatCard
            aspectRatio="totem"
            name="vertical"
            icon={<Smartphone className="w-14 h-14 text-newcom-green stroke-[1.5]" />}
            onClick={() => setView('studio')}
          />
          <FormatCard
            aspectRatio="personalizado"
            name="definir tamanho"
            icon={<Square className="w-14 h-14 text-newcom-text-sec stroke-[1]" />}
            onClick={() => setView('studio')}
          />
        </div>
      </div>
    </div>
  );
}

function FormatCard({ aspectRatio, name, icon, onClick }: { aspectRatio: string, name: string, icon: React.ReactNode, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-newcom-surface/40 hover:bg-newcom-surface border border-newcom-border hover:border-newcom-border/80 transition-all rounded-[32px] p-8 flex flex-col items-center justify-center text-center cursor-pointer group h-64 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(34,197,94,0.05)]"
    >
      <div className="flex-1 flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
        {icon}
      </div>
      <div className="shrink-0">
        <h3 className="font-bold text-lg">{aspectRatio}</h3>
        <p className="text-newcom-text-sec text-[13px]">{name}</p>
      </div>
    </div>
  );
}
