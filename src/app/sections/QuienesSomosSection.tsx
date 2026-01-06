"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function QuienesSomosSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background with Image */}
      <div className="absolute inset-0">
        <Image
          src="/quienesSomos/1.png"
          alt="Sobre Nosotros"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gs-base)]/98 via-[var(--gs-base)]/90 to-[var(--gs-base)]/60" />
      </div>

      {/* Subtle Glow */}
      <div className="glow-spotlight glow-br opacity-30" />

      {/* Content */}
      <div className="relative z-10 h-full min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl py-24">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="gs-subheading block mb-6"
            >
              Quienes Somos
            </motion.span>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gs-heading mb-10"
            >
              GlobalServ Jurídico
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed"
            >
              <p>
                Somos un despacho jurídico comprometido con la excelencia y la
                integridad en el ejercicio del derecho. Nuestra firma se
                distingue por brindar asesoría legal integral, estratégica y
                personalizada a empresas nacionales e internacionales.
              </p>
              <p>
                Con un enfoque multidisciplinario, combinamos experiencia,
                innovación y un profundo conocimiento del marco legal para
                ofrecer soluciones efectivas que protegen y potencian los
                intereses de nuestros clientes.
              </p>
              <p>
                Nuestro compromiso se fundamenta en valores sólidos:
                transparencia, profesionalismo, agilidad y un servicio de la más
                alta calidad que refleja nuestro compromiso inquebrantable con
                la excelencia jurídica.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
