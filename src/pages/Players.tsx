import React from 'react';
import { Search, Monitor, Plus, MoreHorizontal, Activity, AlertTriangle, CloudOff } from 'lucide-react';

export default function Players() {
  return (
    <div className="flex-1 overflow-auto bg-[#090C0F] p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
           <div>
             <h1 className="text-2xl font-semibold text-white mb-2">Players</h1>
             <p className="text-sm text-[#94A3B8]">Gerencie suas telas e dispositivos (128 conectados)</p>
           </div>
           <button className="flex items-center gap-2 px-4 py-2 bg-[#22C55E] text-white rounded-lg text-sm font-medium hover:bg-[#1ea34d] transition-colors">
              <Plus className="w-4 h-4" /> Novo Player
           </button>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
           <StatusCard title="Total" count="144" icon={Monitor} color="text-white" />
           <StatusCard title="Online" count="112" icon={Activity} color="text-[#22C55E]" />
           <StatusCard title="Offline" count="16" icon={CloudOff} color="text-red-500" />
           <StatusCard title="Atenção" count="16" icon={AlertTriangle} color="text-yellow-500" />
        </div>

        {/* List Header */}
        <div className="bg-[#11161A] border border-[#1D252B] rounded-t-xl p-4 flex items-center justify-between">
           <div className="relative w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input type="text" placeholder="Buscar players..." className="w-full bg-[#090C0F] border border-[#1D252B] rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:border-[#22C55E] outline-none" />
           </div>
           <div className="flex items-center gap-3">
             <select className="bg-[#090C0F] border border-[#1D252B] rounded-lg px-3 py-2 text-sm text-white outline-none appearance-none cursor-pointer">
               <option>Todos os grupos</option>
               <option>Matriz</option>
               <option>Filiais</option>
             </select>
             <select className="bg-[#090C0F] border border-[#1D252B] rounded-lg px-3 py-2 text-sm text-white outline-none appearance-none cursor-pointer">
               <option>Todos os status</option>
               <option>Online</option>
               <option>Offline</option>
             </select>
           </div>
        </div>

        {/* Player List */}
        <div className="bg-[#11161A] border border-[#1D252B] border-t-0 rounded-b-xl overflow-hidden">
           <table className="w-full text-left border-collapse">
             <thead>
               <tr className="border-b border-[#1D252B] text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider">
                 <th className="p-4 font-semibold">Player</th>
                 <th className="p-4 font-semibold">Local</th>
                 <th className="p-4 font-semibold">Status</th>
                 <th className="p-4 font-semibold">Conteúdo Atual</th>
                 <th className="p-4 font-semibold text-right">Ações</th>
               </tr>
             </thead>
             <tbody>
               <PlayerRow 
                 name="Recepção Matriz" 
                 model="Samsung Smart Display" 
                 local="São Paulo - SP" 
                 status="online" 
                 content="Campanha Verão 2024"
               />
               <PlayerRow 
                 name="Painel LED Entrada" 
                 model="NovaStar Controller" 
                 local="Rio de Janeiro - RJ" 
                 status="online" 
                 content="Institucional Corporativo"
               />
               <PlayerRow 
                 name="TV Loja Shopping" 
                 model="LG WebOS" 
                 local="Campinas - SP" 
                 status="offline" 
                 content="Promoção Julho"
               />
               <PlayerRow 
                 name="Totem Interativo" 
                 model="Windows PC" 
                 local="Curitiba - PR" 
                 status="warning" 
                 content="Guia de Lojas"
               />
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ title, count, icon: Icon, color }: any) {
  return (
    <div className="bg-[#11161A] border border-[#1D252B] rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider">{title}</span>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <span className="text-3xl font-semibold text-white">{count}</span>
    </div>
  )
}

function PlayerRow({ name, model, local, status, content }: any) {
  return (
    <tr className="border-b border-[#1D252B] last:border-0 hover:bg-[#1D252B]/30 transition-colors group">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-[#1D252B] flex items-center justify-center shrink-0">
             <Monitor className="w-5 h-5 text-[#94A3B8]" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">{name}</div>
            <div className="text-xs text-[#94A3B8] mt-0.5">{model}</div>
          </div>
        </div>
      </td>
      <td className="p-4 text-sm text-[#94A3B8]">{local}</td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            status === 'online' ? 'bg-[#22C55E]' : 
            status === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
          }`}></div>
          <span className="text-sm text-white capitalize">{status}</span>
        </div>
      </td>
      <td className="p-4 text-sm text-[#94A3B8] truncate max-w-[200px]">{content}</td>
      <td className="p-4 text-right">
        <button className="p-2 text-[#94A3B8] hover:text-white rounded-lg hover:bg-[#1D252B] transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </td>
    </tr>
  )
}
