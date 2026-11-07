import SectionHeading from '@/components/SectionHeading';
import { SKILL_GROUPS } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="02 · Skills" title="Technical Skills" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map(({ title, icon: Icon, skills }) => (
            <article
              key={title}
              className="rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-raised text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-fg">{title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="rounded-md bg-raised px-2.5 py-1 text-sm text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
