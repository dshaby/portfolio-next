import Image from 'next/image';
import { Container } from '@/components/Container';
import type { Content } from '@/content/types';

export function AboutSection({ about, site }: { about: Content['about']; site: Content['site'] }) {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="glass animate-rise rounded-3xl p-6 sm:p-8">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={site.profileImage}
                alt={site.name}
                width={800}
                height={1000}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <p className="mt-6 text-sm text-slate-300">{site.tagline}</p>
          </div>
          <div className="space-y-8">
            <p className="eyebrow">Profile</p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">{about.title}</h2>
            <div className="space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {about.highlights.map((item) => (
                <article key={item.title} className="glass rounded-2xl p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-200">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
