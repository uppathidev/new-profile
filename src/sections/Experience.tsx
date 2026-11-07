import SectionHeading from '@/components/SectionHeading';
import { EXPERIENCE } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="03 · Experience" title="Professional Experience" />
        <ol className="ml-2 max-w-4xl border-l border-line">
          {EXPERIENCE.map((role) => (
            <li key={`${role.company}-${role.period}`} className="relative pb-14 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
              />
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{role.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-fg">{role.title}</h3>
              <p className="mt-1 text-muted">
                {role.company}
                {role.client && <span> · Client: {role.client}</span>}
              </p>
              <ul className="mt-5 list-disc space-y-2.5 pl-5 leading-relaxed text-muted marker:text-accent">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
