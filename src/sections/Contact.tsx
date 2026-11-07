import { Mail } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { PROFILE, SOCIAL_LINKS } from '@/data/portfolio';
import { getLinkProps } from '@/lib/links';

export default function Contact() {
  return (
    <section id="contact" className="py-8 sm:py-10">
      <div className="mx-auto grid min-w-0 max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="08 · Contact"
            title="Let's Build Something Amazing"
            description="I'm always open to discussing new projects, creative ideas, technical challenges, or opportunities to be part of your vision."
            className="mb-10"
          />
          <a href={`mailto:${PROFILE.email}`} className="btn-primary">
            Get In Touch
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <ul className="grid min-w-0 gap-4">
          {SOCIAL_LINKS.map(({ label, display, href, icon: Icon }) => (
            <li key={label} className="min-w-0">
              <a
                href={href}
                {...getLinkProps(href)}
                className="group flex w-full min-w-0 items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/60"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-raised text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted">{label}</span>
                  <span className="block truncate font-medium text-fg transition group-hover:text-accent">
                    {display}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
