"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-6 text-center text-primary">
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MailIcon className="mr-2" />
                <a
                  href="mailto:danhendrix.pro@gmail.com"
                  className="hover:text-primary"
                >
                  danhendrix.pro@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="mr-2" />
                <a href="tel:+639467191020" className="hover:text-primary">
                  +63 9467191020
                </a>
              </div>
              <div className="flex items-center">
                <GithubIcon className="mr-2" />
                <a
                  href="https://github.com/SadPenguin24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  github.com/SadPenguin24
                </a>
              </div>
              <div className="flex items-center">
                <LinkedinIcon className="mr-2" />
                <a
                  href="https://linkedin.com/in/sadpenguin24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  linkedin.com/in/sadpenguin24/
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
