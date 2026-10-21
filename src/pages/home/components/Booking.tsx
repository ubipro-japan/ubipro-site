import { useEffect, useState } from "react";

const CALENDLY_BASE_URL = "https://calendly.com/n-okabe-ubipro/30min";

function rgbToHex(value: string): string | null {
  const parts = value.match(/\d+(\.\d+)?/g);
  if (!parts || parts.length < 3) return null;
  const hex = parts
    .slice(0, 3)
    .map((n) => Number(n).toString(16).padStart(2, "0"))
    .join("");
  return `#${hex}`;
}

/**
 * Reads the live primary brand color from the theme tokens so the embedded
 * calendar keeps matching the site even if the palette is regenerated.
 */
function readPrimaryHex(): string | null {
  if (typeof document === "undefined") return null;
  const probe = document.createElement("div");
  probe.className = "bg-primary-500";
  probe.style.position = "absolute";
  probe.style.left = "-9999px";
  probe.style.top = "0";
  probe.style.width = "1px";
  probe.style.height = "1px";
  document.body.appendChild(probe);
  const bg = window.getComputedStyle(probe).backgroundColor;
  document.body.removeChild(probe);
  if (!bg || bg === "rgba(0, 0, 0, 0)" || bg === "transparent") return null;
  return rgbToHex(bg);
}

function buildEmbedUrl(): string {
  const params = new URLSearchParams({
    embed_type: "Inline",
    hide_event_type_details: "0",
    hide_gdpr_banner: "1",
  });
  const primary = readPrimaryHex();
  if (primary) params.set("primary_color", primary.replace("#", ""));
  return `${CALENDLY_BASE_URL}?${params.toString()}`;
}

const CONDITIONS = [
  { icon: "ri-time-line", label: "30分" },
  { icon: "ri-vidicon-line", label: "オンライン" },
  { icon: "ri-calendar-check-line", label: "平日 10:00–18:00" },
  { icon: "ri-mail-check-line", label: "無料" },
];

export default function Booking() {
  const [embedUrl, setEmbedUrl] = useState<string>("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setEmbedUrl(buildEmbedUrl());
  }, []);

  return (
    <section id="booking" className="relative bg-background-50 py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-primary-500" />
            <span className="font-eng-label text-[11px] text-primary-700">Booking</span>
            <span className="w-10 h-px bg-primary-500" />
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-secondary-900 leading-tight">
            オンライン相談を予約する。
          </h2>
          <p className="mt-4 font-en text-base md:text-lg text-primary-700">
            Reserve a 30-minute online consultation.
          </p>
          <p className="mt-6 text-foreground-700 text-sm md:text-base">
            このページで日時を選んで、そのまま予約が確定できます。
            <br />
            <span className="text-foreground-500 text-xs md:text-sm">
              Pick a date and time right here — no extra steps.
            </span>
          </p>
        </div>

        <div className="mt-10 md:mt-14 mx-auto w-full max-w-[980px]">
          <div className="rounded-xl md:rounded-2xl border border-background-200 bg-background-50 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-background-200 bg-background-100/60">
              <div className="flex flex-wrap items-center gap-2">
                {CONDITIONS.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background-50 border border-background-200 text-[11px] text-foreground-700 whitespace-nowrap"
                  >
                    <i className={`${item.icon} text-primary-700`} />
                    {item.label}
                  </span>
                ))}
              </div>
              <a
                href={CALENDLY_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-semibold text-primary-700 hover:text-primary-600 transition whitespace-nowrap cursor-pointer self-start sm:self-auto"
              >
                別タブで開く
                <i className="ri-arrow-right-up-line" />
              </a>
            </div>

            <div className="flex items-start gap-2 px-4 sm:px-6 py-3 bg-secondary-50 border-b border-background-200">
              <i className="ri-information-line text-secondary-600 text-sm mt-0.5" />
              <p className="text-[11px] md:text-xs text-foreground-700 leading-relaxed">
                日付を選んで、時間を選んで、画面の指示どおりに進めてください。カレンダー内のボタン表記は英語ですが、操作はこれだけで完了します。
              </p>
            </div>

            <div className="relative w-full h-[900px] md:h-[760px] bg-background-50">
              {!loaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background-50">
                  <i className="ri-loader-4-line text-2xl text-primary-600 animate-spin" />
                  <span className="text-xs text-foreground-500">予約カレンダーを読み込み中…</span>
                </div>
              )}
              {embedUrl && (
                <iframe
                  key={embedUrl}
                  src={embedUrl}
                  title="オンライン相談の予約カレンダー"
                  onLoad={() => setLoaded(true)}
                  className="relative z-20 w-full h-full border-0"
                  allow="payment"
                />
              )}
            </div>
          </div>

          <p className="mt-5 text-center text-[11px] md:text-xs text-foreground-500 leading-relaxed">
            予約が確定すると確認メールが届きます。日時の変更・キャンセルもメール内のリンクから行えます。
            <br className="hidden sm:block" />
            カレンダーが表示されない場合は
            <a
              href={CALENDLY_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 underline decoration-primary-300 underline-offset-2 text-primary-700 hover:text-primary-600 transition cursor-pointer"
            >
              こちら
            </a>
            からご予約ください。
          </p>
        </div>
      </div>
    </section>
  );
}