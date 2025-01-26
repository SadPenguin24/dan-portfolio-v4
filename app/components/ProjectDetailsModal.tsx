import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectDetailsModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    date: string;
    imageUrl: string;
    nda: boolean;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[70%] h-full sm:h-[90%] p-0 gap-0">
        <ScrollArea className="h-full">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.date}</DialogDescription>
            </DialogHeader>
            <div className="relative h-64 w-full my-4">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-secondary text-secondary-foreground text-sm px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.nda ? (
              <div className="bg-muted p-4 rounded-md">
                <p className="text-sm text-muted-foreground">
                  Due to a Non-Disclosure Agreement (NDA), I'm unable to share
                  more detailed information about this project. The description
                  provided here is a general overview that doesn't disclose any
                  confidential details.
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
