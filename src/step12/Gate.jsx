import {useState} from 'react';
//최대정원
const MAX_CAPACITY = 10;
export function Gate(){
  const [isFull, setIsFull] = useState(false);//최대정원
  const [isEmpty, setIsEmpty] = useState(true);//정원0명
  const [count, setCount] = useState(0);       //현재 입장객
  //입장객 1명 증가
  const increaseCount = ()=>{
    let _count = count+1;
    setIsFull(_count >= MAX_CAPACITY);//최대정원의 상태를 세팅 10명 이상=>isFull
    setIsEmpty(_count<= 0);//비어잇는 상태를 세팅  0명 => 
    setCount(_count);
  }
  //입장객 1명 감소
  const decreaseCount = ()=>{
    let _count = count-1;
    setIsFull(_count >= MAX_CAPACITY);
    setIsEmpty(_count<= 0);
    setCount(_count);
  }
  return (
    <div style={{padding:16}}>
      <p>총 {count}명 수용했습니다.</p>
      <button onClick={increaseCount} disabled={isFull}>입장</button>
      <button onClick={decreaseCount}  disabled={isEmpty}>퇴장</button>
     
      { isFull && <p style={{color: 'red'}}>정원이 가득찼습니다.</p>      }
      { isEmpty && <p style={{color: 'red'}}>입장객이 없습니다.</p>      }
    
    </div>
  );
}