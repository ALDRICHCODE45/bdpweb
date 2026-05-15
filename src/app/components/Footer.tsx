"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Áreas", href: "/areas" },
    { label: "Cultura", href: "/cultura" },
    { label: "Equipo", href: "/equipo" },
    { label: "Contacto", href: "/contacto" },
    { label: "Pro-Bono", href: "/pro-bono" },
  ];

  return (
    <footer className="relative w-full bg-[var(--gs-base)] border-t border-[var(--gs-border)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Link href="/">
                <Image
                  src="/logos/GlobalLogo.webp"
                  width={1832}
                  height={665}
                  alt="GlobalServ"
                  className="h-10 w-auto mb-6 opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-sm text-[var(--gs-text-muted)] leading-relaxed max-w-xs">
                Despacho jurídico comprometido con la excelencia y la integridad 
                en el ejercicio del derecho.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block text-xs tracking-[0.2em] uppercase text-[var(--gs-text-muted)] mb-6">
                Navegación
              </span>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--gs-text-secondary)] hover:text-[var(--gs-text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block text-xs tracking-[0.2em] uppercase text-[var(--gs-text-muted)] mb-6">
                Contacto
              </span>
              <div className="space-y-4">
                <p className="text-sm text-[var(--gs-text-secondary)]">
                  globalServ@gmail.com
                </p>
                <p className="text-sm text-[var(--gs-text-secondary)]">
                  (81) 2721.0080
                </p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="block text-xs tracking-[0.2em] uppercase text-[var(--gs-text-muted)] mb-6">
                Dirección
              </span>
              <address className="text-sm text-[var(--gs-text-secondary)] leading-relaxed not-italic">
                Av. de la Industria 300<br />
                Punto Central, Oficina 21<br />
                Colonia Veredalta<br />
                San Pedro Garza García, N.L.<br />
                CP. 66270
              </address>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--gs-border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--gs-text-muted)]">
              © {currentYear} GlobalServ Jurídico. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/contacto"
                className="text-xs text-[var(--gs-text-muted)] hover:text-[var(--gs-text-secondary)] transition-colors"
              >
                Aviso de Privacidad
              </Link>
              <Link
                href="/contacto"
                className="text-xs text-[var(--gs-text-muted)] hover:text-[var(--gs-text-secondary)] transition-colors"
              >
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
