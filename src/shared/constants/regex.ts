// 정규표현식 상수 정의

export const NAME_REGEX = /^[가-힣]{2,}$/; // 이름 (한글 2자 이상)
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일
export const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*[\d!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,16}$/; // 비밀번호 (영문, 숫자, 특수기호 중 2가지 이상 조합 및 글자수 8~16자)
export const PHONE_NUMBER_REGEX = /^01[016789]-?\d{3,4}-?\d{4}$/; // 휴대폰 번호
