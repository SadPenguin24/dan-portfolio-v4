import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectContent from "@/components/projects/ProjectContent";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Dan Hendrix Villadolid`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Dan Hendrix Villadolid`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = sortedProjects.findIndex((p) => p.slug === slug);
  const previous = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
  const next =
    currentIndex < sortedProjects.length - 1
      ? sortedProjects[currentIndex + 1]
      : null;

  return (
    <>
      <ProjectHero project={project} />
      <ProjectContent project={project} />
      <ProjectNavigation previous={previous} next={next} />
      <Footer />
    </>
  );
}
