import LinkedinIcon from "../../assets/images/svgs/linkedin";
import {
  FIREBASE_ANALYTICS_EVENTS,
  sendFireabseEvent,
} from "../../utils/firebase";
import { LINKEDIN_URL } from "./const";

const LinkedInRedirect = () => {
  const handleLinkedinRedirect = () => {
    sendFireabseEvent(FIREBASE_ANALYTICS_EVENTS.LINKEDIN_CLICKED);
    window.open(LINKEDIN_URL, "_blank");
  };

  return (
    <a target="_blank" onClick={handleLinkedinRedirect}>
      <LinkedinIcon className="size-8 cursor-pointer" />
    </a>
  );
};

export default LinkedInRedirect;
