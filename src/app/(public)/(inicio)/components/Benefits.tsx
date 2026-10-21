"use client";

import Reveal from "@/components/ui/Reveal";
import { benefits } from "../index";
import { motion } from "framer-motion";

function Benefits() {
  return (
    <section className="py-20 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <Reveal className="text-center mb-14 md:mb-18">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#e1251b] bg-rose-50 border border-rose-200/70 tracking-widest uppercase mb-4">
            Valores & Diferenciales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Por qué elegirnos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e1251b] to-rose-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Combinamos experiencia, rigor metodológico y compromiso humano para garantizar resultados excepcionales.
          </p>
        </Reveal>

        {/* Grid de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group p-8 rounded-3xl bg-slate-50/70 border border-slate-200/70 shadow-xs hover:shadow-xl hover:bg-white hover:border-rose-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#e1251b] flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-[#e1251b] group-hover:text-white transition-all duration-300">
                  <div className="scale-75 origin-center">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#e1251b] transition-colors duration-200 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
