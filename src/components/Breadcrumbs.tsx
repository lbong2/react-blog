import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
    <ol className="flex flex-wrap items-center gap-1">
      {items.map((item, index) => (
        <li key={item.label} className="flex items-center gap-1">
          {item.path ? (
            <Link
              to={item.path}
              className="transition hover:text-brand"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-700">{item.label}</span>
          )}
          {index < items.length - 1 && <span>/</span>}
        </li>
      ))}
    </ol>
  </nav>
);
