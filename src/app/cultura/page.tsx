"use client";

import { motion } from "motion/react";
import { Footer } from "../components/Footer";
import {
  Target,
  Users,
  Lightbulb,
  Award,
  Heart,
  Shield,
} from "lucide-react";

const values = [
  {
    id: 1,
    title: "Excelencia",
    icon: Award,
    description:
      "Nos comprometemos a brindar servicios de la más alta calidad, superando las expectativas de nuestros clientes en cada proyecto.",
  },
  {
    id: 2,
    title: "Integridad",
    icon: Shield,
    description:
      "Actuamos con honestidad, transparencia y ética profesional en todas nuestras relaciones y operaciones.",
  },
  {
    id: 3,
    title: "Compromiso",
    icon: Heart,
    description:
      "Dedicamos nuestro máximo esfuerzo y atención a cada cliente, entendiendo que su éxito es nuestro éxito.",
  },
  {
    id: 4,
    title: "Innovación",
    icon: Lightbulb,
    description:
      "Buscamos constantemente nuevas soluciones y enfoques creativos para abordar los desafíos legales de nuestros clientes.",
  },
  {
    id: 5,
    title: "Colaboración",
    icon: Users,
    description:
      "Fomentamos un ambiente de trabajo en equipo donde cada miembro contribuye con su experiencia y perspectiva única.",
  },
  {
    id: 6,
    title: "Enfoque",
    icon: Target,
    description:
      "Mantenemos una visión clara y estratégica, enfocándonos en los objetivos y resultados que importan a nuestros clientes.",
  },
];

export default function CulturaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a4a] to-slate-900" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-md tracking-[0.3em] text-slate-300 uppercase mb-4 block"
            >
              Nuestra Cultura
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-tight mb-6"
            >
              Valores y Principios
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed"
            >
              Nuestra cultura organizacional se fundamenta en valores sólidos que
              guían cada decisión y acción en nuestro despacho.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 via-[#1a3a4a] to-slate-900 py-20 md:py-32">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-start space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center group-hover:bg-[#1a3a4a]/70 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-slate-300 group-hover:text-slate-100 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-slate-100 mb-3 tracking-tight">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección de Ambiente de Trabajo */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 to-[#1a3a4a] py-20 md:py-32">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-100 tracking-tight mb-6">
                Ambiente de Trabajo
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-base md:text-lg text-slate-300/90 leading-relaxed"
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
        </div>
      </section>

      <Footer />
    </>
  );
}

