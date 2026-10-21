import { Link } from "react-router-dom";
import type { ServiceContent } from "@/pages/services/serviceContent";
import { getAccent } from "@/pages/services/components/accent";

export default function ServiceHero({ service }: { service: ServiceContent }) {
  const accent = getAccent(service.accent);

  return (
    <section className="relative bg-secondary-900 pt-[104px] md:pt-[128px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={service.heroImage}
          alt={`${service.nameJa}（${service.brand}）のサービスイメージ`}
          title={`${service.nameJa} ${service.nameEn}｜${service.brand} - UbiPro`}
          className="w-full h-full object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/95 via-secondary-900/85 to-secondary-900/45" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10 pb-14 md:pb-20">
        <nav aria-label="パンくず" className="flex flex-wrap items-center gap-2 text-[11px] text-background-100/70">
          <Link to="/" className="hover:text-accent-300 transition cursor-pointer">
            ホーム
          </Link>
          <i className="ri-arrow-right-s-line text-[10px]" />
          <Link to="/#group" className="hover:text-accent-300 transition cursor-pointer">
            事業紹介
          </Link>
          <i className="ri-arrow-right-s-line text-[10px]" />
          <span className="text-background-50">{service.brand}</span>
        </nav>

        <div className="mt-8 md:mt-12 max-w-2xl ubi-fade-up">
          <div className="flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full ${accent.bg}`} />
            <span className="font-eng-label text-[11px] text-primary-200">
              Service {service.code} / {service.brand}
            </span>
          </div>

          <h1 className="mt-5 font-heading text-2xl md:text-[42px] font-semibold text-background-50 leading-[1.35]">
            {service.nameJa}
          </h1>
          <p className="mt-2 font-en text-lg md:text-2xl text-accent-300">{service.nameEn}</p>

          <p className="mt-6 text-sm md:text-base text-background-100/90 leading-relaxed">
            {service.taglineJa}
          </p>
          <p className="mt-2 text-xs md:text-sm text-primary-200/70 leading-relaxed">
            {service.taglineEn}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/#booking"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-primary-600 hover:bg-primary-500 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calendar-check-line" />
              無料相談を予約する
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md border border-background-50/40 hover:border-accent-400 hover:text-accent-300 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-send-line" />
              資料請求・お問い合わせ
            </Link>
          </div>
        </div>

        <dl className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 border-t border-background-50/15 pt-8">
          {service.stats.map((stat) => (
            <div key={stat.labelEn} className="min-w-0">
              <dd className="flex items-baseline gap-1">
                <span className="font-heading text-2xl md:text-4xl font-semibold text-background-50">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-xs md:text-sm text-primary-200">{stat.unit}</span>
                )}
              </dd>
              <dt className="mt-2 text-[11px] md:text-xs text-background-100/70">{stat.labelJa}</dt>
              <dt className="font-eng-label text-[9px] text-primary-200/50 mt-1">
                {stat.labelEn}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}