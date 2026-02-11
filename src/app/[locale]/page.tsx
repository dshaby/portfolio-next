import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getContent } from '@/content';
import type { AppLocale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SiteFooter } from '@/components/SiteFooter';
import { SkillsSection } from '@/components/SkillsSection';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as AppLocale;
  const content = getContent(routing.locales.includes(locale) ? locale : 'en');

  return {
    title: `${content.site.name} | ${content.site.role}`,
    description: content.site.tagline,
    alternates: {
      languages: {
        en: '/en',
        es: '/es'
      }
    }
  };
}

export default async function LocalePage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const content = getContent(routing.locales.includes(locale) ? locale : 'en');
  const t = await getTranslations('ui');

  return (
    <main>
      <HeroSection hero={content.hero} site={content.site} snapshotLabel={t('snapshot')} />
      <AboutSection about={content.about} site={content.site} profileLabel={t('profile')} />
      <ProjectsSection
        projects={content.projects}
        workLabel={t('work')}
        visitProjectLabel={t('visitProject')}
      />
      <ExperienceSection experience={content.experience} careerLabel={t('career')} />
      <SkillsSection skills={content.skills} toolkitLabel={t('toolkit')} />
      <ContactSection contact={content.contact} site={content.site} contactLabel={t('contact')} />
      <SiteFooter site={content.site} />
    </main>
  );
}
