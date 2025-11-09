import type { CategoryMap } from '../types/post';

interface CategoryFilterProps {
  categories: CategoryMap;
  activeCategory?: string;
  activeSubcategory?: string;
  onCategoryChange: (category?: string) => void;
  onSubcategoryChange: (subcategory?: string) => void;
}

export const CategoryFilter = ({
  categories,
  activeCategory,
  activeSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: CategoryFilterProps) => {
  const categoryKeys = Object.keys(categories);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onCategoryChange(undefined)}
          className={[
            'rounded-full border px-4 py-1.5 text-sm transition',
            !activeCategory
              ? 'border-brand bg-brand-subtle text-brand-dark'
              : 'border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand-dark',
          ].join(' ')}
        >
          전체
        </button>
        {categoryKeys.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              onCategoryChange(category);
              onSubcategoryChange(undefined);
            }}
            className={[
              'rounded-full border px-4 py-1.5 text-sm transition',
              activeCategory === category
                ? 'border-brand bg-brand-subtle text-brand-dark'
                : 'border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand-dark',
            ].join(' ')}
          >
            {category}
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="flex flex-wrap gap-2 pl-1">
          {categories[activeCategory].map((subcategory) => (
            <button
              key={subcategory}
              type="button"
              onClick={() =>
                onSubcategoryChange(
                  activeSubcategory === subcategory ? undefined : subcategory
                )
              }
              className={[
                'rounded-full border px-3 py-1 text-xs transition',
                activeSubcategory === subcategory
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-700',
              ].join(' ')}
            >
              {subcategory}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
