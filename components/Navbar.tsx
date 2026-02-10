
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <span className="text-2xl font-black tracking-tighter text-cyan-400 uppercase italic mono mr-1 group-hover:text-white transition-colors">GT</span>
          <span className="text-2xl font-bold tracking-tighter text-white uppercase italic group-hover:text-cyan-400 transition-colors">InnoX</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium mono uppercase tracking-widest text-slate-400">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#vision" className="hover:text-cyan-400 transition-colors">Vision</a>
          <button className="bg-cyan-400 text-black px-6 py-2 transition-all font-bold hover:bg-white hover:scale-105 active:scale-95 border border-cyan-400">
            GET_STARTED
          </button>
        </div>

        <button className="md:hidden text-cyan-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
