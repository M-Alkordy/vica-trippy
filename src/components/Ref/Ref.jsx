import { useRef } from "react"

export default function Ref() {
    const h1 = useRef(null)
    h1.current.style.color = "red"
    return (
        <div>
            <p>Hello world</p>
            <h1 ref={h1}> My name is mohammed </h1>
        </div>
    )
}
