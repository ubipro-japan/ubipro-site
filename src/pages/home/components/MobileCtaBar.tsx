import { useEffect, useState } from "react";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 520);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-background-200 bg-background-50/95 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-2 px-3 py-2.5">
        <a
          href="#booking"
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[46px] rounded-md bg-primary-600 hover:bg-accent-500 text-background-50 text-[13px] font-semibold transition cursor-pointer whitespace-nowrap"
        >
          <i className="ri-calendar-check-line text-base" />
          相談を予約
        </a>
        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[46px] rounded-md border border-background-300 text-foreground-800 text-[13px] font-semibold transition cursor-pointer whitespace-nowrap"
        >
          <i className="ri-mail-send-line text-base" />
          お問い合わせ
        </a>
      </div>
    </div>
  );
}