import { Container } from '@/components/Container';
import type { Content } from '@/content/types';

export function ContactSection({ contact, site }: { contact: Content['contact']; site: Content['site'] }) {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="glass rounded-3xl p-8 text-center sm:p-12">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 font-serif text-3xl text-white sm:text-5xl">{contact.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{contact.body}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            {contact.ctaLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
