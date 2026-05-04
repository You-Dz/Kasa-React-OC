import ActiveStar from "../../assets/icons/active-star.svg"
import InactiveStar from "../../assets/icons/inactive-star.svg"
function Rating ({rating}) {
    const stars = [0,1,2,3,4];
    return (
        <>
        {stars.map((index) => (
            <span key={index}>
                <img
                src={index < rating  ? ActiveStar : InactiveStar}
                alt="Notation du logement"/>
            </span>
        ))}
        </>
    )
}
export default Rating