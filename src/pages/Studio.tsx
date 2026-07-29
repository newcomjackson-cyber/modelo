import React from 'react';
import { ViewState } from '../types';
import { ArrowLeft, LayoutTemplate, Type, Image as ImageIcon, Video, Box, CloudSun, Clock, Globe, HelpCircle, Save, Play, Settings, Plus, Minus, Move, Hand, ZoomIn, Lock, Trash2, Layers, AlignLeft, AlignCenter, AlignRight, AlignJustify, ChevronDown, Monitor } from 'lucide-react';

interface StudioProps {
  setView: (view: ViewState) => void;
}

export default function Studio({ setView }: StudioProps) {
  return (
    <div className="flex flex-col h-full w-full bg-newcom-bg text-white overflow-hidden font-sans">
      {/* Topbar */}
      <header className="h-[72px] bg-newcom-bg border-b border-newcom-border flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-6">
           <div className="text-newcom-text-sec hover:text-white cursor-pointer flex items-center gap-2" onClick={() => setView('formats')}>
             <ArrowLeft className="w-4 h-4" /> <span className="text-sm font-medium">Voltar</span>
           </div>
           <div className="h-6 w-px bg-newcom-border"></div>
           <div className="font-medium text-sm">Campanha Verão 2024</div>
        </div>
        
        <div className="flex items-center gap-2 text-newcom-text-sec text-xs font-medium bg-newcom-surface px-3 py-1.5 rounded-full border border-newcom-border">
           <CloudSun className="w-3.5 h-3.5" /> Salvo agora há pouco
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-newcom-surface border border-newcom-border hover:bg-newcom-border rounded-lg text-sm font-medium transition-colors">
            <Play className="w-4 h-4" /> Preview
          </button>
          <div className="flex bg-newcom-green hover:bg-[#1ea852] text-newcom-bg rounded-lg transition-colors overflow-hidden">
            <button className="px-4 py-2 text-sm font-bold">
              Publicar
            </button>
            <button className="px-2 py-2 border-l border-black/10">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 pl-4 border-l border-newcom-border">
            <button className="w-8 h-8 rounded-full border border-newcom-border flex items-center justify-center text-newcom-text-sec hover:text-white transition-colors">
              <HelpCircle className="w-4 h-4" />
            </button>
            <img src="https://ui-avatars.com/api/?name=Admin&background=22C55E&color=fff" alt="User" className="w-8 h-8 rounded-full border border-newcom-border" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Toolbar */}
        <aside className="w-[280px] bg-[#0c1015] border-r border-newcom-border flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
          <div className="p-6 border-b border-newcom-border">
            <h3 className="text-[10px] font-bold text-white mb-4 uppercase tracking-[0.1em]">Adicionar elemento</h3>
            <p className="text-xs text-newcom-text-sec mb-4">Básicos</p>
            <div className="grid grid-cols-3 gap-2">
              <ToolButton icon={<Type strokeWidth={1.5} />} label="Texto" />
              <ToolButton icon={<ImageIcon strokeWidth={1.5} />} label="Imagem" />
              <ToolButton icon={<Video strokeWidth={1.5} />} label="Vídeo" />
              <ToolButton icon={<Box strokeWidth={1.5} />} label="Forma" />
              <ToolButton icon={<LayoutTemplate strokeWidth={1.5} />} label="Grupo" />
            </div>
          </div>
          
          <div className="p-6 border-b border-newcom-border">
            <p className="text-xs text-newcom-text-sec mb-4">Widgets</p>
            <div className="grid grid-cols-3 gap-2">
              <ToolButton icon={<Clock strokeWidth={1.5} />} label="Relógio" />
              <ToolButton icon={<CloudSun strokeWidth={1.5} />} label="Clima" />
              <ToolButton icon={<Globe strokeWidth={1.5} />} label="RSS" />
              <ToolButton icon={<Globe strokeWidth={1.5} />} label="Rede Social" />
              <ToolButton icon={<Box strokeWidth={1.5} />} label="QR Code" />
              <ToolButton icon={<Box strokeWidth={1.5} />} label="Contador" />
            </div>
          </div>

           <div className="p-6">
            <p className="text-xs text-newcom-text-sec mb-4">Outros</p>
            <div className="grid grid-cols-3 gap-2">
              <ToolButton icon={<Box strokeWidth={1.5} />} label="HTML" />
              <ToolButton icon={<Box strokeWidth={1.5} />} label="Power BI" />
              <ToolButton icon={<Box strokeWidth={1.5} />} label="YouTube" />
            </div>
          </div>
        </aside>

        {/* Center Canvas */}
        <main className="flex-1 flex flex-col relative overflow-hidden">
          <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
             {/* Canvas Container */}
             <div className="w-[960px] h-[540px] bg-zinc-900 shadow-2xl relative overflow-hidden group">
               {/* Background image mockup */}
               <img src="https://images.unsplash.com/photo-1515347619362-75fe7b4e76a0?w=1600&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
               
               {/* Elements on canvas */}
               <div className="absolute top-16 left-16 select-none cursor-move border-2 border-newcom-green/80 p-2 z-10">
                 <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-white border border-newcom-green rounded-full"></div>
                 <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-white border border-newcom-green rounded-full"></div>
                 <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-white border border-newcom-green rounded-full"></div>
                 <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-white border border-newcom-green rounded-full"></div>
                 
                 <div className="text-newcom-green font-serif text-6xl mb-[-30px] ml-4 font-medium italic opacity-90 tracking-tighter">verão</div>
                 <div className="text-white text-[120px] font-bold tracking-tighter leading-none">coleção</div>
                 <div className="text-newcom-green text-[72px] font-light tracking-widest mt-0 leading-none">2024</div>
                 
                 {/* Floating toolbar for selected element */}
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-newcom-surface/90 backdrop-blur-md border border-newcom-border rounded-lg shadow-xl flex items-center p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-newcom-border rounded text-white"><Type className="w-4 h-4" /></button>
                    <button className="p-2 hover:bg-newcom-border rounded text-newcom-text-sec hover:text-white"><Layers className="w-4 h-4" /></button>
                    <button className="p-2 hover:bg-newcom-border rounded text-newcom-text-sec hover:text-white"><Lock className="w-4 h-4" /></button>
                    <div className="w-px h-4 bg-newcom-border mx-1"></div>
                    <button className="p-2 hover:bg-red-500/20 rounded text-newcom-text-sec hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                 </div>
               </div>
               
               <div className="absolute bottom-24 left-16 text-newcom-text-sec text-2xl font-light">novas cores. novos encontros.</div>
               
               <div className="absolute bottom-8 left-16 border border-white/30 hover:border-white rounded-full px-8 py-3 text-sm uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-3">
                 confira agora <ArrowLeft className="w-4 h-4 rotate-180" />
               </div>
             </div>
          </div>
          
          {/* Zoom controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-newcom-surface border border-newcom-border rounded-full px-4 py-2.5 flex items-center gap-4 shadow-xl">
             <button className="text-newcom-text-sec hover:text-white"><Minus className="w-4 h-4" /></button>
             <span className="text-xs font-mono font-medium">100%</span>
             <button className="text-newcom-text-sec hover:text-white"><Plus className="w-4 h-4" /></button>
             <div className="w-px h-4 bg-newcom-border"></div>
             <button className="text-newcom-green"><ZoomIn className="w-4 h-4" /></button>
             <button className="text-newcom-text-sec hover:text-white"><Hand className="w-4 h-4" /></button>
             <button className="text-newcom-text-sec hover:text-white"><Monitor className="w-4 h-4" /></button>
          </div>
          
          {/* Bottom Timeline */}
          <div className="h-[140px] bg-newcom-bg border-t border-newcom-border shrink-0 flex items-center px-6 gap-4 overflow-x-auto custom-scrollbar">
            <button className="w-12 h-12 rounded-full bg-newcom-surface border border-newcom-border flex items-center justify-center shrink-0 hover:bg-newcom-border transition-colors group">
              <Play className="w-5 h-5 ml-1 text-white group-hover:text-newcom-green transition-colors" fill="currentColor" />
            </button>
            
            <SceneCard number="01" title="coleção" active />
            <SceneCard number="02" title="promoção" subtitle="30% OFF" imageIndex={2} />
            <SceneCard number="03" title="novidades" subtitle="que encantam" imageIndex={3} />
            <SceneCard number="04" title="estilo" subtitle="que conecta" imageIndex={4} />
            
            <button className="h-[90px] w-20 border-2 border-dashed border-newcom-border rounded-xl flex items-center justify-center text-newcom-text-sec hover:text-white hover:border-newcom-text-sec transition-colors shrink-0">
              <Plus className="w-6 h-6" />
            </button>
            
            <div className="ml-auto flex flex-col justify-center h-full px-4">
              <div className="text-[10px] text-newcom-text-sec mb-2 uppercase tracking-wider">Duração da cena</div>
              <div className="bg-[#0c1015] border border-newcom-border rounded-lg px-4 py-2 text-xs flex items-center justify-between gap-4 cursor-pointer hover:border-newcom-text-sec transition-colors">
                <span>00:10 s</span> <ChevronDown className="w-3 h-3 text-newcom-text-sec" />
              </div>
            </div>
          </div>
        </main>

        {/* Right Properties Panel */}
        <aside className="w-[340px] bg-[#0c1015] border-l border-newcom-border shrink-0 flex flex-col overflow-y-auto custom-scrollbar">
          <div className="flex border-b border-newcom-border">
            <button className="flex-1 py-4 text-xs font-medium border-b-2 border-newcom-green text-white">Propriedades</button>
            <button className="flex-1 py-4 text-xs font-medium border-b-2 border-transparent text-newcom-text-sec hover:text-white transition-colors">Estilo</button>
            <button className="flex-1 py-4 text-xs font-medium border-b-2 border-transparent text-newcom-text-sec hover:text-white transition-colors">Animação</button>
          </div>
          
          <div className="p-6 flex flex-col gap-5">
             <div className="flex items-center justify-between">
                <span className="text-xs text-newcom-text-sec">Fonte</span>
                <select className="bg-newcom-surface border border-newcom-border rounded-lg px-3 py-2 text-xs w-44 text-white outline-none focus:border-newcom-green appearance-none cursor-pointer">
                  <option>Poppins</option>
                  <option>Inter</option>
                  <option>Roboto</option>
                </select>
             </div>
             <div className="flex items-center justify-between">
                <span className="text-xs text-newcom-text-sec">Peso</span>
                <select className="bg-newcom-surface border border-newcom-border rounded-lg px-3 py-2 text-xs w-44 text-white outline-none focus:border-newcom-green appearance-none cursor-pointer">
                  <option>Semibold</option>
                  <option>Regular</option>
                  <option>Bold</option>
                </select>
             </div>
             <div className="flex items-center justify-between">
                <span className="text-xs text-newcom-text-sec">Tamanho</span>
                <div className="flex items-center bg-newcom-surface border border-newcom-border rounded-lg px-3 py-2 w-44">
                  <input type="text" value="128 px" className="bg-transparent w-full text-xs outline-none" readOnly />
                  <span className="text-newcom-text-sec text-xs cursor-pointer hover:text-white">×</span>
                </div>
             </div>
             
             <div className="flex items-center justify-between">
                <span className="text-xs text-newcom-text-sec">Cor</span>
                <div className="flex items-center justify-between bg-newcom-surface border border-newcom-border rounded-lg px-3 py-2 w-44">
                  <span className="text-xs">#FFFFFF</span>
                  <div className="w-4 h-4 rounded-[2px] bg-white border border-newcom-border"></div>
                </div>
             </div>
             
             <div className="flex items-center justify-between">
                <span className="text-xs text-newcom-text-sec">Alinhamento</span>
                <div className="flex items-center bg-newcom-surface border border-newcom-border rounded-lg w-44 overflow-hidden">
                  <button className="flex-1 py-1.5 flex justify-center text-white border-r border-newcom-border hover:bg-newcom-border bg-newcom-border/50"><AlignLeft className="w-4 h-4" /></button>
                  <button className="flex-1 py-1.5 flex justify-center text-newcom-text-sec border-r border-newcom-border hover:bg-newcom-border hover:text-white"><AlignCenter className="w-4 h-4" /></button>
                  <button className="flex-1 py-1.5 flex justify-center text-newcom-text-sec border-r border-newcom-border hover:bg-newcom-border hover:text-white"><AlignRight className="w-4 h-4" /></button>
                  <button className="flex-1 py-1.5 flex justify-center text-newcom-text-sec hover:bg-newcom-border hover:text-white"><AlignJustify className="w-4 h-4" /></button>
                </div>
             </div>
             
             <div className="flex items-center justify-between">
                <span className="text-xs text-newcom-text-sec">Espaçamento</span>
                <div className="flex items-center gap-2">
                  <input type="text" value="0" className="bg-newcom-surface border border-newcom-border rounded-lg px-3 py-2 w-16 text-xs text-center outline-none" readOnly />
                  <span className="text-xs text-newcom-text-sec">%</span>
                </div>
             </div>
             
             <div className="h-px bg-newcom-border my-2"></div>
             
             <div className="flex items-center justify-between">
                <span className="text-xs text-newcom-text-sec">Posição</span>
                <div className="flex gap-2">
                   <div className="flex items-center bg-newcom-surface border border-newcom-border rounded-lg px-2 py-1.5 w-20">
                     <span className="text-newcom-text-sec text-[10px] mr-2">X</span>
                     <input type="text" value="120" className="bg-transparent w-full text-xs outline-none" readOnly />
                   </div>
                   <div className="flex items-center bg-newcom-surface border border-newcom-border rounded-lg px-2 py-1.5 w-20">
                     <span className="text-newcom-text-sec text-[10px] mr-2">Y</span>
                     <input type="text" value="168" className="bg-transparent w-full text-xs outline-none" readOnly />
                   </div>
                </div>
             </div>
             
             <div className="flex items-center justify-between">
                <span className="text-xs text-newcom-text-sec">Tamanho</span>
                <div className="flex gap-2">
                   <div className="flex items-center bg-newcom-surface border border-newcom-border rounded-lg px-2 py-1.5 w-20">
                     <span className="text-newcom-text-sec text-[10px] mr-2">L</span>
                     <input type="text" value="860" className="bg-transparent w-full text-xs outline-none" readOnly />
                   </div>
                   <div className="flex items-center bg-newcom-surface border border-newcom-border rounded-lg px-2 py-1.5 w-20">
                     <span className="text-newcom-text-sec text-[10px] mr-2">A</span>
                     <input type="text" value="320" className="bg-transparent w-full text-xs outline-none" readOnly />
                   </div>
                </div>
             </div>
             
             <div className="flex items-center justify-between">
                <span className="text-xs text-newcom-text-sec">Rotação</span>
                <div className="flex items-center bg-newcom-surface border border-newcom-border rounded-lg px-3 py-1.5 w-24">
                  <input type="text" value="0°" className="bg-transparent w-full text-xs outline-none" readOnly />
                </div>
             </div>
             
             <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-newcom-text-sec">Opacidade</span>
                  <span className="text-xs font-medium">100%</span>
                </div>
                <div className="h-1.5 bg-newcom-border rounded-full overflow-hidden">
                  <div className="h-full bg-newcom-green w-full"></div>
                </div>
             </div>
          </div>
          
          {/* Layers Panel Snippet */}
          <div className="flex-1 border-t border-newcom-border mt-2">
             <div className="px-6 py-4 border-b border-newcom-border">
               <span className="text-[10px] font-bold uppercase tracking-wider">Camadas</span>
             </div>
             <div className="flex flex-col">
               <LayerItem icon={<ImageIcon className="w-3.5 h-3.5" />} name="Logo" />
               <LayerItem icon={<Type className="w-3.5 h-3.5" />} name="Título" active />
               <LayerItem icon={<Type className="w-3.5 h-3.5" />} name="Subtítulo" />
               <LayerItem icon={<Box className="w-3.5 h-3.5" />} name="Promoção" />
               <LayerItem icon={<ImageIcon className="w-3.5 h-3.5" />} name="Imagem" />
               <LayerItem icon={<Box className="w-3.5 h-3.5" />} name="Forma" />
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ToolButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 bg-[#11161A] border border-newcom-border rounded-xl hover:bg-newcom-border hover:text-white transition-colors text-newcom-text-sec py-4">
      <div className="text-current">{icon}</div>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

function SceneCard({ number, title, subtitle, active = false, imageIndex = 1 }: { number: string, title: string, subtitle?: string, active?: boolean, imageIndex?: number }) {
  const images = [
    "https://images.unsplash.com/photo-1515347619362-75fe7b4e76a0?w=200&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c028b?w=200&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&q=80"
  ];
  const imgSrc = images[(imageIndex - 1) % images.length];

  return (
    <div className={`h-[90px] w-48 rounded-xl flex overflow-hidden shrink-0 cursor-pointer transition-all border ${active ? 'border-newcom-green' : 'border-newcom-border opacity-60 hover:opacity-100 hover:border-newcom-text-sec'}`}>
      <div className="w-3/5 bg-zinc-900 p-3 relative overflow-hidden flex flex-col justify-between">
        <div className="text-[10px] text-newcom-text-sec">{number}</div>
        <div className="flex flex-col">
          <span className="text-sm font-bold leading-tight">{title}</span>
          {subtitle && <span className="text-[10px] text-newcom-green mt-0.5">{subtitle}</span>}
        </div>
      </div>
      <div className="w-2/5 bg-zinc-800 h-full relative border-l border-zinc-800">
         <img src={imgSrc} alt="" className="w-full h-full object-cover mix-blend-luminosity" />
      </div>
    </div>
  );
}

function LayerItem({ icon, name, active = false }: { icon: React.ReactNode, name: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-6 py-3 cursor-pointer text-sm ${active ? 'bg-[#151c19] text-newcom-green border-l-2 border-newcom-green' : 'text-newcom-text-sec hover:bg-newcom-surface border-l-2 border-transparent hover:text-white transition-colors'}`}>
      {icon}
      <span className="flex-1 font-medium">{name}</span>
    </div>
  );
}
