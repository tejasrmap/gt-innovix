
import React, { useState } from 'react';
import { generateExpansionStrategy } from '../services/geminiService';
import { ExpansionStrategy } from '../types';

const InnovixAI: React.FC = () => {
  const [project, setProject] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<ExpansionStrategy | null>(null);

  const handleExpansion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project.trim()) return;
    setLoading(true);
    try {
      const result = await generateExpansionStrategy(project);
      setStrategy(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-8" id="ai-strategist">
      <div className="bento-card p-6 md:p-10 rounded-[2rem] border-2 border-cyan-400/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-3xl rounded-full"></div>
        <div className="flex flex-col md:flex-row gap-6 items-center mb-10 relative z-10">
          <div className="flex items-center">
            <span className="text-3xl font-black tracking-tighter text-cyan-400 uppercase italic mono mr-1">GT</span>
            <span className="text-3xl font-bold tracking-tighter text-white uppercase italic">Innovix</span>
          </div>
          <div className="w-px h-10 bg-slate-800 hidden md:block"></div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight uppercase italic text-slate-300">Expansion Architect</h2>
            <p className="text-slate-500 mono text-[10px] mt-0.5 uppercase tracking-[0.2em]">Scale Framework Protocol</p>
          </div>
        </div>

        <form onSubmit={handleExpansion} className="flex flex-col md:flex-row gap-4 relative z-10">
          <input 
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="What web project are we scaling today?"
            className="flex-1 bg-[#0a0a0b] border border-slate-800 rounded-none px-6 py-4 focus:border-cyan-400 outline-none transition-all text-white font-medium mono text-sm uppercase placeholder:text-slate-700"
          />
          <button 
            disabled={loading}
            className="bg-cyan-400 hover:bg-white text-black font-bold px-10 py-4 rounded-none transition-all disabled:opacity-50 mono text-sm border border-cyan-400"
          >
            {loading ? 'CALCULATING_TRAJECTORY...' : 'GENERATE_ROADMAP'}
          </button>
        </form>
      </div>

      {strategy && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="md:col-span-12 bento-card p-8 rounded-[2rem] bg-gradient-to-r from-cyan-400/10 to-transparent">
             <div className="flex items-center gap-4 mb-4">
                <span className="bg-cyan-400 text-black px-3 py-1 text-[10px] font-bold mono">ACTIVE_CORE</span>
                <h3 className="text-xl font-bold tracking-tight uppercase italic">Current Capability: {strategy.currentCore}</h3>
             </div>
          </div>

          <div className="md:col-span-7 bento-card p-8 rounded-[2.5rem]">
            <span className="mono text-cyan-400 text-[10px] uppercase tracking-[0.2em] mb-6 block">Target Sector: {strategy.expansionSector}</span>
            <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase">The Pivot Strategy</h4>
            <p className="text-slate-400 leading-relaxed text-sm">{strategy.pivotStrategy}</p>
          </div>
          
          <div className="md:col-span-5 bento-card p-8 rounded-[2.5rem] border-white/10">
            <span className="mono text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-6 block">Future Outlook</span>
            <p className="text-slate-200 font-medium italic leading-relaxed">"{strategy.longTermVision}"</p>
          </div>

          <div className="md:col-span-12 bento-card p-8 rounded-[2.5rem]">
            <span className="mono text-cyan-400 text-[10px] uppercase tracking-[0.2em] mb-6 block">Infrastructure Expansion Requirements</span>
            <div className="flex flex-wrap gap-3">
              {strategy.techRequirements.map((req, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 text-xs font-bold mono text-slate-400">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  {req}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnovixAI;
