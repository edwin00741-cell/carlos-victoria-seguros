"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const mobileMenu = document.querySelector<HTMLDetailsElement>(".mobile-menu");
    const tracks = Array.from(document.querySelectorAll<HTMLElement>(".service-media .media-track"));
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;
    let revealTimer: number | undefined;
    let lastScrollY = window.scrollY;

    root.classList.add("motion-ready");

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const update = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 10);
      if (reducedMotion) return;

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      tracks.forEach((track) => {
        const media = track.closest<HTMLElement>(".service-media");
        if (!media) return;
        const rect = media.getBoundingClientRect();
        const viewportCenter = viewportHeight * 0.55;
        const mediaCenter = rect.top + rect.height / 2;
        const distance = viewportCenter - mediaCenter;
        const travel = viewportHeight * 0.72 + rect.height / 2;
        const progress = clamp((distance + travel / 2) / travel, 0, 1);

        if (track.classList.contains("vertical")) {
          const maxShift = Math.max(track.scrollHeight - media.clientHeight, 0);
          track.style.transform = `translateX(-50%) translateY(${-progress * maxShift}px)`;
        } else {
          const maxShift = Math.max(track.scrollWidth - media.clientWidth, 0);
          track.style.transform = `translateY(-50%) translateX(${-progress * maxShift}px)`;
        }
      });
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      // Ignore horizontal carousel scrolls and layout/restoration events so the
      // navbar does not flicker when the page itself has not moved vertically.
      if (Math.abs(currentScrollY - lastScrollY) < 2) return;
      header?.classList.add("is-scroll-hidden");
      window.clearTimeout(revealTimer);
      revealTimer = window.setTimeout(() => header?.classList.remove("is-scroll-hidden"), 160);
      lastScrollY = currentScrollY;
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    const closeMenu = () => { if (mobileMenu?.open) mobileMenu.open = false; };
    const onPointerDown = (event: PointerEvent) => { if (mobileMenu?.open && !mobileMenu.contains(event.target as Node)) closeMenu(); };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") closeMenu(); };
    mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    let observer: IntersectionObserver | undefined;
    if (reducedMotion) {
      reveals.forEach((element) => element.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.14 });
      reveals.forEach((element) => observer?.observe(element));
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      window.clearTimeout(revealTimer);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      mobileMenu?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeMenu));
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
