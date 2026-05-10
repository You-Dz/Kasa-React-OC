import { Link } from "react-router-dom"
import "./Card.scss"
function Card ({data}) {
    return (
        <Link to={`/housing/${data.id}`}>
        <article className="card">
            <h2 className="card-title">{data.title}</h2>
            <img src={data.cover} alt={data.title} className="card-img"/>
        </article>
        </Link>
    )
}
export default Card