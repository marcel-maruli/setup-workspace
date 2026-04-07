import React from "react";
import { motion } from "framer-motion";

export const Lamp = ({ mainColor = "#c69874", accentColor = "#ef4444" }) => {
  return (
    <motion.div
      initial={{ x: 40, opacity: 0, rotate: 15 }}
      animate={{ x: 0, opacity: 1, rotate: 0 }}
      className="absolute flex flex-col items-center right-20 bottom-25"
    >
      <div className="absolute top-0.5 left-0 w-28 h-56 bg-yellow-100/10 blur-[30px] rounded-r-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      <svg
        width="100"
        height="140"
        viewBox="0 0 100 140"
        fill="none"
        className="drop-shadow-sm"
      >
        <rect x="58" y="110" width="22" height="4" rx="2" fill={mainColor} />
        <rect x="68" y="112" width="2" height="2" fill="#d1d5db" /> {/* Dial */}
        <rect x="68" y="24" width="2.2" height="86" rx="1.1" fill={mainColor} />
        <rect x="2" y="22" width="70" height="2.2" rx="1.1" fill={mainColor} />
        <path
          d="M 69.5 24 Q 78 26, 78 21.5 L 68 22"
          stroke={accentColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          className="drop-shadow-sm"
        />
        <circle cx="69.1" cy="23.1" r="1.1" fill="#bbb" />
      </svg>
    </motion.div>
  );
};
