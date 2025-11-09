import { Link, useLocation } from 'react-router-dom';

import { getAllPosts, getCategoryMap } from '../lib/posts';

const categories = getCategoryMap();
const allPosts = getAllPosts();

const getCategoryCount = (category: string) =>
  allPosts.filter((post) => post.category === category).length;

const getSubcategoryCount = (category: string, subcategory: string) =>
  allPosts.filter(
    (post) => post.category === category && post.subcategory === subcategory
  ).length;

export const CategorySidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden w-80 shrink-0 lg:block">
      <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Categories
        </p>
        <div className="mt-5 space-y-5 text-sm">
          {Object.entries(categories).map(([category, subcategories]) => {
            const categoryCount = getCategoryCount(category);

            return (
              <div key={category}>
                <Link
                  to={`/category/${encodeURIComponent(category)}`}
                  className={[
                    'flex items-center justify-between rounded-2xl px-3 py-2 font-semibold transition',
                    location.pathname.includes(
                      `/category/${encodeURIComponent(category)}`
                    )
                      ? 'bg-brand-subtle text-brand'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-brand',
                  ].join(' ')}
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>📁</span>
                    {category}
                  </span>
                  <span className="text-xs text-slate-500">{categoryCount}</span>
                </Link>
                <ul className="mt-2 space-y-1.5 pl-5 text-slate-500">
                  {subcategories.map((subcategory) => {
                    const subCount = getSubcategoryCount(category, subcategory);
                    const isActive = location.pathname.includes(
                      `/category/${encodeURIComponent(
                        category
                      )}/${encodeURIComponent(subcategory)}`
                    );

                    return (
                      <li key={subcategory}>
                        <Link
                          to={`/category/${encodeURIComponent(
                            category
                          )}/${encodeURIComponent(subcategory)}`}
                          className={[
                            'flex items-center justify-between rounded-2xl px-3 py-1.5 text-xs transition',
                            isActive
                              ? 'bg-slate-900 text-white'
                              : 'hover:bg-slate-100 hover:text-brand',
                          ].join(' ')}
                        >
                          <span className="flex items-center gap-2">
                            <span aria-hidden>↳</span>
                            {subcategory}
                          </span>
                          <span className="text-2xs text-slate-400">
                            {subCount}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
