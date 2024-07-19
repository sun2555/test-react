import { useState } from "react";

export default function Login(){
  const [bul , setBul] = useState(false);
  const onClick = () => {
    setBul = ((bul) => !bul);
  }

return (
<>
<span>{bul? "환영함": "" } </span>
<button onClick={onclick}>{bul? "로그아웃": "로그인"}</button>
<br />
</>
)
};