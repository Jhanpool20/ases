"use client";

import Reveal from "@/components/ui/Reveal";
import { faqData } from "@/data";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({
    q1: true,
  });

  const toggleQuestion = (id: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-20 md:py-24 bg-slate-50/60 border-t border-slate-100 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Encabezado */}
        <Reveal className="text-center mb-14 md:mb-18">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#e1251b] bg-rose-50 border border-rose-200/70 tracking-widest uppercase mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Resolvemos tus dudas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e1251b] to-rose-400 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg mx-auto max-w-xl">
            Todo lo que necesitas saber sobre nuestros procesos de asesoría y servicios integrales.
          </p>
        </Reveal>

        {/* Categorías y Preguntas */}
        <div className="space-y-10">
          {faqData.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3 px-2">
                <div className="w-8 h-8 rounded-lg bg-rose-100/70 text-[#e1251b] flex items-center justify-center font-bold text-sm">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="text-slate-900 text-xl font-bold tracking-tight">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-3">
                {category.questions.map((item) => {
                  const isOpen = !!openQuestions[item.id];
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-300 hover:border-rose-200 hover:shadow-md"
                    >
                      <button
                        type="button"
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:text-[#e1251b] transition-colors cursor-pointer"
                      >
                        <span className="text-base sm:text-lg pr-4 leading-snug">
                          {item.question}
                        </span>
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180 bg-rose-50 text-[#e1251b]" : ""
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
