import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { getContent } from '@/content';
import type { AppLocale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as AppLocale;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations('nav');
  const content = getContent(locale);

  const nav = {
    about: t('about'),
    projects: t('projects'),
    experience: t('experience'),
    skills: t('skills'),
    contact: t('contact')
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="relative isolate min-h-screen">
        <SiteHeader nav={nav} site={content.site} />
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
