import { ButtonProps } from "../../types";

import { FONT_MEDIUM_HEADING_2 } from "../../constants/style/fontStyle";
import classNameMerge from "../../util/classNameMerge";
import { BOX_BASIC } from "../../constants/style/boxStyle";

const ButtonXLarge: React.FC<ButtonProps> = ({
  className = "",
  style = {},
  type = "button",
  disabled,
  icon,
  title,
  children,
  onClick,
}) => {
  return (
    <button
      className={classNameMerge([
        BOX_BASIC,
        FONT_MEDIUM_HEADING_2,
        "min-h-[52px] p-[8px_148px] rounded-[8px]",
        className,
      ])}
      style={{
        ...style,
      }}
      disabled={disabled}
      type={type}
      title={title}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default ButtonXLarge;
