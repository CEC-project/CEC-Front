import React from "react";
import classNameMerge from "../../util/classNameMerge";

import { StyleProps } from "../../types";
import { FONT_REGULAR_BODY_2 } from "../../constants/style/fontStyle";

interface InputBasicProps extends StyleProps {
  inputClassName?: string;
  id: string;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
  isError?: boolean;
  maxLength?: number;
  autoComplete?: string;
  darkMode?: boolean;
  isSearch?: boolean;
}

const DefaultInput = ({
  inputClassName = "",
  id,
  disabled,
  placeholder,
  type = "text",
  onChange,
  onKeyDown, // 공백 입력 방지, 엔터키 검색 등을 위해 사용
  value = "",
  required = false,
  isError = false,
  maxLength = 100,
  autoComplete = "off",
  darkMode,
  isSearch,
}: InputBasicProps) => {
  return (
    <input
      className={classNameMerge([
        "w-full h-[52px] rounded-[8px] p-[12px_16px] caret-primary focus-within:border-0",
        isSearch ? "p-[12px_56px_12px_16px]" : "p-[12px_16px]",
        darkMode
          ? "bg-system-900 disabled:bg-system-700 text-white placeholder:text-system-500"
          : "disabled:bg-system-100 text-system-700 placeholder:text-system-400",
        darkMode
          ? `border-[1px] ${
              isError
                ? "!border-error"
                : disabled
                ? "!border-system-600"
                : "!border-system-800"
            }`
          : `border-[1px] ${
              isError
                ? "!border-error"
                : disabled
                ? "!border-system-200"
                : "!border-system-200"
            }`,
        FONT_REGULAR_BODY_2,
        inputClassName,
      ])}
      id={id}
      name={id}
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      required={required}
      maxLength={maxLength}
      autoComplete={autoComplete}
    />
  );
};

export default DefaultInput;
