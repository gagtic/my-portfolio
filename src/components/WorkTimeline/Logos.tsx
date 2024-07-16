import ReactSVG from "../../assets/images/svgs/react.svg";
import ReactNativeSVG from "../../assets/images/svgs/react-native.svg";
import NodeJsSVG from "../../assets/images/svgs/node-js.svg";
import PhpSVG from "../../assets/images/svgs/php.svg";
import AndroidSVG from "../../assets/images/svgs/android.svg";
import SeleniumSVG from "../../assets/images/svgs/selenium.svg";
import GraduationSVG from "../../assets/images/svgs/graduation.svg";

const SIZE = "size-10";

export const ReactLogo = <img src={ReactSVG} className={SIZE} />;
export const ReactNativeLogo = <img src={ReactNativeSVG} className={SIZE} />;
export const NodeJsLogo = <img src={NodeJsSVG} className={SIZE} />;
export const PhpLogo = <img src={PhpSVG} className={SIZE} />;
export const AndroidLogo = <img src={AndroidSVG} className={SIZE} />;
export const SeleniumLogo = (
  <img src={SeleniumSVG} className={`${SIZE} shadow-inner`} />
);
export const GraduationLogo = <img src={GraduationSVG} className={SIZE} />;
