import React, { useState } from "react";
import { StyleProps } from "../../types";

import classNameMerge from "../../util/classNameMerge";

interface IconButtonProps extends StyleProps {
  imgSrc: string;
  activeImgSrc?: string;
  title?: string;
  alt?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  className = "",
  style,
  imgSrc,
  activeImgSrc,
  title,
  alt = "",
  disabled,
  onClick,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        if (activeImgSrc) {
          setIsHover(true);
        }
      }}
      onMouseLeave={() => {
        if (activeImgSrc) {
          setIsHover(false);
        }
      }}
      onClick={onClick}
      title={title || alt}
      disabled={disabled}
    >
      <img
        className={classNameMerge(["w-[16px] h-[16px]", className])}
        style={{
          ...style,
        }}
        src={isHover && activeImgSrc ? activeImgSrc : imgSrc}
        alt={alt}
      />
    </button>
  );
};

export default IconButton;
