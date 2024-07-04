import { useEffect, useState } from "react";

export default function Effect() {
    const [x, setx] = useState(false);
    const [y, sety] = useState(false);
    useEffect(() => {
        console.log("hello world");
    }, [x , y]);
  return (
    <div>
        <button onClick={()=>setx(!x)}>click</button>
    </div>
  )
}
