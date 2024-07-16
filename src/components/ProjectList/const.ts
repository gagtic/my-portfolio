import SitDownIcon from "../../assets/images/pngs/sit-down.png";
import PanelistIcon from "../../assets/images/pngs/panelist.png";
import MCAIcon from "../../assets/images/pngs/MCA.jpg";

export const PROJECTS = [
  {
    title: "Sit-Down",
    description:
      "Sit-Down app is a catalog app for different entrepreneurs & and experts in Australia. It's a subscription-based app that contains podcasts, ebooks, seminar videos, and much more.",
    techStack: "React Native, Node JS, Express, Stripe, Firebase",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.ahad.sitdown",
    appStoreLink: "https://apps.apple.com/us/app/sit-down/id1601041725",
    appIconUri: SitDownIcon,
  },
  {
    title: "Panelist",
    description:
      "Panelist is your one-stop to get in touch with professionals around the world. Panelist mobile app lets you connect with professionals and check events they might be attending.",
    techStack: "React Native, XCode, Android Studio",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.panelist&hl=en&gl=US",
    appStoreLink: "https://apps.apple.com/pk/app/panelist/id1618656782",
    appIconUri: PanelistIcon,
  },
  {
    title: "My Cleaning App",
    description:
      "My cleaning app is an employee management system for cleaning agencies in the UK. The app is focused on tracking employees, and their shifts and managing the inventory of the cleaning houses. The app also tracks the cleaning jobs of an employee.",
    techStack: "Android Studio",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.mycleaning.app1",
    appStoreLink:
      "https://apps.apple.com/ng/app/my-cleaning-app-mca/id1628532382",
    appIconUri: MCAIcon,
  },
];
