import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ARROW_STYLE, CARD_STYLE, ICON_STYLE } from "./const";
import RenderIcon from "../RenderIcon";
import "react-vertical-timeline-component/style.min.css";
import { FC } from "react";

interface IMidTimelineElement {
  date: string;
  title: string;
  subtitles: string[];
  content: string;
  logo: JSX.Element;
}

const MidTimelineElement: FC<IMidTimelineElement> = ({
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
      <h3 className="vertical-timeline-element-title text-black">{title}</h3>
      {subtitles.map((subtitle, index) => (
        <h4
          key={index}
          className="vertical-timeline-element-subtitle text-black"
        >
          {subtitle}
        </h4>
      ))}

      <p className="text-black">{content}</p>
    </VerticalTimelineElement>
  );
};

export default MidTimelineElement;
