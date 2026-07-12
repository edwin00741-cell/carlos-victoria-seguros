"use client";

import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "No fue posible enviar la solicitud.");
      }

      form.reset();
      setSent(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "No fue posible enviar la solicitud.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return <div className="form-success" role="status"><span>✓</span><h3>Solicitud recibida.</h3><p>Gracias. Carlos Victoria se pondrá en contacto contigo pronto.</p><button type="button" onClick={() => setSent(false)}>Enviar otra solicitud</button></div>;
  }

  return (
    <form className="quote-form" onSubmit={submitQuote}>
      <div className="form-head"><p>Cuéntanos qué quieres proteger.</p></div>
      <label><span>Nombre completo</span><input name="name" type="text" placeholder="Escribe tu nombre" required /></label>
      <div className="field-row"><label><span>Correo electrónico</span><input name="email" type="email" placeholder="nombre@correo.com" required /></label><label><span>Teléfono</span><input name="phone" type="tel" placeholder="Número de contacto" required /></label></div>
      <div className="field-row"><label><span>Tipo de seguro</span><select name="insurance" defaultValue="" required><option value="" disabled>Selecciona una opción</option><option>Automóvil</option><option>Vida</option><option>Salud</option><option>Hogar</option><option>Empresa</option><option>Otro</option></select></label><label><span>Perfil</span><select name="profile" defaultValue="persona"><option value="persona">Persona / Familia</option><option value="empresa">Empresa</option></select></label></div>
      <label><span>¿Qué necesitas proteger?</span><textarea name="message" rows={3} placeholder="Cuéntanos brevemente qué estás buscando" /></label>
      <label className="honeypot-field" aria-hidden="true">No completar<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent"><input name="consent" type="checkbox" required /><span>Acepto ser contactado respecto a esta solicitud. <a href="/privacidad">Consultar política de privacidad.</a></span></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-primary form-submit" type="submit" disabled={sending}>{sending ? "Enviando…" : "Enviar solicitud"} {!sending && <img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" />}</button>
      <small className="form-disclaimer">Tus datos se utilizarán únicamente para responder a esta solicitud.</small>
    </form>
  );
}
