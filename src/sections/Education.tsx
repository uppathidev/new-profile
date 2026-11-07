import { GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { EDUCATION } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="05 · Education" title="Education" />
        <div className="grid gap-5">
          {EDUCATION.map((entry) => (
            <article
              key={entry.degree}
              className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-7 sm:flex-row sm:p-8"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-raised text-accent">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-fg">{entry.degree}</h3>
                <p className="mt-1 text-muted">
                  {entry.institution} · {entry.period}
                </p>
                <p className="mt-4 leading-relaxed text-muted">{entry.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
