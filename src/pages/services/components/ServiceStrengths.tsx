import type { ServiceContent } from "@/pages/services/serviceContent";
import { getAccent } from "@/pages/services/components/accent";

export default function ServiceStrengths({ service }: { service: ServiceContent }) {
  const accent = getAccent(service.accent);

  return (
    <section className="relative bg-background-100 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-primary-500" />
            <span className="font-eng-label text-[11px] text-primary-700">Why {service.brand}</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 leading-snug">
            選ばれる理由
          </h2>
          <p className="mt-3 font-en text-base md:text-lg text-primary-700">
            What makes our approach different.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {service.strengths.map((item, i) => (
            <article
              key={item.titleEn}
              className="relative bg-background-50 rounded-xl border border-background-200 p-6 md:p-7 transition hover:-translate-y-1 duration-300 hover:border-primary-300 ubi-fade-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${accent.chip}`}
                >
                  <i className={`${item.icon} text-xl`} />
                </div>
                <span className="font-label text-[11px] text-foreground-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-base md:text-lg text-secondary-900">
                {item.titleJa}
              </h3>
              <p className="font-eng-label text-[9px] text-primary-600 mt-1.5">{item.titleEn}</p>
              <p className="mt-3 text-sm text-foreground-700 leading-relaxed">{item.descJa}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}