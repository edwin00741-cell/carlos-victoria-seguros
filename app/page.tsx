import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { InsuranceGrid } from "@/components/InsuranceGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";
import { InsurerLogoSlider } from "@/components/InsurerLogoSlider";
import { ProtectionPhotoCarousel } from "@/components/ProtectionPhotoCarousel";
import { MotionController } from "@/components/MotionController";
import { AutoPlansTabs } from "@/components/AutoPlansTabs";
import { CircularCommitments } from "@/components/CircularCommitments";
import { BackToTop } from "@/components/BackToTop";

const popularInsurances = [
  { title: "Automóvil", detail: "Daños a terceros y otras coberturas", image: "/stock/car.jpg", href: "#seguros" },
  { title: "Vida Express", detail: "Emisión en línea y menos papeleo", image: "/stock/family.jpg", href: "#seguros" },
  { title: "Salud", detail: "Opciones personales y familiares", image: "/stock/health.jpg", href: "#seguros" },
  { title: "Hogar", detail: "Desde B/.50 + impuesto al año", image: "/stock/home.jpg", href: "#seguros" },
];

const trustPoints = [
  ["15+", "Años en el mercado asegurador", "/icons/shield-check.svg"],
  ["Sin costo", "Asesoría personalizada adicional", "/icons/user-group.svg"],
  ["Ágil", "Respuesta en cotizaciones y consultas", "/icons/chat.svg"],
  ["Contigo", "Reclamos y renovaciones", "/icons/document-check.svg"],
];

const steps = [
  { icon: "/icons/chat.svg", title: "Conversación", body: "Cuéntame qué necesitas proteger y cuál es tu prioridad." },
  { icon: "/icons/magnifying-glass.svg", title: "Evaluación", body: "Revisamos riesgos, necesidades y presupuesto disponible." },
  { icon: "/icons/list-check.svg", title: "Alternativas", body: "Recibes opciones explicadas de forma sencilla." },
  { icon: "/icons/shield-check.svg", title: "Acompañamiento", body: "Avanzamos con respaldo durante contratación y gestión." },
];

const faqs = [
  ["¿Qué hace un corredor de seguros?", "Te orienta para comprender y evaluar alternativas de cobertura según tus necesidades, y te acompaña durante la gestión de tu póliza."],
  ["¿Solicitar una cotización tiene costo?", "La orientación inicial no tiene costo adicional. Las condiciones comerciales y primas se confirman con la aseguradora antes de contratar."],
  ["¿Qué información necesito para cotizar?", "Depende del tipo de seguro. Empezaremos con tus datos básicos y la necesidad que deseas cubrir; luego te indicaremos lo requerido."],
  ["¿Atienden a personas y empresas?", "Sí. La propuesta contempla soluciones personales, familiares y empresariales, sujetas al portafolio final confirmado."],
  ["¿Cómo funciona el acompañamiento en una reclamación?", "Recibirás orientación sobre pasos y documentos requeridos por la aseguradora correspondiente para el trámite del reclamo. Adicionalmente, te ayudamos con el manejo de tu siniestro cuando eres afectado en otra compañía aseguradora."],
];

