import React from "react";
import IconButton from "./iconButton";
import DefaultInput from "../atoms/defaultInput";

import { StyleProps } from "../../types";

import classNameMerge from "../../util/classNameMerge";

import {
  FONT_MEDIUM_BODY_1,
  FONT_REGULAR_CAPTION_3,
} from "../../constants/style/fontStyle";

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
        <DefaultInput
          inputClassName={inputClassName}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          required={required}
          isError={isError}
          maxLength={maxLength}
          autoComplete={autoComplete}
          darkMode={darkMode}
          isSearch={isSearch}
        />
        {isSearch && (
          <IconButton
            className="!w-[24px] !h-[24px] absolute top-[50%] right-[16px] transform translate-y-[-50%]"
            imgSrc={"/assets/icons/ic_search.svg"}
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
