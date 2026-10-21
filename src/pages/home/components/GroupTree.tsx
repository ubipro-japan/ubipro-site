import { Link } from "react-router-dom";
import { groupServices } from "@/mocks/services";

const accentClasses: Record<string, { bg: string; text: string; ring: string; chip: string }> = {
  primary: {
    bg: "bg-primary-500",
    text: "text-primary-700",
    ring: "ring-primary-200",
    chip: "bg-primary-100 text-primary-800",
  },
  secondary: {
    bg: "bg-secondary-500",
    text: "text-secondary-700",
    ring: "ring-secondary-200",
    chip: "bg-secondary-100 text-secondary-800",
  },
  accent: {
    bg: "bg-accent-500",
    text: "text-accent-700",
    ring: "ring-accent-200",
    chip: "bg-accent-100 text-accent-800",
  },
};

const cardBadges: Record<string, string> = {
  "pro-estate": "貸主仲介手数料0円",
};

export default function GroupTree() {
  return (
    <section id="group" className="relative bg-background-100 py-24 md:py-32">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-primary-500" />
            <span className="font-eng-label text-[11px] text-primary-700">Group Structure</span>
            <span className="w-10 h-px bg-primary-500" />
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-secondary-900 leading-tight" autoComplete="off">
            事業紹介
          </h2>
          <p className="mt-4 font-en text-base md:text-lg text-primary-700">
            One holdings company. Six specialized services.
          </p>
          <p className="mt-6 text-foreground-700 leading-relaxed text-sm md:text-base">
            UbiProは、専門特化した6つのグループサービスを束ねるホールディングス体制を採用しています。<br />
&nbsp;前身のオンライン秘書「ProOnline」も、いまはグループ内の一事業として位置付けています。
          </p>
          <p className="mt-3 text-foreground-500 text-xs md:text-sm leading-relaxed">
            UbiPro operates as a holdings structure bundling six specialized group services. ProOnline, our original online secretarial brand, now serves as one of the businesses within the group.
          </p>
        </div>

        {/* Tree diagram */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-col items-center">
            <div className="relative bg-secondary-900 text-background-50 rounded-2xl px-6 sm:px-10 py-6 sm:py-7 w-full max-w-[320px] text-center shadow-[0_20px_60px_-30px_oklch(var(--secondary-900)_/_0.5)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent-500 text-background-50 font-eng-label text-[10px]">
                Holdings
              </div>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/images/logo.webp"
                  alt="UbiPro"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain bg-background-50 rounded-xl p-1.5 shrink-0"
                />
                <div className="text-left">
                  <div className="font-heading text-xl sm:text-2xl font-semibold">UbiPro</div>
                  <div className="font-eng-label text-[10px] text-primary-200">Tokyo Consulting Group</div>
                </div>
              </div>
            </div>

            {/* Trunk line */}
            <div className="w-px h-10 bg-primary-400" />
            {/* Horizontal branch (desktop) */}
            <div className="hidden lg:block relative w-full max-w-[1180px]">
              <div className="h-px bg-primary-400 mx-auto" />
              <div className="absolute inset-x-0 top-0 flex justify-between">
                {groupServices.map((_, i) => (
                  <div key={i} className="w-px h-10 bg-primary-400" />
                ))}
              </div>
            </div>
            {/* Mobile trunk continuation */}
            <div className="lg:hidden w-px h-6 bg-primary-400" />
          </div>

          <div className="mt-2 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupServices.map((s) => {
              const c = accentClasses[s.accent];
              return (
                <article
                  key={s.id}
                  className="group relative bg-background-50 rounded-xl border border-background-200 p-7 transition hover:border-primary-400 hover:-translate-y-1 duration-300"
                >
                  <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${c.bg}`} />

                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${c.chip}`}>
                      <i className={`${s.icon} text-2xl`} />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-eng-label text-[10px] text-foreground-500">
                        Service {s.code}
                      </span>
                      {cardBadges[s.id] && (
                        <span
                          className={`px-2.5 py-1 rounded-full font-eng-label text-[9px] whitespace-nowrap ${c.chip}`}
                        >
                          {cardBadges[s.id]}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className={`font-eng-label text-[10px] ${c.text}`}>{s.brand}</div>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-secondary-900">{s.nameJa}</h3>
                    <div className="mt-1 font-en text-sm text-primary-700">{s.nameEn}</div>
                  </div>

                  <p className="mt-4 text-sm text-foreground-800 leading-relaxed">{s.taglineJa}</p>
                  <p className="mt-1 text-xs text-foreground-500 leading-relaxed">{s.taglineEn}</p>

                  <p className="mt-5 text-[13px] text-foreground-700 leading-relaxed">{s.descriptionJa}</p>

                  <div className="mt-6 pt-5 border-t border-background-200 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-foreground-500">
                      <i className="ri-links-line" />
                      Group of UbiPro
                    </div>
                    <Link
                      to={`/services/${s.id}`}
                      className={`inline-flex items-center gap-1 text-xs font-semibold ${c.text} hover:underline cursor-pointer whitespace-nowrap`}
                    >
                      詳細を見る <i className="ri-arrow-right-line" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}