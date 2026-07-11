import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlosvictoriaseguros.com"),
  title: "Seguros en Panamá | Auto, Salud, Vida y Empresas | Carlos Victoria",
  description: "Corredor de seguros en Panamá con más de 15 años de experiencia. Cotiza seguro de auto, salud, vida, empresas y fianzas con asesoría personalizada.",
  keywords: ["corredor de seguros en Panamá", "seguros en Panamá", "seguro de auto Panamá", "seguro de salud Panamá", "seguro de vida Panamá", "seguros para empresas Panamá", "fianzas comerciales Panamá", "asesoría de seguros Panamá"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Seguros en Panamá | Carlos Victoria",
    description: "Protección clara y asesoría cercana para auto, salud, vida, empresas y fianzas.",
    siteName: "Carlos Victoria, Corredor de Seguros",
    type: "website",
    locale: "es_PA",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Carlos Victoria, Corredor de Seguros" }],
  },
  twitter: { card: "summary_large_image", title: "Seguros en Panamá | Carlos Victoria", description: "Protección clara y asesoría cercana para auto, salud, vida, empresas y fianzas.", images: ["/og.png"] },
};

const structuredData = [
  { "@context": "https://schema.org", "@type": "InsuranceAgency", "@id": "https://carlosvictoriaseguros.com/#agency", name: "Carlos Victoria, Corredor de Seguros", url: "https://carlosvictoriaseguros.com/", logo: "https://carlosvictoriaseguros.com/brand/carlos-victoria-logo.png", image: "https://carlosvictoriaseguros.com/og.png", telephone: "+507 6319-7485", email: "info@cvasesoria.com", areaServed: { "@type": "Country", name: "Panamá" }, address: { "@type": "PostalAddress", addressLocality: "Panamá", addressCountry: "PA" }, sameAs: ["https://instagram.com/cvasesoria"], knowsAbout: ["Seguro de auto", "Seguro de salud", "Seguro de vida", "Seguros para empresas", "Fianzas comerciales"] },
  { "@context": "https://schema.org", "@type": "WebSite", name: "Carlos Victoria, Corredor de Seguros", url: "https://carlosvictoriaseguros.com/", inLanguage: "es-PA" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Script src="https://www.googletagmanager.com/gtag/js?id=G-F0RY0ZHQT3" strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-F0RY0ZHQT3');`}</Script></body></html>;
}
