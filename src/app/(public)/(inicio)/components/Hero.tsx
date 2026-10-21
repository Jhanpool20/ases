"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -z-10 w-[550px] lg:w-[750px] h-[550px] lg:h-[750px] bg-gradient-to-bl from-rose-100/60 via-red-50/25 to-transparent rounded-full blur-3xl pointer-events-none opacity-80" />
      <div className="absolute top-1/2 left-0 -z-10 w-[350px] lg:w-[450px] h-[350px] lg:h-[450px] bg-gradient-to-tr from-amber-50/40 via-rose-50/20 to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Columna Izquierda: Información y CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#e1251b] bg-rose-50/90 border border-rose-200/70 tracking-widest uppercase mb-6 shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e1251b] animate-pulse" />
              <span>Consorcio de Asesores</span>
              <span className="text-rose-300">•</span>
              <span>Chiclayo</span>
            </motion.div>

            {/* Titular Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.1rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6"
            >
              El equipo profesional que tu proyecto{" "}
              <span className="font-serif italic font-normal text-[#e1251b] tracking-normal inline-block">
                necesita.
              </span>
            </motion.h1>

            {/* Subtítulo descriptivo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Tesis, asesoría legal, contable y marketing — en un solo lugar, con
              expertos que conocen tu realidad.
            </motion.p>

            {/* Botones de Acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/proyectos"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#e1251b] to-[#c71d14] hover:from-[#c71d14] hover:to-[#b3160f] text-white px-7 py-3.5 rounded-full text-base font-semibold shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-shadow duration-300"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Asesoría de Tesis</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/sobre-nosotros"
                  className="inline-flex items-center bg-white hover:bg-slate-50/80 text-slate-800 border border-slate-200/90 hover:border-slate-300 px-7 py-3.5 rounded-full text-base font-semibold shadow-xs hover:shadow transition-all duration-300"
                >
                  Quiénes somos
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Columna Derecha: Tarjeta Visual con Imagen y Badges Flotantes */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg lg:max-w-none mx-auto"
            >
              {/* Resplandor decorativo posterior */}
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-amber-500/10 rounded-[2.5rem] blur-xl opacity-75" />

              {/* Marco Contenedor */}
              <div className="relative p-2.5 sm:p-3 rounded-[2.2rem] sm:rounded-[2.6rem] bg-gradient-to-b from-white/95 via-white/70 to-white/95 shadow-2xl ring-1 ring-slate-900/5 backdrop-blur-sm">
                <div className="relative w-full aspect-[4/3] rounded-[1.8rem] sm:rounded-[2.1rem] overflow-hidden bg-slate-100 group">
                  <Image
                    src="/images/team-hero.webp"
                    alt="Equipo de asesores profesionales de Grupo ASES en Chiclayo"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Chip: Asesores en línea (Arriba a la derecha) */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-3 right-4 sm:-right-3 z-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 border border-white/80 text-xs sm:text-sm font-semibold text-slate-800"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span>Asesores en línea</span>
                </motion.div>

                {/* Floating Badge: +10 años de experiencia (Abajo a la izquierda) */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 z-10 flex items-center gap-3.5 p-3 sm:p-4 pr-5 sm:pr-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl shadow-black/10 border border-white/90"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#e1251b] to-[#b3160f] text-white flex items-center justify-center shadow-md shadow-red-600/30">
                    <TrendingUp className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-extrabold text-lg sm:text-xl tracking-tight leading-tight">
                      +10 años
                    </span>
                    <span className="text-slate-500 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                      DE EXPERIENCIA
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
