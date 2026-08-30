import type { MetadataRoute } from "next";

const SITE_URL = "https://truestayadriatic.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/provjera", "/ponuda", "/ploca"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
