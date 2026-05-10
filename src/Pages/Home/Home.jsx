import bannerImg from "../../assets/images/img-home-source.webp"
import Card from "../../components/Card/Card"
import data from "../../data/housing.json"
import "./Home.scss"

function Home () {
    return (
        <section className="home-content">
            <div className="banner">
                <img src={bannerImg} className="banner-img" alt="Paysage de falaise en bord de mer" fetchPriority="high"/>
                <p className="banner-slogan">Chez vous, partout et ailleurs</p>
            </div>
            <div className="gallery">
                {data.map((item)=> (
                    <Card key ={item.id} data={item}/>
            ))}
            </div>
        </section>
    )
}
export default Home