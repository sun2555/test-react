const comments = [
  {name:'손홍민 ', comment: 정말 재미잇는영화엿음}
]

 export function App(){
  return(
    <>
    {
    comments.map(
      (comm) => {
        return(
          <commenBox name = {comm.name} comment = {comm.comment}></commenBox>
        );
      }
    )
  }
      </>
  );
//   const divStyle = {
//     border: '1px solid blue'
//   }
//   const aaa = ()=>{
//     alert('강아지');
//   }
//   const redStyle ={
//     color:'red',
//     backgroundColor:'yellow'
//   }
//   const pinkStyle ={
//     color:'pink',
//     fontSize:'20px'
//   }



//   return (
//     <div style={divStyle}>
//       {console.log('test')}
      
//       <p style={{color:'blue',fontSize:'32px'}}>Login</p>
//       {/* <p style={redStyle}>반갑습니다.잘지내시죠?</p> */}
//       {/* <ColoredMessage color='orange' message='잘지내시죠?' />
//       <ColoredMessage color='red' message='How do you do?'/>
//       <ColoredMessage2 color='blue'>잘지내나요?</ColoredMessage2>
//       <p style={pinkStyle}>잘지내고있습니다.</p> */}
      
//       <input type="text" id="add-text"/>
//       <input type="text" id="add-text"/>
//       <button onClick={aaa} style={{backgroundColor:'blue',fontSize:'15px'}} >로그인</button>
//     </div>
//   );
// }

{
  
  /* <script>
  function aaa(param){
    alert(param);
  }
</script>

<div >
  <p>안녕하세요</p>
  <p>반갑습니다.</p>
  <button onclick="javascript:aaa('강아지')">버튼</button>
</div> */}
/*<div>
<p>안녕하세요</p>
<p>반갑습니다.</p>
<button oncli>버튼</button>
</div> 
}*/
// );
