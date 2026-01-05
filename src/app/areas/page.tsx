"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { practiceAreas } from "@/lib/practiceAreas";
import { Footer } from "../components/Footer";

export default function AreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a4a] to-slate-900" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-md tracking-[0.3em] text-slate-300 uppercase mb-4 block"
            >
              Servicios
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-tight mb-6"
            >
              Áreas de Práctica
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed"
            >
              Ofrecemos asesoría legal integral en múltiples áreas del derecho,
              adaptada a las necesidades específicas de cada cliente.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid de Áreas */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 via-[#1a3a4a] to-slate-900 py-20 md:py-32">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300"
              >
                {/* Imagen */}
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/90 via-[#1a3a4a]/50 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-light text-slate-100 mb-4 tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-300/90 leading-relaxed line-clamp-4">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

