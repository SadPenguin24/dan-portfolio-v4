"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/data/types";
import NDANotice from "./NDANotice";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <section className="bg-offwhite dark:bg-charcoal py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        {project.nda && <NDANotice />}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-12"
        >
          {/* My Role */}
          {(project.role || project.teamSize) && (
            <div>
              <h2 className="text-subheading text-charcoal dark:text-offwhite mb-4">
                My Role
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.role && (
                  <div className="bg-white dark:bg-offwhite/5 rounded-lg p-3 text-center text-sm font-medium text-charcoal/70 dark:text-offwhite/70 border border-charcoal/5 dark:border-offwhite/10">
                    <span className="block text-xs text-charcoal/40 dark:text-offwhite/40 mb-1">Role</span>
                    {project.role}
                  </div>
                )}
                {project.teamSize && (
                  <div className="bg-white dark:bg-offwhite/5 rounded-lg p-3 text-center text-sm font-medium text-charcoal/70 dark:text-offwhite/70 border border-charcoal/5 dark:border-offwhite/10">
                    <span className="block text-xs text-charcoal/40 dark:text-offwhite/40 mb-1">Team</span>
                    {project.teamSize}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* The Challenge */}
          <div>
            <h2 className="text-subheading text-charcoal dark:text-offwhite mb-4">
              The Challenge
            </h2>
            <p className="text-body text-charcoal/70 dark:text-offwhite/70">
              {project.challenge}
            </p>
          </div>

          {/* The Solution */}
          <div>
            <h2 className="text-subheading text-charcoal dark:text-offwhite mb-4">
              The Solution
            </h2>
            <p className="text-body text-charcoal/70 dark:text-offwhite/70">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          {project.features.length > 0 && (
            <div>
              <h2 className="text-subheading text-charcoal dark:text-offwhite mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-charcoal/70 dark:text-offwhite/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2.5 flex-shrink-0" />
                    <span className="text-body">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Details */}
          <div>
            <h2 className="text-subheading text-charcoal dark:text-offwhite mb-4">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-white dark:bg-offwhite/5 rounded-lg p-3 text-center text-sm font-medium text-charcoal/70 dark:text-offwhite/70 border border-charcoal/5 dark:border-offwhite/10"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
