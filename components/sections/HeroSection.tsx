"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-48 h-48 md:w-72 md:h-72 rounded-full border border-orange/10" />
        <div className="absolute top-32 right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full border border-yellow/10" />
        <div className="absolute bottom-20 left-[5%] w-20 h-20 md:w-32 md:h-32 bg-orange/5 rotate-45" />
        <div className="absolute top-1/2 right-[5%] w-2 h-2 bg-orange rounded-full" />
        <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 bg-yellow rounded-full" />
        <div className="absolute bottom-1/3 right-[12%] w-1 h-1 bg-sage rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-32 relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-label text-orange mb-6"
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-display text-offwhite mb-8"
          >
            I build web apps
            <br />
            that <span className="text-orange">deliver.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-body text-offwhite/70 max-w-2xl mb-12"
          >
            4+ years crafting scalable solutions with React, Next.js, Node.js &
            Laravel. From government systems to e-learning platforms — I turn
            ideas into production-ready products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-6 text-base rounded-lg"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-offwhite text-offwhite hover:bg-offwhite hover:text-charcoal font-semibold px-8 py-6 text-base rounded-lg"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-orange/50 text-orange hover:bg-orange hover:text-white font-semibold px-8 py-6 text-base rounded-lg"
            >
              <a href="/resume/Dan Hendrix Frayre Villadolid 2026.pdf" download>
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-offwhite/40" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
