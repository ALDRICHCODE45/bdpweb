"use client";

import { motion } from "motion/react";
import { Footer } from "../components/Footer";

const teamStructure = [
  {
    id: 1,
    title: "Socios",
    description:
      "Líderes con amplia experiencia y visión estratégica que guían nuestro despacho hacia la excelencia.",
  },
  {
    id: 2,
    title: "Asociados",
    description:
      "Abogados especializados en diversas áreas del derecho, aportando conocimiento profundo y experiencia práctica.",
  },
  {
    id: 3,
    title: "Colaboradores",
    description:
      "Profesionales en formación y personal de apoyo que contribuyen al éxito de cada proyecto.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function EquipoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[var(--gs-base)]" />
        <div className="glow-spotlight glow-tl" />
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="gs-subheading block mb-6"
              >
                Nuestro Equipo
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gs-heading mb-8"
              >
                Profesionales Dedicados
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed max-w-xl"
              >
                Un equipo multidisciplinario de abogados especializados,
                comprometidos con la excelencia y el éxito de nuestros clientes.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-center" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20"
          >
            {teamStructure.map((item, index) => (
              <motion.article
                key={item.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Vertical Line Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--gs-border)] group-hover:bg-[var(--gs-accent)] transition-colors duration-500" />
                
                <div className="pl-8 py-4">
                  {/* Number */}
                  <span className="block text-xs tracking-[0.2em] text-[var(--gs-text-muted)] mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl gs-heading mb-4">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-[var(--gs-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Compromiso Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="gs-card rounded-lg p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl gs-heading mb-8 text-center">
                Nuestro Compromiso
              </h2>
              
              <div className="space-y-6 text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed">
                <p>
                  Nuestro equipo está formado por profesionales altamente
                  calificados que comparten un compromiso común: brindar asesoría
                  legal de la más alta calidad. Cada miembro aporta su experiencia
                  única y especialización, trabajando en conjunto para ofrecer
                  soluciones integrales y efectivas.
                </p>
                <p>
                  Creemos en el desarrollo continuo, la colaboración y el
                  compromiso con nuestros clientes. Nuestro equipo está
                  preparado para enfrentar los desafíos más complejos y
                  proporcionar el mejor servicio posible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
