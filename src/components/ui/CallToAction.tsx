"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function CallToAction() {
  const path = usePathname();

  if (path === "/contacto") return null;

  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-[#200707] text-white">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-400 bg-rose-950/60 border border-rose-800/60 tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Asesoría Personalizada</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            ¿Listo para llevar tu proyecto al siguiente nivel?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Contacta con nuestros especialistas hoy mismo y recibe la orientación académica, legal o empresarial que necesitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e1251b] to-[#c71d14] hover:from-[#c71d14] hover:to-[#b3160f] text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl shadow-red-600/35 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Hablar con un asesor</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
