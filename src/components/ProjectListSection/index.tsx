import ProjectList from "../ProjectList";
import SectionHeader from "../SectionHeader";

const ProjectListSection = () => {
  return (
    <>
      <SectionHeader
        title="Projects"
        subtitle="Few of things I've built so far - most of them are part of NDAs"
      />
      <ProjectList />
    </>
  );
};

export default ProjectListSection;
