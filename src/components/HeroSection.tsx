import { Container } from '@/components/Container';
import type { Content } from '@/content/types';

export function HeroSection({ hero, site }: { hero: Content['hero']; site: Content['site'] }) {
  return (
    <section className="pb-16 pt-20 md:pb-28 md:pt-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="animate-rise space-y-8">
            <p className="eyebrow">{site.location}</p>
            <h1 className="max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{hero.subhead}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={hero.primaryCta.href}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="animate-rise-delayed glass rounded-3xl p-7 shadow-card">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-slate-400">Snapshot</p>
            <ul className="space-y-5">
              {hero.stats.map((stat) => (
                <li key={stat.label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="text-sm text-slate-300">{stat.label}</span>
                  <span className="font-mono text-xl text-white">{stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
