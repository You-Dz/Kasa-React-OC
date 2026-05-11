import { useParams, Navigate } from "react-router-dom"
import Carousel from "../../components/Carousel/Carousel"
import Rating from "../../components/Rating/Rating"
import Collapse from "../../components/Collapse/Collapse"
import data from "../../data/housing.json"
import "./Housing.scss"

function Housing () {
    const {id} = useParams()
    const housing = data.find(item => item.id ===id);

    if (!housing) return <Navigate to="*" />;

    return (
    <section className="housing-content">
        <Carousel pictures={housing.pictures} title={housing.title} />
        <div className="housing-main">
            <div className="leftside">
                <h2 className="housing-title">{housing.title}</h2>
                <p className="location">{housing.location}</p>
                <div className="tags-row">
                    {housing.tags.map(tag =>
                        <span key={tag} className="tags">{tag}</span>
                    )}
                </div>
            </div>
            <div className="rightside">
                <div className="host">
                    <span className="host-name">{housing.host.name}</span>
                    <img className="host-img" src={housing.host.picture} alt="Portrait de l'hôte" />
                </div>
                <div className="notation">
                    <Rating rating={housing.rating} />
                </div>
            </div>
        </div>
        <div className="housing-footer">
            <div className="collapse-description">
                <Collapse title="Description" content={housing.description} />
            </div>
            <div className="collapse-equipment">
                <Collapse title="Equipements" content={housing.equipments} />
            </div>
        </div>
    </section>
    )
}
export default Housing