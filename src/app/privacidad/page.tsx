"use client";

import { motion } from "motion/react";
import { Footer } from "../components/Footer";

type Block =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

const contactEmail = "contacto@globalservmx.com";
const contactPhone = "+52 55 9429 2460";
const contactAddress =
  "Global Serv VJ, AV FUENTES 41 A 1201 FTE DE MOLINOS LOMAS DETECCAMACHALCO C.P.53950, NAUCALPAN DE JUAREZ, MEX.";

const lastUpdatedPlaceholder = "Última actualización: 29 de septiembre de 2026";

const sections: Section[] = [
  {
    id: "responsable",
    title: "1. Responsable del tratamiento",
    blocks: [
      {
        type: "paragraph",
        text: "El responsable del tratamiento de los datos personales que se recaban a través de este sitio web es Gualberto Vilchis Pérez, quien opera el sitio de Global Serv (en adelante, «Global Serv»).",
      },
      {
        type: "paragraph",
        text: `Para cualquier asunto relacionado con este Aviso de Privacidad puedes contactarnos por correo electrónico en ${contactEmail}, por teléfono en ${contactPhone} o por escrito en el domicilio ubicado en ${contactAddress}`,
      },
    ],
  },
  {
    id: "datos",
    title: "2. Datos personales que recabamos",
    blocks: [
      {
        type: "paragraph",
        text: "Los datos personales que podemos recabar dependerán del formulario de este sitio que decidas utilizar.",
      },
      { type: "subheading", text: "Formulario de contacto" },
      {
        type: "list",
        items: [
          "Nombre",
          "Correo electrónico",
          "Teléfono",
          "Asunto",
          "Mensaje",
        ],
      },
      { type: "subheading", text: "Formulario de diagnóstico de cumplimiento" },
      {
        type: "list",
        items: [
          "Nombre",
          "Correo electrónico",
          "Organización",
          "Situación que describes",
        ],
      },
      {
        type: "paragraph",
        text: "El formulario de contacto de este sitio no transmite ni almacena tu información en un servidor: los datos que capturas permanecen únicamente en el entorno local del navegador.",
      },
      {
        type: "paragraph",
        text: "Te pedimos no incluir en los campos de texto libre datos personales sensibles ni información que no sea necesaria para atender tu solicitud.",
      },
    ],
  },
  {
    id: "finalidades",
    title: "3. Finalidades del tratamiento",
    blocks: [
      {
        type: "paragraph",
        text: "Los datos personales que nos proporcionas se tratarán para las siguientes finalidades:",
      },
      { type: "subheading", text: "Finalidades primarias" },
      {
        type: "list",
        items: [
          "Atender y dar seguimiento a las solicitudes que envíes a través del formulario de contacto.",
          "Responder a tus consultas y mantener comunicación contigo en relación con tu solicitud.",
          "Identificar y evaluar tu solicitud de diagnóstico en materia de cumplimiento, así como darle seguimiento.",
        ],
      },
      {
        type: "paragraph",
        text: "Estas finalidades son necesarias para atender la relación que se genera a partir de tu solicitud.",
      },
      { type: "subheading", text: "Finalidades secundarias" },
      {
        type: "paragraph",
        text: "De manera adicional, y siempre que nos otorgues tu consentimiento, podremos tratar tus datos personales para finalidades secundarias, como el envío de información sobre nuestros servicios, comunicaciones informativas, boletines, invitaciones a eventos y encuestas de satisfacción.",
      },
      {
        type: "paragraph",
        text: `Tu negativa a que tus datos personales se traten para las finalidades secundarias no será motivo para negarte la atención de tu solicitud. Puedes manifestar tu negativa enviando un correo electrónico a ${contactEmail}.`,
      },
    ],
  },
  {
    id: "transferencias",
    title: "4. Transferencias de datos personales",
    blocks: [
      {
        type: "paragraph",
        text: "Tus datos personales no serán transferidos a terceros sin tu consentimiento, salvo en los casos y con las excepciones previstas por la legislación aplicable.",
      },
      {
        type: "paragraph",
        text: "Cuando la legislación aplicable lo permita o lo requiera, podremos transferir tus datos personales a terceros; en esos casos se observarán las obligaciones que correspondan conforme a la normativa aplicable.",
      },
    ],
  },
  {
    id: "arco",
    title: "5. Derechos ARCO",
    blocks: [
      {
        type: "paragraph",
        text: "Puedes ejercer en cualquier momento los derechos de acceso, rectificación, cancelación y oposición (derechos ARCO) respecto de tus datos personales:",
      },
      {
        type: "list",
        items: [
          "Acceso: conocer qué datos personales tenemos de ti y las condiciones de su tratamiento.",
          "Rectificación: solicitar la corrección de tus datos personales cuando sean inexactos o estén incompletos.",
          "Cancelación: solicitar la eliminación de tus datos personales cuando consideres que no son necesarios para las finalidades señaladas en este aviso.",
          "Oposición: oponerte al tratamiento de tus datos personales para finalidades específicas.",
        ],
      },
      {
        type: "paragraph",
        text: `Para ejercer cualquiera de estos derechos envía tu solicitud a ${contactEmail} indicando tu nombre, un medio para contactarte, la descripción clara y precisa de los datos respecto de los que buscas ejercer el derecho, así como cualquier documento que acredite tu identidad.`,
      },
      {
        type: "paragraph",
        text: "Atenderemos tu solicitud en los términos y plazos previstos por la legislación aplicable.",
      },
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies y tecnologías de rastreo",
    blocks: [
      {
        type: "paragraph",
        text: "Este sitio puede utilizar cookies y otras tecnologías similares que permiten reconocer tu navegador, recordar tus preferencias y obtener datos sobre tu interacción con el sitio.",
      },
      {
        type: "paragraph",
        text: "Puedes deshabilitar o eliminar las cookies desde la configuración de tu navegador. Ten en cuenta que, si las deshabilitas, algunas secciones o funcionalidades del sitio podrían no operar correctamente.",
      },
    ],
  },
  {
    id: "cambios",
    title: "7. Cambios al Aviso de Privacidad",
    blocks: [
      {
        type: "paragraph",
        text: "Podemos modificar o actualizar este Aviso de Privacidad en cualquier momento, derivado de cambios en la legislación aplicable, en nuestras prácticas internas o en los servicios que ofrecemos.",
      },
      {
        type: "paragraph",
        text: "Las modificaciones estarán disponibles en esta misma página.",
      },
      { type: "paragraph", text: lastUpdatedPlaceholder },
    ],
  },
  {
    id: "contacto",
    title: "8. Contacto",
    blocks: [
      {
        type: "paragraph",
        text: "Si tienes dudas, comentarios o solicitudes relacionadas con este Aviso de Privacidad, puedes contactarnos en:",
      },
      {
        type: "list",
        items: [
          `Correo electrónico: ${contactEmail}`,
          `Teléfono: ${contactPhone}`,
          `Domicilio: ${contactAddress}`,
        ],
      },
      {
        type: "paragraph",
        text: "Responsable: Gualberto Vilchis Pérez — Global Serv.",
      },
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] w-full items-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gs-base)]" />
        <div className="glow-spotlight glow-tl" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto max-w-7xl px-6 pt-28 pb-16 md:px-12 lg:px-16 lg:pt-32">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="gs-subheading mb-6 block"
              >
                Legal
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="gs-heading mb-8 text-4xl md:text-5xl lg:text-6xl"
              >
                Aviso de Privacidad
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl text-base leading-relaxed text-[var(--gs-text-secondary)] md:text-lg"
              >
                Este Aviso de Privacidad describe cómo Global Serv trata los
                datos personales que proporcionas a través de este sitio web.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-xs tracking-[0.15em] uppercase text-[var(--gs-text-muted)]"
              >
                {lastUpdatedPlaceholder}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Content */}
      <section className="relative w-full bg-[var(--gs-base)] py-16 md:py-24">
        <div className="glow-spotlight glow-center" />

        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl">
            {/* Sections */}
            <div className="space-y-16 md:space-y-20">
              {sections.map((section, sectionIndex) => (
                <motion.article
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="scroll-mt-28"
                >
                  <h2 className="gs-heading mb-6 text-2xl md:text-3xl">
                    {section.title}
                  </h2>

                  <div className="space-y-5">
                    {section.blocks.map((block, blockIndex) => {
                      const key = `${section.id}-${blockIndex}`;

                      if (block.type === "subheading") {
                        return (
                          <h3
                            key={key}
                            className="pt-2 text-sm tracking-[0.15em] uppercase text-[var(--gs-text-muted)]"
                          >
                            {block.text}
                          </h3>
                        );
                      }

                      if (block.type === "list") {
                        return (
                          <ul key={key} className="space-y-3">
                            {block.items.map((item) => (
                              <li
                                key={item}
                                className="flex gap-4 text-base leading-relaxed text-[var(--gs-text-secondary)]"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-3 h-px w-4 shrink-0 bg-[var(--gs-border-hover)]"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      return (
                        <p
                          key={key}
                          className="text-base leading-relaxed text-[var(--gs-text-secondary)]"
                        >
                          {block.text}
                        </p>
                      );
                    })}
                  </div>

                  {sectionIndex < sections.length - 1 && (
                    <div className="gs-divider mt-12" />
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
