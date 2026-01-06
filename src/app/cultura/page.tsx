"use client";

import { motion } from "motion/react";
import { Footer } from "../components/Footer";

const values = [
  {
    id: 1,
    title: "Excelencia",
    description:
      "Nos comprometemos a brindar servicios de la más alta calidad, superando las expectativas de nuestros clientes en cada proyecto.",
  },
  {
    id: 2,
    title: "Integridad",
    description:
      "Actuamos con honestidad, transparencia y ética profesional en todas nuestras relaciones y operaciones.",
  },
  {
    id: 3,
    title: "Compromiso",
    description:
      "Dedicamos nuestro máximo esfuerzo y atención a cada cliente, entendiendo que su éxito es nuestro éxito.",
  },
  {
    id: 4,
    title: "Innovación",
    description:
      "Buscamos constantemente nuevas soluciones y enfoques creativos para abordar los desafíos legales de nuestros clientes.",
  },
  {
    id: 5,
    title: "Colaboración",
    description:
      "Fomentamos un ambiente de trabajo en equipo donde cada miembro contribuye con su experiencia y perspectiva única.",
  },
  {
    id: 6,
    title: "Enfoque",
    description:
      "Mantenemos una visión clara y estratégica, enfocándonos en los objetivos y resultados que importan a nuestros clientes.",
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
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function CulturaPage() {
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
                Nuestra Cultura
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gs-heading mb-8"
              >
                Valores y Principios
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed max-w-xl"
              >
                Nuestra cultura organizacional se fundamenta en valores sólidos 
                que guían cada decisión y acción en nuestro despacho.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Grid */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-center" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {values.map((value, index) => (
              <motion.article
                key={value.id}
                variants={itemVariants}
                className="group gs-card rounded-lg p-8 md:p-10"
              >
                {/* Number */}
                <span className="block text-5xl md:text-6xl font-extralight text-white/10 mb-6 group-hover:text-white/20 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl gs-heading mb-4">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-[var(--gs-text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ambiente de Trabajo */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-br" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="gs-card rounded-lg p-8 md:p-12 lg:p-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl gs-heading mb-8 text-center"
              >
                Ambiente de Trabajo
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed"
              >
                <p>
                  En GlobalServ, creemos que un ambiente de trabajo positivo y
                  colaborativo es fundamental para brindar el mejor servicio a
                  nuestros clientes. Fomentamos un entorno donde cada miembro del
                  equipo puede crecer profesionalmente y contribuir con su
                  experiencia única.
                </p>
                <p>
                  Valoramos la diversidad de pensamiento, el aprendizaje
                  continuo y el equilibrio entre el trabajo y la vida personal.
                  Nuestro compromiso con la excelencia se refleja no solo en los
                  resultados que entregamos, sino también en cómo trabajamos
                  juntos para lograrlos.
                </p>
                <p>
                  Estamos dedicados a mantener una cultura de respeto mutuo,
                  comunicación abierta y apoyo constante, donde cada voz es
                  escuchada y cada contribución es valorada.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
