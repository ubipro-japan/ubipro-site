import { useEffect, useState } from "react";

const STORAGE_KEY = "ubipro-rebrand-notice-dismissed";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const t = window.setTimeout(() => setOpen(true), 600);
      return () => window.clearTimeout(t);
    }
  }, []);

  const close = () => {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ubipro-rebrand-title"
    >
      <div
        className="absolute inset-0 bg-secondary-950/60 backdrop-blur-sm ubi-backdrop-in"
        onClick={close}
      />
      <div className="relative ubi-modal-in max-w-lg w-full max-h-[calc(100dvh-2rem)] overflow-y-auto bg-background-50 rounded-2xl border border-background-200">
        <button
          type="button"
          onClick={close}
          aria-label="閉じる / Close"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-foreground-500 hover:text-foreground-900 hover:bg-background-100 transition cursor-pointer whitespace-nowrap"
        >
          <i className="ri-close-line text-xl" />
        </button>

        <div className="px-6 pt-9 pb-7 md:px-8 md:pt-10 md:pb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-eng-label text-[11px] text-primary-700">Rebranding Notice</span>
            <span className="h-px flex-1 bg-primary-200" />
            <span className="font-eng-label text-[11px] text-primary-700">2026</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-background-100 border border-primary-200">
              <img
                src="/images/logo.webp"
                alt="UbiPro logo"
                className="w-11 h-11 object-contain"
              />
            </div>
            <div className="text-foreground-500 text-sm">
              <div className="line-through">ProOnline</div>
              <div className="flex items-center gap-2 text-primary-700 font-semibold text-base mt-1">
                <i className="ri-arrow-right-line" />
                UbiPro
              </div>
            </div>
          </div>

          <h2
            id="ubipro-rebrand-title"
            className="font-heading text-[22px] md:text-2xl font-semibold text-secondary-900 leading-snug"
          >
            ProOnlineは、UbiProとして生まれ変わりました。
          </h2>
          <p className="mt-2 font-en text-lg text-primary-700">
            ProOnline has been reborn as UbiPro.
          </p>

          <div className="mt-6 space-y-3 text-sm leading-relaxed">
            <p className="text-foreground-700">
              2022年より「ProOnline」の屋号でオンライン事務代行事業を営んでまいりましたが、2026年より複数の専門サービスを束ねるコンサルティングホールディングス
              <span className="text-primary-700 font-semibold"> UbiPro（Tokyo Consulting Group）</span>
              として体制を刷新いたしました。
            </p>
            <p className="text-foreground-500 text-[13px]">
              Since 2022 we operated as “ProOnline”, providing online back-office services. From 2026 we relaunch as
              <span className="text-primary-700 font-semibold"> UbiPro (Tokyo Consulting Group)</span>, a holdings company gathering multiple professional services.
            </p>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={close}
              className="flex-1 h-11 rounded-md bg-primary-600 hover:bg-accent-500 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
            >
              サイトを見る / Explore the site
            </button>
            <a
              href="#mission"
              onClick={close}
              className="h-11 px-5 flex items-center justify-center rounded-md border border-background-300 text-foreground-800 hover:border-primary-500 hover:text-primary-700 text-sm font-medium transition cursor-pointer whitespace-nowrap"
            >
              新体制について
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}