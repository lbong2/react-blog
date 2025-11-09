import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import type { Post } from '../types/post';

interface PostMetaProps {
  post: Post;
}

export const PostMeta = ({ post }: PostMetaProps) => {
  const formattedDate = format(new Date(post.date), 'PPP', { locale: ko });

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
      <span>{formattedDate}</span>
      <span>{post.readingTime}분 읽기</span>
      <span>
        {post.category} / {post.subcategory}
      </span>
    </div>
  );
};
