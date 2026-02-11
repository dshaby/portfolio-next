'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
}

export function ThemeToggle() {
  const t = useTranslations('ui');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const initial = stored === 'dark' ? 'dark' : 'light';
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function handleToggle() {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-400 dark:border-white/20 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-white/40"
      aria-label={theme === 'light' ? t('themeSwitchToDark') : t('themeSwitchToLight')}
    >
      {theme === 'light' ? t('themeDark') : t('themeLight')}
    </button>
  );
}
