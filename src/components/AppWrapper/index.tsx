import { FC, PropsWithChildren } from "react";
import { HOME_CHILD_PADDING } from "../../utils/const";

interface IAppWrapper {
  children: React.ReactNode;
}

const AppWrapper: FC<PropsWithChildren<IAppWrapper>> = ({ children }) => {
  return (
    <div className={`w-screen h-full bg-dark-mode ${HOME_CHILD_PADDING} py-8`}>
      {children}
    </div>
  );
};

export default AppWrapper;
