'use client';

import { useState } from 'react';

type EmailActionsProps = {
  email: string;
  ctaLabel: string;
  copyLabel: string;
  copiedLabel: string;
};

export function EmailActions({ email, ctaLabel, copyLabel, copiedLabel }: EmailActionsProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        {ctaLabel}: {email}
      </a>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 dark:border-white/20 dark:bg-transparent dark:text-slate-200 dark:hover:border-white/40"
      >
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
