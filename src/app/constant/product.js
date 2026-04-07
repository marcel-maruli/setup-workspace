import { Monitor, TreePine, Zap } from "lucide-react";

export const PRODUCTS = {
  desks: [
    {
      id: "minimal",
      name: "Rent Mechanical Adjustable Desk in Bali",
      price: 45,
      color: "#e5c9a6",
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2FMechanical_Adjustable_Desk_front_new_a83b8077b0.jpg&w=1920&q=75",
    },
    {
      id: "standing",
      name: "Rent Electrical Adjustable Desk in Bali",
      price: 85,
      color: "#2d3436",
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2Fdesk_titel_new_3db151d44c.jpg&w=1920&q=75",
    },
  ],
  chairs: [
    {
      id: "executive",
      name: "Executive Chair",
      color: "#c69874",
      price: 45,
      img: "https://images.unsplash.com/photo-1748752281174-d2996c867087?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=400",
    },
    {
      id: "ergonomic",
      name: "Ergonomic Office Chair",
      price: 28,
      color: "#2d3436",
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2Ffantech_oca259s_chair_6_b632a0c529.jpg&w=1920&q=75",
    },
  ],
  addons: [
    {
      id: "monitor",
      name: 'Rent 27" 4K Multimedia Monitor in Bali',
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2F27_4_K_A27_U_Multitasking_Monitor_1_ce29d15357.jpg&w=1920&q=75",
      price: 52,
      icon: <Monitor size={18} />,
    },
    {
      id: "plant",
      name: "Tropical Monstera",
      price: 10,
      icon: <TreePine size={18} />,
    },
    { id: "lamp", name: "Rent Smart LED Desk Lamp 1S in Bali", price: 12, icon: <Zap size={18} /> },
  ],
};
