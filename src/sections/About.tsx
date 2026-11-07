import SectionHeading from '@/components/SectionHeading';
import { ABOUT_FOCUS_AREAS, ABOUT_PARAGRAPHS } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-10">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="01 · About" title="About Me" className="mb-8" />
          <div className="space-y-5">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="self-start rounded-2xl border border-line bg-surface p-8">
          <p className="text-6xl font-semibold tracking-tight text-accent">8+</p>
          <p className="mt-2 text-fg">Years of experience building software</p>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">Focus areas</p>
          <ul className="mt-4 space-y-3">
            {ABOUT_FOCUS_AREAS.map((area) => (
              <li key={area} className="flex items-center gap-3 text-fg">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
