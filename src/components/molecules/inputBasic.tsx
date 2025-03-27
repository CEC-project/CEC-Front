import React from "react";
import { StyleProps } from "../../types";
import classNameMerge from "../../utils/classNameMerge";
import {
  FONT_MEDIUM_BODY_1,
  FONT_REGULAR_BODY_2,
  FONT_REGULAR_CAPTION_3,
} from "../../constants/style/fontStyle";
import IconButton from "./IconButton";
import { ICON_SRC_MAPPING } from "../../constants/iconSrcMapping";

interface InputBasicProps extends StyleProps {
  labelClassName?: string;
  labelText?: string;
  inputClassName?: string;
  id: string;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
  isError?: boolean;
  maxLength?: number;
  autoComplete?: string;
  helperTextClassName?: string;
  helperText?: string;
  darkMode?: boolean;
  isSearch?: boolean;
}

const InputBasic: React.FC<InputBasicProps> = ({
  className = "",
  style = {},
  labelClassName = "",
  labelText,
  inputClassName = "",
  id,
  disabled,
  placeholder,
  type = "text",
  onChange,
  onClick, // 나중에 인증하기, 검색 버튼 등을 위해 사용
  onKeyDown, // 공백 입력 방지, 엔터키 검색 등을 위해 사용
  value = "",
  required = false,
  isError = false,
  maxLength = 100,
  autoComplete = "off",
  helperTextClassName = "",
  helperText,
  darkMode,
  isSearch,
}) => {
  return (
    <div
      className={classNameMerge(["flex flex-col gap-[4px]", className])}
      style={{
        ...style,
      }}
    >
      {labelText && (
        <div className="flex gap-[2px]">
          <label
            className={classNameMerge([
              darkMode ? "text-white" : "text-system-700",
              FONT_MEDIUM_BODY_1,
              labelClassName,
            ])}
            htmlFor={id}
          >
            {labelText}
          </label>
          {required && <span className="text-error">*</span>}
        </div>
      )}
      <div className="relative">
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
        {isSearch && (
          <IconButton
            className="!w-[24px] !h-[24px] absolute top-[50%] right-[16px] transform translate-y-[-50%]"
            imgSrc={ICON_SRC_MAPPING.search}
            onClick={onClick}
          />
        )}
      </div>
      {helperText && (
        <span
          className={classNameMerge([
            FONT_REGULAR_CAPTION_3,
            helperTextClassName,
            isError ? "text-error" : "text-system-500",
          ])}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default InputBasic;
