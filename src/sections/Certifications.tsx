import SectionHeading from '@/components/SectionHeading';
import { CERTIFICATIONS } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="06 · Recognition" title="Certifications & Awards" />
        <div className="grid gap-5 md:grid-cols-3">
          {CERTIFICATIONS.map(({ title, issuer, description, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-raised text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-fg">{title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-accent">{issuer}</p>
              <p className="mt-4 leading-relaxed text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
