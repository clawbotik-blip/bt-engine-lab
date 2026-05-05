import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm text-slate-400" role="list">
        <li>
          <Link href="/" className="hover:text-brand-navy transition-colors">Home</Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {crumb.href && i < crumbs.length - 1 ? (
              <Link href={crumb.href} className="hover:text-brand-navy transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-slate-600 font-medium" aria-current="page">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
