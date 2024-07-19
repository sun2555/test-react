  import { useState } from "react";
  export function useCounter(inValue){
    const[count,setCount]=useState(inValue);
    const incrase = () => { setCount((count)=>count+1)};
    const decrease = () => {setCount((count) => Math.max(count-1,0))};
    return[count, incrase,decrease]
  }