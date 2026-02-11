import { Container } from '@/components/Container';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import type { Content } from '@/content/types';

type NavLabels = {
  about: string;
  projects: string;
  experience: string;
  skills: string;
  contact: string;
};

export function SiteHeader({ nav, site }: { nav: NavLabels; site: Content['site'] }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-100/90 to-slate-300/40" />
          <div>
            <p className="text-sm font-semibold text-white">{site.name}</p>
            <p className="text-xs text-slate-400">{site.role}</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link href="#about" className="transition hover:text-white">
            {nav.about}
          </Link>
          <Link href="#projects" className="transition hover:text-white">
            {nav.projects}
          </Link>
          <Link href="#experience" className="transition hover:text-white">
            {nav.experience}
          </Link>
          <Link href="#skills" className="transition hover:text-white">
            {nav.skills}
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            {nav.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white md:inline-flex"
          >
            Let’s talk
          </Link>
          <LocaleSwitcher />
        </div>
      </Container>
    </header>
  );
}
