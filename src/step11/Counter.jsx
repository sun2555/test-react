//파일 : src/step11/Counter.jsx

// 3.useEffect사용하는방법
import { useState, useEffect } from "react";
export function Counter(props){
  // const[읽기변수, 입력함수] = useState(초기값)
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  //마운트후, 수정후 실행
  useEffect(
    ()=>{
      document.title = `총 ${count} / ${count2}`;
      console.log('effect_count=>',count,',',count2);
    }, [count] // <- 여기 [] 안에 있는 값이 변경된 경우 작동함
              // 만약 괄호가 비여있는 경우 사이트를 접속했을때 1번만 작동함
  );
  return (
    <div>
      <p id='msg'>총 {count}/ {count2}번의 클릭했습니다.</p>
      <button onClick={()=>{
        //count++; 읽기전용이라 직접변경 불가능
        setCount(count+1);
        console.log('count=>',count+1);
      }}>클릭1</button>
      <button onClick={()=>{
        //count++; 읽기전용이라 직접변경 불가능
        setCount2(count2+1);
        console.log('count2=>',count2 + 1);
      }}>클릭2</button>
    </div>
  );
}

// }// 2.useState사용하는방법
// import { useState } from "react";

// export function Counter(props){
//   // const[읽기변수, 입력함수] = useState(초기값)
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p id='msg'>총 {count}번의 클릭했습니다.</p>
//       <button onClick={()=>{
//         //count++; 읽기전용이라 직접변경 불가능
//         setCount(count+1);
//         console.log('count=>',count+1);
//       }}>클릭</button>
//     </div>  
//   );
// }

// 1.Dom객체에 직접 값변경하기
// export function Counter(props){
//   let count = 10;
//   return (
//     <div>
//       <p id='msg'>총 {count}번의 클릭했습니다.</p>
//       <button onClick={()=>{
//         count++;
//         let msgEle = document.getElementById('msg');
//         msgEle.innerText = `총 ${count}번의 클릭했습니다.`;
//         console.log('count=>',count);
//       }}>클릭</button>
//     </div>  
//   );
// }