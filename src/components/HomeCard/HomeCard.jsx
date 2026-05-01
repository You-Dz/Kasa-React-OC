import "./HomeCard.scss"
function HomeCard ({data}) {
    return (
        <article className="home-card">
            <h2 className="home-card-title">{data.title}</h2>
            <img src={data.cover} alt={data.title} className="home-card-img"/>
        </article>
    )
}
export default HomeCard