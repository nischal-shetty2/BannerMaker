import React from "react";
import BannerDisplay from "./BannerDisplay";

export interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: (id: number) => void;
}

export interface BannerDisplayProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  width?: boolean;
}

const BannerImageComp: React.FC<BannerProps> = ({
  id,
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}) => {
  return (
    <div className="relative m-2">
      <BannerDisplay
        id={id}
        title={title}
        description={description}
        cta={cta}
        image={image}
        background={background}
      />
      <button
        onClick={() => onEdit(id)}
        className="absolute top-2 right-2 bg-transparent border-none cursor-pointer p-2 rounded"
        aria-label="Edit banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#ffffff">
          <path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z" />
        </svg>
      </button>
    </div>
  );
};

export default BannerImageComp;
