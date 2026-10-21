import type { ServiceContent } from "@/pages/services/serviceContent";
import { getAccent } from "@/pages/services/components/accent";

export default function ServiceOverview({ service }: { service: ServiceContent }) {
  const accent = getAccent(service.accent);

  return (
    <section className="relative bg-background-50 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-primary-500" />
              <span className="font-eng-label text-[11px] text-primary-700">Overview</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 leading-snug">
              こんな課題から、
              <br className="hidden md:block" />
              ご相談が始まります。
            </h2>
            <p className="mt-5 text-sm md:text-[15px] text-foreground-700 leading-relaxed">
              {service.leadJa}
            </p>
            <p className="mt-3 text-xs md:text-sm text-foreground-500 leading-relaxed">
              {service.leadEn}
            </p>
            <div className="mt-8 hidden lg:flex items-center gap-3 rounded-lg bg-background-100 border border-background-200 px-5 py-4">
              <i className={`ri-information-line text-lg ${accent.text}`} />
              <p className="text-xs text-foreground-600 leading-relaxed">
                初回のご相談は無料です。課題が整理できていない段階でも問題ありません。
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="font-eng-label text-[10px] text-foreground-500 mb-4">
              Common challenges
            </div>
            <div className="space-y-4">
              {service.challenges.map((item, i) => (
                <article
                  key={item.titleEn}
                  className="group flex gap-5 rounded-lg border border-background-200 bg-background-50 p-5 md:p-6 transition hover:border-primary-300 ubi-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div
                    className={`w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0 ${accent.softBg} ${accent.text}`}
                  >
                    <i className={`${item.icon} text-xl`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-heading text-base md:text-lg text-secondary-900">
                        {item.titleJa}
                      </h3>
                      <span className="font-eng-label text-[9px] text-foreground-400">
                        {item.titleEn}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-foreground-700 leading-relaxed">
                      {item.descJa}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}