"use client";

import { useState, useCallback } from "react";
import { Github, Linkedin, Mail, Phone, Copy, Check } from "lucide-react";
import UpworkIcon from "@/components/icons/UpworkIcon";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/SadPenguin24", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/sadpenguin24/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

function CopyableFooterIcon({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [value]);

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="text-offwhite/60 hover:text-orange transition-colors"
        aria-label={`Copy ${label}`}
      >
        <Icon size={20} />
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none">
        <div
          className={`px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap transition-opacity ${
            copied
              ? "bg-green-600 text-white opacity-100"
              : "bg-charcoal border border-offwhite/20 text-offwhite/70 opacity-0 group-hover:opacity-100"
          }`}
        >
          {copied ? (
            <span className="flex items-center gap-1">
              <Check size={10} /> Copied
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Copy size={10} /> Copy
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">dan.f.v</h3>
            <p className="text-offwhite/60 text-sm leading-relaxed mb-3">
              Mid Full-Stack Developer based in the Philippines with 4+ years of
              experience. I build scalable web applications with React, Next.js,
              Node.js & Laravel — from government regulatory platforms to
              e-learning systems and service marketplaces.
            </p>
            <p className="text-offwhite/40 text-sm">
              Open to freelance projects and collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label text-orange mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-offwhite/60 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-label text-orange mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-offwhite/60 hover:text-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
              <a
                href="https://www.upwork.com/freelancers/~sadpenguin24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-offwhite/60 hover:text-orange transition-colors"
                aria-label="Upwork"
              >
                <UpworkIcon size={20} />
              </a>
              <CopyableFooterIcon
                icon={Mail}
                label="email"
                value="danhendrix.pro@gmail.com"
              />
              <CopyableFooterIcon
                icon={Phone}
                label="phone"
                value="+63 946 719 1020"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-offwhite/10 pt-8 text-center">
          <p className="text-offwhite/40 text-sm">
            &copy; {new Date().getFullYear()} Dan Hendrix Villadolid. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
