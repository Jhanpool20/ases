"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function BtnWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Conversamos por WhatsApp?
      </span>

      <motion.a
        href="https://wa.me/51975733304"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Grupo Ases"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-xl shadow-emerald-500/30 flex items-center justify-center hover:bg-[#20bd5a] transition-colors duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10"></span>
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
      </motion.a>
    </div>
  );
}

export default BtnWhatsapp;
