"use client";

import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <div className="form-success" role="status"><span>✓</span><h3>Solicitud recibida.</h3><p>Gracias. Este formulario está listo para conectarse con el canal de atención confirmado por Carlos Victoria.</p><button type="button" onClick={() => setSent(false)}>Enviar otra solicitud</button></div>;
  }

  return (
    <form className="quote-form" onSubmit={submitDemo}>
      <div className="form-head"><p>Cuéntanos qué quieres proteger.</p></div>
      <label><span>Nombre completo</span><input name="name" type="text" placeholder="Escribe tu nombre" required /></label>
      <div className="field-row"><label><span>Correo electrónico</span><input name="email" type="email" placeholder="nombre@correo.com" required /></label><label><span>Teléfono</span><input name="phone" type="tel" placeholder="Número de contacto" required /></label></div>
      <div className="field-row"><label><span>Tipo de seguro</span><select name="insurance" defaultValue="" required><option value="" disabled>Selecciona una opción</option><option>Automóvil</option><option>Vida</option><option>Salud</option><option>Hogar</option><option>Empresa</option><option>Otro</option></select></label><label><span>Perfil</span><select name="profile" defaultValue="persona"><option value="persona">Persona / Familia</option><option value="empresa">Empresa</option></select></label></div>
      <label><span>¿Qué necesitas proteger?</span><textarea name="message" rows={3} placeholder="Cuéntanos brevemente qué estás buscando" /></label>
      <label className="consent"><input type="checkbox" required /><span>Acepto ser contactado respecto a esta solicitud. <a href="/privacidad">Consultar política de privacidad.</a></span></label>
      <button className="button button-primary form-submit" type="submit">Enviar solicitud <img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></button>
      <small className="form-disclaimer">Tus datos se utilizarán únicamente para responder a esta solicitud.</small>
    </form>
  );
}
