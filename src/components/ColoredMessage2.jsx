export function ColoredMessage2(props) {
  const contenStyle = {
    color: props.color,
    fontSize: "20px",
  };
  return <p style={contenStyle}>{props.message}</p>;
}
