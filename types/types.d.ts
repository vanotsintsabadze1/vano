interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
  isFinished: boolean;
}

type ReadMoreDetails = Omit<Project, "image">;
