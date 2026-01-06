"use client";

import Image from "next/image";
import { useState } from "react";
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
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
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

        {/* Gradient Overlay - Using new color system */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gs-base)]/98 via-[var(--gs-base)]/85 to-[var(--gs-base)]/40" />
      </div>

      {/* Subtle Glow */}
      <div className="glow-spotlight glow-br opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            {/* Left Content (2/3) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Subtitle */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="gs-subheading block"
              >
                Áreas de Práctica
              </motion.span>

              {/* Number + Title */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex items-end gap-6"
                >
                  {/* Number Indicator */}
                  <div className="flex flex-col items-start">
                    <span className="text-4xl md:text-5xl font-extralight text-[var(--gs-text-primary)]">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[var(--gs-text-muted)]">
                      /{String(practiceAreas.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gs-heading">
                    {currentArea.title}
                  </h2>
                </motion.div>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`description-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed max-w-2xl"
                >
                  {currentArea.description}
                </motion.p>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 pt-4">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="group w-12 h-12 rounded-full border border-[var(--gs-border)] flex items-center justify-center text-[var(--gs-text-secondary)] hover:border-[var(--gs-border-hover)] hover:text-[var(--gs-text-primary)] transition-all duration-300"
                  aria-label="Anterior"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="group w-12 h-12 rounded-full border border-[var(--gs-border)] flex items-center justify-center text-[var(--gs-text-secondary)] hover:border-[var(--gs-border-hover)] hover:text-[var(--gs-text-primary)] transition-all duration-300"
                  aria-label="Siguiente"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Progress Line */}
                <div className="hidden md:flex items-center gap-2 ml-6">
                  {practiceAreas.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-px transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 bg-[var(--gs-text-primary)]"
                          : "w-4 bg-[var(--gs-border)] hover:bg-[var(--gs-border-hover)]"
                      }`}
                      aria-label={`Ir a área ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Image Preview (1/3) */}
            <div className="hidden lg:block lg:col-span-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative aspect-[3/4] w-full max-w-sm ml-auto"
                >
                  {/* Border Frame */}
                  <div className="absolute inset-0 border border-[var(--gs-border)] rounded-sm" />

                  {/* Image */}
                  <div className="absolute inset-4">
                    <Image
                      src={currentArea.image}
                      alt={currentArea.title}
                      fill
                      className="object-cover rounded-sm"
                      priority
                    />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--gs-base)]/30 to-transparent" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
