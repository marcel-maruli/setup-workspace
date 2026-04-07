import React from 'react';
import { motion } from 'framer-motion';

export const Monitor = () => (
  <motion.div 
    initial={{ y: -20, opacity: 0 }} 
    animate={{ y: 0, opacity: 1 }}
    className="relative flex flex-col items-center"
  >
    <div className="w-40 h-24 bg-slate-900 rounded-lg border-[3px] border-slate-800 shadow-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
      <div className="absolute top-2 left-2 w-12 h-1 bg-white/10 rounded-full" />
    </div>
    <div className="w-2 h-6 bg-slate-700" />
    <div className="w-16 h-2 bg-slate-800 rounded-full shadow-md" />
  </motion.div>
);