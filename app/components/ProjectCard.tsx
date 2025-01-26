import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  imageUrl: string;
  onLearnMore: (id: string) => void;
}

export function ProjectCard({
  id,
  title,
  technologies,
  date,
  imageUrl,
  onLearnMore,
}: ProjectCardProps) {
  if (technologies.length > 3) {
    technologies = technologies.slice(0, 3);
    technologies.push("+");
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <CardHeader className="flex flex-row justify-between items-center ">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{date}</CardDescription>
        </div>
        <div>
          <Button onClick={() => onLearnMore(id)}>Learn More</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground text-sm px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
