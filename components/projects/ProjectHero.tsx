"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Project } from "@/lib/data/types";
import TechBadge from "./TechBadge";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="bg-charcoal pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
            <span className="text-label text-orange">
              {project.type === "freelance" ? "Freelance" : "Full-time"}
            </span>
            <span className="text-offwhite/30">&middot;</span>
            <span className="text-sm text-offwhite/50">{project.date}</span>
            {project.nda && (
              <span className="flex items-center gap-1 text-xs bg-offwhite/10 text-offwhite/60 px-2 py-1 rounded-full">
                <Lock size={10} />
                NDA
              </span>
            )}
          </div>

          {(project.role || project.teamSize) && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-offwhite/60 mb-4">
              {project.role && <span>{project.role}</span>}
              {project.role && project.teamSize && (
                <span className="text-offwhite/30">&middot;</span>
              )}
              {project.teamSize && <span>{project.teamSize}</span>}
            </div>
          )}

          <h1 className="text-heading text-offwhite mb-6">{project.title}</h1>
          <p className="text-body text-offwhite/60 max-w-3xl mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
