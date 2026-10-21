import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Info Brand */}
          <div className="space-y-4">
            <div className="relative w-[160px] h-[45px] brightness-0 invert opacity-90">
              <Image
                src="/images/ases.png"
                alt="Grupo ASES"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Consorcio de asesores multidisciplinarios en Chiclayo y norte del Perú. Asesoría integral de tesis, soporte legal, contable y empresarial.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.facebook.com/grupoasesperu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#e1251b] hover:border-[#e1251b] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/grupoases.holding/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#e1251b] hover:border-[#e1251b] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-5">
              Enlaces Rápidos
            </h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link
                href="/"
                className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                Inicio
              </Link>
              <Link
                href="/proyectos"
                className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                Asesoría de Tesis
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                Contacto & Ubicación
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-5">
              Contacto
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <a
                href="mailto:info@grupoases.pe"
                className="text-slate-400 hover:text-white transition-colors flex items-center space-x-3 group"
              >
                <Mail size={16} className="text-[#e1251b] group-hover:scale-110 transition-transform" />
                <span>info@grupoases.pe</span>
              </a>
              <a
                href="tel:+51975733304"
                className="text-slate-400 hover:text-white transition-colors flex items-center space-x-3 group"
              >
                <Phone size={16} className="text-[#e1251b] group-hover:scale-110 transition-transform" />
                <span>+51 975 733 304</span>
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h3 className="text-white text-base font-bold uppercase tracking-wider mb-5">
              Ubicación
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <p className="text-slate-400 flex items-start space-x-3">
                <MapPin size={18} className="text-[#e1251b] flex-shrink-0 mt-0.5" />
                <span>Lora y Cordero 610, Chiclayo, Perú</span>
              </p>
              <a
                href="https://www.google.com/maps/place/Lora+y+Cordero+610,+Chiclayo+14001/@-6.7697124,-79.8437274,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300 hover:underline pt-1"
              >
                Ver en Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Copyright y Créditos */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Grupo Ases. Todos los derechos reservados.
          </p>
          <p className="text-slate-400">
            Desarrollado por <span className="text-white font-medium">Jhanpool Chicoma Neira</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
