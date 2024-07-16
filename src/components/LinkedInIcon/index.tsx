import LinkedinIcon from "../../assets/images/svgs/linkedin";
import { LINKEDIN_URL } from "./const";

const LinkedInRedirect = () => (
  <a href={LINKEDIN_URL} target="_blank">
    <LinkedinIcon className="size-8 cursor-pointer" />
  </a>
);

export default LinkedInRedirect;
