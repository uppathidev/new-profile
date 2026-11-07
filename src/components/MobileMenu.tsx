import type { NavItem } from '@/data/portfolio';

interface MobileMenuProps {
  id: string;
  open: boolean;
  items: NavItem[];
  activeId: string;
  onNavigate: () => void;
}

export default function MobileMenu({ id, open, items, activeId, onNavigate }: MobileMenuProps) {
  return (
    <div
      id={id}
      className={`overflow-hidden border-t border-line bg-bg transition-all duration-300 lg:hidden ${
        open ? 'max-h-[80vh] opacity-100' : 'invisible max-h-0 opacity-0'
      }`}
    >
      <ul className="mx-auto max-w-6xl px-3 py-3">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                aria-current={isActive ? 'true' : undefined}
                className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-base transition-colors ${
                  isActive ? 'bg-surface text-accent' : 'text-muted hover:bg-surface hover:text-fg'
                }`}
              >
                {item.label}
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
