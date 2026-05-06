import Rating from "./Rating"
import Carrousel from "./Carrousel"
import HousingCollapse from "./HousingCollapse"
import "./HousingCard.scss"

function HousingCard ({data}) {

    return (
        <article className="housing-card">
            <>
                <Carrousel pictures={data.pictures}/>
            </>
            <div className="housing-card-main">
                <div className="leftside">
                    <h2 className="housing-card-title">{data.title}</h2>
                    <p className="location">{data.location}</p>
                    <div className="tags-row">
                        {data.tags.map(tag=>
                            <span key={tag} className="tags">{tag}</span>
                        )}
                    </div>
                </div>
                <div className="rightside">
                    <div className="host">
                        <span className="host-name">{data.host.name}</span>
                        <img className="host-img" src={data.host.picture} alt="Portrait de l'hôte"/>
                    </div>
                    <div className="notation">
                        <Rating rating={data.rating}/>
                    </div>
                </div>
            </div>
            <div className="housing-card-footer">
                <div className="collapse-description">
                    <HousingCollapse title="Description" collapseContent={data.description}/>
                </div>
                <div className="collapse-equipment">
                    <HousingCollapse title="Equipements" collapseContent={data.equipments}/>
                </div>
            </div>
        </article>
    )
}

export default HousingCard