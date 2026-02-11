import Image from 'next/image';
import { Container } from '@/components/Container';
import type { Content } from '@/content/types';

export function ProjectsSection({
  projects,
  workLabel,
  visitProjectLabel
}: {
  projects: Content['projects'];
  workLabel: string;
  visitProjectLabel: string;
}) {
  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="mb-10 space-y-4">
          <p className="eyebrow">{workLabel}</p>
          <h2 className="font-serif text-3xl text-slate-900 dark:text-white sm:text-4xl">{projects.title}</h2>
          <p className="max-w-3xl text-base text-slate-700 dark:text-slate-300 md:text-lg">{projects.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.items.map((project, index) => (
            <article
              key={project.title}
              className="glass group overflow-hidden rounded-3xl border border-slate-300/70 transition hover:-translate-y-1 hover:border-slate-400 dark:border-white/10 dark:hover:border-white/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs tracking-[0.2em] text-slate-700 dark:bg-slate-950/80 dark:text-slate-200">
                  {project.year}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif text-2xl text-slate-900 dark:text-white">{project.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.description}</p>
                <ul className="space-y-1">
                  {project.outcomes.map((item) => (
                    <li key={item} className="text-sm text-slate-700 dark:text-slate-300">
                      - {item}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li key={item} className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 dark:border-white/15 dark:text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
                  >
                    {visitProjectLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
