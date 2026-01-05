import { WordRotate } from "@/components/ui/word-rotate";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/videoFondo.mp4" type="video/mp4" />
        <source src="/videos/videoFondo.webm" type="video/webm" />
      </video>

      {/* Overlay opcional para mejorar legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      {/* Tu contenido */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col">
          <h1 className="text-white px-5 md:px-0  text-3xl md:text-5xl text-center">
            En GlobalServ Nuestro Trabajo es:
          </h1>

          <WordRotate
            className="text-6xl mt-1 text-center text-white"
            words={[
              "Perfección",
              "Eficacia",
              "Compromiso",
              "Innovación",
              "Transparencia",
              "Agilidad",
              "Excelencia",
              "Adaptabilidad",
              "Confianza",
              "Profesionalismo",
            ]}
            duration={2500}
          />
        </div>
      </div>
    </div>
  );
}
