import ProjectImage from "./ProjectImage";
import { Check, HammerIcon } from "lucide-react";
import ProjectReadMore from "./ProjectReadMore";

export default function ProjectCard({ title, description, image, url, isFinished, stack }: Project) {
  return (
    <div
      key={title}
      className="xs:w-full sm:w-[38rem] xs:h-[38rem] sm:h-[42rem] bg-white rounded-[1rem] shadow-md flex flex-col items-center p-[2rem]"
    >
      <ProjectImage image={image} title={title} url={url} />
      <div className="flex flex-col w-full gap-[.5rem] px-[1rem] pt-[1rem] mt-[1rem] flex-grow">
        <h1 className="font-bold text-[1.8rem] line-clamp-1">{title}</h1>
        <p className="line-clamp-4 max-w-full text-[1.3rem] font-medium">{description}</p>
        <div className="w-full flex items-center gap-x-[1rem] mt-[1rem] flex-grow justify-between">
          <ProjectReadMore title={title} description={description} stack={stack} url={url} isFinished={isFinished} />
          <div
            className={`font-medium ${
              isFinished ? "text-green-600" : "text-yellow-600"
            } drop-shadow-xl text-[1.4rem] uppercase flex justify-center items-center gap-[1rem]`}
          >
            <p>{isFinished ? "Finished" : "Building"}</p>
            {isFinished ? <Check size={20} color="green" /> : <HammerIcon size={20} color="orange" />}
          </div>
        </div>
      </div>
    </div>
  );
}
