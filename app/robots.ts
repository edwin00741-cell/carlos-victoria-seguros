import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: "https://carlosvictoriaseguros.com/sitemap.xml", host: "https://carlosvictoriaseguros.com" };
}
