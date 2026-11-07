import SocialLinks from '@/components/SocialLinks';
import { PROFILE } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8">
        <SocialLinks />
        <p className="text-sm text-muted">{PROFILE.copyright}</p>
      </div>
    </footer>
  );
}
