import React from "react";
import { motion } from "framer-motion";
import { useApp } from "@/app/context/AppContext";

export const CommonChair = ({ color = "#2d3436" }) => {
    const { setup } = useApp();
  
  return (
    <div className={`hover:opacity-100 absolute bottom-0 flex flex-col items-center ${setup.addons.find((a) => a.id === "monitor") ? "opacity-60" : "opacity-100"}`}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: -10, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        className="absolute bottom-0 z-30 flex flex-col items-center"
      >
        <div
          className="w-12 h-8 rounded-t-lg shadow-inner mb-1"
          style={{ backgroundColor: color, brightness: "0.8" }}
        />

        <div
          className="w-35 h-40 rounded-xl shadow-lg border-r-4 border-black/10 relative"
          style={{ backgroundColor: color }}
        >
          <div className="absolute bottom-6 left-0 right-0 h-1 bg-black/20" />
        </div>

        <div
          className="w-40 h-12 rounded-lg -mt-2 shadow-2xl border-b-4 border-black/20"
          style={{ backgroundColor: color }}
        />

        <div className="w-2 h-12 bg-slate-800" />
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-2 bg-slate-900 rounded-full" />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
