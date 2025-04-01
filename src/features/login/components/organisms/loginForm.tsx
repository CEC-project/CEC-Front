import { toast } from "react-toastify";
import LogoImg from "../../../../shared/components/atoms/logoImg";
import InputBasic from "../../../../shared/components/molecules/inputBasic";

import useLogin from "../../hooks/useLogin";
import LoginFindBtn from "../atoms/loginFindBtn";
import classNameMerge from "../../../../shared/util/classNameMerge";

import { FONT_REGULAR_BODY_1 } from "../../../../shared/constants/style/fontStyle";
import preventBlankInput from "../../../../shared/util/preventBlankInput";
import ButtonXLarge from "../../../../shared/components/molecules/ButtonXLarge";
import LoadingSpinner from "../../../../shared/components/atoms/LoadingSpinner";

const LoginForm: React.FC = () => {
  const {
    loginInputValue,
    emailRegexTest,
    pwRegexTest,
    handleInputValueChange,
    handleLogin,
    loginInputState,
    isLoading,
  } = useLogin();

  return (
    <>
      <form
        className="w-fit min-w-[582px] h-fit flex flex-col p-[152px_106px]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="w-full h-fit flex-align-center">
          <LogoImg />
        </div>

        <div className="w-full h-fit flex flex-col gap-[16px] mt-[88px]">
          <InputBasic
            labelClassName="text-black"
            labelText="이메일"
            inputClassName="border-white text-black"
            id="email"
            disabled={false}
            placeholder="이메일을 입력해주세요."
            type="email"
            onChange={handleInputValueChange}
            onKeyDown={preventBlankInput}
            value={loginInputValue.email}
            required={true}
            isError={!loginInputState.email}
            helperText={
              !emailRegexTest
                ? "이메일 형식이 올바르지 않습니다."
                : !loginInputState.email
                ? "등록되지 않은 아이디입니다."
                : ""
            }
          />
          <InputBasic
            labelClassName="text-black"
            labelText="비밀번호"
            inputClassName="border-white text-black"
            id="pw"
            disabled={false}
            placeholder="비밀번호를 입력해주세요."
            type="password"
            onChange={handleInputValueChange}
            onKeyDown={(e) => {
              preventBlankInput(e);

              if (e.key === "Enter") {
                if (!loginInputValue.email || !loginInputValue.pw) {
                  return toast("계정 정보를 입력해주세요.");
                }
                handleLogin();
              }
            }}
            value={loginInputValue.pw}
            required={true}
            isError={!loginInputState.pw}
            helperText={
              !pwRegexTest
                ? "영문, 숫자, 특수기호 중 2가지 이상 조합 및 글자수 8~16자"
                : !loginInputState.pw
                ? "비밀번호가 일치하지 않습니다."
                : ""
            }
          />
        </div>

        <div className="w-full h-fit flex-align-center flex-col mt-[20px] gap-[8px]">
          <ButtonXLarge
            className="w-[361px] bg-primary"
            onClick={() => {
              if (!loginInputValue.email || !loginInputValue.pw) {
                return toast("계정 정보를 입력해주세요.");
              }

              handleLogin();
            }}
          >
            로그인
          </ButtonXLarge>
        </div>

        <div className="w-full h-fit flex items-center justify-center gap-[8px] mt-[8px]">
          <LoginFindBtn onClick={() => {}}>아이디 찾기</LoginFindBtn>
          <span className="w-[1px] h-[14px] bg-white" />
          <LoginFindBtn onClick={() => {}}>비밀번호 찾기</LoginFindBtn>
        </div>
      </form>

      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default LoginForm;
