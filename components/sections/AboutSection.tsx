"use client";

import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "", label: "Companies" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" variant="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <ScrollReveal direction="left">
          <div className="relative overflow-hidden">
            <div className="aspect-[4/5] bg-sage/30 dark:bg-sage/10 rounded-2xl overflow-hidden">
              <div className="relative w-full h-full bg-gradient-to-br from-charcoal/10 to-orange/10">
                <Image
                  src="/resume/dan-profile.JPG"
                  alt="Dan Hendrix Villadolid"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-orange/30 rounded-2xl -z-10 hidden sm:block" />
          </div>
        </ScrollReveal>

        {/* Text side */}
        <div>
          <ScrollReveal>
            <p className="text-label text-orange mb-4">About Me</p>
            <h2 className="text-heading text-charcoal dark:text-offwhite mb-6">
              Turning ideas into
              <br />
              real-world products.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-body text-charcoal/70 dark:text-offwhite/70 mb-4">
              I&apos;m Dan Hendrix Villadolid, a Full-Stack Developer based in
              the Philippines with 4+ years of experience building web
              applications that solve real problems. I started working with a
              freelance agency on Upwork projects in 2021 while still in
              college, and haven&apos;t stopped building since.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body text-charcoal/70 dark:text-offwhite/70 mb-8">
              From government regulatory systems to corporate e-learning
              platforms, I&apos;ve worked across industries delivering scalable
              solutions with React, Next.js, Node.js, and Laravel. I take
              ownership from architecture to deployment — and I&apos;m always
              ready for the next challenge.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Separator className="mb-8 bg-charcoal/10 dark:bg-offwhite/10" />
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal dark:text-offwhite">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-sm text-charcoal/50 dark:text-offwhite/50 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
