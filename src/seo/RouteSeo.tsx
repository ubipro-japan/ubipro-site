import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resolveRouteSeo } from "./routes";
import { absoluteUrl, OG_IMAGE_URL } from "./site";

// Centralized, route-aware head manager.
// Reuses a single managed tag per name/property/rel and rewrites every
// managed value on each route change so nothing leaks between routes.

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content ?? "");
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function RouteSeo() {
  const { pathname: rawPathname } = useLocation();
  // Ignore a trailing slash (e.g. "/privacy/") so SEO data still matches.
  const pathname = rawPathname.length > 1 ? rawPathname.replace(/\/+$/, "") : rawPathname;

  useEffect(() => {
    const config = resolveRouteSeo(pathname);

    if (!config || !config.indexable) {
      const title = config
        ? config.title
        : "ページが見つかりません｜UbiPro（Tokyo Consulting Group）";
      const description = config
        ? config.description
        : "お探しのページは見つかりませんでした。URLをご確認いただくか、トップページへお戻りください。";
      const url = absoluteUrl(config ? config.path : pathname);

      document.title = title;
      setMeta("name", "description", description);
      setMeta("name", "keywords", config ? config.keywords : "");
      setMeta("name", "robots", "noindex, follow");
      setMeta("property", "og:title", title);
      setMeta("property", "og:description", description);
      setMeta("property", "og:type", "website");
      setMeta("property", "og:url", url);
      setMeta("property", "og:image", OG_IMAGE_URL);
      setMeta("property", "og:site_name", "UbiPro (Tokyo Consulting Group)");
      setMeta("name", "twitter:card", "summary_large_image");
      setMeta("name", "twitter:title", title);
      setMeta("name", "twitter:description", description);
      setMeta("name", "twitter:image", OG_IMAGE_URL);
      setCanonical(url);
      return;
    }

    document.title = config.title;
    setMeta("name", "description", config.description);
    setMeta("name", "keywords", config.keywords);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", config.title);
    setMeta("property", "og:description", config.description);
    setMeta("property", "og:type", config.ogType);
    setMeta("property", "og:url", absoluteUrl(config.path));
    setMeta("property", "og:image", config.ogImage || OG_IMAGE_URL);
    setMeta("property", "og:site_name", "UbiPro (Tokyo Consulting Group)");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", config.title);
    setMeta("name", "twitter:description", config.description);
    setMeta("name", "twitter:image", config.ogImage || OG_IMAGE_URL);
    setCanonical(absoluteUrl(config.path));
  }, [pathname]);

  return null;
}