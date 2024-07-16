import { FC, PropsWithChildren } from "react";

interface IGradientText {
  children: string;
}

const GradientText: FC<PropsWithChildren<IGradientText>> = ({
  children: text,
}) => <span className="gradient-text">{text}</span>;

export default GradientText;
