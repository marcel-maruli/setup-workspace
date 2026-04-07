"use client"; 

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [setup, setSetup] = useState({
    desk: {
      id: "minimal",
      name: "Rent Mechanical Adjustable Desk in Bali",
      price: 45,
      color: "#e5c9a6",
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2FMechanical_Adjustable_Desk_front_new_a83b8077b0.jpg&w=1920&q=75",
    },
    chair:  {
      id: "executive",
      name: "Executive Chair",
      color: "#c69874",
      price: 30,
      img: "https://images.unsplash.com/photo-1748752281174-d2996c867087?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=400",
    },
    addons: []
  });

  return (
    <AppContext.Provider value={{ setup, setSetup }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);