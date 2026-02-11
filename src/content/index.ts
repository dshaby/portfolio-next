import en from './en';
import es from './es';
import type { Content } from './types';
import type { AppLocale } from '@/i18n/routing';

export const contentByLocale: Record<AppLocale, Content> = {
  en,
  es
};

export function getContent(locale: AppLocale): Content {
  return contentByLocale[locale];
}
