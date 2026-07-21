"use client";

import { motion } from "motion/react";
import type { KeyboardEvent } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Service } from "@/lib/cumplimientoData";

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

interface ServiceCardProps {
  service: Service;
  onActivate?: (service: Service) => void;
}

export function ServiceCard({ service, onActivate }: ServiceCardProps) {
  const Icon = service.icon;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      onActivate?.(service);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.99 }}
          onKeyDown={handleKeyDown}
          className="group gs-card flex h-full w-full flex-col rounded-lg p-8 text-left md:p-10"
          aria-label={`Conocer más sobre ${service.title}`}
        >
          <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors duration-300 group-hover:border-white/25 group-hover:text-white">
            <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
          </span>
          <span className="mb-4 text-xs uppercase tracking-[0.2em] text-white/35">
            Servicio especializado
          </span>
          <h3 className="text-xl gs-heading md:text-2xl">{service.title}</h3>
          <p className="mt-5 text-sm leading-relaxed text-[var(--gs-text-secondary)] md:text-base">
            {service.summary}
          </p>
          <span className="cumplimiento-accent-text mt-auto pt-8 text-xs uppercase tracking-[0.18em] opacity-80 transition-opacity group-hover:opacity-100">
            Explorar servicio →
          </span>
        </motion.button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto border-[var(--gs-border)] bg-[var(--gs-base-light)] text-[var(--gs-text-primary)] sm:max-w-2xl">
        <DialogHeader className="text-left">
          <span className="cumplimiento-accent-text text-xs uppercase tracking-[0.2em]">
            Servicio especializado
          </span>
          <DialogTitle className="pt-2 text-2xl font-light md:text-3xl">
            {service.title}
          </DialogTitle>
          <DialogDescription className="pt-3 text-base leading-relaxed text-[var(--gs-text-secondary)]">
            {service.extended.overview}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 border-t border-white/10 pt-6">
          <h4 className="text-sm uppercase tracking-[0.18em] text-white/55">
            Alcance del acompañamiento
          </h4>
          <ul className="mt-5 space-y-4">
            {service.extended.deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="border-l border-white/20 pl-4 text-base leading-relaxed text-[var(--gs-text-secondary)]"
              >
                {deliverable}
              </li>
            ))}
          </ul>
        </div>

        <DialogFooter className="mt-4 sm:justify-start">
          <DialogClose asChild>
            <button
              type="button"
              className="rounded-md border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.15em] text-white/75 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Cerrar
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
