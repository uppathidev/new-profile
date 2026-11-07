import SectionHeading from '@/components/SectionHeading';
import { INTERESTS } from '@/data/portfolio';

export default function Interests() {
  return (
    <section id="beyond-code" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="07 · Interests" title="Beyond Code" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INTERESTS.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:border-accent/60"
            >
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 font-semibold text-fg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
