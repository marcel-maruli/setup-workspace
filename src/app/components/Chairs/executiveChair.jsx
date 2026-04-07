import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/app/context/AppContext';


export const ExecutiveChair = ({ color = "#1e293b" }) => {
  const { setup } = useApp();
  
  return (
    <div className={`hover:opacity-100 absolute bottom-0 flex flex-col items-center ${setup.addons.find((a) => a.id === "monitor") ? "opacity-60" : "opacity-100"}`}>
    <motion.div
      initial={{ x: -150, opacity: 0, rotate: -5 }}
      animate={{ x: -10, opacity: 1, rotate: 0 }}
      exit={{ x: 50, opacity: 0 }}
      className="absolute bottom-0 z-30 flex flex-col items-center"
    >
       <div 
        className="w-12 h-8 rounded-t-lg shadow-inner mb-0.5" 
        style={{ backgroundColor: color, brightness: '0.8' }} 
      />
      
      <div 
        className="relative w-32 h-45 rounded-t-[3rem] rounded-b-lg border-x-4 border-t-4 border-slate-800 shadow-2xl overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="absolute bottom-8 left-0 right-0 h-4 bg-slate-900/40 blur-[1px]" />
      </div>

      <div className="absolute top-39 -left-1 w-5 h-12 bg-slate-800 rounded-lg shadow-md border-b-4 border-black/20" />
      <div className="absolute top-39 -right-1 w-5 h-12 bg-slate-800 rounded-lg shadow-md border-b-4 border-black/20" />

      <div 
        className="w-40 h-5 rounded-2xl -mt-2 shadow-2xl relative z-10 border-b-8 border-black/30"
        style={{ backgroundColor: color }}
      >
        <div className="absolute top-1 left-2 right-2 h-1 bg-white/10 rounded-full" />
      </div>

      <div className="w-4 h-10 bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700" />

      <div className="relative flex justify-center items-end h-6 w-32">
        <div className="absolute bottom-0 w-full h-2 bg-slate-900 rounded-full" />
        <div className="flex gap-8 z-20">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-4 h-4 bg-slate-950 rounded-full border-b-2 border-white/10" />
          ))}
        </div>
      </div>
    </motion.div>
    </div>
  );
};