"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetailsModal } from "../components/ProjectDetailsModal";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const handleLearnMore = (id: string) => {
    const project = projects.find((p) => p.id === id);
    setSelectedProject(project || null);
  };

  return (
    <div className="w-full max-w-7xl">
      <Tabs defaultValue="freelance" className="w-full relative">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="freelance">Freelance</TabsTrigger>
          <TabsTrigger value="fulltime">Full Time</TabsTrigger>
        </TabsList>

        <TabsContent value="freelance" className="mt-6">
          <div className="grid gap-6 md:grid-cols-4">
            {projects
              .filter((p) => p.type === "freelance")
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  onLearnMore={handleLearnMore}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="fulltime" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((p) => p.type === "fulltime")
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  onLearnMore={handleLearnMore}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
