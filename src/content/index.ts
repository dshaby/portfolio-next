import en from './en';
import es from './es';
import pt from './pt';
import fr from './fr';
import type { Content } from './types';
import type { AppLocale } from '@/i18n/routing';

export const contentByLocale: Record<AppLocale, Content> = {
  en,
  es,
  pt,
  fr
};

export function getContent(locale: AppLocale): Content {
  return contentByLocale[locale];
}
