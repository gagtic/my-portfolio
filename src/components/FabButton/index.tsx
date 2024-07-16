import { FC } from "react";

interface IFabButton {
  onButtonClicked: () => void;
  children: React.ReactNode;
}

const FabButton: FC<IFabButton> = ({ onButtonClicked, children }) => {
  return (
    <button
      className="fixed bottom-7 right-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
      aria-label="Go Down"
      onClick={onButtonClicked}
    >
      {children}
    </button>
  );
};

export default FabButton;
