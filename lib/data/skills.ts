import { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
      { name: "shadcn/ui" },
      { name: "Material UI" },
      { name: "Bootstrap" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Nest.js" },
      { name: "Ruby on Rails" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "cloud",
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "Git" },
      { name: "GitLab CI/CD" },
      { name: "Linux" },
      { name: "Stripe" },
      { name: "Twilio" },
      { name: "Mux" },
      { name: "Claude AI" },
      { name: "Cursor" },
    ],
  },
];
