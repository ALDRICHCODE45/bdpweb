"use client";

import { motion } from "motion/react";
import { Footer } from "../components/Footer";

const proBonoValues = [
  {
    id: 1,
    title: "Compasión",
    description:
      "Entendemos las necesidades de quienes más lo necesitan y actuamos con empatía y dedicación.",
  },
  {
    id: 2,
    title: "Justicia",
    description:
      "Trabajamos para garantizar que todos tengan acceso a representación legal de calidad, independientemente de su situación económica.",
  },
  {
    id: 3,
    title: "Comunidad",
    description:
      "Apoyamos a organizaciones y causas que fortalecen y mejoran nuestra comunidad.",
  },
  {
    id: 4,
    title: "Servicio",
    description:
      "Dedicamos tiempo y recursos para servir a quienes más lo necesitan, sin esperar nada a cambio.",
  },
];

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

export default function ProBonoPage() {
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
                Compromiso Social
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gs-heading mb-8"
              >
                Trabajo Pro-Bono
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed max-w-xl"
              >
                Creemos en el acceso a la justicia para todos. Nuestro
                compromiso con el trabajo pro-bono refleja nuestra
                responsabilidad social y nuestro compromiso con la comunidad.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso Section */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl gs-heading">
                Nuestro Compromiso
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed"
            >
              <p>
                En GlobalServ, entendemos que el acceso a la justicia es un
                derecho fundamental que no debería estar limitado por
                consideraciones económicas. Por ello, dedicamos una parte
                significativa de nuestros recursos y tiempo al trabajo pro-bono,
                brindando servicios legales gratuitos a personas y
                organizaciones que no tienen los medios para acceder a
                representación legal de calidad.
              </p>
              <p>
                Nuestro programa pro-bono abarca diversas áreas del derecho,
                incluyendo asesoría a organizaciones sin fines de lucro,
                representación de personas en situaciones vulnerables, y apoyo a
                causas que promueven el bienestar social y la justicia.
              </p>
              <p>
                Creemos firmemente que el ejercicio de la abogacía conlleva una
                responsabilidad social, y estamos comprometidos a hacer nuestra
                parte para construir una sociedad más justa y equitativa.
              </p>
            </motion.div>
          </div>

          {/* Values Grid - Minimalist without icons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {proBonoValues.map((value, index) => (
              <motion.article
                key={value.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[var(--gs-border)] group-hover:bg-[var(--gs-accent)] transition-colors duration-500" />

                <div className="pt-8 pb-4">
                  {/* Number */}
                  <span className="block text-4xl md:text-5xl font-extralight text-white/10 mb-4 group-hover:text-white/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl gs-heading mb-4">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--gs-text-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl gs-heading mb-8 text-center">
                Nuestro Impacto
              </h2>

              <div className="space-y-6 text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed">
                <p>
                  A través de nuestro programa pro-bono, hemos tenido el
                  privilegio de ayudar a numerosas personas y organizaciones a
                  navegar desafíos legales complejos. Cada caso que tomamos
                  pro-bono es tratado con el mismo nivel de dedicación,
                  profesionalismo y atención al detalle que aplicamos a todos
                  nuestros clientes.
                </p>
                <p>
                  Estamos orgullosos de contribuir a causas que promueven la
                  justicia social, el acceso a la educación, la protección del
                  medio ambiente, y el apoyo a comunidades vulnerables. Nuestro
                  compromiso con el trabajo pro-bono es una parte integral de
                  nuestra identidad como despacho jurídico.
                </p>
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 pt-8 border-t border-[var(--gs-border)]"
              >
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl font-light text-[var(--gs-text-primary)] italic">
                    &ldquo;La justicia no es solo para quienes pueden pagarla&rdquo;
                  </p>
                </blockquote>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
