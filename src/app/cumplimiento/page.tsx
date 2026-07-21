"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { WordRotate } from "@/components/ui/word-rotate";
import {
  advantages,
  cases,
  faq,
  services,
  steps,
  team,
} from "@/lib/cumplimientoData";
import { AccordionFAQ } from "./components/AccordionFAQ";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { ServiceCard } from "./components/ServiceCard";
import { Timeline } from "./components/Timeline";
import { Footer } from "../components/Footer";

const taglineWords = [
  "Auditoría y fiscalización efectiva.",
  "Cumplimiento regulatorio que blinda tu operación.",
  "Defensa experta en responsabilidades administrativas.",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

type DiagnosticForm = {
  name: string;
  email: string;
  organization: string;
  situation: string;
  website: string;
};

const initialForm: DiagnosticForm = {
  name: "",
  email: "",
  organization: "",
  situation: "",
  website: "",
};

export default function CumplimientoPage() {
  if (process.env.NEXT_PUBLIC_FEATURE_CUMPLIMIENTO !== "true") {
    notFound();
  }

  const [form, setForm] = useState<DiagnosticForm>(initialForm);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (form.website.trim()) {
      setError("No pudimos procesar la solicitud.");
      return;
    }

    const email = form.email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Escribe un correo electrónico válido.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/cumplimiento/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email,
          organization: form.organization.trim(),
          situation: form.situation.trim(),
          website: form.website,
        }),
      });

      if (!response.ok) throw new Error("diagnostic-request-failed");
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setError(
        "No pudimos enviar tu solicitud. Intenta nuevamente en unos minutos."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="cumplimiento-page">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] w-full items-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gs-base)]" />
        <div className="glow-spotlight glow-tl" />
        <div className="glow-spotlight glow-br opacity-30" />
        <div className="cumplimiento-accent-glow absolute -right-24 top-1/4 h-80 w-80 rounded-full opacity-60" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="gs-subheading mb-6 block"
              >
                Cumplimiento, Auditoría y Defensa
              </motion.span>

              <WordRotate
                words={taglineWords}
                duration={3200}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl gs-heading mb-8 max-w-4xl"
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl text-base leading-relaxed text-[var(--gs-text-secondary)] md:text-lg"
              >
                Anticipamos riesgos, fortalecemos controles y defendemos tus
                decisiones cuando la autoridad exige respuestas claras.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <motion.a
                  href="#diagnostico"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex items-center justify-center rounded-md bg-[var(--gs-accent)] px-6 py-4 text-sm uppercase tracking-[0.1em] text-[var(--gs-text-primary)] transition-colors duration-300 hover:bg-[var(--gs-accent)]/80"
                >
                  Solicitar diagnóstico
                </motion.a>
                <motion.a
                  href="#servicios"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-4 text-sm uppercase tracking-[0.1em] text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white"
                >
                  Explorar servicios
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contexto Legal */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-center" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20"
          >
            <motion.div variants={itemVariants}>
              <span className="gs-subheading mb-6 block">Contexto legal</span>
              <h2 className="text-3xl gs-heading mb-8 md:text-4xl">
                La regulación no espera a que estés listo.
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-[var(--gs-text-secondary)] md:text-lg">
                <p>
                  Las obligaciones de integridad, control interno y rendición de
                  cuentas atraviesan cada decisión relevante de una organización.
                  Una falla documental o un control que nadie puede demostrar
                  puede convertirse en observaciones, sanciones y pérdida de
                  confianza.
                </p>
                <p>
                  Cumplir no significa llenar formatos: significa conocer la
                  exposición, tomar decisiones informadas y contar con evidencia
                  suficiente para sostenerlas.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="gs-card rounded-lg p-8 md:p-10"
            >
              <span className="cumplimiento-accent-text text-sm uppercase tracking-[0.2em]">
                La respuesta GlobalServ
              </span>
              <h3 className="mt-6 text-2xl gs-heading md:text-3xl">
                Blindaje legal que se puede operar.
              </h3>
              <ul className="mt-8 space-y-5 text-base leading-relaxed text-[var(--gs-text-secondary)]">
                <li className="border-l border-white/15 pl-5">
                  Diagnóstico jurídico y operativo con prioridades claras.
                </li>
                <li className="border-l border-white/15 pl-5">
                  Controles y políticas alineados con el riesgo real del negocio.
                </li>
                <li className="border-l border-white/15 pl-5">
                  Acompañamiento preventivo y defensa cuando la fiscalización ya
                  está en curso.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="servicios"
        className="relative w-full scroll-mt-20 bg-[var(--gs-base)] py-24 md:py-32"
      >
        <div className="glow-spotlight glow-center" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-3xl md:mb-20"
          >
            <span className="gs-subheading mb-6 block">Cómo te ayudamos</span>
            <h2 className="text-3xl gs-heading mb-6 md:text-4xl lg:text-5xl">
              Cumplimiento que protege la operación.
            </h2>
            <p className="text-base leading-relaxed text-[var(--gs-text-secondary)] md:text-lg">
              Seis frentes especializados para prevenir exposición, fortalecer la
              evidencia y responder con estrategia cuando una fiscalización ya
              comenzó.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-br opacity-40" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-3xl md:mb-20"
          >
            <span className="gs-subheading mb-6 block">
              Ventajas competitivas
            </span>
            <h2 className="text-3xl gs-heading md:text-4xl lg:text-5xl">
              Del requisito al control que sí funciona.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4"
          >
            {advantages.map((advantage, index) => (
              <motion.article
                key={advantage.id}
                variants={itemVariants}
                className="group gs-card rounded-lg p-8 md:p-10"
              >
                <span className="mb-6 block text-5xl font-extralight text-white/10 transition-colors group-hover:text-white/20 md:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl gs-heading mb-4 md:text-2xl">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--gs-text-secondary)] md:text-base">
                  {advantage.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metodología */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-tl opacity-30" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl md:mb-24"
          >
            <span className="gs-subheading mb-6 block">Metodología</span>
            <h2 className="text-3xl gs-heading mb-6 md:text-4xl lg:text-5xl">
              Una ruta clara de diagnóstico a resultado.
            </h2>
            <p className="text-base leading-relaxed text-[var(--gs-text-secondary)] md:text-lg">
              Trabajamos por etapas para que cada hallazgo tenga responsable,
              evidencia y una acción concreta de tratamiento.
            </p>
          </motion.div>
          <Timeline steps={steps} />
        </div>
      </section>

      {/* Casos de Aplicación */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-br opacity-40" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-3xl md:mb-20"
          >
            <span className="gs-subheading mb-6 block">
              Casos de aplicación práctica
            </span>
            <h2 className="text-3xl gs-heading mb-6 md:text-4xl lg:text-5xl">
              El antes y después de una estrategia oportuna.
            </h2>
            <p className="text-base leading-relaxed text-[var(--gs-text-secondary)] md:text-lg">
              Resultados reales presentados de forma anónima para proteger la
              confidencialidad de nuestros clientes.
            </p>
          </motion.div>

          <div className="space-y-10 md:space-y-14">
            {cases.map((caseStudy, index) => (
              <motion.article
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="gs-card rounded-lg p-6 md:p-10"
              >
                <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <div>
                    <span className="cumplimiento-accent-text text-xs uppercase tracking-[0.18em]">
                      {caseStudy.sector}
                    </span>
                    <h3 className="mt-3 text-2xl gs-heading md:text-3xl">
                      {caseStudy.title}
                    </h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.15em] text-white/35">
                    Caso {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <BeforeAfterSlider caseStudy={caseStudy} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-center opacity-40" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-3xl md:mb-20"
          >
            <span className="gs-subheading mb-6 block">Equipo especializado</span>
            <h2 className="text-3xl gs-heading mb-6 md:text-4xl lg:text-5xl">
              Perspectivas distintas, una sola estrategia.
            </h2>
            <p className="text-base leading-relaxed text-[var(--gs-text-secondary)] md:text-lg">
              Integramos conocimiento jurídico, auditoría y gestión de riesgos
              para acompañar cada decisión con profundidad técnica.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4"
          >
            {team.map((member) => (
              <motion.article
                key={member.id}
                variants={itemVariants}
                className="gs-card rounded-lg p-8 md:p-10"
              >
                <span className="cumplimiento-accent-text mb-5 block text-xs uppercase tracking-[0.18em]">
                  {member.role}
                </span>
                <h3 className="text-xl gs-heading mb-5 md:text-2xl">
                  {member.name}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--gs-text-secondary)] md:text-base">
                  {member.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="relative w-full bg-[var(--gs-base)] py-24 md:py-32">
        <div className="glow-spotlight glow-tl opacity-30" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="gs-subheading mb-6 block">Preguntas frecuentes</span>
              <h2 className="text-3xl gs-heading mb-6 md:text-4xl">
                Claridad para decidir el siguiente paso.
              </h2>
              <p className="text-base leading-relaxed text-[var(--gs-text-secondary)] md:text-lg">
                Si tu situación no aparece aquí, cuéntanosla en el diagnóstico y
                revisaremos el contexto específico.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <AccordionFAQ items={faq} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnóstico CTA */}
      <section
        id="diagnostico"
        className="relative w-full bg-[var(--gs-base)] py-24 md:py-32"
      >
        <div className="glow-spotlight glow-br" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="gs-subheading mb-6 block">Diagnóstico exprés</span>
              <h2 className="text-3xl gs-heading mb-6 md:text-4xl">
                Empecemos por el riesgo que hoy te quita el sueño.
              </h2>
              <p className="text-base leading-relaxed text-[var(--gs-text-secondary)] md:text-lg">
                Cuéntanos brevemente qué estás enfrentando. Un especialista
                revisará el contexto y te contactará para definir el siguiente
                paso.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="gs-card rounded-lg p-8 md:p-10"
            >
              {submitted ? (
                <div className="py-8" role="status">
                  <span className="cumplimiento-accent-text gs-subheading mb-5 block">
                    Solicitud recibida
                  </span>
                  <h3 className="text-2xl gs-heading mb-4 md:text-3xl">
                    Gracias por confiar en GlobalServ.
                  </h3>
                  <p className="text-base leading-relaxed text-[var(--gs-text-secondary)]">
                    Revisaremos la información y nos pondremos en contacto
                    contigo a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <label
                      htmlFor="diagnostico-name"
                      className="mb-3 block text-xs uppercase tracking-[0.15em] text-[var(--gs-text-muted)]"
                    >
                      Nombre
                    </label>
                    <input
                      id="diagnostico-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      maxLength={120}
                      className="gs-input w-full rounded-md px-4 py-3"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="diagnostico-email"
                        className="mb-3 block text-xs uppercase tracking-[0.15em] text-[var(--gs-text-muted)]"
                      >
                        Correo electrónico
                      </label>
                      <input
                        id="diagnostico-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        maxLength={160}
                        className="gs-input w-full rounded-md px-4 py-3"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="diagnostico-organization"
                        className="mb-3 block text-xs uppercase tracking-[0.15em] text-[var(--gs-text-muted)]"
                      >
                        Organización
                      </label>
                      <input
                        id="diagnostico-organization"
                        name="organization"
                        type="text"
                        value={form.organization}
                        onChange={handleChange}
                        maxLength={160}
                        className="gs-input w-full rounded-md px-4 py-3"
                        placeholder="Empresa o institución"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="diagnostico-situation"
                      className="mb-3 block text-xs uppercase tracking-[0.15em] text-[var(--gs-text-muted)]"
                    >
                      ¿En qué podemos ayudarte?
                    </label>
                    <textarea
                      id="diagnostico-situation"
                      name="situation"
                      value={form.situation}
                      onChange={handleChange}
                      required
                      maxLength={1000}
                      rows={4}
                      className="gs-input w-full resize-none rounded-md px-4 py-3"
                      placeholder="Describe brevemente el reto o procedimiento"
                    />
                  </div>

                  <div className="absolute -left-[10000px] h-px w-px overflow-hidden">
                    <label htmlFor="diagnostico-website">Sitio web</label>
                    <input
                      id="diagnostico-website"
                      name="website"
                      type="text"
                      value={form.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-300" role="alert">
                      {error}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    className="w-full rounded-md bg-[var(--gs-accent)] px-6 py-4 text-sm uppercase tracking-[0.1em] text-[var(--gs-text-primary)] transition-all duration-300 hover:bg-[var(--gs-accent)]/80 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Enviando…" : "Solicitar diagnóstico"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
