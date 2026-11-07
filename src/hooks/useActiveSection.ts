import { useEffect, useState } from 'react';

const ACTIVATION_OFFSET_PX = 120;

export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = ids[0];

      if (atBottom) {
        current = ids[ids.length - 1];
      } else {
        for (const id of ids) {
          const element = document.getElementById(id);
          if (element && element.getBoundingClientRect().top <= ACTIVATION_OFFSET_PX) {
            current = id;
          }
        }
      }

      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return activeId;
}
