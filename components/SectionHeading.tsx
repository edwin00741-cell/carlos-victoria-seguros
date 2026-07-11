export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text: string; align?: "left" | "center" }) {
  return (
    <div className={`section-heading ${align === "center" ? "centered" : ""}`}>
      <p className="eyebrow"><span /> {eyebrow}</p><div><h2>{title}</h2><p>{text}</p></div>
    </div>
  );
}
