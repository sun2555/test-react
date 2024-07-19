import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState(false);
  const onClick = () => {
    console.log(login);
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };
  return (
    <>
      <span>{login ? "환영합니다" : ""}</span>
      <button onClick={onClick}>{login ? "로그아웃" : "로그인"}</button>
      <hr />
      <p>리엑트공부</p>
    </>
  );
}
