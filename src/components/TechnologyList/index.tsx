
import { HOME_CHILD_PADDING } from "../../utils/const";
import { CUT_OFF, TECHNOLOGY_LOGO, TECHNOLOGY_LOGO_JSX } from "./const";

const TechnologList = () => {
  return (
    <div
      className={`flex flex-wrap mt-10 gap-x-16 gap-y-8 ${HOME_CHILD_PADDING} mt-20`}
    >
      {TECHNOLOGY_LOGO.slice(0, CUT_OFF).map(({ src, alt }) => (
        <img src={src} alt={alt} className="size-12 rounded-md inline" />
      ))}
      {TECHNOLOGY_LOGO_JSX.map((logo) => logo.src)}
      {TECHNOLOGY_LOGO.slice(CUT_OFF).map(({ src, alt }) => (
        <img src={src} alt={alt} className="size-12 rounded-md inline" />
      ))}
    </div>
  );
};

export default TechnologList;
