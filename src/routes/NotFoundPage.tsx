import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <section className="flex flex-col items-center gap-4 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
      404
    </p>
    <h1 className="text-4xl font-bold text-slate-900">
      페이지를 찾을 수 없어요
    </h1>
    <p className="max-w-md text-slate-500">
      잘못된 주소이거나 삭제된 글입니다. 홈으로 돌아가 다른 글을
      탐색해 보세요.
    </p>
    <div className="flex gap-3">
      <Link
        to="/"
        className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
      >
        홈으로 돌아가기
      </Link>
      <Link
        to="/tags"
        className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
      >
        태그 보기
      </Link>
    </div>
  </section>
);
