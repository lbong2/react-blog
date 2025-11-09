import { Link } from 'react-router-dom';

import type { CategoryMap } from '../types/post';

interface CategoryGridProps {
  categories: CategoryMap;
}

export const CategoryGrid = ({ categories }: CategoryGridProps) => (
  <div className="grid gap-6 md:grid-cols-2">
    {Object.entries(categories).map(([category, subcategories]) => (
      <article key={category} className="card-surface p-6">
        <header className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900">{category}</h3>
          <p className="text-sm text-slate-500">
            {subcategories.length} 개의 중분류
          </p>
        </header>
        <ul className="space-y-2">
          {subcategories.map((subcategory) => (
            <li key={subcategory}>
              <Link
                to={`/category/${encodeURIComponent(category)}/${encodeURIComponent(
                  subcategory
                )}`}
                className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:border-brand hover:text-brand"
              >
                <span>{subcategory}</span>
                <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);
