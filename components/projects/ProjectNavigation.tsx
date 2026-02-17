import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/lib/data/types";

interface ProjectNavigationProps {
  previous: Project | null;
  next: Project | null;
}

export default function ProjectNavigation({
  previous,
  next,
}: ProjectNavigationProps) {
  return (
    <section className="bg-offwhite dark:bg-charcoal border-t border-charcoal/5 dark:border-offwhite/5 py-12">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center gap-4">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="flex items-center gap-2 text-charcoal/60 dark:text-offwhite/60 hover:text-orange transition-colors group min-w-0 flex-1"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-xs text-charcoal/40 dark:text-offwhite/40">
                  Previous
                </p>
                <p className="text-sm font-semibold truncate">{previous.title}</p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <Link
            href="/#projects"
            className="text-sm font-semibold text-orange hover:text-orange/80 transition-colors flex-shrink-0"
          >
            All Projects
          </Link>

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="flex items-center gap-2 text-charcoal/60 dark:text-offwhite/60 hover:text-orange transition-colors group text-right min-w-0 flex-1 justify-end"
            >
              <div className="min-w-0">
                <p className="text-xs text-charcoal/40 dark:text-offwhite/40">
                  Next
                </p>
                <p className="text-sm font-semibold truncate">{next.title}</p>
              </div>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform flex-shrink-0"
              />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </section>
  );
}
