"use client";

import { useState, useCallback, FormEvent } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  Loader2,
  Send,
} from "lucide-react";
import UpworkIcon from "@/components/icons/UpworkIcon";

interface CopyableContactProps {
  icon: React.ElementType;
  label: string;
  value: string;
  displayValue: string;
}

function CopyableContact({
  icon: Icon,
  label,
  value,
  displayValue,
}: CopyableContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [value]);

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-4 text-charcoal/60 dark:text-offwhite/60 hover:text-orange transition-colors group w-full text-left relative"
    >
      <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors flex-shrink-0">
        <Icon size={18} className="text-orange" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-charcoal/40 dark:text-offwhite/40">
          {label}
        </p>
        <p className="text-sm font-medium truncate">{displayValue}</p>
      </div>
      <div className="flex items-center gap-1 flex-shrink-0">
        {copied ? (
          <span className="flex items-center gap-1 text-xs font-medium text-green-600">
            <Check size={14} />
            Copied
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-charcoal/30 dark:text-offwhite/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <Copy size={14} />
            Copy
          </span>
        )}
      </div>
    </button>
  );
}

const socialInfo = [
  {
    icon: Github,
    label: "GitHub",
    value: "SadPenguin24",
    href: "https://github.com/SadPenguin24",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sadpenguin24",
    href: "https://linkedin.com/in/sadpenguin24/",
  },
  {
    icon: UpworkIcon,
    label: "Upwork",
    value: "Hire me on Upwork",
    href: "https://www.upwork.com/freelancers/~sadpenguin24",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send message."
      );
    }
  };

  return (
    <SectionWrapper id="contact" variant="light">
      <ScrollReveal>
        <p className="text-label text-orange mb-4">Get in Touch</p>
        <h2 className="text-heading text-charcoal dark:text-offwhite mb-4">
          Let&apos;s build something
          <br />
          together.
        </h2>
        <p className="text-body text-charcoal/60 dark:text-offwhite/60 max-w-2xl mb-16">
          Have a project in mind? I&apos;m always open to discussing new
          opportunities, freelance work, or just a friendly chat about web
          development.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <ScrollReveal direction="left">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-charcoal dark:text-offwhite mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  disabled={status === "loading"}
                  className="bg-white dark:bg-offwhite/5 border-charcoal/10 dark:border-offwhite/10 focus:border-orange"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-charcoal dark:text-offwhite mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  disabled={status === "loading"}
                  className="bg-white dark:bg-offwhite/5 border-charcoal/10 dark:border-offwhite/10 focus:border-orange"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-charcoal dark:text-offwhite mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                required
                disabled={status === "loading"}
                className="bg-white dark:bg-offwhite/5 border-charcoal/10 dark:border-offwhite/10 focus:border-orange resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="bg-orange hover:bg-orange/90 text-white font-semibold px-8 w-full sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              {status === "success" && (
                <p className="text-sm text-green-600 font-medium flex items-center gap-1">
                  <Check size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-500 font-medium">{errorMsg}</p>
              )}
            </div>
          </form>
        </ScrollReveal>

        {/* Contact Info */}
        <ScrollReveal direction="right">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-serif font-bold text-charcoal dark:text-offwhite mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <CopyableContact
                  icon={Mail}
                  label="Email"
                  value="danhendrix.pro@gmail.com"
                  displayValue="danhendrix.pro@gmail.com"
                />
                <CopyableContact
                  icon={Phone}
                  label="Phone"
                  value="+63 946 719 1020"
                  displayValue="+63 946 719 1020"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-charcoal dark:text-offwhite mb-4">
                Find Me Online
              </h3>
              <div className="space-y-4">
                {socialInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-charcoal/60 dark:text-offwhite/60 hover:text-orange transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                      <item.icon size={18} className="text-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/40 dark:text-offwhite/40">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
