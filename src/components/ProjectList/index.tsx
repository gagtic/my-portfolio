import ProjectCard from "../ProjectCard";
import { PROJECTS } from "./const";

const ProjectList = () => {
  return (
    <div className="flex flex-row justify-evenly mt-12">
      {PROJECTS.map(
        (
          {
            title,
            description,
            techStack,
            appStoreLink,
            playStoreLink,
            appIconUri,
          },
          index
        ) => (
          <ProjectCard
            key={index}
            title={title}
            description={description}
            techStack={techStack}
            appStoreLink={appStoreLink}
            playStoreLink={playStoreLink}
            appIconUri={appIconUri}
          />
        )
      )}
    </div>
  );
};

export default ProjectList;
