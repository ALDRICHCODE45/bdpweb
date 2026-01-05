"use client";

import { motion } from "motion/react";
import { Footer } from "../components/Footer";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se puede agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Gracias por contactarnos. Nos pondremos en contacto pronto.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a4a] to-slate-900" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-md tracking-[0.3em] text-slate-300 uppercase mb-4 block"
            >
              Contacto
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-tight mb-6"
            >
              Estemos en Contacto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed"
            >
              Estamos aquí para ayudarte. Contáctanos y te responderemos a la
              brevedad posible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 via-[#1a3a4a] to-slate-900 py-20 md:py-32">
        <div className="container mx-auto px-8 lg:px-12 xl:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-slate-100 mb-8 tracking-tight">
                  Información de Contacto
                </h2>
                <p className="text-base md:text-lg text-slate-300/90 leading-relaxed mb-8">
                  Puedes contactarnos a través de cualquiera de los siguientes
                  medios. Estamos disponibles para atender tus consultas y
                  necesidades legales.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-slate-100 mb-2">
                      Dirección
                    </h3>
                    <p className="text-base text-slate-300/90 leading-relaxed">
                      Av. de la Industria 300. Punto Central, Oficina 21.
                      Colonia Veredalta San Pedro Garza García, Nuevo León CP.
                      66270
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-slate-100 mb-2">
                      Correo Electrónico
                    </h3>
                    <p className="text-base text-slate-300/90">
                      globalServ@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a4a]/50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-slate-100 mb-2">
                      Teléfono
                    </h3>
                    <p className="text-base text-slate-300/90">
                      (81) 2721.0080
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulario de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-light text-slate-100 mb-8 tracking-tight">
                  Envíanos un Mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-normal text-slate-300 mb-2"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-slate-600 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal text-slate-300 mb-2"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-slate-600 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-normal text-slate-300 mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-slate-600 transition-colors"
                      placeholder="(81) 1234-5678"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-normal text-slate-300 mb-2"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-slate-600 transition-colors"
                      placeholder="Asunto de tu consulta"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-normal text-slate-300 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-slate-600 transition-colors resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#1a3a4a] hover:bg-[#1a3a4a]/80 text-slate-100 font-normal tracking-wide rounded-lg transition-colors duration-300"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

