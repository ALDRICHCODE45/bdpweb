"use client";

import { motion } from "motion/react";
import {
  Zap,
  Building2,
  Factory,
  Cpu,
  ShoppingBag,
  Plane,
  Heart,
  GraduationCap,
} from "lucide-react";

const industries = [
  {
    id: 1,
    name: "Energía",
    icon: Zap,
    description: "Sector energético y renovable",
  },
  {
    id: 2,
    name: "Inmobiliaria",
    icon: Building2,
    description: "Desarrollo y construcción",
  },
  {
    id: 3,
    name: "Manufactura",
    icon: Factory,
    description: "Industria manufacturera",
  },
  {
    id: 4,
    name: "Tecnología",
    icon: Cpu,
    description: "Tecnología e innovación",
  },
  {
    id: 5,
    name: "Retail",
    icon: ShoppingBag,
    description: "Comercio y distribución",
  },
  {
    id: 6,
    name: "Aviación",
    icon: Plane,
    description: "Transporte aéreo",
  },
  {
    id: 7,
    name: "Salud",
    icon: Heart,
    description: "Sector salud y farmacéutico",
  },
  {
    id: 8,
    name: "Educación",
    icon: GraduationCap,
    description: "Instituciones educativas",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 via-[#1a3a4a] to-slate-900 py-20 md:py-32">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-md tracking-[0.3em] text-slate-300 uppercase mb-4 block">
            Industrias
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-tight mb-6">
            Sectores que Atendemos
          </h2>
          <p className="text-base md:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Nuestra experiencia abarca diversos sectores, brindando asesoría
            legal especializada adaptada a las necesidades específicas de cada
            industria.
          </p>
        </motion.div>

        {/* Grid de Industrias */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 md:p-8 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center group-hover:bg-[#1a3a4a]/70 transition-colors duration-300">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-slate-300 group-hover:text-slate-100 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-light text-slate-100 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

