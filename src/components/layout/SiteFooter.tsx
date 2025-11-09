import { siteConfig } from '../../config/siteConfig';

export const SiteFooter = () => (
  <footer className="border-t border-slate-200 bg-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} {siteConfig.title}. Powered by React &
        Tailwind CSS.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href={`mailto:${siteConfig.author.email}`}
          className="transition hover:text-brand"
        >
          Contact
        </a>
        <a
          href={`https://github.com/${siteConfig.author.github}/${siteConfig.githubPages.repositoryName}`}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-brand"
        >
          Repository
        </a>
      </div>
    </div>
  </footer>
);
