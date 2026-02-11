'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import type { AppLocale } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';

const localeOptions: Array<{ code: AppLocale; short: string; label: string }> = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'es', short: 'ES', label: 'Espanol' },
  { code: 'pt', short: 'PT', label: 'Portugues' },
  { code: 'fr', short: 'FR', label: 'Francais' }
];

export function LocaleSwitcher() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const current = localeOptions.find((option) => option.code === locale) ?? localeOptions[0];

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  function selectLocale(nextLocale: AppLocale) {
    setOpen(false);
    if (nextLocale !== locale) {
      router.replace(pathname, { locale: nextLocale });
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold tracking-[0.16em] text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-white/15 dark:bg-slate-950 dark:text-white/80 dark:hover:border-white/40 dark:hover:text-white"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span>{current.short}</span>
        <span className="text-[10px]">v</span>
      </button>

      {open ? (
        <div className="glass absolute right-0 top-full z-30 mt-2 w-44 overflow-hidden rounded-2xl border border-slate-300/70 p-1 shadow-card dark:border-white/10">
          {localeOptions.map((option) => {
            const active = option.code === locale;
            return (
              <button
                key={option.code}
                type="button"
                onClick={() => selectLocale(option.code)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition ${
                  active
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-white/10'
                }`}
                role="menuitem"
              >
                <span>{option.label}</span>
                <span className="text-xs opacity-75">{option.short}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
