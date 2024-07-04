import { memo } from "react";

function Child({changeNumber}) {
    console.log("hello from child");
  return (
    <div>
        <button onClick={()=>changeNumber(prev => prev+1)} >click</button>
    </div>
  )
}

export default Child