"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TechBadge from "@/components/projects/TechBadge";
import { experiences } from "@/lib/data/experience";
import { WorkExperience } from "@/lib/data/types";

const fulltimeJobs = experiences.filter((e) => e.type === "fulltime");
const freelanceJobs = experiences.filter((e) => e.type === "freelance");

function ExperienceCard({
  exp,
  delay,
}: {
  exp: WorkExperience;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-offwhite/5 rounded-xl p-5 border border-offwhite/10"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-offwhite/40">{exp.period}</span>
        {exp.current && (
          <span className="text-[10px] bg-orange/20 text-orange px-2 py-0.5 rounded-full font-medium">
            Current
          </span>
        )}
      </div>
      <h4 className="text-base font-serif font-bold text-offwhite mb-0.5">
        {exp.role}
      </h4>
      <p className="text-sm text-offwhite/50 mb-3">{exp.company}</p>
      <p className="text-sm text-offwhite/40 leading-relaxed mb-3">
        {exp.description}
      </p>
      <ul className="space-y-1 mb-4">
        {exp.highlights.map((h, i) => (
          <li
            key={i}
            className="text-sm text-offwhite/40 flex items-start gap-2"
          >
            <span className="text-orange mt-1.5 text-[6px]">&#9679;</span>
            {h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {exp.technologies.map((tech) => (
          <TechBadge
            key={tech}
            name={tech}
            className="text-[10px] px-2 py-0.5"
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" variant="dark">
      <ScrollReveal>
        <p className="text-label text-orange mb-4">Career Journey</p>
        <h2 className="text-heading text-offwhite mb-4">
          Where I&apos;ve worked.
        </h2>
        <p className="text-body text-offwhite/60 max-w-2xl mb-16">
          I work full-time while freelancing in parallel — building enterprise
          systems by day and shipping client projects on the side.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Full-time track */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center">
                <Briefcase size={18} className="text-orange" />
              </div>
              <h3 className="text-lg font-serif font-bold text-offwhite">
                Full-time
              </h3>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {fulltimeJobs.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* Freelance track */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center">
                <Code2 size={18} className="text-orange" />
              </div>
              <h3 className="text-lg font-serif font-bold text-offwhite">
                Freelance
              </h3>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {freelanceJobs.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
