import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background-50 flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="font-eng-label text-xs text-primary-700 mb-4">Error 404</div>
        <h1 className="font-heading text-5xl md:text-6xl font-semibold text-secondary-900">
          Page Not Found
        </h1>
        <p className="mt-6 text-foreground-700">
          お探しのページは見つかりませんでした。URLをご確認いただくか、トップページへお戻りください。
        </p>
        <p className="mt-1 text-sm text-foreground-500">
          The page you're looking for doesn't exist. Please return to the homepage.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 h-12 px-7 rounded-md bg-primary-600 hover:bg-accent-500 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
        >
          <i className="ri-arrow-left-line" />
          トップページへ戻る / Back to home
        </Link>
      </div>
    </main>
  );
}