import { Link } from "react-router-dom"
import "./HomeCard.scss"
function HomeCard ({data}) {
    return (
        <Link to={`/housing/${data.id}`}>
        <article className="home-card">
            <h2 className="home-card-title">{data.title}</h2>
            <img src={data.cover} alt={data.title} className="home-card-img"/>
        </article>
        </Link>
    )
}
export default HomeCard