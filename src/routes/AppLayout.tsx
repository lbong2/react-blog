import { Outlet } from 'react-router-dom';

import { CategorySidebar } from '../components/CategorySidebar';
import { SiteFooter } from '../components/layout/SiteFooter';
import { SiteHeader } from '../components/layout/SiteHeader';
import { LayoutAsideProvider, useLayoutAside } from '../contexts/LayoutAsideContext';
import { SearchProvider } from '../contexts/SearchContext';

const LayoutShell = () => {
  const { rightAside } = useLayoutAside();

  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[1600px] justify-between gap-12 px-10 py-14">
        <CategorySidebar />
        <div className="min-w-0 flex-1 max-w-[920px]">
          <Outlet />
        </div>
        <div className="hidden xl:block w-80 shrink-0">
          {rightAside ?? (
            <div className="sticky top-24 rounded-3xl border border-dashed border-slate-200 bg-white/80 p-6 text-sm text-slate-500 shadow-inner">
              포스트 상세 페이지에 들어가면 목차가 여기에 표시됩니다.
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export const AppLayout = () => (
  <SearchProvider>
    <LayoutAsideProvider>
      <LayoutShell />
    </LayoutAsideProvider>
  </SearchProvider>
);
