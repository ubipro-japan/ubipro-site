import { Link } from "react-router-dom";
import { groupServices } from "@/mocks/services";

const columns = [
  {
    titleJa: "会社情報",
    titleEn: "Company",
    links: [
      { ja: "会社概要", en: "About", href: "/#mission" },
      { ja: "代表メッセージ", en: "Founder", href: "/#representative" },
      { ja: "グループ事業", en: "Group", href: "/#group" },
    ],
  },
  {
    titleJa: "プロセス",
    titleEn: "Process",
    links: [
      { ja: "ご相談の流れ", en: "Consultation Flow", href: "/#process" },
      { ja: "相談予約", en: "Booking", href: "/#booking" },
      { ja: "お問い合わせ", en: "Contact", href: "/#contact" },
    ],
  },
  {
    titleJa: "リーガル",
    titleEn: "Legal",
    links: [
      { ja: "利用規約", en: "Terms of Service", href: "/terms" },
      { ja: "プライバシーポリシー", en: "Privacy Policy", href: "/privacy" },
      { ja: "特定商取引法に基づく表記", en: "Specified Commercial Transactions Act", href: "/tokutei" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-background-100 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 ubi-grid-bg opacity-20" />
      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-secondary-700 pb-8">
          <span className="font-eng-label text-[10px] text-primary-200">Group Services</span>
          {groupServices.map((s) => (
            <Link
              key={s.id}
              to={`/services/${s.id}`}
              className="group flex items-center gap-2 text-xs text-background-100/80 hover:text-accent-400 transition cursor-pointer whitespace-nowrap"
            >
              <i className={`${s.icon} text-[13px] text-primary-300 group-hover:text-accent-400`} />
              {s.brand}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-secondary-700">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <img
                src="/images/logo.webp"
                alt="UbiPro"
                className="w-12 h-12 object-contain bg-background-50 rounded-md p-1"
              />
              <div>
                <div className="font-heading text-xl text-background-50">UbiPro</div>
                <div className="font-eng-label text-[10px] text-primary-200">Tokyo Consulting Group</div>
              </div>
            </Link>
            <p className="mt-5 text-xs md:text-sm text-background-100/80 leading-relaxed">
              6つの専門事業を束ねる、東京発のコンサルティング・ホールディングス。前身のProOnlineから2026年にリブランドしました。
            </p>
            <p className="mt-2 text-[10px] md:text-xs text-primary-200/70 leading-relaxed">
              A Tokyo-based consulting holdings bundling six specialized services. Rebranded from ProOnline in 2026.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.titleEn} className="lg:col-span-2">
              <h4 className="font-heading text-sm text-background-50">
                {col.titleJa}
              </h4>
              <div className="font-eng-label text-[9px] text-primary-200 mt-1">{col.titleEn}</div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.en}>
                    {l.href.startsWith("/") && !l.href.startsWith("/#") ? (
                      <Link
                        to={l.href}
                        className="group flex flex-col text-xs text-background-100/80 hover:text-accent-400 transition cursor-pointer"
                      >
                        <span>{l.ja}</span>
                        <span className="font-eng-label text-[9px] text-primary-200/70 group-hover:text-accent-300/80">
                          {l.en}
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="group flex flex-col text-xs text-background-100/80 hover:text-accent-400 transition cursor-pointer"
                      >
                        <span>{l.ja}</span>
                        <span className="font-eng-label text-[9px] text-primary-200/70 group-hover:text-accent-300/80">
                          {l.en}
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm text-background-50">連絡先</h4>
            <div className="font-eng-label text-[9px] text-primary-200 mt-1">Get in touch</div>
            <ul className="mt-5 space-y-3 text-xs text-background-100/80">
              <li className="flex gap-2">
                <i className="ri-map-pin-2-line text-accent-400 mt-0.5" />
                <div>
                  <div>〒105-6415 東京都港区虎ノ門 1-17-1 虎ノ門ヒルズ ビジネスタワー 15階</div>
                </div>
              </li>
              <li className="flex gap-2">
                <i className="ri-mail-line text-accent-400 mt-0.5" />
                <a
                  href="mailto:info@ubipro.net"
                  className="hover:text-accent-400 transition cursor-pointer break-all"
                >
                  info@ubipro.net
                </a>
              </li>
              <li className="flex gap-2">
                <i className="ri-time-line text-accent-400 mt-0.5" />
                <div>
                  <div>9:00-18:00　土日・祝日を除く</div>
                  <div className="text-[10px] text-primary-200/70 mt-0.5">Weekdays only</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-[11px] text-background-100/60">
            © 2026 UbiPro Inc. (Tokyo Consulting Group). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-background-100/60">
            <Link to="/terms" className="hover:text-accent-400 transition cursor-pointer">利用規約</Link>
            <Link to="/privacy" className="hover:text-accent-400 transition cursor-pointer">プライバシーポリシー</Link>
            <Link to="/tokutei" className="hover:text-accent-400 transition cursor-pointer">特定商取引法に基づく表記</Link>
            <Link to="/#contact" className="hover:text-accent-400 transition cursor-pointer">お問い合わせ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}