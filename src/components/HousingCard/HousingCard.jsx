import Rating from "./Rating"
import Carrousel from "./Carrousel"
function HousingCard ({data}) {

    return (
        <article className="housing-card">
            <div className="carrousel">
                <Carrousel pictures={data.pictures}/>
            </div>
            <div className="housing-card-main">
                <div className="leftside">
                    <h2 className="housing-card-title">{data.title}</h2>
                    <p className="location">{data.location}</p>
                    <div className="tags">
                        {data.tags.map(tag=>
                            <span key={tag}>{tag}</span>
                        )}
                    </div>
                </div>
                <div className="rightside">
                    <div className="host">
                        <span className="host-name">{data.host.name}</span>
                        <img src={data.host.picture} alt="Portrait de l'hôte"/>
                    </div>
                    <div className="notation">
                        <Rating rating={data.rating}/>
                    </div>
                </div>
            </div>
            <div className="housing-card-footer">
                <div className="collapse-description">
                    <h3 className="collapse-title">Description</h3>
                    <p></p>
                </div>
                <div className="collapse-equipement">
                    <h3 className="collapse-title">Equipements</h3>
                    <ul></ul>
                </div>
            </div>
        </article>
    )
}

export default HousingCard