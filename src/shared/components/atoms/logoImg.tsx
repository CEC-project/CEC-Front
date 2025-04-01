import React from "react";
import { StyleProps } from "../../types";

interface LogoImgProps extends StyleProps {
  alt?: string;
}

const LogoImg: React.FC<LogoImgProps> = ({ className, style, alt }) => {
  const imgSrc = "/assets/images/logo.png";

  return (
    <img
      className={className}
      style={{
        width: 370,
        height: "auto",
        ...style,
      }}
      src={imgSrc}
      alt={alt || ""}
    />
  );
};

export default LogoImg;
