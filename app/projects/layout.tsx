import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center gap-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-offwhite/70 hover:text-orange transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <span className="text-offwhite/20">|</span>
          <Link
            href="/"
            className="text-xl font-serif font-bold text-offwhite hover:text-orange transition-colors"
          >
            dan.f.v
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
}
