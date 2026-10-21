// Shared SEO site constants and URL helpers.
// The real site origin comes from the VITE_SITE_URL environment variable.
// A runtime origin fallback is used only when that variable is unavailable,
// so we never invent an arbitrary domain.

export const SITE_NAME = "UbiPro";
export const SITE_ALT_NAME = "Tokyo Consulting Group";
export const SITE_EMAIL = "info@ubipro.net";

export const SITE_ADDRESS = {
  street: "1-17-1 Toranomon, Toranomon Hills Business Tower 15F",
  locality: "Minato-ku, Tokyo",
  postalCode: "105-6415",
  country: "JP",
};

// Self-hosted asset (public/images) (brand mark / Open Graph image).
export const OG_IMAGE_URL =
  "https://ubipro.net/images/logo.webp";

function resolveOrigin(): string {
  const envUrl = (import.meta.env.VITE_SITE_URL as string | undefined) || "";
  if (envUrl) {
    return envUrl.replace(/\/+$/, "");
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "";
}

export const SITE_ORIGIN = resolveOrigin();

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return SITE_ORIGIN ? `${SITE_ORIGIN}${p}` : p;
}