import { FC, PropsWithChildren } from "react";

interface IFooterText {
  children: string;
}

const FooterText: FC<PropsWithChildren<IFooterText>> = ({ children }) => (
  <p className={"text-light-content font-DMSans-Medium"}>
    {children}
  </p>
);

export default FooterText;
