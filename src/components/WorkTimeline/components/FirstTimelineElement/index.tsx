import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ARROW_STYLE, CARD_STYLE, ICON_STYLE } from "./const";
import RenderIcon from "../RenderIcon";
import "react-vertical-timeline-component/style.min.css";
import { FC } from "react";

interface IFirstTimelineElement {
  date: string;
  title: string;
  subtitles: string[];
  content: string;
  logo: JSX.Element;
}

const FirstTimelineElement: FC<IFirstTimelineElement> = ({
  date,
  title,
  subtitles,
  content,
  logo,
}) => {
  return (
    <VerticalTimelineElement
      date={date}
      contentStyle={CARD_STYLE}
      contentArrowStyle={ARROW_STYLE}
      iconStyle={ICON_STYLE}
      icon={<RenderIcon icon={logo} />}
    >
      <h3>{title}</h3>
      {subtitles.map((subtitle, index) => (
        <h4 key={index}>{subtitle}</h4>
      ))}

      <p>{content}</p>
    </VerticalTimelineElement>
  );
};

export default FirstTimelineElement;
