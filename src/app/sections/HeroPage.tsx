"use client";

import { motion } from "motion/react";
import { WordRotate } from "@/components/ui/word-rotate";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/videoFondo.mp4" type="video/mp4" />
        <source src="/videos/videoFondo.webm" type="video/webm" />
      </video>

      {/* Dark Overlay - Using new color system */}
      <div className="absolute inset-0 bg-[var(--gs-base)]/70" />

      {/* Subtle Glow Effects */}
      <div className="glow-spotlight glow-tl opacity-40" />
      <div className="glow-spotlight glow-br opacity-20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-4xl"
        >
          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gs-subheading block mb-8"
          >
            Despacho Jurídico
          </motion.span>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl gs-heading mb-6 leading-tight">
            En GlobalServ
            <br />
            <span className="text-[var(--gs-text-secondary)]">
              Nuestro Trabajo es
            </span>
          </h1>

          {/* Rotating Words */}
          <div className="relative">
            <WordRotate
              className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-[var(--gs-text-primary)]"
              words={[
                "Perfección",
                "Eficacia",
                "Compromiso",
                "Innovación",
                "Transparencia",
                "Agilidad",
                "Excelencia",
                "Adaptabilidad",
                "Confianza",
                "Profesionalismo",
              ]}
              duration={2500}
            />
          </div>

          {/* Subtle Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
