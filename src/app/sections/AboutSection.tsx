"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { practiceAreas } from "@/lib/practiceAreas";

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(3);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? practiceAreas.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === practiceAreas.length - 1 ? 0 : prev + 1
    );
  };

  const currentArea = practiceAreas[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentArea.image}
              alt={currentArea.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-r from-[#1a3a4a]/95 via-[#1a3a4a]/85 to-transparent" />
      </div>

      {/* Contenido principal - Centrado con contenedor */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl h-full flex items-center">
          {/* Lado izquierdo - Contenido de texto (aproximadamente 2/3) */}
          <div className="w-full lg:w-2/3 h-full flex flex-col justify-center pr-8 lg:pr-12">
            {/* Subtítulo */}
            <span className="text-md tracking-[0.3em] text-slate-300 uppercase mb-4">
              Áreas de Práctica
            </span>

            {/* Número y Título */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-baseline gap-4 mb-6"
              >
                <div className="flex flex-col text-slate-400 text-md font-light">
                  <span className="text-3xl font-normal text-slate-200">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-slate-500 text-xl">
                    /{String(practiceAreas.length).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-tight">
                  {currentArea.title}
                </h2>
              </motion.div>
            </AnimatePresence>

            {/* Descripción */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-base md:text-xl text-slate-300/90 leading-relaxed max-w-2xl mb-12"
              >
                {currentArea.description}
              </motion.p>
            </AnimatePresence>

            {/* Botones de navegación */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-slate-400/40 flex items-center justify-center text-slate-300 hover:bg-slate-300/10 hover:border-slate-300 transition-all duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-slate-400/40 flex items-center justify-center text-slate-300 hover:bg-slate-300/10 hover:border-slate-300 transition-all duration-300"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lado derecho - Imagen (aproximadamente 1/3) */}
          <div className="hidden lg:flex lg:w-1/3 h-full items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-[70%] max-h-[600px]"
              >
                <Image
                  src={currentArea.image}
                  alt={currentArea.title}
                  fill
                  className="object-cover rounded-sm"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
