import { BrandMark } from "./BrandMark";

const links = [
  ["Inicio", "#inicio"], ["Seguros", "#seguros"], ["Planes de auto", "#planes-auto"],
  ["Proceso", "#proceso"], ["Sobre mí", "#sobre-mi"], ["Preguntas", "#preguntas"],
];

export function Header() {
  return (
    <>
      <div className="topbar"><div className="topbar-inner"><span>Panamá · Corredor de seguros</span><strong>15+ años de experiencia</strong><a href="tel:+50763197485">6319-7485 <img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></a></div></div>
      <header className="site-header">
        <div className="nav-shell">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Navegación principal">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
          <a className="nav-cta" href="#cotizar">Cotizar seguro <img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></a>
          <details className="mobile-menu"><summary aria-label="Abrir menú"><span /><span /></summary><nav>{links.map(([label, href]) => <a href={href} key={href}>{label}<img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></a>)}<a className="button button-primary" href="#cotizar">Cotizar seguro</a></nav></details>
        </div>
      </header>
    </>
  );
}
