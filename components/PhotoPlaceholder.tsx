export function PhotoPlaceholder({ label, variant, src }: { label: string; variant: "hero" | "portrait" | "card"; src: string }) {
  return (
    <div className={`photo-placeholder photo-${variant}`}>
      <img className="stock-photo-image" src={src} alt={`${label}.`} />
      <div className="photo-tint" aria-hidden="true" />
      <div className="placeholder-caption"><strong>{label}</strong></div>
    </div>
  );
}
