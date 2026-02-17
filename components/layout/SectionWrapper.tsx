import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "light" | "dark" | "cream";
}

const variantStyles = {
  light: "bg-offwhite text-charcoal dark:bg-charcoal dark:text-offwhite",
  dark: "bg-charcoal text-offwhite dark:bg-[#15171C] dark:text-offwhite",
  cream:
    "bg-[#F0EDE5] text-charcoal dark:bg-[#1A1D24] dark:text-offwhite",
};

export default function SectionWrapper({
  children,
  id,
  className,
  variant = "light",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32", variantStyles[variant], className)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  );
}
