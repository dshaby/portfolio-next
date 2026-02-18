import Image from 'next/image';
import { Container } from '@/components/Container';
import type { Content } from '@/content/types';

export function AboutSection({
  about,
  site,
  profileLabel
}: {
  about: Content['about'];
  site: Content['site'];
  profileLabel: string;
}) {
  return (
    <section id="about" className="py-16 md:py-18 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="glass animate-rise mx-auto w-full rounded-3xl p-6 sm:p-8 md:max-w-xl lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl border border-slate-300/70 dark:border-white/10 lg:aspect-[4/5]">
              <Image
                src={site.profileImage}
                alt={site.name}
                width={800}
                height={1000}
                className="h-auto w-full object-cover lg:h-full"
                priority
              />
            </div>
            <p className="mt-6 text-sm text-slate-700 dark:text-slate-300">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-800 transition hover:border-slate-500 dark:border-white/20 dark:bg-transparent dark:text-slate-200 dark:hover:border-white/40"
            >
              {site.email}
            </a>
          </div>
          <div className="space-y-6 lg:-mt-2">
            <p className="eyebrow">{profileLabel}</p>
            <h2 className="font-serif text-3xl text-slate-900 dark:text-white sm:text-4xl">{about.title}</h2>
            <div className="max-w-3xl space-y-3.5 text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-[1.03rem]">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:hidden">
              {about.highlights.map((item) => (
                <article key={item.title} className="glass rounded-2xl p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-800 dark:text-slate-200">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 hidden gap-4 lg:grid lg:grid-cols-3">
          {about.highlights.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-800 dark:text-slate-200">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
