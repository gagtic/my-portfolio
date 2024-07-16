import SectionHeader from "../SectionHeader";
import WorkTimeline from "../WorkTimeline";

const WorkSection = () => {
  return (
    <>
      <SectionHeader
        title="Work Done so far"
        subtitle="People I have worked with"
      />
      <div className="mt-5" />
      <div className="border-y-2 border-solid-heading">
        <WorkTimeline />
      </div>
    </>
  );
};

export default WorkSection;
