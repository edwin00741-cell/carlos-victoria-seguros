"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <button className={`back-to-top${visible ? " is-visible" : ""}`} type="button" aria-label="Volver al inicio" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></button>;
}
