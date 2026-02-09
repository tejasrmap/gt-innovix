
import React from 'react';
import Navbar from './components/Navbar';

const BentoBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bento-card p-6 md:p-8 rounded-[2rem] flex flex-col justify-between ${className}`}>
    {children}
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-24">
      <Navbar />

      <main className="container mx-auto px-6 pt-32 md:pt-48">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          <div className="md:col-span-8 bento-card p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#111113] to-[#0a0a0b] flex flex-col justify-center border-l-4 border-l-cyan-400 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/10 blur-[100px] rounded-full"></div>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full text-xs mono tracking-tighter border border-cyan-500/20">
                CURRENT_MODE: ELITE_WEB_DEVELOPMENT
              </span>
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.85] uppercase italic">
              Building Web <br />
              <span className="text-cyan-400">Future.</span>
            </h1>
            <p className="max-w-xl text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              GT Innovix is currently operating as a premier web development studio. We are strategically positioning ourselves for future multi-sector disruption.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-1 gap-6">
            <BentoBox className="bg-cyan-400 text-black border-none group cursor-default">
              <span className="mono text-[10px] font-bold uppercase tracking-widest opacity-60">Primary Sector</span>
              <div className="text-4xl font-bold mt-4 tracking-tighter uppercase">Web Tech</div>
              <p className="text-xs font-medium mt-4 opacity-80 italic">Delivering mission-critical digital architecture today.</p>
            </BentoBox>
            <BentoBox className="relative overflow-hidden group border-white/10">
              <span className="mono text-[10px] uppercase tracking-widest text-slate-500">Pipeline Sectors</span>
              <div className="grid grid-cols-2 gap-2 mt-6">
                {['Research', 'Logistics', 'Web-Development', 'IoT'].map(sector => (
                  <div key={sector} className="border border-white/5 bg-white/5 p-2 text-[10px] mono text-center uppercase tracking-tighter hover:bg-cyan-400 hover:text-black transition-all cursor-crosshair">
                    {sector}
                  </div>
                ))}
              </div>
            </BentoBox>
          </div>
        </div>

        {/* Current Services */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 scroll-mt-32">
          <div className="bento-card p-8 rounded-[2.5rem] border-cyan-400/10">
            <div className="text-cyan-400 mono text-xs mb-6 tracking-widest">[01] FULL_STACK</div>
            <h3 className="text-2xl font-bold mb-4 uppercase italic">Web Development</h3>
            <p className="text-slate-500 text-sm leading-relaxed">High-performance React/Next.js ecosystems powered by optimized backends. Our current core strength.</p>
          </div>
          <div className="bento-card p-8 rounded-[2.5rem] border-cyan-400/10">
            <div className="text-cyan-400 mono text-xs mb-6 tracking-widest">[02] DATA_INFRA</div>
            <h3 className="text-2xl font-bold mb-4 uppercase italic">Scale Systems</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Architecture designed to migrate. We build web platforms that can scale into enterprise industrial applications.</p>
          </div>
          <div className="bento-card p-8 rounded-[2.5rem] bg-white text-black border-none">
            <div className="text-black/40 mono text-xs mb-6 tracking-widest">[03] VENTURE_LOGIC</div>
            <h3 className="text-2xl font-bold mb-4 uppercase italic">Strategic Pivot</h3>
            <p className="text-black/60 text-sm leading-relaxed">Consulting on high-stakes market entry. Moving your digital asset from web-only to multi-channel industry disruption.</p>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="space-y-6 mb-24 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
            <div className="text-left">
              <span className="mono text-cyan-400 text-xs uppercase tracking-[0.4em] mb-4 block">The Organization</span>
              <h2 className="text-4xl font-bold tracking-tight uppercase italic">Founding Principles</h2>
            </div>
            <div className="mono text-[10px] text-slate-600 uppercase tracking-widest bg-white/5 px-4 py-2 border border-white/5 rounded-full">
              Established_v1.0.24 // Tokyo-SF Axis
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 bento-card p-10 rounded-[3rem] border-white/5 bg-gradient-to-br from-slate-900/50 to-transparent">
              <h3 className="text-2xl font-bold mb-6 uppercase italic tracking-tight">Our Origin</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                GT Innovix was founded by a collective of software architects and venture builders who realized that the gap between "web applications" and "industrial systems" was closing. 
              </p>
              <p className="text-slate-400 leading-relaxed">
                We don't just build sites; we engineer high-frequency digital environments. Every line of code written in our studio is a component for a larger, multi-sector machine.
              </p>
            </div>

            <div className="md:col-span-5 grid grid-cols-1 gap-6">
              <div className="bento-card p-8 rounded-[2.5rem] border-white/10 flex items-center gap-6">
                <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold mono">01</div>
                <div>
                  <h4 className="font-bold uppercase italic text-sm">Founding Partner</h4>
                  <p className="text-[10px] mono text-slate-500 uppercase tracking-tighter mt-1">Strategic Architecture</p>
                </div>
              </div>
              <div className="bento-card p-8 rounded-[2.5rem] border-white/10 flex items-center gap-6">
                <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold mono">02</div>
                <div>
                  <h4 className="font-bold uppercase italic text-sm">Chief of Tech</h4>
                  <p className="text-[10px] mono text-slate-500 uppercase tracking-tighter mt-1">Infrastructure Design</p>
                </div>
              </div>
              <div className="bento-card p-8 rounded-[2.5rem] border-white/10 flex items-center gap-6">
                <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold mono">03</div>
                <div>
                  <h4 className="font-bold uppercase italic text-sm">Lead Ops</h4>
                  <p className="text-[10px] mono text-slate-500 uppercase tracking-tighter mt-1">Market Penetration</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bento-card p-8 rounded-[2.5rem] hover:border-cyan-400/40">
              <h4 className="text-cyan-400 mono text-[10px] uppercase tracking-widest mb-4">Core Protocol</h4>
              <p className="text-sm text-slate-500 italic">Speed is our defensive moat. We ship mission-critical features in weeks, not months.</p>
            </div>
            <div className="md:col-span-4 bento-card p-8 rounded-[2.5rem] hover:border-cyan-400/40">
              <h4 className="text-cyan-400 mono text-[10px] uppercase tracking-widest mb-4">Elite Stack</h4>
              <p className="text-sm text-slate-500 italic">Next-gen paradigms. React, Rust, and AI orchestration layered for maximum resilience.</p>
            </div>
            <div className="md:col-span-4 bento-card p-8 rounded-[2.5rem] hover:border-cyan-400/40">
              <h4 className="text-cyan-400 mono text-[10px] uppercase tracking-widest mb-4">Growth Capital</h4>
              <p className="text-sm text-slate-500 italic">Beyond code. We provide the strategic framework for Series A readiness and market scale.</p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div id="vision" className="bento-card p-12 md:p-20 rounded-[4rem] text-center border-white/5 bg-gradient-to-b from-[#111113] to-transparent scroll-mt-32">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-8 uppercase italic">
            Expanding the <span className="text-cyan-400">Matrix.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-500 text-lg leading-relaxed mb-12">
            GT Innovix is more than a development shop. We are a digital engine designed to penetrate fragmented markets. Starting with web development, we are coding the foundation for a multi-sector future.
          </p>
          <div className="flex justify-center gap-12 text-slate-700 mono text-xs uppercase tracking-widest">
            <span>Phase_01: Web</span>
            <span className="text-cyan-400">Phase_02: Scaling</span>
            <span>Phase_03: Total_Market</span>
          </div>
        </div>
      </main>

      <footer className="mt-32 border-t border-white/5 pt-16 pb-12 bg-[#0a0a0b]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-black tracking-tighter text-cyan-400 uppercase italic mono mr-1">GT</span>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase italic">Innovix</span>
            </div>
            <p className="text-slate-600 text-[10px] mono uppercase tracking-widest">Digital Foundry // Multi-Sector Expansion Protocol</p>
          </div>
          <div className="flex gap-12 text-xs mono uppercase tracking-widest text-slate-500">
            <div className="flex flex-col gap-3">
              <span className="text-white">Active</span>
              <a href="#services" className="hover:text-cyan-400 transition-colors">Web_Dev</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Design</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white">Roadmap</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">IoT</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Research</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
