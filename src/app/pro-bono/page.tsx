"use client";

import { motion } from "motion/react";
import { Footer } from "../components/Footer";
import { Heart, Users, Scale, HandHeart } from "lucide-react";

export default function ProBonoPage() {
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
              Compromiso Social
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-tight mb-6"
            >
              Trabajo Pro-Bono
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed"
            >
              Creemos en el acceso a la justicia para todos. Nuestro compromiso
              con el trabajo pro-bono refleja nuestra responsabilidad social
              y nuestro compromiso con la comunidad.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sección de Compromiso */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 via-[#1a3a4a] to-slate-900 py-20 md:py-32">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-100 tracking-tight mb-6">
                Nuestro Compromiso
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
                En GlobalServ, entendemos que el acceso a la justicia es un
                derecho fundamental que no debería estar limitado por
                consideraciones económicas. Por ello, dedicamos una parte
                significativa de nuestros recursos y tiempo al trabajo
                pro-bono, brindando servicios legales gratuitos a personas y
                organizaciones que no tienen los medios para acceder a
                representación legal de calidad.
              </p>
              <p>
                Nuestro programa pro-bono abarca diversas áreas del derecho,
                incluyendo asesoría a organizaciones sin fines de lucro,
                representación de personas en situaciones vulnerables, y apoyo
                a causas que promueven el bienestar social y la justicia.
              </p>
              <p>
                Creemos firmemente que el ejercicio de la abogacía conlleva una
                responsabilidad social, y estamos comprometidos a hacer nuestra
                parte para construir una sociedad más justa y equitativa.
              </p>
            </motion.div>
          </div>

          {/* Grid de Valores Pro-Bono */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center">
                <Heart className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-light text-slate-100 mb-4">
                Compasión
              </h3>
              <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
                Entendemos las necesidades de quienes más lo necesitan y
                actuamos con empatía y dedicación.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center">
                <Scale className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-light text-slate-100 mb-4">Justicia</h3>
              <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
                Trabajamos para garantizar que todos tengan acceso a
                representación legal de calidad, independientemente de su
                situación económica.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center">
                <Users className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-light text-slate-100 mb-4">
                Comunidad
              </h3>
              <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
                Apoyamos a organizaciones y causas que fortalecen y mejoran
                nuestra comunidad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center">
                <HandHeart className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-light text-slate-100 mb-4">
                Servicio
              </h3>
              <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
                Dedicamos tiempo y recursos para servir a quienes más lo
                necesitan, sin esperar nada a cambio.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Impacto */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 to-[#1a3a4a] py-20 md:py-32">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-100 mb-6 tracking-tight text-center">
                Nuestro Impacto
              </h2>
              <div className="space-y-6 text-base md:text-lg text-slate-300/90 leading-relaxed">
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
                <p className="text-center pt-4">
                  <span className="text-xl font-light text-slate-100">
                    "La justicia no es solo para quienes pueden pagarla"
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

