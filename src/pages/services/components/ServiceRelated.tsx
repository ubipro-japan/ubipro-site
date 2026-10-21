import { Link } from "react-router-dom";
import type { ServiceContent } from "@/pages/services/serviceContent";

interface ServiceRelatedProps {
  service: ServiceContent;
  related: ServiceContent[];
}

export default function ServiceRelated({ service, related }: ServiceRelatedProps) {
  return (
    <section className="relative bg-secondary-900 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 ubi-grid-bg opacity-20" />
      <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-primary-600/20 blur-[120px]" />
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="font-eng-label text-[11px] text-primary-200 mb-4">Next step</div>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold text-background-50 leading-snug">
              {service.nameJa}のご相談は、
              <br className="hidden md:block" />
              30分のオンライン面談から。
            </h2>
            <p className="mt-5 text-sm md:text-base text-background-100/80 leading-relaxed">
              課題が整理できていない段階でも構いません。担当者から直接、進め方と費用感をお伝えします。
            </p>
            <p className="mt-2 text-xs text-primary-200/70 leading-relaxed">
              Start with a free 30-minute online session. We'll clarify scope and cost together.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/#booking"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-accent-500 hover:bg-accent-600 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-check-line" />
                無料相談を予約する
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md border border-background-50/40 hover:border-primary-300 hover:text-primary-200 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
              >
                <i className="ri-mail-send-line" />
                お問い合わせ
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="font-eng-label text-[10px] text-primary-200/70 mb-4">
              Other group services
            </div>
            <ul className="space-y-2">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/services/${item.id}`}
                    className="group flex items-center gap-4 rounded-lg border border-background-50/15 hover:border-accent-400/60 px-4 py-3.5 transition cursor-pointer"
                  >
                    <span className="w-9 h-9 rounded-md bg-background-50/10 text-primary-200 flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-base`} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-eng-label text-[9px] text-primary-200/70">
                        {item.brand}
                      </span>
                      <span className="block text-sm text-background-50 truncate">
                        {item.nameJa}
                      </span>
                    </span>
                    <i className="ri-arrow-right-line text-background-100/60 group-hover:text-accent-400 transition" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/#group"
                  className="mt-2 inline-flex items-center gap-2 text-xs text-primary-200 hover:text-accent-300 transition cursor-pointer"
                >
                  <i className="ri-links-line" />
                  6事業の一覧を見る
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}