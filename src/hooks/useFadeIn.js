// src/hooks/useFadeIn.js
import { useEffect, useRef } from 'react';

export default function useFadeIn(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
      }
    );

    const children = node.querySelectorAll('.fade-section');
    children.forEach((child) => observer.observe(child));

    if (node.classList.contains('fade-section')) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
