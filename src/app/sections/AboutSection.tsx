"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const practiceAreas = [
  {
    id: 1,
    title: "Corporativo",
    description:
      "Asesoramos a empresas nacionales e internacionales en la estructuración y ejecución de operaciones corporativas, incluyendo fusiones, adquisiciones, escisiones y reestructuraciones societarias. Brindamos apoyo integral en gobierno corporativo, cumplimiento normativo y gestión de riesgos legales.",
    image: "/sobreNosotros.png",
  },
  {
    id: 2,
    title: "Litigio",
    description:
      "Representamos a nuestros clientes en procedimientos judiciales y arbitrales de alta complejidad. Contamos con amplia experiencia en litigios comerciales, civiles y administrativos, siempre buscando las mejores estrategias para proteger sus intereses.",
    image: "/sobreNosotros.png",
  },
  {
    id: 3,
    title: "Fiscal",
    description:
      "Ofrecemos asesoría fiscal integral para optimizar la carga tributaria de nuestros clientes dentro del marco legal vigente. Diseñamos estructuras fiscales eficientes y representamos a empresas en controversias ante autoridades fiscales.",
    image: "/sobreNosotros.png",
  },
  {
    id: 4,
    title: "Bienes Raíces",
    description:
      'Como parte de nuestros servicios principales, ofrecemos asesoría legal y gestión a desarrolladores inmobiliarios, incluyendo la obtención oportuna de licencias y permisos ante departamentos de Desarrollo Urbano locales y autoridades estatales y federales, según corresponda. Contamos con una amplia experiencia en desarrollos urbanos y rurales, incluidos aquellos relacionados con la propiedad común o rural ("ejidos"). Además, tenemos un extenso historial en la gestión de procedimientos legales que impugnan o restringen los derechos de los activos inmobiliarios de nuestros clientes.',
    image: "/sobreNosotros.png",
  },
  {
    id: 5,
    title: "Laboral",
    description:
      "Brindamos asesoría laboral preventiva y correctiva a empresas de diversos sectores. Manejamos relaciones individuales y colectivas de trabajo, negociaciones sindicales, terminaciones laborales y representación en procedimientos ante autoridades laborales.",
    image: "/sobreNosotros.png",
  },
  {
    id: 6,
    title: "Propiedad Intelectual",
    description:
      "Protegemos los activos intangibles de nuestros clientes mediante el registro y defensa de marcas, patentes, derechos de autor y secretos industriales. Ofrecemos estrategias integrales de protección y monetización de propiedad intelectual.",
    image: "/sobreNosotros.png",
  },
  {
    id: 7,
    title: "Comercio Exterior",
    description:
      "Asesoramos en operaciones de comercio internacional, incluyendo importaciones, exportaciones, clasificación arancelaria y cumplimiento aduanero. Representamos a clientes en procedimientos ante autoridades aduaneras y en controversias comerciales internacionales.",
    image: "/sobreNosotros.png",
  },
  {
    id: 8,
    title: "Energía",
    description:
      "Brindamos asesoría especializada en el sector energético, incluyendo proyectos de generación, transmisión y distribución de energía. Acompañamos a nuestros clientes en la obtención de permisos y en el cumplimiento del marco regulatorio aplicable.",
    image: "/sobreNosotros.png",
  },
];

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
        <Image
          src={currentArea.image}
          alt={currentArea.title}
          fill
          className="object-cover"
          priority
        />
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
            <div className="flex items-baseline gap-4 mb-6">
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
            </div>

            {/* Descripción */}
            <p className="text-base md:text-xl text-slate-300/90 leading-relaxed max-w-2xl mb-12">
              {currentArea.description}
            </p>

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
            <div className="relative w-full h-[70%] max-h-[600px]">
              <Image
                src={currentArea.image}
                alt={currentArea.title}
                fill
                className="object-cover rounded-sm"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
