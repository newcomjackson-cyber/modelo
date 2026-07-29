import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="h-[72px] bg-[#090C0F] border-b border-[#1D252B] flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center gap-4">
        <div className="text-white font-bold text-xl tracking-tight flex items-center gap-2">
           <span className="text-[#22C55E]">▶</span> newcom <span className="font-normal text-[#94A3B8]">signage</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="text-[#94A3B8] hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-[#94A3B8] hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#22C55E] rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-[#1D252B] cursor-pointer group">
           <img src="https://ui-avatars.com/api/?name=Admin&background=22C55E&color=fff" alt="User" className="w-8 h-8 rounded-full" />
           <div className="flex flex-col">
             <span className="text-sm font-medium text-white group-hover:text-[#22C55E] transition-colors flex items-center gap-1">
               Admin <ChevronDown className="w-3 h-3" />
             </span>
           </div>
        </div>
      </div>
    </header>
  );
}
