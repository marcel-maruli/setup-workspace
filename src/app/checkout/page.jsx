"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useApp } from "../context/AppContext";

const Checkout = () => {
  const { setup } = useApp();
  const router = useRouter();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-emerald-50 p-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-emerald-500 mb-4"
      >
        <CheckCircle2 size={80} />
      </motion.div>
      <h1 className="text-4xl font-black text-slate-800">
        Your Bali HQ is ready! 🌴
      </h1>
      <p className="text-slate-600 mt-2 max-w-md">
        The Monis team is prepping your setup. Check your email for delivery
        details.
      </p>
      <div className="border border-slate-300 rounded-lg p-6 mt-6 bg-white shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold text-slate-700">
          Your Setup Summary:
        </h2>
        <ul className="text-left mt-4 text-slate-600">
          <li>
            <strong>Desk:</strong> {setup.desk.name} (${setup.desk.price}/month)
          </li>
          <li>
            <strong>Chair:</strong> {setup.chair.name} (${setup.chair.price}/month)
          </li>
          {setup.addons.map((addon) => (
            <li key={addon.id}>
              <strong>{addon.name}:</strong> ${addon.price}/month
            </li>
          ))}
        </ul>

        <div className="mt-4 border-t border-slate-200 pt-4">
          <span className="text-lg font-bold text-slate-800">
            Total: $
            {setup.desk.price +
              setup.chair.price +
              setup.addons.reduce((sum, item) => sum + item.price, 0)}
            /month/setup
          </span>
        </div>
      </div>
      <button
        onClick={() => router.push("/")}
        className="mt-8 text-emerald-700 font-bold underline"
      >
        Build another one
      </button>
    </div>
  );
};

export default Checkout;
