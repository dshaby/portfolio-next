import { Container } from '@/components/Container';
import type { Content } from '@/content/types';

export function SiteFooter({ site }: { site: Content['site'] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-300/80 py-10 dark:border-white/10">
      <Container className="flex flex-col gap-6 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-slate-900 dark:text-slate-200">{site.name}</p>
          <p>{site.role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {site.social.map((entry) => (
            <a
              key={entry.name}
              href={entry.url}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-slate-900 dark:hover:text-slate-100"
            >
              {entry.name}
            </a>
          ))}
          <span className="rounded-full border border-slate-300 px-3 py-1 text-xs uppercase tracking-[0.15em] text-slate-700 dark:border-white/15 dark:text-slate-300">
            {site.availabilityLabel}
          </span>
        </div>
        <p className="text-xs">{year}</p>
      </Container>
    </footer>
  );
}
