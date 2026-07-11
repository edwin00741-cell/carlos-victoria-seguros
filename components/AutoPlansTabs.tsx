"use client";

import { useState } from "react";

type InsurerPlan = {
  insurer: string;
  logo: string;
  plan?: string;
  price: string;
  coverage: string[];
  benefits: string[];
  payment: string;
  featured?: boolean;
};

type PlanCategory = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  plans: InsurerPlan[];
};

const partnerLogos = [
  ["Internacional de Seguros", "/insurers/internacional.svg", ""],
  ["WorldWide Medical Assurance", "/insurers/worldwide.png", ""],
  ["Óptima Compañía de Seguros", "/insurers/optima.png", "on-dark"],
  ["Seguros SURA", "/insurers/sura.svg", ""],
  ["MAPFRE Panamá", "/insurers/mapfre.png", ""],
  ["Seguros FEDPA", "/insurers/fedpa.svg", ""],
  ["Aseguradora Ancón", "/insurers/ancon.png", ""],
  ["ASSA Compañía de Seguros", "/insurers/assa.png", ""],
  ["La Regional de Seguros", "/insurers/la-regional.png", ""],
  ["Acerta Seguros", "/insurers/acerta.png", ""],
];

const categories: PlanCategory[] = [
  {
    id: "basico",
    label: "Particular Básico",
    eyebrow: "Daños a terceros",
    title: "Protección esencial para tu auto.",
    description: "Alternativas de entrada con responsabilidad civil y asistencias útiles para el día a día.",
    plans: [
      {
        insurer: "La Regional de Seguros",
        logo: "/insurers/la-regional.png",
        price: "B/.120.00",
        coverage: ["Lesiones corporales B/.5,000 / B/.10,000", "Daños a la propiedad ajena B/.5,000"],
        benefits: ["Grúa por colisión o desperfecto", "Asistencia vial y cerrajería", "Asistencia legal"],
        payment: "Pago al contado.",
      },
      {
        insurer: "Seguros FEDPA",
        logo: "/insurers/fedpa.svg",
        price: "B/.130.00",
        coverage: ["Lesiones corporales B/.5,000 / B/.10,000", "Daños a la propiedad ajena B/.5,000"],
        benefits: ["Grúa por colisión hasta B/.100", "Ambulancia", "Asistencia legal"],
        payment: "Contado o 2 letras según condiciones del flyer.",
      },
      {
        insurer: "Seguros FEDPA",
        logo: "/insurers/fedpa.svg",
        plan: "Básico ampliado",
        price: "B/.165.00",
        coverage: ["Lesiones corporales B/.5,000 / B/.10,000", "Daños a la propiedad ajena B/.5,000", "Muerte accidental B/.5,000"],
        benefits: ["Grúa por colisión y avería", "Cerrajería y asistencia vial", "Ambulancia y asistencia legal"],
        payment: "Contado o 2 letras según condiciones del flyer.",
      },
      {
        insurer: "Internacional de Seguros",
        logo: "/insurers/internacional.svg",
        price: "B/.183.00",
        coverage: ["Lesiones corporales B/.10,000 / B/.20,000", "Daños a la propiedad ajena B/.10,000", "Gastos médicos B/.2,000 / B/.10,000"],
        benefits: ["Hasta 3 eventos de grúa", "Asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Contado o 3 letras de B/.61.00.",
        featured: true,
      },
    ],
  },
  {
    id: "express",
    label: "Particular Express",
    eyebrow: "Respuesta ágil",
    title: "Cobertura práctica con más beneficios.",
    description: "Planes para quien busca elevar límites y sumar apoyo vial, médico y legal.",
    plans: [
      {
        insurer: "Acerta Seguros",
        logo: "/insurers/acerta.png",
        price: "B/.180.00",
        coverage: ["Lesiones corporales B/.10,000 / B/.20,000", "Daños a la propiedad ajena B/.15,000", "Gastos médicos B/.2,000 / B/.10,000"],
        benefits: ["Hasta 2 eventos de grúa", "Asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Pago al contado.",
        featured: true,
      },
      {
        insurer: "ASSA Compañía de Seguros",
        logo: "/insurers/assa.png",
        price: "B/.185.00",
        coverage: ["Lesiones corporales B/.10,000 / B/.20,000", "Daños a la propiedad ajena B/.10,000", "Gastos médicos B/.2,000 / B/.10,000", "Muerte accidental B/.10,000"],
        benefits: ["Hasta 3 eventos de grúa", "Asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Contado; consultar opciones con tarjeta o Yappy.",
      },
      {
        insurer: "Seguros SURA",
        logo: "/insurers/sura.svg",
        price: "B/.201.12",
        coverage: ["Lesiones corporales B/.10,000 / B/.20,000", "Daños a la propiedad ajena B/.10,000", "Gastos médicos B/.2,000 / B/.10,000", "Muerte accidental B/.10,000"],
        benefits: ["Hasta 3 eventos de grúa", "Asistencia vial, ambulancia y legal", "Revisado gratis"],
        payment: "Contado o 3 letras mensuales de B/.67.04.",
      },
    ],
  },
  {
    id: "premium",
    label: "Particular Premium",
    eyebrow: "Límites superiores",
    title: "Más respaldo frente a imprevistos.",
    description: "Opciones con límites de responsabilidad civil más altos y asistencias integradas.",
    plans: [
      {
        insurer: "Internacional de Seguros",
        logo: "/insurers/internacional.svg",
        price: "B/.208.00",
        coverage: ["Lesiones corporales B/.25,000 / B/.50,000", "Daños a la propiedad ajena B/.25,000", "Gastos médicos B/.5,000 / B/.25,000"],
        benefits: ["Hasta 3 eventos de grúa", "Asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Contado o 3 letras de B/.69.33.",
        featured: true,
      },
      {
        insurer: "ASSA Compañía de Seguros",
        logo: "/insurers/assa.png",
        price: "B/.211.86",
        coverage: ["Lesiones corporales B/.25,000 / B/.50,000", "Daños a la propiedad ajena B/.25,000", "Gastos médicos B/.2,000 / B/.10,000", "Muerte accidental B/.10,000"],
        benefits: ["Hasta 3 eventos de grúa", "Asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Contado o 2 letras mensuales de B/.105.93.",
      },
      {
        insurer: "Acerta Seguros",
        logo: "/insurers/acerta.png",
        price: "B/.235.00",
        coverage: ["Lesiones corporales B/.25,000 / B/.50,000", "Daños a la propiedad ajena B/.25,000", "Gastos médicos B/.5,000 / B/.25,000"],
        benefits: ["Hasta 2 eventos de grúa", "Asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Pago al contado.",
      },
    ],
  },
  {
    id: "pickup",
    label: "Pick-up",
    eyebrow: "Uso particular y trabajo",
    title: "Protección pensada para tu pick-up.",
    description: "Compara alternativas con distintos límites, asistencias y facilidades de pago.",
    plans: [
      {
        insurer: "Seguros FEDPA",
        logo: "/insurers/fedpa.svg",
        price: "B/.165.00",
        coverage: ["Lesiones corporales B/.5,000 / B/.10,000", "Daños a la propiedad ajena B/.10,000", "Muerte accidental B/.5,000"],
        benefits: ["Grúa por colisión y avería", "Cerrajería, asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Contado o 2 letras según condiciones del flyer.",
      },
      {
        insurer: "ASSA Compañía de Seguros",
        logo: "/insurers/assa.png",
        price: "B/.185.00",
        coverage: ["Lesiones corporales B/.10,000 / B/.20,000", "Daños a la propiedad ajena B/.10,000", "Gastos médicos B/.2,000 / B/.10,000", "Muerte accidental B/.10,000"],
        benefits: ["Hasta 3 eventos de grúa", "Asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Contado; consultar opciones con tarjeta o Yappy.",
      },
      {
        insurer: "Acerta Seguros",
        logo: "/insurers/acerta.png",
        price: "B/.250.00",
        coverage: ["Lesiones corporales B/.50,000 / B/.100,000", "Daños a la propiedad ajena B/.50,000", "Gastos médicos B/.5,000 / B/.25,000"],
        benefits: ["Hasta 2 eventos de grúa", "Asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Pago al contado.",
      },
      {
        insurer: "Internacional de Seguros",
        logo: "/insurers/internacional.svg",
        price: "B/.252.28",
        coverage: ["Lesiones corporales B/.50,000 / B/.100,000", "Daños a la propiedad ajena B/.50,000", "Gastos médicos B/.5,000 / B/.25,000"],
        benefits: ["Hasta 3 eventos de grúa", "Asistencia vial y ambulancia", "Asistencia legal"],
        payment: "Contado o 3 letras de B/.84.09.",
        featured: true,
      },
    ],
  },
  {
    id: "taxi",
    label: "Taxi",
    eyebrow: "Vehículo de transporte",
    title: "Planes para mantener tu taxi protegido.",
    description: "Tres niveles de FEDPA con cobertura a terceros, ocupantes y asistencias seleccionadas.",
    plans: [
      {
        insurer: "Seguros FEDPA",
        logo: "/insurers/fedpa.svg",
        plan: "Plan Básico",
        price: "B/.318.09",
        coverage: ["Lesiones corporales B/.5,000 por persona / B/.10,000 por accidente", "Daños a la propiedad ajena B/.5,000", "Coberturas para conductor y pasajeros"],
        benefits: ["Grúa por accidente hasta B/.100", "Inspección in situ"],
        payment: "Precio al contado; consultar letras indicadas en el flyer.",
      },
      {
        insurer: "Seguros FEDPA",
        logo: "/insurers/fedpa.svg",
        plan: "Plan Plus",
        price: "B/.348.09",
        coverage: ["Lesiones corporales B/.5,000 por persona / B/.10,000 por accidente", "Daños a la propiedad ajena B/.5,000", "Coberturas para conductor y pasajeros"],
        benefits: ["Grúa hasta B/.150", "Ambulancia y cerrajería", "Inspección in situ"],
        payment: "Precio al contado; consultar letras indicadas en el flyer.",
      },
      {
        insurer: "Seguros FEDPA",
        logo: "/insurers/fedpa.svg",
        plan: "Plan VIP",
        price: "B/.368.09",
        coverage: ["Lesiones corporales B/.5,000 por persona / B/.10,000 por accidente", "Daños a la propiedad ajena B/.5,000", "Coberturas para conductor y pasajeros"],
        benefits: ["Grúa por accidente y avería", "Auxilio vial, ambulancia y cerrajería", "Inspección in situ"],
        payment: "Precio al contado; consultar letras indicadas en el flyer.",
        featured: true,
      },
    ],
  },
];

function whatsappLink(category: PlanCategory, plan?: InsurerPlan) {
  const message = plan
    ? `Hola Carlos, quiero confirmar el plan ${plan.plan || category.label} de ${plan.insurer} mostrado desde ${plan.price}.`
    : `Hola Carlos, quiero comparar los planes de auto para ${category.label}.`;
  return `https://wa.me/50763197485?text=${encodeURIComponent(message)}`;
}

export function AutoPlansTabs() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((category) => category.id === activeId) || categories[0];

  const moveTab = (currentId: string, direction: number) => {
    const currentIndex = categories.findIndex((category) => category.id === currentId);
    const nextIndex = (currentIndex + direction + categories.length) % categories.length;
    const nextId = categories[nextIndex].id;
    setActiveId(nextId);
    window.requestAnimationFrame(() => document.getElementById(`tab-${nextId}`)?.focus());
  };

  return (
    <section className="auto-plans-section" id="planes-auto" aria-labelledby="auto-plans-title">
      <div className="section-shell">
        <div className="auto-plans-intro">
          <div>
            <p className="eyebrow eyebrow-light">Seguro de auto en minutos</p>
            <h2 id="auto-plans-title">Compara el plan que mejor se ajusta a tu vehículo.</h2>
          </div>
          <p>Información resumida de las propuestas suministradas. Carlos confirma contigo vigencia, elegibilidad y condiciones antes de emitir.</p>
        </div>

        <div className="auto-benefit-strip" aria-label="Beneficios frecuentes en seguros de auto">
          {["Asistencia 24 horas", "Servicio de grúa", "Asistencia vial", "Asistencia legal"].map((benefit) => (
            <span key={benefit}><img src="/icons/shield-check.svg" alt="" aria-hidden="true" />{benefit}</span>
          ))}
        </div>

        <div className="auto-partners" aria-label="Aseguradoras mostradas en las propuestas">
          {partnerLogos.map(([name, logo, className]) => (
            <span className={`auto-partner-logo ${className}`} key={name} title={name}>
              <img src={logo} alt={name} />
            </span>
          ))}
        </div>

        <div className="auto-tabs" role="tablist" aria-label="Tipos de plan de automóvil">
          {categories.map((category) => (
            <button
              aria-controls={`panel-${category.id}`}
              aria-selected={category.id === activeId}
              className={`auto-tab ${category.id === activeId ? "is-active" : ""}`}
              id={`tab-${category.id}`}
              key={category.id}
              onClick={() => setActiveId(category.id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
                event.preventDefault();
                moveTab(category.id, event.key === "ArrowRight" ? 1 : -1);
              }}
              role="tab"
              tabIndex={category.id === activeId ? 0 : -1}
              type="button"
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          aria-labelledby={`tab-${activeCategory.id}`}
          className="auto-tab-panel"
          id={`panel-${activeCategory.id}`}
          key={activeCategory.id}
          role="tabpanel"
          tabIndex={0}
        >
          <div className="auto-category-head">
            <div><p>{activeCategory.eyebrow}</p><h3>{activeCategory.title}</h3></div>
            <div><p>{activeCategory.description}</p><a href={whatsappLink(activeCategory)} target="_blank" rel="noreferrer">Comparar por WhatsApp <img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></a></div>
          </div>

          <div className={`auto-plan-grid ${activeCategory.plans.length === 3 ? "three" : ""}`}>
            {activeCategory.plans.map((plan, index) => (
              <article className={`auto-plan-card ${plan.featured ? "featured" : ""}`} key={`${plan.insurer}-${plan.plan || index}`}>
                {plan.featured && <span className="plan-recommended">Opción destacada</span>}
                <div className="plan-logo"><img src={plan.logo} alt={plan.insurer} /></div>
                <p className="plan-name">{plan.plan || activeCategory.label}</p>
                <div className="plan-price"><small>Desde</small><strong>{plan.price}</strong></div>
                <div className="plan-detail"><span>Cobertura principal</span><ul>{plan.coverage.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="plan-detail"><span>Beneficios</span><ul>{plan.benefits.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <p className="plan-payment">{plan.payment}</p>
                <a className="plan-cta" href={whatsappLink(activeCategory, plan)} target="_blank" rel="noreferrer">Confirmar este plan <img src="/icons/whatsapp.svg" alt="" aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>

        <p className="auto-plans-disclaimer"><strong>Importante:</strong> precios, límites, beneficios, pagos y disponibilidad se muestran como referencia a partir de los flyers suministrados. Están sujetos a confirmación, evaluación del riesgo, términos de la aseguradora, impuestos y vigencia comercial. Esto no constituye una cotización ni una póliza.</p>
      </div>
    </section>
  );
}
