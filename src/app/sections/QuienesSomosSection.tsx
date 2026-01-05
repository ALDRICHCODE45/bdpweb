"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function QuienesSomosSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0">
        <Image
          src="/sobreNosotros.png"
          alt="Sobre Nosotros"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#1a3a4a]/95 via-[#1a3a4a]/90 to-transparent" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl h-full flex items-center">
          <div className="w-full lg:w-2/3 h-full flex flex-col justify-center pr-8 lg:pr-12">
            {/* Subtítulo */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-md tracking-[0.3em] text-slate-300 uppercase mb-4"
            >
              Quienes Somos
            </motion.span>

            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-tight mb-8"
            >
              GlobalServ Jurídico
            </motion.h2>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-base md:text-xl text-slate-300/90 leading-relaxed max-w-2xl"
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
                transparencia, profesionalismo, agilidad y un servicio de la
                más alta calidad que refleja nuestro compromiso inquebrantable
                con la excelencia jurídica.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

