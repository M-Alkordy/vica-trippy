import { memo, useState } from "react";
import Child from "./Child";

function State() {
    const [number, setnumber] = useState(0);
    const x = 5
    const [num] = useState(5)
  return (
    <div>
        <p>{number}</p>
        <Child changeNumber = {setnumber} />
    </div>
  )
}

export default State
