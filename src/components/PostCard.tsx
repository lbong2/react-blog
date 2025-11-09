import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Link } from 'react-router-dom';

import type { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const formattedDate = format(new Date(post.date), 'PPP', { locale: ko });

  return (
    <article className="card-surface flex flex-col">
      {post.heroImage && (
        <div className="relative h-48 w-full overflow-hidden rounded-2xl">
          <img
            src={post.heroImage}
            alt={post.title}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="text-xs font-medium uppercase tracking-wide text-brand">
          {post.category} · {post.subcategory}
        </div>
        <div className="space-y-2">
          <Link
            to={`/posts/${post.slug}`}
            className="block text-xl font-semibold text-slate-900 transition hover:text-brand"
          >
            {post.title}
          </Link>
          <p className="text-sm text-slate-600">{post.excerpt}</p>
        </div>
        <div className="mt-auto flex items-center justify-between text-xs text-slate-500">
          <span>{formattedDate}</span>
          <span>{post.readingTime}분 읽기</span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/tag/${encodeURIComponent(tag)}`}
                className="tag-pill"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
