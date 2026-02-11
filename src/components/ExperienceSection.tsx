import { Container } from '@/components/Container';
import type { Content } from '@/content/types';

export function ExperienceSection({
  experience,
  careerLabel
}: {
  experience: Content['experience'];
  careerLabel: string;
}) {
  return (
    <section id="experience" className="py-20">
      <Container>
        <div className="mb-10 space-y-4">
          <p className="eyebrow">{careerLabel}</p>
          <h2 className="font-serif text-3xl text-slate-900 dark:text-white sm:text-4xl">{experience.title}</h2>
        </div>
        <ol className="relative space-y-8 border-l border-slate-300 pl-8 dark:border-white/15">
          {experience.items.map((item) => (
            <li key={`${item.company}-${item.years}`} className="relative">
              <span className="absolute -left-[38px] top-1 h-4 w-4 rounded-full border-2 border-sky-500 bg-white dark:border-sky-300 dark:bg-slate-900" />
              <article className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl text-slate-900 dark:text-white">{item.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{item.years}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">{item.company}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>- {highlight}</li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li key={tech} className="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