export default function Home() {
  return (
    <main>
      <MotionController />
      <Header />
      <HeroSlider />

      <section className="popular-services reveal" aria-labelledby="popular-title">
        <div className="popular-head">
          <div><p className="eyebrow">Protecciones populares</p><h2 id="popular-title">Seguros para lo que más importa.</h2></div>
          <a className="text-link" href="#seguros">Ver soluciones <img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></a>
        </div>
        <div className="popular-grid">
          {popularInsurances.map((item) => (
            <a className="popular-card" href={item.href} key={item.title}>
              <img src={item.image} alt={`${item.title}.`} />
              <span>{item.title}<em>{item.detail}</em></span>
            </a>
          ))}
        </div>
      </section>

      <section className="reference-section about-reference reveal" id="sobre-mi">
        <div className="about-collage">
          <figure><img src="/stock/advisor.jpg" alt="Asesoría profesional." /><figcaption>Asesoría directa</figcaption></figure>
          <figure><img src="/brand/carlos-victoria-portrait.jpeg" alt="Carlos Victoria, corredor de seguros." /><figcaption>Carlos Victoria</figcaption></figure>
        </div>
        <div className="about-reference-copy">
          <p className="eyebrow">Sobre Carlos Victoria</p>
          <h2>Más de 15 años convirtiendo decisiones en tranquilidad.</h2>
          <p>Soy Carlos Victoria, corredor de seguros con experiencia en el mercado panameño, asesorando a personas, familias y empresas para encontrar la protección que realmente necesitan.</p>
          <p>Mi compromiso es ofrecer atención cercana, respuestas ágiles y acompañamiento personalizado antes, durante y después de contratar tu póliza.</p>
          <div className="about-metric"><strong>15+</strong><span>Años comparando alternativas con transparencia, honestidad y servicio.</span></div>
          <a className="button button-secondary" href="#cotizar">Conocer mi forma de trabajar</a>
        </div>
      </section>

      <section className="dark-planning reveal" id="beneficios">
        <div>
          <p className="eyebrow eyebrow-light">Protección con propósito</p>
          <h2>Planeación clara para proteger cada etapa.</h2>
          <div className="hero-actions"><a className="button button-primary" href="#cotizar">Solicitar asesoría</a></div>
        </div>
        <a className="planning-badge" href="#proceso" aria-label="Ver proceso de asesoría"><img className="control-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></a>
      </section>

      <section className="reference-trust-strip reveal" aria-label="Razones para elegir la asesoría">
        {trustPoints.map(([value, label, icon]) => <div key={value}><img src={icon} alt="" aria-hidden="true" /><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="reference-section services-section" id="seguros">
        <SectionHeading eyebrow="Qué puedo proteger" title="Soluciones para personas, familias y empresas." text="Conoce el enfoque inicial de cada solución. El producto y las condiciones finales se confirman durante la asesoría." />
        <InsuranceGrid />
      </section>

      <AutoPlansTabs />

      <section className="dark-section reveal">
        <div className="section-shell">
          <div className="dark-grid">
            <div className="dark-copy">
              <p className="eyebrow eyebrow-light">Una asesoría diferente</p>
              <h2>Más que una póliza. <em>Una relación de confianza.</em></h2>
              <p>Te acompaño para entender el panorama completo y tomar decisiones con mayor tranquilidad.</p>
              <a className="text-link light-link" href="#cotizar">Empezar una conversación <img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></a>
            </div>
            <ProtectionPhotoCarousel />
          </div>
        </div>
      </section>

      <section className="reference-section process-section reveal" id="proceso">
        <SectionHeading eyebrow="Proceso de asesoría" title="Cuatro pasos para decidir con respaldo." text="Un recorrido simple desde la primera conversación hasta la gestión de tu protección." align="center" />
        <div className="process-steps">
          {steps.map((step) => <article className="process-step" key={step.title}><span className="process-icon"><img src={step.icon} alt="" aria-hidden="true" /></span><h3>{step.title}</h3><p>{step.body}</p></article>)}
        </div>
      </section>

      <section className="image-strip reveal" aria-label="Escenarios de protección">
        <img src="/stock/testimonial-woman-2.jpg" alt="Persona protegida." />
        <img src="/stock/car.jpg" alt="Automóvil." />
        <div className="strip-feature"><img src="/stock/business.jpg" alt="Empresa." /><span className="strip-label">Protección integral <b><img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></b></span></div>
        <img src="/stock/home.jpg" alt="Hogar." />
      </section>

      <section className="reference-section insurer-section reveal">
        <SectionHeading eyebrow="Mercado asegurador" title="Opciones con presencia en Panamá." text="Logos usados como referencia visual. Productos, nombramientos y relaciones comerciales sujetos a confirmación." />
        <InsurerLogoSlider />
      </section>

      <section className="testimonials-section reveal" id="testimonios">
        <div className="section-shell">
          <SectionHeading eyebrow="Testimonios" title="La tranquilidad también se comparte." text="Experiencias de referencia sobre una asesoría cercana, clara y enfocada en las necesidades de cada cliente." />
          <CircularCommitments />
        </div>
      </section>

      <section className="reference-section faq-grid reveal" id="preguntas">
        <div className="faq-intro"><p className="eyebrow">Preguntas frecuentes</p><h2>Respuestas claras para empezar.</h2><p>Información general para orientar tu primera conversación.</p><a className="text-link" href="#contacto">Tengo otra pregunta <img className="link-arrow" src="/icons/arrow-small-right.svg" alt="" aria-hidden="true" /></a></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><i>+</i></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="contact-section reveal" id="cotizar">
        <div className="contact-copy" id="contacto">
          <p className="eyebrow eyebrow-light">Contacto</p>
          <h2>Cuéntame qué quieres proteger.</h2>
          <p>Completa el formulario o utiliza uno de los canales directos. Recibirás una orientación cercana y sin costo adicional.</p>
          <div className="contact-details"><a href="https://wa.me/50763197485" target="_blank" rel="noreferrer"><img src="/icons/whatsapp.svg" alt="" />WhatsApp · +507 6319-7485</a><a href="mailto:info@cvasesoria.com"><img src="/icons/envelope.svg" alt="" />info@cvasesoria.com</a><a href="https://instagram.com/cvasesoria" target="_blank" rel="noreferrer">Instagram · @cvasesoria</a><span>Panamá, República de Panamá</span></div>
        </div>
        <QuoteForm />
      </section>

      <a className="floating-whatsapp" href="https://wa.me/50763197485" target="_blank" rel="noreferrer" aria-label="Contactar a Carlos Victoria por WhatsApp"><img src="/icons/whatsapp.svg" alt="" /><span>WhatsApp</span></a>
      <Footer />
      <BackToTop />
    </main>
  );
}
