import { Container } from '@/components/Container';
import type { Content } from '@/content/types';

export function SkillsSection({
  skills,
  toolkitLabel
}: {
  skills: Content['skills'];
  toolkitLabel: string;
}) {
  return (
    <section id="skills" className="py-20">
      <Container>
        <div className="mb-10 space-y-4">
          <p className="eyebrow">{toolkitLabel}</p>
          <h2 className="font-serif text-3xl text-slate-900 dark:text-white sm:text-4xl">{skills.title}</h2>
          <p className="max-w-3xl text-base text-slate-700 dark:text-slate-300 md:text-lg">{skills.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.categories.map((category) => (
            <article key={category.name} className="glass rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">{category.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 dark:border-white/15 dark:text-slate-200">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
