import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Carlos Victoria insurance site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Seguros en Panamá \| Auto, Salud, Vida y Empresas \| Carlos Victoria<\/title>/i);
  assert.match(html, /Protección clara para cada etapa de tu vida/);
  assert.match(html, /15\+ años de experiencia/);
  assert.match(html, /Licencia profesional PN8794/);
  assert.match(html, /info@cvasesoria\.com/);
  assert.match(html, /\/icons\/whatsapp\.svg/);
  assert.match(html, /class="service-icon"/);
  assert.match(html, /class="process-icon"/);
  assert.doesNotMatch(html, /class="service-index"/);
  assert.doesNotMatch(html, /class="benefit-panel"/);
  assert.match(html, /Soluciones para personas, familias y empresas/);
  assert.match(html, /Compara el plan que mejor se ajusta a tu vehículo/);
  assert.match(html, /Particular Básico/);
  assert.match(html, /B\/.120\.00/);
  assert.match(html, /Esto no constituye una cotización ni una póliza/);
  assert.match(html, /Cuéntame qué quieres proteger/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Codex is working/i);
});

test("keeps the finished site free of starter preview files", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<HeroSlider \/>/);
  assert.match(page, /<InsuranceGrid \/>/);
  assert.match(page, /<AutoPlansTabs \/>/);
  assert.match(layout, /Carlos Victoria, Corredor de Seguros/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
