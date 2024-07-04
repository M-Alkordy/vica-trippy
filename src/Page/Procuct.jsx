import { useParams } from "react-router-dom"

export default function Procuct() {
    const params = useParams();
    console.log(params);
  return (
    <div>Procuct</div>
  )
}
