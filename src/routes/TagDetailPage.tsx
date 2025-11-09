import { Navigate, useParams } from 'react-router-dom';

import { EmptyState } from '../components/EmptyState';
import { PostCard } from '../components/PostCard';
import { filterPosts } from '../lib/posts';

export const TagDetailPage = () => {
  const { tag } = useParams<{ tag: string }>();

  if (!tag) {
    return <Navigate to="/tags" replace />;
  }

  const decodedTag = decodeURIComponent(tag);
  const taggedPosts = filterPosts({ tag: decodedTag });

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Tag
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          #{decodedTag}
        </h1>
        <p className="text-sm text-slate-500">
          {taggedPosts.length}개의 글이 이 태그로 묶여 있습니다.
        </p>
      </header>

      {taggedPosts.length === 0 ? (
        <EmptyState
          title="아직 글이 없어요"
          description="이 태그가 포함된 마크다운 파일을 추가하면 자동으로 반영됩니다."
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {taggedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};
