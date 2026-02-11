import { Container } from '@/components/Container';
import type { Content } from '@/content/types';

export function ContactSection({
  contact,
  site,
  contactLabel
}: {
  contact: Content['contact'];
  site: Content['site'];
  contactLabel: string;
}) {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="glass rounded-3xl p-8 text-center sm:p-12">
          <p className="eyebrow">{contactLabel}</p>
          <h2 className="mt-4 font-serif text-3xl text-slate-900 dark:text-white sm:text-5xl">{contact.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">{contact.body}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            {contact.ctaLabel}: {site.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
