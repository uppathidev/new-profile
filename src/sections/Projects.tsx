import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { PROJECTS } from '@/data/portfolio';
import { getLinkProps } from '@/lib/links';

export default function Projects() {
  return (
    <section id="projects" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="04 · Projects" title="Selected Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/60 sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold text-fg">{project.name}</h3>
              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-raised px-2.5 py-1 font-mono text-xs text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <a
                  href={project.repoUrl}
                  {...getLinkProps(project.repoUrl)}
                  aria-label={`${project.name} repository on GitHub`}
                  className="btn-secondary"
                >
                  <Github className="h-4 w-4" />
                  Repository
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    {...getLinkProps(project.demoUrl)}
                    aria-label={`${project.name} live demo`}
                    className="btn-secondary"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
