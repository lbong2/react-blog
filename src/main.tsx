import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import './index.css';
import { AppLayout } from './routes/AppLayout';
import { CategoriesPage } from './routes/CategoriesPage';
import { CategoryDetailPage } from './routes/CategoryDetailPage';
import { HomePage } from './routes/HomePage';
import { NotFoundPage } from './routes/NotFoundPage';
import { PostDetailPage } from './routes/PostDetailPage';
import { TagDetailPage } from './routes/TagDetailPage';
import { TagsPage } from './routes/TagsPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'posts/:slug', element: <PostDetailPage /> },
        { path: 'tags', element: <TagsPage /> },
        { path: 'tag/:tag', element: <TagDetailPage /> },
        { path: 'categories', element: <CategoriesPage /> },
        {
          path: 'category/:category',
          element: <CategoryDetailPage />,
        },
        {
          path: 'category/:category/:subcategory',
          element: <CategoryDetailPage />,
        },
        { path: 'not-found', element: <NotFoundPage /> },
        { path: '*', element: <Navigate to="/not-found" replace /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
