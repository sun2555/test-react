import Loop from "./components/loop";

function Test() {
  const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div>
      <ul>
        {list.map((text) => (
            <Loop text={text} />
        ))}
      </ul>
    </div>
  );
}

export default Test;
