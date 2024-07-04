import { useContext } from "react"
import { Name } from "./SendParam"

export default function Card() {
    const x = useContext(Name)

  return (
    <div>
        Hello {x}
    </div>
  )
}
