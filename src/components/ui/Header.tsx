"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Asesoría de Tesis", href: "/proyectos" },
  { name: "Nosotros", href: "/sobre-nosotros" },
  { name: "Ubicación", href: "/contacto" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  const isActive = (href: string) => {
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2.5"
          : "bg-white/80 backdrop-blur-md border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="relative w-[150px] sm:w-[175px] h-[40px] sm:h-[46px]">
            <Image
              src="/images/ases.png"
              alt="Grupo ASES - Consorcio de Asesores"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1.5 bg-slate-50/70 p-1 rounded-full border border-slate-200/60 shadow-xs">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                  active
                    ? "bg-rose-50 text-[#e1251b] shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button: Escríbenos */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href="https://wa.me/51975733304"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e1251b] to-[#c71d14] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/35 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Escríbenos</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl overflow-hidden px-5 py-4"
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      active
                        ? "bg-rose-50 text-[#e1251b]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="pt-2">
                <a
                  href="https://wa.me/51975733304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#e1251b] to-[#c71d14] text-white py-3 rounded-full font-semibold shadow-md shadow-red-600/25 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Escríbenos por WhatsApp</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
