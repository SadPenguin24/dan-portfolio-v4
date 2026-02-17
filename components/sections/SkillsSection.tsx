"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import SkillCategory from "@/components/skills/SkillCategory";
import { skillCategories } from "@/lib/data/skills";

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" variant="dark">
      <ScrollReveal>
        <p className="text-label text-orange mb-4">Technical Toolkit</p>
        <h2 className="text-heading text-offwhite mb-4">
          Skills & technologies.
        </h2>
        <p className="text-body text-offwhite/60 max-w-2xl mb-16">
          Technologies I use daily and tools I&apos;m experienced with — from
          frontend frameworks to backend APIs, databases, and DevOps.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <SkillCategory key={cat.title} category={cat} />
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
