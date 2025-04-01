// 공백 입력 방지 함수
const preventBlankInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === " ") {
    e.preventDefault();
    return;
  }
};

export default preventBlankInput;
