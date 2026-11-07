import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { NAV_ITEMS, PROFILE } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollY } from '@/hooks/useScrollY';

const sectionIds = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeId = useActiveSection(sectionIds);
  const scrolled = useScrollY() > 8;

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-line bg-bg' : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 rounded-md font-semibold text-fg">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-semibold text-bg">
            {PROFILE.initials}
          </span>
          <span>{PROFILE.name}</span>
        </a>

        <ul className="hidden items-center lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-md px-2.5 py-2 text-sm transition-colors xl:px-3 ${
                    isActive ? 'text-accent' : 'text-muted hover:text-fg'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 xl:inset-x-3 rounded-full bg-accent transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-fg transition hover:border-accent lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <MobileMenu
        id="mobile-menu"
        open={menuOpen}
        items={NAV_ITEMS}
        activeId={activeId}
        onNavigate={() => setMenuOpen(false)}
      />
    </header>
  );
}
