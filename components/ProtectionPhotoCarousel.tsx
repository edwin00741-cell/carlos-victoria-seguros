"use client";

import { useCallback, useEffect, useState } from "react";

const images = [
  { src: "/stock/family.jpg", alt: "Familia disfrutando un momento al aire libre", label: "Protección familiar" },
  { src: "/stock/car.jpg", alt: "Automóvil circulando en carretera", label: "Movilidad protegida" },
  { src: "/stock/health.jpg", alt: "Profesional de salud usando un dispositivo móvil", label: "Bienestar y salud" },
  { src: "/stock/home.jpg", alt: "Modelo de vivienda junto a sus llaves", label: "Patrimonio seguro" },
  { src: "/stock/business.jpg", alt: "Equipo de trabajo reunido alrededor de una mesa", label: "Continuidad empresarial" },
];

export function ProtectionPhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrentIndex((index) => (index + 1) % images.length), []);
  const previous = () => setCurrentIndex((index) => (index - 1 + images.length) % images.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(next, 4200);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  return (
    <div
      className="protection-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-label="Galería de soluciones de protección"
    >
      <div className="carousel-stage">
        {images.map((image, index) => {
          const rawOffset = (index - currentIndex + images.length) % images.length;
          const position = rawOffset > Math.floor(images.length / 2) ? rawOffset - images.length : rawOffset;
          const visible = Math.abs(position) <= 1;

          return (
            <figure
              className={`carousel-photo ${position === 0 ? "is-active" : "is-adjacent"}`}
              key={image.src}
              style={{
                transform: `translateX(${position * 58}%) scale(${position === 0 ? 1 : 0.82}) rotateY(${position * -9}deg)`,
                opacity: visible ? (position === 0 ? 1 : 0.42) : 0,
                visibility: visible ? "visible" : "hidden",
                zIndex: position === 0 ? 3 : 1,
              }}
              aria-hidden={position !== 0}
            >
              <img src={image.src} alt={position === 0 ? image.alt : ""} />
              <figcaption>{image.label}</figcaption>
            </figure>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button type="button" onClick={previous} aria-label="Ver imagen anterior"><img className="control-arrow arrow-previous" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></button>
        <div className="carousel-progress" aria-hidden="true">
          {images.map((image, index) => <i className={index === currentIndex ? "active" : ""} key={image.src} />)}
        </div>
        <button type="button" onClick={next} aria-label="Ver imagen siguiente"><img className="control-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></button>
      </div>
    </div>
  );
}
