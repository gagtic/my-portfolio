import { FC } from "react";
import TopLink from "../TopBar/TopLink";
import { TOP_LINKS } from "./const";
import LinkedInRedirect from "../LinkedInIcon";

interface IHeader {
  onLabelClick: (index: number) => void;
}

const Header: FC<IHeader> = ({ onLabelClick }) => {
  return (
    <div className="flex items-center gap-7">
      {TOP_LINKS.map((label, index) => (
        <TopLink
          key={index}
          label={label}
          index={index}
          onLabelClick={onLabelClick}
        />
      ))}
      <LinkedInRedirect />
    </div>
  );
};

export default Header;
