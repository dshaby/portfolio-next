import { Container } from '@/components/Container';
import type { Content } from '@/content/types';
import { EmailActions } from '@/components/EmailActions';

export function ContactSection({
  contact,
  site,
  contactLabel,
  copyEmailLabel,
  copiedLabel
}: {
  contact: Content['contact'];
  site: Content['site'];
  contactLabel: string;
  copyEmailLabel: string;
  copiedLabel: string;
}) {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="glass rounded-3xl p-8 text-center sm:p-12">
          <p className="eyebrow">{contactLabel}</p>
          <h2 className="mt-4 font-serif text-3xl text-slate-900 dark:text-white sm:text-5xl">{contact.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">{contact.body}</p>
          <EmailActions
            email={site.email}
            ctaLabel={contact.ctaLabel}
            copyLabel={copyEmailLabel}
            copiedLabel={copiedLabel}
          />
        </div>
      </Container>
    </section>
  );
}
