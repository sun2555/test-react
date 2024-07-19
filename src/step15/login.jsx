import { useState } from "react";

export default function Login() {
  //로그인 여부를 나타냄
  const [bul, setBul] = useState(false);

  //버튼을 클릭했을때 bul 값을 변경함
  const onClick = () => {
    //setBul을 통해 bul 값을 가져와서 !로 값을 반전함
    setBul((bul) => !bul);
    console.log(bul);
  };

  return (
    <>
      {/* bul 값이 참일 경우 "환영합니다" 를 보여줌 거짓일 경우 "" 을 보여줌 */}
      <span data="1번 방식">{bul ? "환영합니다" : ""}</span>
      {/* bul 값이 참일 경우 "로그아웃" 를 보여줌 거짓일 경우 "로그인" 을 보여줌 */}
      <button onClick={onClick}>{bul ? "로그아웃" : "로그인"}</button>

      {bul ? <span data="2번 방식">환영합니다</span> : null}
      {bul ? (
        <button onClick={onClick}>로그아웃</button>
      ) : (
        <button onClick={onClick}>로그인</button>
      )}
      <hr />
      <p>리액트 공부</p>
    </>
  );
}
