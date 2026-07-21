"use client";

import { motion } from "motion/react";
import { Footer } from "../components/Footer";
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
    console.log("Formulario enviado:", formData);
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

  const contactInfo = [
    {
      label: "Dirección",
      value:
        "Global Serv VJ. Prado Norte 245 P.B. Lomas de Chapultepec, Miguel Hidalgo, CdMx.",
    },
    {
      label: "Correo",
      value: "contacto@globalservmx.com",
    },
    {
      label: "Teléfono",
      value: "+52 55 9429 2460",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] overflow-hidden flex items-center">
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
                Contacto
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gs-heading mb-8"
              >
                Estemos en Contacto
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-[var(--gs-text-secondary)] leading-relaxed max-w-xl"
              >
                Estamos aquí para ayudarte. Contáctanos y te responderemos 
                a la brevedad posible.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-center" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl gs-heading mb-12">
                Información de Contacto
              </h2>
              
              <div className="space-y-10">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    {/* Label */}
                    <span className="block text-xs tracking-[0.2em] uppercase text-[var(--gs-text-muted)] mb-2">
                      {item.label}
                    </span>
                    
                    {/* Value */}
                    <p className="text-base md:text-lg text-[var(--gs-text-primary)] leading-relaxed">
                      {item.value}
                    </p>
                    
                    {/* Subtle Divider */}
                    <div className="gs-divider mt-6" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="gs-card rounded-lg p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl gs-heading mb-8">
                  Envíanos un Mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-[0.15em] uppercase text-[var(--gs-text-muted)] mb-3"
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
                      className="w-full px-4 py-3 gs-input rounded-md"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs tracking-[0.15em] uppercase text-[var(--gs-text-muted)] mb-3"
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
                        className="w-full px-4 py-3 gs-input rounded-md"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs tracking-[0.15em] uppercase text-[var(--gs-text-muted)] mb-3"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 gs-input rounded-md"
                        placeholder="(81) 1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs tracking-[0.15em] uppercase text-[var(--gs-text-muted)] mb-3"
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
                      className="w-full px-4 py-3 gs-input rounded-md"
                      placeholder="Asunto de tu consulta"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-[0.15em] uppercase text-[var(--gs-text-muted)] mb-3"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 gs-input rounded-md resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full px-6 py-4 bg-[var(--gs-accent)] hover:bg-[var(--gs-accent)]/80 text-[var(--gs-text-primary)] text-sm tracking-[0.1em] uppercase rounded-md transition-all duration-300"
                  >
                    Enviar Mensaje
                  </motion.button>
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
