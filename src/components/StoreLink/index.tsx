import { FC } from "react";

const ICON_SIZE = "size-5";

interface IStoreLink {
  storeName: string;
  playStoreLink: string;
  storeIcon: string;
}

const StoreLink: FC<IStoreLink> = ({ storeName, playStoreLink, storeIcon }) => {
  return (
    <a href={playStoreLink} className="flex flex-row gap-2" target="_blank">
      <img src={storeIcon} alt={"play store"} className={ICON_SIZE} />
      <p className="font-Poppins-Light text-white text-sm animated-underline">
        {storeName}
      </p>
    </a>
  );
};

export default StoreLink;
