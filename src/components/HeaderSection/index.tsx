import { FC } from "react";
import Logo from "../../assets/images/svgs/logo";
import Header from "../Header";
import { HOME_CHILD_PADDING } from "../../utils/const";

interface IHeaderSection {
  onLabelClicked: (index: number) => void;
}

const HeaderSection: FC<IHeaderSection> = ({ onLabelClicked }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full flex flex-row justify-between bg-dark-mode shadow-md shadow-sky-900 p-4 ${HOME_CHILD_PADDING} z-50`}
    >
      <Logo className="size-12" spinning />
      <Header onLabelClick={onLabelClicked} />
    </div>
  );
};

export default HeaderSection;
