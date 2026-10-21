import { Link } from "react-router-dom";
import type { ServiceContent } from "@/pages/services/serviceContent";

export default function ServicePricing({ service }: { service: ServiceContent }) {
  const isFivePlans = service.pricing.length === 5;
  const isFourPlans = !isFivePlans && service.pricing.length >= 4;
  const isTwoPlans = service.pricing.length === 2;

  const gridClass = isFivePlans
    ? "sm:grid-cols-2 lg:grid-cols-6"
    : isFourPlans
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : isTwoPlans
        ? "sm:grid-cols-2 max-w-3xl mx-auto"
        : "md:grid-cols-3";

  const getSpanClass = (index: number) => {
    if (!isFivePlans) return "";
    if (index < 3) return index === 2 ? "sm:col-span-2 lg:col-span-2" : "sm:col-span-1 lg:col-span-2";
    return "sm:col-span-2 lg:col-span-3";
  };

  return (
    <section id="pricing" className="relative bg-background-100 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-primary-500" />
            <span className="font-eng-label text-[11px] text-primary-700">Pricing</span>
            <span className="w-10 h-px bg-primary-500" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 leading-snug">
            料金プラン
          </h2>
          <p className="mt-3 font-en text-base md:text-lg text-primary-700">
            Transparent pricing, scoped to your needs.
          </p>
        </div>

        <div className={`mt-12 grid gap-5 items-start ${gridClass}`}>
          {service.pricing.map((plan, index) => (
            <article
              key={plan.nameEn}
              className={`relative flex flex-col h-full rounded-xl border bg-background-50 p-6 md:p-7 transition duration-300 ${getSpanClass(index)} ${
                plan.recommended
                  ? "border-primary-500 ring-1 ring-primary-200 md:-mt-3"
                  : "border-background-200 hover:border-primary-300"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary-600 text-background-50 font-eng-label text-[9px]">
                  Recommended
                </span>
              )}

              <h3 className="font-heading text-base md:text-lg text-secondary-900">{plan.nameJa}</h3>
              <p className="font-eng-label text-[9px] text-primary-600 mt-1">{plan.nameEn}</p>

              <div className="mt-5 pb-5 border-b border-background-200">
                <div className="font-heading text-xl md:text-2xl font-semibold text-secondary-900">
                  {plan.price}
                </div>
                <div className="mt-1 text-[11px] text-foreground-500">{plan.priceNote}</div>
              </div>

              <p className="mt-5 text-[13px] text-foreground-700 leading-relaxed">{plan.descJa}</p>

              <ul className="mt-5 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-foreground-700">
                    <i className="ri-check-line text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/#contact"
                className={`mt-7 inline-flex items-center justify-center gap-2 h-11 rounded-md text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                  plan.recommended
                    ? "bg-primary-600 hover:bg-primary-700 text-background-50"
                    : "border border-background-300 hover:border-primary-500 text-foreground-800"
                }`}
              >
                このプランを相談する
                <i className="ri-arrow-right-line" />
              </Link>
            </article>
          ))}
        </div>

        {service.specialPlan && (
          <div className="mt-6 rounded-xl border border-primary-200 bg-background-50 overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
              <div className="p-6 md:p-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-eng-label text-[10px]">
                  <i className="ri-star-line text-[11px]" />
                  {service.specialPlan.labelJa}
                </span>
                <h3 className="mt-4 font-heading text-lg md:text-xl text-secondary-900">
                  {service.specialPlan.nameJa}
                </h3>
                <p className="mt-1 font-eng-label text-[9px] text-primary-600">
                  {service.specialPlan.nameEn}
                </p>
                <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900">
                    {service.specialPlan.price}
                  </span>
                  <span className="text-[11px] text-foreground-500 pb-1">
                    {service.specialPlan.priceNote}
                  </span>
                </div>
                <p className="mt-4 text-[13px] text-foreground-700 leading-relaxed max-w-xl">
                  {service.specialPlan.descJa}
                </p>
              </div>
              <div className="p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-background-200 bg-background-100/60">
                <p className="font-eng-label text-[10px] text-foreground-500">含まれるもの</p>
                <ul className="mt-4 space-y-2.5">
                  {service.specialPlan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-foreground-700">
                      <i className="ri-check-line text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/#contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-primary-600 hover:bg-primary-700 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
                >
                  書類の状況を相談する
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <p className="mt-8 text-center text-[11px] md:text-xs text-foreground-500 leading-relaxed">
          {service.priceNoteJa}
          <br className="hidden md:block" />
          表示は目安です。実際のご提案時にお見積りを提示します。
        </p>
      </div>
    </section>
  );
}