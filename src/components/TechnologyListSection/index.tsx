import SectionHeader from "../SectionHeader";
import TechnologList from "../TechnologyList";

const TechnologyListSection = () => {
  return (
    <>
      <SectionHeader
        title="My Tech Stack"
        subtitle="Technologies I’ve been working with recently"
      />
      <TechnologList />
    </>
  );
};

export default TechnologyListSection;
