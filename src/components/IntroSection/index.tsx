import { DEV_NAME, HOME_CHILD_PADDING } from "../../utils/const";
import GradientText from "../GradientText";
import GradientBorderImage from "../GradientCircleImage";
import ProfileImage from "../../assets/images/jpegs/abdul-ahad.jpeg";

const IntroSection = () => {
  return (
    <div
      className={`flex flex-row items-center justify-between ${HOME_CHILD_PADDING}`}
    >
      <p className="font-Poppins-Bold text-white text-3xl leading-normal">
        Hi 👋,
        <br />
        My name is
        <br />
        <GradientText>{DEV_NAME}</GradientText>
        <br />I am a full-stack developer!
      </p>
      <GradientBorderImage
        src={ProfileImage}
        alt="profile image"
        className="size-60"
      />
    </div>
  );
};

export default IntroSection;
