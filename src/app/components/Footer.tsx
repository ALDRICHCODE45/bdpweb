export const Footer = () => {
  return (
    <footer className="relative w-full bg-linear-to-b from-[#1a3a4a] to-slate-900 py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-200 mb-4 tracking-wide">
              DIRECCIÓN
            </h2>
            <p className="text-base md:text-lg text-slate-300/90 leading-relaxed">
              Av. de la Industria 300. Punto Central, Oficina 21. Colonia
              Veredalta San Pedro Garza García, Nuevo León CP. 66270
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2 tracking-wide">
                Correo
              </h2>
              <p className="text-base md:text-lg text-slate-300/90">
                globalServ@gmail.com
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2 tracking-wide">
                Teléfonos
              </h2>
              <p className="text-base md:text-lg text-slate-300/90">
                (81) 2721.0080
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
