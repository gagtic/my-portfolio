import { useRef } from "react";

export const useHome = () => {
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const expierenceRef = useRef(null);

  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  const handleLabelClicked = (index: number) => {
    switch (index) {
      case 0:
        // @ts-ignore
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case 1:
        techStackRef.current &&
          // @ts-ignore
          techStackRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        projectsRef.current &&
          // @ts-ignore
          projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        expierenceRef.current &&
          // @ts-ignore
          expierenceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  return {
    techStackRef,
    projectsRef,
    expierenceRef,
    handleLabelClicked,
    scrollToBottom,
  };
};
