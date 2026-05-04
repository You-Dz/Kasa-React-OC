import data from"../../datas/housing.json"
import HousingCard from "../../components/HousingCard/HousingCard"
import { useParams } from "react-router-dom"

function Housing () {
    const {id} = useParams()
    const housing = data.find(item => item.id ===id);
    return (
        <section className="housing-content">
                {housing && <HousingCard data={housing}/>}
        </section>
    )
}
export default Housing