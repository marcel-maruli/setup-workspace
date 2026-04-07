"use client";
import React, {  useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  ShoppingCart } from "lucide-react";
import { CommonChair } from "./components/Chairs/commonChair";
import { Monitor as MonitorPreview } from "./components/Monitor";
import { ExecutiveChair } from "./components/Chairs/executiveChair";
import { Plant } from "./components/Plant";
import { Lamp } from "./components/Lamp";
import { useRouter } from "next/navigation";
import { useApp } from "./context/AppContext";
import { PRODUCTS } from "./constant/product";


export default function WorkspaceBuilder() {
  const { setup, setSetup } = useApp();
  const router = useRouter();

  const totalPrice = useMemo(() => {
    const addonPrice = setup.addons.reduce((sum, item) => sum + item.price, 0);
    return setup.desk.price + setup.chair.price + addonPrice;
  }, [setup]);

  const toggleAddon = (item) => {
    setSetup((prev) => ({
      ...prev,
      addons: prev.addons.find((a) => a.id === item.id)
        ? prev.addons.filter((a) => a.id !== item.id)
        : [...prev.addons, item],
    }));
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <main className="flex flex-col lg:flex-row h-screen bg-slate-100 font-sans text-slate-900">
      <section className="flex-1 relative flex flex-col items-center justify-center p-8 overflow-hidden">
        <div className="absolute top-8 left-8">
          <h2 className="text-xs font-black tracking-widest text-slate-400 uppercase">
            Monis.rent // Live Preview
          </h2>
        </div>

        <div className="relative w-full max-w-2xl aspect-video bg-white rounded-[2rem] shadow-2xl border-b-8 border-slate-200 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={setup.desk.id}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="absolute bottom-20 w-4/5 h-12 rounded-lg shadow-xl"
              style={{ backgroundColor: setup.desk.color }}
            >
              <div className="absolute top-full left-4 w-2 h-24 bg-slate-800 opacity-20" />
              <div className="absolute top-full right-4 w-2 h-24 bg-slate-800 opacity-20" />
            </motion.div>

            {setup.addons.filter((a) => a.id === "plant").length > 0 && (
              <Plant key="plant" />
            )}

            {setup.addons.filter((a) => a.id === "lamp").length > 0 && (
              <Lamp key="lamp" />
            )}
            {setup.addons.filter((a) => a.id === "monitor").length > 0 && (
              <MonitorPreview key="monitor" />
            )}

            {setup.chair.id === "executive" ? (
              <ExecutiveChair key="ergo" color={setup.chair.color} />
            ) : (
              <CommonChair key="basic" color={setup.chair.color} />
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-baseline gap-2">
          <span className="text-5xl font-black text-indigo-600">
            ${totalPrice}
          </span>
          <span className="text-slate-400 font-medium">/ month</span>
        </div>
      </section>

      <aside className="w-full lg:w-[400px] bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.05)] p-8 overflow-y-auto z-30">
        <header className="mb-10">
          <h1 className="text-3xl font-black italic tracking-tighter text-slate-800">
            BUILD YOUR HQ.
          </h1>
        </header>

        <div className="mb-8">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 block">
            1. The Foundation (Desk)
          </label>
          <div className="space-y-3">
            {PRODUCTS.desks.map((d) => (
              <button
                key={d.id}
                onClick={() => setSetup({ ...setup, desk: d })}
                className={`w-full flex items-center p-4 rounded-xl border-2 transition-all ${setup.desk.id === d.id ? "border-indigo-500 bg-indigo-50" : "border-slate-100 hover:border-slate-200"}`}
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 mr-4 overflow-hidden">
                  <img src={d.img} className="object-cover h-full" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-sm">{d.name}</p>
                  <p className="text-xs text-slate-500">+${d.price}/mo</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Category: Chairs */}
        <div className="mb-8">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 block">
            2. The Foundation (Desk)
          </label>
          <div className="space-y-3">
            {PRODUCTS.chairs.map((d) => (
              <button
                key={d.id}
                onClick={() => setSetup({ ...setup, chair: d })}
                className={`w-full flex items-center p-4 rounded-xl border-2 transition-all ${setup.chair.id === d.id ? "border-indigo-500 bg-indigo-50" : "border-slate-100 hover:border-slate-200"}`}
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 mr-4 overflow-hidden">
                  <img src={d.img} className="object-cover h-full" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-sm">{d.name}</p>
                  <p className="text-xs text-slate-500">+${d.price}/mo</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 block">
            3. Optimize (Add-ons)
          </label>
          <div className="grid grid-cols-3 gap-2">
            {PRODUCTS.addons.map((a) => (
              <button
                key={a.id}
                onClick={() => toggleAddon(a)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${setup.addons.find((x) => x.id === a.id) ? "border-indigo-500 bg-indigo-50 text-indigo-600" : "border-slate-100 text-slate-400"}`}
              >
                {a.icon}
                <span className="text-[10px] font-bold mt-2 uppercase">
                  {a.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-indigo-600 hover:-translate-y-1 transition-all active:scale-95 shadow-xl shadow-indigo-200"
        >
          <ShoppingCart size={20} />
          RENT THIS SETUP
        </button>

        <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest">
          Free delivery within Denpasar & Canggu
        </p>
      </aside>
    </main>
  );
}
