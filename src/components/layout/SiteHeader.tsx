import { NavLink } from 'react-router-dom';

import { siteConfig } from '../../config/siteConfig';
import { useSearch } from '../../contexts/SearchContext';
import { SearchInput } from '../shared/SearchInput';

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm font-medium transition',
    isActive ? 'text-brand' : 'text-slate-600 hover:text-slate-900',
  ].join(' ');

export const SiteHeader = () => {
  const { query, setQuery } = useSearch();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center gap-8 px-8">
        <NavLink
          to="/"
          className="font-display text-xl font-semibold text-slate-900"
        >
          {siteConfig.title}
        </NavLink>
        <nav className="hidden gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto hidden w-[22rem] md:block">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder={siteConfig.search.placeholder}
          />
        </div>
      </div>
    </header>
  );
};
