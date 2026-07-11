export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#inicio" aria-label="Carlos Victoria, inicio">
      <span className="brand-logo-frame">
        <img src="/brand/carlos-victoria-logo.svg" alt="Carlos Victoria, Corredor de Seguros" />
      </span>
    </a>
  );
}
