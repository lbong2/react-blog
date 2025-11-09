import { Navigate, NavLink, useParams } from 'react-router-dom';

import { Breadcrumbs } from '../components/Breadcrumbs';
import { EmptyState } from '../components/EmptyState';
import { GiscusWidget } from '../components/GiscusWidget';
import { PostCard } from '../components/PostCard';
import { PostMeta } from '../components/PostMeta';
import { filterPosts, getPostBySlug } from '../lib/posts';

export const PostDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/not-found" replace />;
  }

  const relatedPosts = filterPosts({
    category: post.category,
    subcategory: post.subcategory,
  }).filter((candidate) => candidate.slug !== post.slug);

  return (
    <article className="space-y-10">
      <Breadcrumbs
        items={[
          { label: '홈', path: '/' },
          {
            label: post.category,
            path: `/category/${encodeURIComponent(post.category)}`,
          },
          {
            label: post.subcategory,
            path: `/category/${encodeURIComponent(post.category)}/${encodeURIComponent(
              post.subcategory
            )}`,
          },
          { label: post.title },
        ]}
      />

      <header className="space-y-4">
        <span className="rounded-full bg-brand-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
          {post.category} · {post.subcategory}
        </span>
        <h1 className="text-4xl font-bold text-slate-900">{post.title}</h1>
        <PostMeta post={post} />
      </header>

      {post.heroImage && (
        <img
          src={post.heroImage}
          alt={post.title}
          className="h-96 w-full rounded-3xl object-cover"
        />
      )}

      <div className="prose-custom prose-img:rounded-2xl" dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <NavLink
              key={tag}
              to={`/tag/${encodeURIComponent(tag)}`}
              className="tag-pill"
            >
              #{tag}
            </NavLink>
          ))}
        </div>
      )}

      <GiscusWidget />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">
          관련 글 더 보기
        </h2>
        {relatedPosts.length === 0 ? (
          <EmptyState
            title="아직 관련 글이 없어요"
            description="같은 카테고리로 새 글을 작성해 보세요."
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.slice(0, 2).map((related) => (
              <PostCard key={related.slug} post={related} />
            ))}
          </div>
        )}
      </section>
    </article>
  );
};
