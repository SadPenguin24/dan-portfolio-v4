import Image from "next/image";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/data/types";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
    >
      {/* Image */}
      <div className={`${isReversed ? "lg:order-2" : ""}`}>
        <div className="relative aspect-video bg-charcoal/5 dark:bg-offwhite/5 rounded-xl overflow-hidden group">
          {project.imageUrl && !project.imageUrl.includes("placeholder") ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange/5 to-charcoal/5 dark:to-offwhite/5 flex items-center justify-center">
              <span className="text-2xl font-serif font-bold text-charcoal/15 dark:text-offwhite/15 group-hover:text-charcoal/25 dark:group-hover:text-offwhite/25 transition-colors">
                {project.title}
              </span>
            </div>
          )}
          {project.nda && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-charcoal/80 text-offwhite text-xs px-3 py-1.5 rounded-full">
              <Lock size={12} />
              NDA
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`${isReversed ? "lg:order-1" : ""}`}>
        <p className="text-label text-orange mb-2">
          {project.type === "freelance" ? "Freelance" : "Full-time"} &middot;{" "}
          {project.date}
        </p>
        <Link href={`/projects/${project.slug}`} className="hover:text-orange transition-colors">
          <h3 className="text-subheading text-charcoal dark:text-offwhite mb-3">{project.title}</h3>
        </Link>
        <p className="text-body text-charcoal/60 dark:text-offwhite/60 mb-6">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.technologies.length > 5 && (
            <TechBadge name={`+${project.technologies.length - 5}`} />
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
        >
          View Case Study <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
