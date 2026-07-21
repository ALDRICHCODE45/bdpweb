"use client";

import { motion } from "motion/react";
import type { TimelineStep } from "@/lib/cumplimientoData";

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <motion.svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-5 top-5 h-[calc(100%-2.5rem)] w-px text-white/15 md:hidden"
        viewBox="0 0 2 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 1 0 V 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          pathLength={1}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </motion.svg>
      <motion.svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px w-full text-white/15 md:block"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 1 H 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          pathLength={1}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </motion.svg>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
        {steps.map((step) => (
          <motion.article
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative pl-14 md:pl-0 md:pt-14"
          >
            <span className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[var(--gs-base)] text-xs tracking-[0.15em] text-white/70 md:left-1/2 md:-translate-x-1/2">
              {step.number}
            </span>
            <h3 className="text-xl gs-heading md:text-2xl">{step.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--gs-text-secondary)] md:text-base">
              {step.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
