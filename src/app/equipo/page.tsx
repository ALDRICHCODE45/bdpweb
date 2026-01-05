"use client";

import { motion } from "motion/react";
import { Footer } from "../components/Footer";
import { Users, Briefcase, GraduationCap } from "lucide-react";

export default function EquipoPage() {
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
              Nuestro Equipo
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-tight mb-6"
            >
              Profesionales Dedicados
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed"
            >
              Un equipo multidisciplinario de abogados especializados,
              comprometidos con la excelencia y el éxito de nuestros clientes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sección de Estructura del Equipo */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 via-[#1a3a4a] to-slate-900 py-20 md:py-32">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center">
                <Users className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-light text-slate-100 mb-4">
                Socios
              </h3>
              <p className="text-base text-slate-300/90 leading-relaxed">
                Líderes con amplia experiencia y visión estratégica que guían
                nuestro despacho hacia la excelencia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-light text-slate-100 mb-4">
                Asociados
              </h3>
              <p className="text-base text-slate-300/90 leading-relaxed">
                Abogados especializados en diversas áreas del derecho, aportando
                conocimiento profundo y experiencia práctica.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-light text-slate-100 mb-4">
                Colaboradores
              </h3>
              <p className="text-base text-slate-300/90 leading-relaxed">
                Profesionales en formación y personal de apoyo que contribuyen
                al éxito de cada proyecto.
              </p>
            </motion.div>
          </div>

          {/* Mensaje sobre el equipo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-100 mb-6 tracking-tight">
                Nuestro Compromiso
              </h2>
              <p className="text-base md:text-lg text-slate-300/90 leading-relaxed mb-6">
                Nuestro equipo está formado por profesionales altamente
                calificados que comparten un compromiso común: brindar asesoría
                legal de la más alta calidad. Cada miembro aporta su experiencia
                única y especialización, trabajando en conjunto para ofrecer
                soluciones integrales y efectivas.
              </p>
              <p className="text-base md:text-lg text-slate-300/90 leading-relaxed">
                Creemos en el desarrollo continuo, la colaboración y el
                compromiso con nuestros clientes. Nuestro equipo está
                preparado para enfrentar los desafíos más complejos y
                proporcionar el mejor servicio posible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

