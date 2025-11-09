import { CategoryGrid } from '../components/CategoryGrid';
import { getCategoryMap } from '../lib/posts';

const categories = getCategoryMap();

export const CategoriesPage = () => (
  <section className="space-y-6">
    <header>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
        Categories
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-slate-900">
        대분류 · 중분류 탐색
      </h1>
      <p className="text-sm text-slate-500">
        원하는 중분류를 선택해 연결된 글 목록을 살펴보세요.
      </p>
    </header>

    <CategoryGrid categories={categories} />
  </section>
);
