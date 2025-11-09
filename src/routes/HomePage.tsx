import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { CategoryFilter } from '../components/CategoryFilter';
import { EmptyState } from '../components/EmptyState';
import { PostCard } from '../components/PostCard';
import { siteConfig } from '../config/siteConfig';
import { useSearch } from '../contexts/SearchContext';
import { filterPosts, getAllPosts, getCategoryMap } from '../lib/posts';

const allPosts = getAllPosts();
const categories = getCategoryMap();

export const HomePage = () => {
  const { query } = useSearch();
  const [category, setCategory] = useState<string>();
  const [subcategory, setSubcategory] = useState<string>();

  const filteredPosts = useMemo(
    () => filterPosts({ query, category, subcategory }),
    [query, category, subcategory]
  );

  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-12 text-white shadow-card">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          GitHub Pages Ready
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
          {siteConfig.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          {siteConfig.description}
        </p>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <a
            href={`https://github.com/${siteConfig.author.github}/${siteConfig.githubPages.repositoryName}/tree/main/src/content/posts`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center rounded-2xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            마크다운을 추가하고 즉시 배포하세요 →
          </a>
          <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-white/30 px-4 py-3 text-sm text-slate-200">
            헤더 우측 검색창에서 원하는 키워드를 입력해 보세요.
          </div>
        </div>
        <p className="mt-4 text-xs uppercase text-slate-400">
          현재 {allPosts.length}개의 포스트가 등록되어 있어요
        </p>
      </section>

      <section className="space-y-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-slate-900">카테고리</h2>
          <p className="text-sm text-slate-500">
            대분류와 중분류를 조합해서 원하는 글을 빠르게 찾아보세요.
          </p>
        </header>
        <CategoryFilter
          categories={categories}
          activeCategory={category}
          activeSubcategory={subcategory}
          onCategoryChange={setCategory}
          onSubcategoryChange={setSubcategory}
        />
      </section>

      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              최신 포스트
            </h2>
            <p className="text-sm text-slate-500">
              {filteredPosts.length}개의 결과가 있습니다.
            </p>
          </div>
          <Link
            to="/tags"
            className="text-sm font-medium text-slate-500 transition hover:text-brand"
          >
            태그 전체 보기 →
          </Link>
        </header>

        {filteredPosts.length === 0 ? (
          <EmptyState
            title="조건에 맞는 포스트가 없어요"
            description="검색어나 필터를 조정해 다시 시도해 주세요."
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
