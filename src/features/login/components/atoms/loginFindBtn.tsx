import { FONT_REGULAR_CAPTION_2 } from "../../../../shared/constants/style/fontStyle";
import { StyleProps } from "../../../../shared/types";
import classNameMerge from "../../../../shared/util/classNameMerge";

interface LoginFindBtnProps extends StyleProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const LoginFindBtn: React.FC<LoginFindBtnProps> = ({
  className = "",
  style = {},
  onClick,
  children,
}) => {
  return (
    <button
      className={classNameMerge([
        "text-black underline",
        FONT_REGULAR_CAPTION_2,
        className,
      ])}
      style={{
        ...style,
      }}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default LoginFindBtn;
