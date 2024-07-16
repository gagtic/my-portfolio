import { FC } from "react";

interface IGradientCircleImage {
  src: string;
  alt: string;
  className?: string;
}

const GradientBorderImage: FC<IGradientCircleImage> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gradient-start to-gradient-end p-[4px]">
        <img
          src={src}
          alt={alt}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default GradientBorderImage;
