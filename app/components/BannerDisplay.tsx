import React from "react";
import { buttonStyle, textClasses } from "../data/CustomStyles/StyleClasses";
import { BannerDisplayProps } from "./BannerImageComp";
import Image from "next/image";

const BannerDisplay: React.FC<BannerDisplayProps> = ({
  id,
  title,
  description,
  cta,
  image,
  background,
}) => {
  const isBackgroundImage = background.startsWith("/images");
  const randomButton = buttonStyle(id);
  const randomText = textClasses(id);

  return (
    <div
      className="relative rounded-sm"
      style={{
        background: isBackgroundImage
          ? `url(${image}) no-repeat center center / cover`
          : background,
      }}>
      <div className="h-80 w-80 relative">
        <Image
          src={isBackgroundImage ? background : image}
          width={720}
          height={720}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-6 left-6 text-black">
        <div className={`${randomText}`}>
          <h2 className="text-3xl">{title}</h2>
          <p className="text-xs">{description}</p>
        </div>
        <button className={`${randomButton} flex cursor-default`}>
          {cta}
          {id % 3 ? null : "->"}
        </button>
      </div>
    </div>
  );
};

export default BannerDisplay;
