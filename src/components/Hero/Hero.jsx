import './Hero.css'
export default function Hero({img , title , desc , btn}) {
  return (
    <div className="hero">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{desc}</p>
        <button style={{display: (btn?.show) ? "block" : "none"}}>{btn?.content}</button>
    </div>
  )
}
