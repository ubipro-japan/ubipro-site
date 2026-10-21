import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const nav = [
  { href: "/#mission", ja: "Mission", en: "理念" },
  { href: "/#group", ja: "Group", en: "事業構造" },
  { href: "/#process", ja: "Process", en: "ご相談の流れ" },
  { href: "/#booking", ja: "Booking", en: "相談予約" },
  { href: "/#contact", ja: "Contact", en: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Keep the page behind the mobile menu from scrolling, and close on Escape.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background-50/95 backdrop-blur-md border-b border-background-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          {/* ロゴ画像：白浮き対策で透過ヘッダー時は紺色背景コンテナで包む */}
          <div
            className={`relative w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden transition-colors ${
              scrolled ? "bg-transparent" : "bg-secondary-900/60"
            }`}
          >
            {!logoError ? (
              <img
                src="/images/logo.webp"
                alt="UbiPro Tokyo Consulting Group"
                className="w-10 h-10 object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="font-heading text-background-50 text-xs font-bold tracking-wider">
                  UP
                </span>
              </div>
            )}
          </div>
          <div className="leading-tight">
            <div
              className={`font-heading text-lg font-semibold tracking-wide ${
                scrolled ? "text-secondary-900" : "text-background-50"
              }`}
            >
              UbiPro
            </div>
            <div
              className={`font-eng-label text-[10px] ${
                scrolled ? "text-primary-700" : "text-background-100/90"
              }`}
            >
              Tokyo Consulting Group
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`group flex flex-col items-start text-sm transition cursor-pointer ${
                scrolled ? "text-foreground-800 hover:text-primary-700" : "text-background-50 hover:text-accent-300"
              }`}
            >
              <span className="font-eng-label text-[10px] opacity-70">{item.ja}</span>
              <span className="font-medium">{item.en}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/#contact"
            className="hidden md:inline-flex items-center gap-2 h-10 px-5 rounded-md bg-primary-600 hover:bg-accent-500 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
          >
            <i className="ri-send-plane-line" />
            お問い合わせ
          </Link>
          <button
            type="button"
            aria-label="メニュー"
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-md border cursor-pointer whitespace-nowrap ${
              scrolled ? "border-background-300 text-foreground-800" : "border-background-50/40 text-background-50"
            }`}
          >
            <i className={mobileOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background-50 border-t border-background-200 max-h-[calc(100dvh-76px)] overflow-y-auto">
          <div className="px-5 sm:px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between min-h-[52px] py-3 border-b border-background-100 text-foreground-800 hover:text-primary-700 active:bg-background-100 cursor-pointer"
              >
                <span className="font-medium">{item.en}</span>
                <span className="font-eng-label text-[10px] text-primary-600">{item.ja}</span>
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 h-12 rounded-md bg-primary-600 hover:bg-accent-500 text-background-50 flex items-center justify-center text-sm font-semibold cursor-pointer whitespace-nowrap"
            >
              お問い合わせ / Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}