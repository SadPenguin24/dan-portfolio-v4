"use client";

import { useEffect, useState } from "react";

export default function useScrollSpy(
  sectionIds: string[],
  offset: number = 80
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're near the bottom of the page — if so, activate the last section
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 100) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Otherwise find the section closest to the top of the viewport
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset + 100) {
          current = id;
        }
      }
      if (current) {
        setActiveId(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
