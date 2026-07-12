import { Resend } from "resend";

const escapeHtml = (value: unknown) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { name, email, phone, insurance, profile, message, website } = body as Record<string, unknown>;

  // Honeypot: bots fill this hidden field; silently accept without sending.
  if (website) return Response.json({ ok: true });
  if (!name || !email || !phone || !insurance || !profile) {
    return Response.json({ error: "Completa los campos requeridos." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: "El servicio de correo aún no está configurado." }, { status: 503 });

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || "Carlos Victoria <onboarding@resend.dev>";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeInsurance = escapeHtml(insurance);
  const safeProfile = escapeHtml(profile);
  const safeMessage = escapeHtml(message || "No especificado");

  const { data, error } = await resend.emails.send({
    from,
    to: ["info@cvasesoria.com"],
    replyTo: String(email),
    subject: `Nueva solicitud de cotización: ${String(name)}`,
    html: `<h2>Nueva solicitud de cotización</h2><p><strong>Nombre:</strong> ${safeName}</p><p><strong>Correo:</strong> ${safeEmail}</p><p><strong>Teléfono:</strong> ${safePhone}</p><p><strong>Seguro:</strong> ${safeInsurance}</p><p><strong>Perfil:</strong> ${safeProfile}</p><p><strong>Necesidad:</strong><br>${safeMessage.replaceAll("\n", "<br>")}</p>`,
  });

  if (error) return Response.json({ error: "No fue posible enviar la solicitud." }, { status: 502 });
  return Response.json({ ok: true, id: data?.id });
}
