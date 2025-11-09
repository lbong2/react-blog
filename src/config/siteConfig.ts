type NavItem = {
  label: string;
  path: string;
};

interface GithubPagesConfig {
  repositoryName: string;
  basePath: string;
}

interface GiscusConfig {
  enabled: boolean;
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: 'pathname' | 'url' | 'title' | 'og:title';
  reactionsEnabled: '0' | '1';
  emitMetadata: '0' | '1';
  theme: 'light' | 'light_high_contrast' | 'dark' | 'transparent_dark';
  lang: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    email: string;
    github: string;
  };
  navigation: NavItem[];
  search: {
    placeholder: string;
  };
  githubPages: GithubPagesConfig;
  giscus: GiscusConfig;
}

export const siteConfig: SiteConfig = {
  title: 'Dev Notes',
  description: 'React + Tailwind로 만든 GitHub Pages 블로그 스타터',
  author: {
    name: 'Your Name',
    email: 'you@example.com',
    github: 'your-github-id',
  },
  navigation: [
    { label: 'Posts', path: '/' },
    { label: 'Tags', path: '/tags' },
    { label: 'Categories', path: '/categories' },
  ],
  search: {
    placeholder: '검색어를 입력하세요...',
  },
  githubPages: {
    repositoryName: 'react-blog',
    // GitHub Pages base 경로. 사용자 페이지라면 '/' 로 두세요.
    basePath: '/react-blog/',
  },
  giscus: {
    enabled: false,
    repo: 'your-github-id/react-blog',
    repoId: '',
    category: 'General',
    categoryId: '',
    mapping: 'pathname',
    reactionsEnabled: '1',
    emitMetadata: '0',
    theme: 'light',
    lang: 'ko',
  },
};
