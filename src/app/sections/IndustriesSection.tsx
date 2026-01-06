"use client";

import { motion } from "motion/react";

const industries = [
  {
    id: 1,
    name: "Energía",
    description: "Sector energético y renovable",
  },
  {
    id: 2,
    name: "Inmobiliaria",
    description: "Desarrollo y construcción",
  },
  {
    id: 3,
    name: "Manufactura",
    description: "Industria manufacturera",
  },
  {
    id: 4,
    name: "Tecnología",
    description: "Tecnología e innovación",
  },
  {
    id: 5,
    name: "Retail",
    description: "Comercio y distribución",
  },
  {
    id: 6,
    name: "Aviación",
    description: "Transporte aéreo",
  },
  {
    id: 7,
    name: "Salud",
    description: "Sector salud y farmacéutico",
  },
  {
    id: 8,
    name: "Educación",
    description: "Instituciones educativas",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function IndustriesSection() {
  return (
    <section className="relative w-full min-h-screen bg-[var(--gs-base)] py-24 md:py-32">
      {/* Ambient Glow */}
      <div className="glow-spotlight glow-center" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <span className="gs-subheading block mb-6">
            Industrias
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl gs-heading mb-6">
            Sectores que Atendemos
          </h2>
          <p className="text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed">
            Nuestra experiencia abarca diversos sectores, brindando asesoría
            legal especializada adaptada a las necesidades específicas de cada
            industria.
          </p>
        </motion.div>

        {/* Industries Grid - Minimalist */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {industries.map((industry, index) => (
            <motion.article
              key={industry.id}
              variants={itemVariants}
              className="group gs-card rounded-lg p-6 md:p-8 text-center"
            >
              {/* Number */}
              <span className="block text-3xl md:text-4xl font-extralight text-white/10 mb-4 group-hover:text-white/20 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              
              {/* Name */}
              <h3 className="text-lg md:text-xl gs-heading mb-2">
                {industry.name}
              </h3>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-[var(--gs-text-muted)] group-hover:text-[var(--gs-text-secondary)] transition-colors">
                {industry.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
