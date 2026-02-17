interface SkillCardProps {
  name: string;
}

export default function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="px-3 py-1.5 rounded-lg bg-offwhite/5 border border-offwhite/10 text-sm text-offwhite/80">
      {name}
    </div>
  );
}
