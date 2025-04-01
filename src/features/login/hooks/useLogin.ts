import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import validateInput from "../../../shared/util/validateInput";
import errorHandler from "../../../shared/util/errorHandler";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../shared/constants/regex";
import { route } from "../../../router/route";

const useLogin = () => {
  const navigate = useNavigate();

  // ===== 인풋 영역 ===== //
  const [loginInputValue, setLoginInputValue] = useState({
    email: "",
    pw: "",
  });
  const [emailRegexTest, setEmailRegexTest] = useState(true);
  const [pwRegexTest, setPwRegexTest] = useState(true);

  // 인풋 값 변경 핸들러
  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 이메일 필드에 대문자를 소문자로 변환
    const updatedValue = name === "email" ? value.toLowerCase() : value;

    // 상태 업데이트
    setLoginInputValue((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));

    // 필드 검증 함수
    const validateField = (name: string, value: string) => {
      switch (name) {
        case "email":
          if (value !== "") {
            setEmailRegexTest(validateInput(EMAIL_REGEX, value));
          } else {
            setEmailRegexTest(true);
          }
          break;
        case "pw":
          if (value !== "") {
            setPwRegexTest(validateInput(PASSWORD_REGEX, value));
          } else {
            setPwRegexTest(true);
          }
          break;
        default:
          console.error("Invalid field name");
      }
    };

    // 검증 함수 호출
    validateField(name, updatedValue);

    setLoginInputState(initialState);
  };

  // ===== 로그인 ===== //
  const initialState = {
    email: true,
    pw: true,
  };

  const [loginInputState, setLoginInputState] = useState(initialState);

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      if (!emailRegexTest || loginInputValue.email === "") {
        toast("아이디를 확인해주세요.");
        return;
      } else if (!pwRegexTest || loginInputValue.pw === "") {
        toast("비밀번호를 확인해주세요.");
        return;
      }

      navigate(route.home);

      setLoginInputState(initialState);

      setIsLoading(false);
    } catch (error) {
      sessionStorage.clear();
      errorHandler(error);

      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message === "존재하지 않는 사용자입니다.") {
          setLoginInputState({
            email: false,
            pw: true,
          });
        } else if (
          error.response?.data?.message === "비밀번호가 맞지않습니다."
        ) {
          setLoginInputState({
            email: true,
            pw: false,
          });
        }

        toast("입력하신 정보를 다시 확인해주세요.");
      }

      setIsLoading(false);
    }
  };

  return {
    loginInputValue,
    emailRegexTest,
    pwRegexTest,
    handleInputValueChange,
    handleLogin,
    loginInputState,
    isLoading,
  };
};

export default useLogin;
