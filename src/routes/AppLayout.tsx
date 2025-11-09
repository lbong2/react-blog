import { Outlet } from 'react-router-dom';

import { SiteFooter } from '../components/layout/SiteFooter';
import { SiteHeader } from '../components/layout/SiteHeader';

export const AppLayout = () => (
  <div className="min-h-screen bg-slate-50">
    <SiteHeader />
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Outlet />
    </main>
    <SiteFooter />
  </div>
);
