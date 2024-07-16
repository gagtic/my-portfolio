import { SECTION_MARGIN } from "../../utils/const.ts";
import WorkTimeline from "../../components/WorkTimeline/index.tsx";
import SectionScrollers from "../../components/SectionScollers/index.tsx";
import Footer from "../../components/Footer/index.tsx";
import IntroSection from "../../components/IntroSection/index.tsx";
import HeaderSection from "../../components/HeaderSection/index.tsx";
import TechnologyListSection from "../../components/TechnologyListSection/index.tsx";
import ProjectListSection from "../../components/ProjectListSection/index.tsx";
import { useHome } from "./hooks/useHome.tsx";
import FabButton from "../../components/FabButton/index.tsx";
import BottomIcon from "../../assets/images/svgs/bottom.tsx";

const Home = () => {
  const {
    techStackRef,
    projectsRef,
    expierenceRef,
    handleLabelClicked,
    scrollToBottom,
  } = useHome();

  return (
    <div>
      <FabButton onButtonClicked={scrollToBottom}>
        <BottomIcon />
      </FabButton>
      <HeaderSection onLabelClicked={handleLabelClicked} />
      <div className={SECTION_MARGIN} />
      <IntroSection />
      <SectionScrollers sectionRef={techStackRef} />
      <TechnologyListSection />

      <SectionScrollers sectionRef={projectsRef} />
      <ProjectListSection />

      <SectionScrollers sectionRef={expierenceRef} />
      <WorkTimeline />

      <Footer />
    </div>
  );
};

export default Home;
