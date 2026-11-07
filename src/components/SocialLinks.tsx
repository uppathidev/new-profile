import { SOCIAL_LINKS } from '@/data/portfolio';
import { getLinkProps } from '@/lib/links';

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...getLinkProps(href)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-muted transition hover:border-accent hover:text-accent"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
