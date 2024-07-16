import Logo from "../../assets/images/svgs/logo";
import FooterText from "./FooterText";
import LinkedInRedirect from "../LinkedInIcon";
import GradientText from "../GradientText";
import { DEV_NAME } from "../../utils/const";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row items-center mt-40">
        <div className="flex-1">
          <Logo className="size-11" fill="#A7A7A7" />
        </div>
        <div className="flex flex-row gap-14 items-center">
          <FooterText>m_abdul.ahad@outlook.com</FooterText>
          <LinkedInRedirect />
        </div>
      </div>

      <div className="border-b-2 border-solid-heading w-full mt-5" />
      <p className="text-light-content font-Poppins-Regular mt-8">
        Designed and built by <GradientText>{DEV_NAME}</GradientText> with{" "}
        <GradientText>Love</GradientText> & <GradientText>Tea</GradientText> 🍵
      </p>
    </>
  );
};

export default Footer;
