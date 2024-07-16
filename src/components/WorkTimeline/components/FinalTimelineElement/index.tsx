import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { CARD_STYLE, ICON_STYLE } from "./const";
import RenderIcon from "../RenderIcon";
import "react-vertical-timeline-component/style.min.css";
import { FC } from "react";
import { GraduationLogo } from "../../Logos";

interface IFinalTimelineElement {
  date: string;
}

const FinalTimelineElement: FC<IFinalTimelineElement> = ({ date }) => {
  return (
    <VerticalTimelineElement
      date={date}
      contentStyle={CARD_STYLE}
      iconStyle={ICON_STYLE}
      icon={<RenderIcon icon={GraduationLogo} />}
    />
  );
};

export default FinalTimelineElement;
