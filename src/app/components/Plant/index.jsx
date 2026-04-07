import React from 'react';
import { motion } from 'framer-motion';

export const Plant = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="relative flex flex-col items-center -left-30 -bottom-4"
  >
    <div className="flex -space-x-2 -mb-2">
      <div className="w-6 h-10 bg-emerald-500 rounded-full rotate-[-25deg] shadow-sm" />
      <div className="w-8 h-12 bg-emerald-600 rounded-full shadow-sm z-10" />
      <div className="w-6 h-10 bg-emerald-500 rounded-full rotate-[25deg] shadow-sm" />
    </div>

    <div className="w-10 h-10 bg-orange-200 rounded-b-lg border-t-4 border-orange-300 shadow-md" />
  </motion.div>
);
