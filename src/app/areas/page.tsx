"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { practiceAreas } from "@/lib/practiceAreas";
import { Footer } from "../components/Footer";

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

export default function AreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] overflow-hidden flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--gs-base)]" />

        {/* Subtle Glow Effects */}
        <div className="glow-spotlight glow-tl" />
        <div className="glow-spotlight glow-br opacity-30" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="gs-subheading block mb-6"
              >
                Servicios Legales
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gs-heading mb-8"
              >
                Áreas de Práctica
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed max-w-xl"
              >
                Asesoría legal integral en múltiples áreas del derecho, adaptada
                a las necesidades específicas de cada cliente.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Áreas */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        {/* Ambient Glow */}
        <div className="glow-spotlight glow-center" />

        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {practiceAreas.map((area, index) => (
              <motion.article
                key={area.id}
                variants={itemVariants}
                className="group gs-card rounded-lg overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--gs-base)] via-[var(--gs-base)]/60 to-transparent" />

                  {/* Number Indicator */}
                  <div className="absolute top-6 left-6">
                    <span className="text-xs tracking-[0.2em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl gs-heading mb-4 group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--gs-text-secondary)] leading-relaxed line-clamp-3">
                    {area.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
