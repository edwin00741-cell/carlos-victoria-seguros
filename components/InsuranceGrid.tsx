const solutions = [
  {
    icon: "/icons/user-group.svg",
    title: "Seguros para personas",
    text: "Protección personal y familiar con alternativas explicadas con claridad, sin presión y sin costo adicional por la asesoría.",
    bullets: ["Salud, accidentes personales y planes viajeros", "Vida a término y planes con ahorros", "Auto, incendio y hogar"],
    images: ["/stock/health.jpg", "/stock/family.jpg", "/stock/home.jpg"],
    direction: "horizontal",
  },
  {
    icon: "/icons/building-office.svg",
    title: "Seguros para empresas",
    text: "Coberturas para proteger operaciones, activos, personal, transporte y continuidad empresarial.",
    bullets: ["Incendio y multirriesgo comercial", "Responsabilidad civil y CAR todo riesgo contratista", "Flotas, carga, equipos pesados y maquinaria"],
    images: ["/stock/business.jpg", "/stock/home.jpg", "/stock/car.jpg"],
    direction: "vertical",
  },
  {
    icon: "/icons/document-check.svg",
    title: "Fianzas",
    text: "Respaldo para contratos, propuestas, pagos, licencias y requisitos de operación, con especial atención al sector construcción.",
    bullets: ["Fianza de propuestas", "Fianza de cumplimiento y pago", "Fianzas para menores y otras garantías"],
    images: ["/stock/business.jpg", "/stock/home.jpg", "/stock/advisor.jpg"],
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
