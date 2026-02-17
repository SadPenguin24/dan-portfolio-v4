import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/data/types";
import TechBadge from "./TechBadge";

interface FulltimeProjectCardProps {
  project: Project;
}

export default function FulltimeProjectCard({
  project,
}: FulltimeProjectCardProps) {
  return (
    <div className="bg-offwhite/5 border border-offwhite/10 rounded-xl p-4 sm:p-6 flex flex-col h-full hover:border-orange/30 transition-colors group min-w-0">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-offwhite/40">{project.date}</span>
        {project.nda && (
          <span className="flex items-center gap-1 text-xs bg-offwhite/5 text-offwhite/50 px-2 py-1 rounded-full">
            <Lock size={10} />
            NDA
          </span>
        )}
      </div>

      <Link href={`/projects/${project.slug}`}>
        <h3 className="text-lg font-serif font-bold text-offwhite mb-2 group-hover:text-orange transition-colors">
          {project.title}
        </h3>
      </Link>
      <p className="text-sm text-offwhite/50 mb-4 flex-1 leading-relaxed">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech) => (
          <TechBadge
            key={tech}
            name={tech}
            className="text-[10px] px-2 py-0.5"
          />
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-2 text-sm text-orange font-semibold hover:gap-3 transition-all"
      >
        View Details <ArrowRight size={14} />
      </Link>
    </div>
  );
}
