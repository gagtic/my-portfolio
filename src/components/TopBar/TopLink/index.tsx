import { FC, PropsWithChildren } from "react";

interface ITopLink {
  label: string;
  index: number;
  onLabelClick: (index: number) => void;
}

const TopLink: FC<PropsWithChildren<ITopLink>> = ({
  label,
  index,
  onLabelClick,
}) => {
  return (
    <p
      onClick={() => onLabelClick(index)}
      className=" text-light-content font-DMSans-Medium animated-underline"
    >
      {label}
    </p>
  );
};

export default TopLink;
