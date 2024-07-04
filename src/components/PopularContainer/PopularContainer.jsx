import './PopularContainer.css'

export default function PopularContainer({title , desc , firstImage , secImage , reverse}) {
  return (
    <div className={`container ${(reverse) ? reverse : ""}`}>
        <div className="text">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <div className="images">
            <img src={firstImage} alt="" />
            <img src={secImage} alt="" />
        </div>
    </div>
  )
}
