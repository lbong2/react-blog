import type { Heading } from '../types/post';

interface PostTocProps {
  headings: Heading[];
}

export const PostToc = ({ headings }: PostTocProps) => {
  if (headings.length === 0) {
    return (
      <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-500 shadow-card">
        이 포스트에는 목차로 사용할 제목이 없어요.
      </div>
    );
  }

  return (
    <nav className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        On this page
      </p>
      <ol className="mt-4 space-y-2 text-sm text-slate-600">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
          >
            <a
              href={`#${heading.id}`}
              className="block text-slate-600 transition hover:text-brand"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
