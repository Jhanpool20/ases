"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import ContactForm from "../../contacto/components/form/ContactForm";
import Reveal from "@/components/ui/Reveal";

function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-24 bg-white relative scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-14 md:mb-18">
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#e1251b] bg-rose-50 border border-rose-200/70 tracking-widest uppercase mb-4">
            Comunícate Con Nosotros
          </Reveal>
          <Reveal className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            ¿Hablamos sobre tu proyecto?
          </Reveal>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e1251b] to-rose-400 mx-auto rounded-full mb-6"></div>
          <Reveal className="text-slate-600 text-base sm:text-lg mx-auto max-w-xl">
            Estamos aquí para orientarte. Completa el formulario y un asesor especializado te contactará en breve.
          </Reveal>
        </div>

        {/* Contenedor del Formulario */}
        <div className="max-w-5xl mx-auto">
          <Reveal className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Información de contacto */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#e1251b] via-[#c71d14] to-[#a3140d] text-white p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
                    Información de contacto
                  </h3>
                  <p className="text-rose-100 text-sm mb-8 leading-relaxed">
                    Visítanos en nuestra oficina central o comunícate por nuestros canales digitales.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/15 p-2.5 rounded-xl backdrop-blur-xs">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold tracking-wider text-rose-200">
                          Correo electrónico
                        </p>
                        <a
                          href="mailto:info@grupoases.pe"
                          className="hover:underline font-medium text-sm sm:text-base"
                        >
                          info@grupoases.pe
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/15 p-2.5 rounded-xl backdrop-blur-xs">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold tracking-wider text-rose-200">
                          Teléfono
                        </p>
                        <a
                          href="tel:+51975733304"
                          className="hover:underline font-medium text-sm sm:text-base"
                        >
                          +51 975 733 304
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/15 p-2.5 rounded-xl backdrop-blur-xs">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold tracking-wider text-rose-200">
                          Ubicación
                        </p>
                        <p className="font-medium text-sm sm:text-base">
                          Lora y Cordero 610, Chiclayo, Perú
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/20">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-rose-200 mb-4">
                    Síguenos en redes
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.facebook.com/grupoasesperu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/15 hover:bg-white text-white hover:text-[#e1251b] transition-all duration-200 p-2.5 rounded-full"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/grupoases.holding/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/15 hover:bg-white text-white hover:text-[#e1251b] transition-all duration-200 p-2.5 rounded-full"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://wa.me/51975733304"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/15 hover:bg-white text-white hover:text-[#e1251b] transition-all duration-200 p-2.5 rounded-full"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulario */}
              <div className="md:col-span-3 p-6 sm:p-8 md:p-10 bg-white flex flex-col justify-center">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
