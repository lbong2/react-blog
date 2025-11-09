import { Link } from 'react-router-dom';

interface TagCloudProps {
  tags: string[];
}

export const TagCloud = ({ tags }: TagCloudProps) => (
  <div className="flex flex-wrap gap-3">
    {tags.map((tag) => (
      <Link
        key={tag}
        to={`/tag/${encodeURIComponent(tag)}`}
        className="tag-pill text-sm"
      >
        #{tag}
      </Link>
    ))}
  </div>
);
