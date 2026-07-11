import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand"><BrandMark light /><p>Asesoría personalizada para ayudarte a comprender y evaluar tus opciones de protección.</p><span>Licencia profesional PN8794</span><div className="footer-regulator"><img src="/brand/ssrp-logo.png" alt="Superintendencia de Seguros y Reaseguros de Panamá" /><span>Supervisado por la Superintendencia de Seguros y Reaseguros</span></div></div>
        <div><h3>Navegación</h3><a href="#seguros">Seguros</a><a href="#beneficios">Beneficios</a><a href="#proceso">Proceso</a><a href="#sobre-mi">Sobre Carlos</a></div>
        <div><h3>Información</h3><a href="#preguntas">Preguntas frecuentes</a><a href="#cotizar">Cotizar</a><a href="#contacto">Contacto</a><a href="/privacidad">Privacidad</a></div>
        <div><h3>Contacto</h3><a className="footer-icon-link" href="https://wa.me/50763197485" target="_blank" rel="noreferrer"><img src="/icons/whatsapp.svg" alt="" />WhatsApp · +507 6319-7485</a><a className="footer-icon-link" href="mailto:info@cvasesoria.com"><img src="/icons/envelope.svg" alt="" />info@cvasesoria.com</a><a href="https://instagram.com/cvasesoria" target="_blank" rel="noreferrer">Instagram · @cvasesoria</a><span>Panamá, República de Panamá</span></div>
      </div>
      <div className="section-shell legal-note"><p>Las coberturas, primas y condiciones finales dependen de evaluación y emisión por parte de la aseguradora correspondiente.</p><span>© {new Date().getFullYear()} Carlos Victoria. Todos los derechos reservados.</span></div>
    </footer>
  );
}
