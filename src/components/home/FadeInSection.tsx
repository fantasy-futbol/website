'use client';

import { useEffect, useRef, useState } from 'react';

// One IntersectionObserver shared by every FadeInSection on the page.
const callbacks = new Map<Element, () => void>();
let observer: IntersectionObserver | null = null;

function observe(el: Element, onVisible: () => void) {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          callbacks.get(entry.target)?.();
          unobserve(entry.target);
        }
      }
    },
    { rootMargin: '-100px' }
  );
  callbacks.set(el, onVisible);
  observer.observe(el);
}

function unobserve(el: Element) {
  callbacks.delete(el);
  observer?.unobserve(el);
}

export default function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    observe(el, () => setVisible(true));
    return () => unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[600ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
