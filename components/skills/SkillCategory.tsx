"use client";

import { motion } from "framer-motion";
import { Layout, Server, Cloud } from "lucide-react";
import { SkillCategory as SkillCategoryType } from "@/lib/data/types";
import SkillCard from "./SkillCard";
import { staggerItemVariants } from "@/components/animations/StaggerContainer";

const iconMap: Record<string, React.ElementType> = {
  layout: Layout,
  server: Server,
  cloud: Cloud,
};

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  const Icon = iconMap[category.icon] || Layout;

  return (
    <motion.div
      variants={staggerItemVariants}
      className="bg-offwhite/5 rounded-xl p-6 border border-offwhite/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
          <Icon size={20} className="text-orange" />
        </div>
        <h3 className="text-lg font-serif font-bold text-offwhite">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} />
        ))}
      </div>
    </motion.div>
  );
}
