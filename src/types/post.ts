export type CategoryMap = Record<string, string[]>;

export interface PostFrontMatter {
  title: string;
  excerpt?: string;
  date: string;
  tags?: string[];
  category: string;
  subcategory: string;
  heroImage?: string;
  readingTime?: number;
  draft?: boolean;
}

export interface Post extends Omit<PostFrontMatter, 'tags'> {
  slug: string;
  content: string;
  wordCount: number;
  isoDate: string;
  tags: string[];
}
