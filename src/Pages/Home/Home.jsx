import bannerImg from "../../assets/images/img-home-source.webp"
import HomeCard from "../../components/HomeCard/HomeCard"
import data from "../../datas/housing.json"
import "./Home.scss"
function Home () {
    return (
        <main className="home-content">
            <div className="banner">
                <img src={bannerImg} className="banner-img" alt="Paysage de falaise en bord de mer"/>
                <div className="overlay"></div>
                <p className="banner-slogan">Chez vous, partout et ailleurs</p>
            </div>
            <div className="gallery">
                {data.map((item)=> (
                    <HomeCard key ={item.id} data={item}/>
            ))}
            </div>
        </main>
    )
}
export default Home