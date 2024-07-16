import React from "react";

const SectionScrollers = ({
  sectionRef,
}: {
  sectionRef: React.MutableRefObject<null>;
}) => {
  return <div ref={sectionRef} />;
};

export default SectionScrollers;
