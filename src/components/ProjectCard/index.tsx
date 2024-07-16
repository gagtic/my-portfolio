import { FC } from "react";
import PlayStoreIcon from "../../assets/images/svgs/play-store.svg";
import AppleIcon from "../../assets/images/svgs/apple.svg";
import StoreLink from "../StoreLink";

interface IProjectCard {
  title: string;
  description: string;
  techStack: string;
  playStoreLink: string;
  appStoreLink: string;
  appIconUri: string;
}

const containerClass = "flex flex-col gap-y-2";

const ProjectCard: FC<IProjectCard> = ({
  title,
  description,
  techStack,
  playStoreLink,
  appStoreLink,
  appIconUri,
}) => {
  return (
    <div className={`${containerClass} bg-card-background w-64 rounded-xl`}>
      <div className="flex justify-center items-center bg-white rounded-t-xl py-6">
        <img src={appIconUri} alt="app icon" className="size-24 rounded-lg" />
      </div>
      <div className={`${containerClass} flex-1 px-5 pt-2`}>
        <p className="font-Poppins-Medium text-custom-gray text-xl cursor-default">{title}</p>
        <p className="font-Poppins-Light text-custom-gray text-sm cursor-default">
          {description}
        </p>
        <p className="font-Poppins-Light text-custom-gray text-xs cursor-default">
          Tech Stack: {techStack}
        </p>
      </div>
      <div className="flex justify-between items-center mt-3 pb-5 px-5">
        {appStoreLink && (
          <StoreLink
            storeName="App Store"
            playStoreLink={appStoreLink}
            storeIcon={AppleIcon}
          />
        )}
        {playStoreLink && (
          <StoreLink
            storeName="Play Store"
            playStoreLink={playStoreLink}
            storeIcon={PlayStoreIcon}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
