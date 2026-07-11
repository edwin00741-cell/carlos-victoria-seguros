"use client";

import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Martina Edelweist",
    role: "Cliente de referencia",
    quote: "La explicación fue clara y pude entender qué opción se ajustaba mejor a lo que necesitaba.",
    image: "/stock/testimonial-woman-generated.png",
  },
  {
    name: "Ana Rodríguez",
    role: "Cliente de referencia",
    quote: "Sentí acompañamiento durante todo el proceso y pude resolver mis dudas sin complicaciones.",
    image: "/stock/testimonial-woman-2.jpg",
  },
  {
    name: "Luis Moreno",
    role: "Cliente de referencia",
    quote: "Una atención cercana, rápida y enfocada en explicar antes de tomar una decisión.",
    image: "/stock/testimonial-man-generated.png",
  },
];

export function CircularCommitments() {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive((value) => (value + 1) % testimonials.length), []);
  const previous = useCallback(() => setActive((value) => (value - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = window.setInterval(next, 5200);
    return () => window.clearInterval(timer);
  }, [next]);

  return (
    <div className="testimonials-carousel" aria-roledescription="carrusel" aria-label="Testimonios de clientes">
      <div className="testimonial-visuals">
        {testimonials.map((item, index) => {
          const offset = (index - active + testimonials.length) % testimonials.length;
          const position = offset > testimonials.length / 2 ? offset - testimonials.length : offset;
          const visible = Math.abs(position) <= 1;
          return (
            <figure
              className={`testimonial-photo ${position === 0 ? "is-active" : "is-adjacent"}`}
              key={item.name}
              style={{
                transform: `translateX(${position * 27}%) translateY(${position === 0 ? 0 : -7}%) scale(${position === 0 ? 1 : 0.86}) rotate(${position * -3}deg)`,
                opacity: visible ? 1 : 0,
                visibility: visible ? "visible" : "hidden",
                zIndex: position === 0 ? 3 : 1,
              }}
            >
              <img src={item.image} alt={position === 0 ? item.name : ""} />
            </figure>
          );
        })}
      </div>
      <div className="testimonial-copy" aria-live="polite">
        <h3>{testimonials[active].name}</h3>
        <p className="testimonial-role">{testimonials[active].role}</p>
        <p className="testimonial-quote">{testimonials[active].quote}</p>
        <div className="testimonial-controls">
          <button type="button" onClick={previous} aria-label="Testimonio anterior">
            <img className="control-arrow arrow-previous" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" />
          </button>
          <button type="button" onClick={next} aria-label="Siguiente testimonio">
            <img className="control-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
