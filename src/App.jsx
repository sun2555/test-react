import { ColoredMessage } from "./components/ColoredMessage";
import { ColoredMessage2 } from "./components/ColoredMessage2";
export function App2() {
  const divStyle = {
    border: "1px solid blue",
  };
  const aaa = () => {
    alert("강아지");
  };
  const redStyle = {
    color: "red",
    backgroundColor: "yellow",
  };
  const pinkStyle = {
    color: "pink",
    fontSize: "20px",
  };
  return (
    <div style={divStyle}>
      {console.log("test")}
      <p style={{ color: "blue", fontSize: "32px" }}>안녕하세요</p>
      {/* <p style = {redStyle}>반갑습니다.잘지내시죠</p> */}
      <ColoredMessage color="orange" message="잘지내시죠?" />
      <ColoredMessage color="red" message="How do you do?" />
      <ColoredMessage2 color="blue" message="How do you do?" />
      <p style={pinkStyle}>잘지내고있습니다.</p>

      <button onclick={aaa}>버튼</button>
    </div>
  );
}

{
  /* <script>
function aaa(param){
  alert(param);
}
</script>

<div>
<p>안녕하세요</p>
<p>반갑습니다.</p>
<button oncli>버튼</button>
</div> */
}
// );
