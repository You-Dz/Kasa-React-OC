import { useParams, Navigate } from "react-router-dom"
import HousingCard from "../../components/HousingCard/HousingCard"
import data from"../../datas/housing.json"
import "./Housing.scss"

function Housing () {
    const {id} = useParams()
    const housing = data.find(item => item.id ===id);

    if (!housing) return <Navigate to="/404" />;

    return (
        <section className="housing-content">
            <HousingCard data={housing}/>
        </section>
    )
}
export default Housing