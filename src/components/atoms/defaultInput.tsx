const DefaultInput = ({
  disabled,
  placeholder,
  inputClassName,
  type,
  onChange,
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      className={classNameMerge(
        `h-full w-full
        rounded-[8px] px-[15px] py-[13px]
        font-[Pretendard] text-[15px] text-gray-1400
        placeholder-gray-1000 disabled:placeholder-gray-1000
        focus:outline-none disabled:bg-gray-300`,
        inputClassName
      )}
    />
  );
};

export default DefaultInput;
