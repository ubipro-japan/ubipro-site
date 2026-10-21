import type { ServiceContent } from "@/pages/services/serviceContent";
import { getAccent } from "@/pages/services/components/accent";

export default function ServiceMenu({ service }: { service: ServiceContent }) {
  const accent = getAccent(service.accent);

  return (
    <section className="relative bg-background-50 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-primary-500" />
              <span className="font-eng-label text-[11px] text-primary-700">Service Menu</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 leading-snug">
              サービス内容
            </h2>
            <p className="mt-3 font-en text-base md:text-lg text-primary-700">
              What we actually take care of.
            </p>
          </div>
          <p className="text-xs text-foreground-500 md:text-right leading-relaxed">
            必要な範囲だけを組み合わせて
            <br className="hidden md:block" />
            ご依頼いただけます。
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.menu.map((item, i) => (
            <article
              key={item.titleEn}
              className="group relative rounded-xl border border-background-200 bg-background-50 p-6 transition hover:border-primary-400 duration-300 ubi-fade-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-md flex items-center justify-center ${accent.softBg} ${accent.text}`}>
                  <i className={`${item.icon} text-lg`} />
                </div>
                <span className="font-eng-label text-[9px] text-foreground-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-base text-secondary-900 leading-snug">
                {item.titleJa}
              </h3>
              <p className="mt-1 font-eng-label text-[9px] text-primary-600">{item.titleEn}</p>
              <p className="mt-3 text-[13px] text-foreground-700 leading-relaxed">{item.descJa}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}