"use client";

import Reveal from "@/components/ui/Reveal";
import { BookOpen, Target, Rocket } from "lucide-react";

function HistoryMissionVision() {
  return (
    <section id="nosotros" className="py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <Reveal className="text-center mb-14 md:mb-18">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#e1251b] bg-rose-50 border border-rose-200/70 tracking-widest uppercase mb-4">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Nuestra Compañía
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e1251b] to-rose-400 mx-auto rounded-full"></div>
        </Reveal>

        {/* Historia Card */}
        <Reveal className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-slate-200/50 border border-slate-100 mb-8 transition-all duration-300 hover:shadow-xl hover:border-slate-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#e1251b] flex items-center justify-center border border-rose-100 shadow-xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500">Trayectoria</span>
              <h3 className="text-slate-900 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Nuestra Historia
              </h3>
            </div>
          </div>
          <div className="w-16 h-0.5 bg-[#e1251b] mb-5 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Grupo Ases nació con el firme propósito de brindar soluciones integrales en asesoría académica de tesis, asistencia legal, consultoría contable y estrategias digitales. Con un equipo de profesionales multidisciplinarios de excelencia en Chiclayo y el norte del Perú, guiamos con éxito a cada persona y organización en sus metas y proyectos.
          </p>
        </Reveal>

        {/* Misión & Visión Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <Reveal
            direction="left"
            offset={30}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-slate-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#e1251b] flex items-center justify-center border border-rose-100 shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-500">Propósito</span>
                <h3 className="text-slate-900 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Misión
                </h3>
              </div>
            </div>
            <div className="w-16 h-0.5 bg-[#e1251b] mb-5 rounded-full"></div>
            <p className="text-slate-600 text-base leading-relaxed">
              Impulsar el crecimiento y desarrollo regional mediante la asesoría académica, legal y empresarial estratégica, ofreciendo soluciones integrales de alto impacto con un enfoque humano, colaborativo, ético y riguroso.
            </p>
          </Reveal>

          {/* Visión */}
          <Reveal
            direction="right"
            offset={30}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-slate-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#e1251b] flex items-center justify-center border border-rose-100 shadow-xs">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-500">Futuro</span>
                <h3 className="text-slate-900 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Visión
                </h3>
              </div>
            </div>
            <div className="w-16 h-0.5 bg-[#e1251b] mb-5 rounded-full"></div>
            <p className="text-slate-600 text-base leading-relaxed">
              Consolidarnos como el consorcio de asesoría y consultoría referente en el Perú, reconocido por la excelencia en investigación, seguridad legal y transformación digital que impulsa a profesionales y emprendedores al siguiente nivel.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default HistoryMissionVision;
