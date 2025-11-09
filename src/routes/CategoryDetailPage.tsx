import { useParams } from 'react-router-dom';

import { EmptyState } from '../components/EmptyState';
import { PostCard } from '../components/PostCard';
import { filterPosts } from '../lib/posts';

export const CategoryDetailPage = () => {
  const { category, subcategory } = useParams<{
    category: string;
    subcategory?: string;
  }>();

  const decodedCategory = category
    ? decodeURIComponent(category)
    : undefined;
  const decodedSubcategory = subcategory
    ? decodeURIComponent(subcategory)
    : undefined;

  const posts = filterPosts({
    category: decodedCategory,
    subcategory: decodedSubcategory,
  });

  const title = decodedSubcategory
    ? `${decodedCategory} / ${decodedSubcategory}`
    : decodedCategory ?? '카테고리';

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Category
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">{title}</h1>
        <p className="text-sm text-slate-500">
          {posts.length}개의 글이 있습니다.
        </p>
      </header>

      {posts.length === 0 ? (
        <EmptyState
          title="아직 글이 없어요"
          description="해당 카테고리로 마크다운 파일을 추가하면 자동으로 노출됩니다."
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};
