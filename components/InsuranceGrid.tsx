const solutions = [
  {
    icon: "/icons/user-group.svg",
    title: "Seguros para personas",
    text: "Protección personal y familiar con alternativas explicadas con claridad, sin presión y sin costo adicional por la asesoría.",
    bullets: ["Auto, salud, vida y hogar", "Accidentes personales y viajes", "Vida Express con emisión en línea"],
    images: ["/stock/car.jpg", "/stock/health.jpg", "/stock/family.jpg"],
    direction: "horizontal",
  },
  {
    icon: "/icons/building-office.svg",
    title: "Seguros para empresas",
    text: "Coberturas para proteger operaciones, activos, personal, transporte y continuidad comercial.",
    bullets: ["Multirriesgo, incendio y responsabilidad civil", "CAR, maquinaria y equipo electrónico", "Carga, flotas y equipo pesado"],
    images: ["/stock/business.jpg", "/stock/home.jpg", "/stock/car.jpg"],
    direction: "vertical",
  },
  {
    icon: "/icons/document-check.svg",
    title: "Fianzas comerciales",
    text: "Opciones para respaldar compromisos, propuestas, pagos, contratos y requisitos de operación.",
    bullets: ["Fianzas de propuesta y cumplimiento", "Fianzas de pago", "Licencias de menores y otras fianzas"],
    images: ["/stock/advisor.jpg", "/stock/business.jpg", "/stock/home.jpg"],
    direction: "horizontal",
  },
];

export function InsuranceGrid() {
  return (
    <div className="service-stories">
      {solutions.map((item, index) => (
        <article className={`service-story reveal ${index % 2 ? "reverse" : ""}`} key={item.title}>
          <div className="service-text">
            <span className="service-icon" aria-hidden="true"><img src={item.icon} alt="" /></span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <div className="service-actions"><a className="button button-primary" href="#cotizar">Cotizar esta protección</a><a className="text-link" href="#contacto">Consultar <img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></a></div>
          </div>
          <div className={`service-media ${item.direction === "vertical" ? "vertical-media" : ""}`}>
            <div className={`media-track ${item.direction}`}>
              {item.images.map((image, imageIndex) => <img src={image} alt={`${item.title}, escena ${imageIndex + 1}.`} key={image} />)}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
