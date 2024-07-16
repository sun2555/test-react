export function ColoredMessage(props){
  const contenStyle = {
    color:props.color,fontSize:'20px'
  }
  return(
    <p style = {contenStyle}>{props.message}</p>

  );
}