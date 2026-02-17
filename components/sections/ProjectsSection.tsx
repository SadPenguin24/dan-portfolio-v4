"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ProjectCard from "@/components/projects/ProjectCard";
import FulltimeProjectCard from "@/components/projects/FulltimeProjectCard";
import { getProjectsByCategory } from "@/lib/data/projects";
import { staggerItemVariants } from "@/components/animations/StaggerContainer";

const filters = [
  { label: "Full-time", value: "fulltime" as const },
  { label: "Freelance", value: "freelance" as const },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<"freelance" | "fulltime">("fulltime");
  const projects = getProjectsByCategory(active);

  return (
    <SectionWrapper id="projects" variant="cream">
      <ScrollReveal>
        <p className="text-label text-orange mb-4">Selected Work</p>
        <h2 className="text-heading text-charcoal dark:text-offwhite mb-4">
          Projects I&apos;ve built.
        </h2>
        <p className="text-body text-charcoal/60 dark:text-offwhite/60 max-w-2xl mb-10">
          From freelance web apps to enterprise platforms — here are the
          projects that showcase my range and technical capabilities.
        </p>
      </ScrollReveal>

      {/* Filters */}
      <ScrollReveal delay={0.1}>
        <div className="flex gap-2 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === filter.value
                  ? "bg-orange text-white"
                  : "bg-charcoal/5 text-charcoal/60 hover:bg-charcoal/10 dark:bg-offwhite/5 dark:text-offwhite/60 dark:hover:bg-offwhite/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {active === "fulltime" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={staggerItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.08 }}
                >
                  <FulltimeProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-20">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={staggerItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.1 }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
