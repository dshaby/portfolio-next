import Image from 'next/image';
import { Container } from '@/components/Container';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import type { Content } from '@/content/types';

type NavLabels = {
  about: string;
  projects: string;
  experience: string;
  skills: string;
  contact: string;
  resume: string;
  talk: string;
};

export function SiteHeader({ nav, site }: { nav: NavLabels; site: Content['site'] }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
      <Container className="flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-slate-300 dark:border-white/20">
            <Image src={site.avatarImage} alt={site.name} fill sizes="36px" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{site.name}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">{site.role}</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          <Link href="#about" className="transition hover:text-slate-900 dark:hover:text-white">
            {nav.about}
          </Link>
          <Link href="#projects" className="transition hover:text-slate-900 dark:hover:text-white">
            {nav.projects}
          </Link>
          <Link href="#experience" className="transition hover:text-slate-900 dark:hover:text-white">
            {nav.experience}
          </Link>
          <Link href="#skills" className="transition hover:text-slate-900 dark:hover:text-white">
            {nav.skills}
          </Link>
          <Link href="#contact" className="transition hover:text-slate-900 dark:hover:text-white">
            {nav.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-white/15 dark:bg-transparent dark:text-white/80 dark:hover:border-white/40 dark:hover:text-white md:inline-flex"
          >
            {nav.resume}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-500 hover:text-slate-900 dark:border-white/15 dark:bg-transparent dark:text-white/80 dark:hover:border-white/40 dark:hover:text-white md:inline-flex"
          >
            {nav.talk}
          </a>
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </Container>
    </header>
  );
}
