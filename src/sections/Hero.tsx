import { ArrowRight, Download } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { PROFILE } from '@/data/portfolio';
import { getLinkProps } from '@/lib/links';

export default function Hero() {
  return (
    <section id="home" className="flex min-h-svh items-center pb-12 pt-28 sm:pb-16 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <p className="animate-fade-up font-mono text-sm tracking-[0.2em] text-accent">HELLO, I'M SURESH</p>
          <h1
            className="animate-fade-up mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            {PROFILE.headline}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: '160ms' }}
          >
            {PROFILE.subheadline}
          </p>

          <ul className="animate-fade-up mt-8 flex flex-wrap gap-2" style={{ animationDelay: '220ms' }}>
            {PROFILE.expertise.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '280ms' }}>
            <a href="#projects" className="btn-primary">
              Explore My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.resumeUrl}
              {...getLinkProps(PROFILE.resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="animate-fade-up mt-10" style={{ animationDelay: '340ms' }}>
            <SocialLinks />
          </div>
        </div>

        <div className="animate-fade-up mx-auto w-full max-w-xs lg:max-w-none" style={{ animationDelay: '200ms' }}>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-surface">
            {PROFILE.photoUrl ? (
              <img
                src={PROFILE.photoUrl}
                alt={PROFILE.photoAlt}
                width={640}
                height={640}
                className="h-full w-full object-cover"
              />
            ) : (
              <div role="img" aria-label={PROFILE.photoAlt} className="grid h-full place-items-center">
                <span className="text-8xl font-semibold tracking-tight text-accent">{PROFILE.initials}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
