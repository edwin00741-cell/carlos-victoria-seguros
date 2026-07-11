import Link from "next/link";

export const metadata = {
  title: "Política de privacidad | Carlos Victoria",
  description: "Información general sobre el tratamiento de datos personales de Carlos Victoria, Corredor de Seguros.",
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-shell">
        <Link className="privacy-back" href="/">← Volver al sitio</Link>
        <p className="eyebrow">Información legal</p>
        <h1>Política de privacidad</h1>
        <p className="privacy-lead">En Carlos Victoria, Corredor de Seguros, respetamos la privacidad de las personas que nos contactan y utilizamos sus datos únicamente para atender sus solicitudes.</p>
        <section><h2>Datos que podemos recibir</h2><p>Podemos recibir nombre, correo electrónico, teléfono, tipo de seguro y la información que decidas compartir al solicitar orientación o una cotización.</p></section>
        <section><h2>Para qué los utilizamos</h2><p>Usamos estos datos para responder consultas, preparar alternativas de cobertura, dar seguimiento a solicitudes y mantener una comunicación relacionada con el servicio solicitado.</p></section>
        <section><h2>Protección y conservación</h2><p>Aplicamos medidas razonables para proteger la información y la conservamos solo durante el tiempo necesario para cumplir los fines descritos o las obligaciones aplicables.</p></section>
        <section><h2>Tus opciones</h2><p>Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a <a href="mailto:info@cvasesoria.com">info@cvasesoria.com</a>.</p></section>
        <section><h2>Actualizaciones</h2><p>Esta política puede actualizarse para reflejar cambios legales o de servicio. La versión vigente estará disponible en esta página.</p></section>
        <p className="privacy-updated">Última actualización: julio de 2026.</p>
      </div>
    </main>
  );
}
