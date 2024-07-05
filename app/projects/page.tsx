import ProjectCard from "@/components/Projects/ProjectCard";
import { projects } from "@/data/projects";

export default function page() {
  return (
    <main className="w-full px-[1rem] py-[3rem] flex justify-center items-center flex-col gap-[3rem]">
      <div className="flex justify-center items-center gap-x-[4rem] gap-y-[3rem] flex-wrap">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            stack={project.stack}
            url={project.url}
            image={project.image}
            key={project.title}
            isFinished={project.isFinished}
          />
        ))}
      </div>
    </main>
  );
}
