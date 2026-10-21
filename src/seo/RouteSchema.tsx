import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildSchema } from "./schema";

// Route-aware JSON-LD injector.
// Kept separate from the Open Graph / Twitter head manager on purpose:
// structured data lives in its own module and its own script tags.
export default function RouteSchema() {
  const { pathname: rawPathname } = useLocation();
  // Ignore a trailing slash (e.g. "/privacy/") so SEO data still matches.
  const pathname = rawPathname.length > 1 ? rawPathname.replace(/\/+$/, "") : rawPathname;

  useEffect(() => {
    const existing = document.querySelectorAll(
      'script[data-seo-schema="route"]'
    );
    existing.forEach((node) => node.remove());

    const blocks = buildSchema(pathname);
    blocks.forEach((block) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "route");
      script.textContent = JSON.stringify(block);
      document.head.appendChild(script);
    });
  }, [pathname]);

  return null;
}