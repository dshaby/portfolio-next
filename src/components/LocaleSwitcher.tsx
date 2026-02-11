'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === 'en' ? 'es' : 'en';

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-white/15 dark:bg-slate-950 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
      aria-label={`Switch language to ${nextLocale}`}
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}
