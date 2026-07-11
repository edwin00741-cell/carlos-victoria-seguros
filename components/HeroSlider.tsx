"use client";

import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: "/brand/carlos-victoria-portrait.jpeg",
    eyebrow: "Asesoría de seguros en Panamá",
    title: "Protección clara para cada etapa de tu vida.",
    text: "Más de 15 años asesorando a personas, familias y empresas para encontrar la protección que realmente necesitan.",
    note: "Carlos Victoria · Corredor de seguros",
  },
  {
    image: "/stock/family.jpg",
    eyebrow: "Personas y familias",
    title: "Tu tranquilidad empieza con una buena orientación.",
    text: "Opciones para vida, salud, hogar y movilidad explicadas de forma sencilla y personalizada.",
    note: "Opciones para personas y familias",
  },
  {
    image: "/stock/business.jpg",
    eyebrow: "Protección empresarial",
    title: "Coberturas pensadas para lo que estás construyendo.",
    text: "Acompañamiento para evaluar riesgos, continuidad y protección de operaciones, equipos y personas.",
    note: "Protección para operaciones y equipos",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setActive((value) => (value + 1) % slides.length), []);
  const previous = () => setActive((value) => (value - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(next, 6200);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  const slide = slides[active];

  return (
    <section
      className="reference-hero"
      id="inicio"
      style={{ "--hero-image": `url(${slide.image})` } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carrusel"
      aria-label="Soluciones de protección"
    >
      <button className="hero-slider-arrow hero-arrow-left" type="button" onClick={previous} aria-label="Ver mensaje anterior"><img className="control-arrow arrow-previous" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></button>
      <button className="hero-slider-arrow hero-arrow-right" type="button" onClick={next} aria-label="Ver mensaje siguiente"><img className="control-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></button>

      <div className="hero-copy" key={active} aria-live="polite">
        <p className="eyebrow eyebrow-light">{slide.eyebrow}</p>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#cotizar">Solicitar cotización</a>
          <a className="button button-secondary button-on-dark" href="#seguros">Ver seguros</a>
        </div>
      </div>

      <div className="hero-dots" aria-label="Seleccionar mensaje">
        {slides.map((item, index) => (
          <button
            className={index === active ? "is-active" : ""}
            type="button"
            key={item.title}
            onClick={() => setActive(index)}
            aria-label={`Ver mensaje ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
