const insurers = [
  { name: "ASSA Compañía de Seguros", src: "/insurers/assa.png", className: "logo-assa" },
  { name: "MAPFRE Panamá", src: "/insurers/mapfre.png", className: "logo-mapfre" },
  { name: "Seguros SURA Panamá", src: "/insurers/sura.png", className: "logo-sura" },
  { name: "Internacional de Seguros", src: "/insurers/internacional.svg", className: "logo-internacional" },
  { name: "Acerta Seguros", src: "/insurers/acerta.png", className: "logo-acerta" },
  { name: "Banesco Seguros Panamá", src: "/insurers/banesco.png", className: "logo-banesco" },
  { name: "Óptima Compañía de Seguros", src: "/insurers/optima.png", className: "logo-optima" },
  { name: "Seguros FEDPA", src: "/insurers/fedpa.svg", className: "logo-fedpa" },
  { name: "Aseguradora Ancón", src: "/insurers/ancon.png", className: "logo-ancon" },
  { name: "La Regional de Seguros", src: "/insurers/la-regional.png", className: "logo-regional" },
];

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="insurer-logo-group" aria-hidden={hidden || undefined}>
      {insurers.map((insurer) => (
        <div className="insurer-logo-card" key={`${insurer.name}-${hidden ? "copy" : "main"}`}>
          <img className={insurer.className} src={insurer.src} alt={hidden ? "" : insurer.name} />
        </div>
      ))}
    </div>
  );
}

export function InsurerLogoSlider() {
  return (
    <section className="insurer-band" aria-label="Aseguradoras con presencia en Panamá">
      <div className="section-shell insurer-band-inner">
        <div className="insurer-band-label">
          <span>Opciones para comparar</span>
          <p>Aseguradoras con presencia en Panamá</p>
        </div>
        <div className="insurer-marquee">
          <div className="insurer-track">
            <LogoGroup />
            <LogoGroup hidden />
          </div>
        </div>
      </div>
      <p className="insurer-disclaimer">Logos usados como referencia visual. Productos, nombramientos y relaciones comerciales sujetos a confirmación.</p>
    </section>
  );
}
