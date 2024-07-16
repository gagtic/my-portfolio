import { FC } from "react";
import { SECTION_MARGIN } from "../../utils/const";

interface ISectionHeader {
  title: string;
  subtitle: string;
}

const SectionHeader: FC<ISectionHeader> = ({ title, subtitle }) => {
  return (
    <div className={`text-center ${SECTION_MARGIN}`}>
      <p className="text-custom-gray font-Poppins-Bold text-xl cursor-default">
        {title}
      </p>
      <div className="mt-2" />
      <p className="text-light-content font-Poppins-Regular text-base cursor-default">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
