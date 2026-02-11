import type { Metadata } from 'next';
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

export default function LocalePage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const content = getContent(routing.locales.includes(locale) ? locale : 'en');

  return (
    <main>
      <HeroSection hero={content.hero} site={content.site} />
      <AboutSection about={content.about} site={content.site} />
      <ProjectsSection projects={content.projects} />
      <ExperienceSection experience={content.experience} />
      <SkillsSection skills={content.skills} />
      <ContactSection contact={content.contact} site={content.site} />
      <SiteFooter site={content.site} />
    </main>
  );
}
