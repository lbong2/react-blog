import { NavLink } from 'react-router-dom';

import { siteConfig } from '../../config/siteConfig';

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm font-medium transition',
    isActive ? 'text-brand' : 'text-slate-600 hover:text-slate-900',
  ].join(' ');

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <NavLink
        to="/"
        className="font-display text-xl font-semibold text-slate-900"
      >
        {siteConfig.title}
      </NavLink>
      <nav className="hidden gap-6 md:flex">
        {siteConfig.navigation.map((item) => (
          <NavLink key={item.path} to={item.path} className={navClass}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a
        href={`https://github.com/${siteConfig.author.github}`}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium text-slate-500 transition hover:text-brand"
      >
        GitHub
      </a>
    </div>
  </header>
);
