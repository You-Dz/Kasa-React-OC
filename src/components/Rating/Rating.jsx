import ActiveStar from "../../assets/icons/active-star.svg"
import InactiveStar from "../../assets/icons/inactive-star.svg"
import "./Rating.scss"

function Rating ({rating}) {
    const stars = [0,1,2,3,4];
    return (
        <>
        {stars.map((index) => (
                <img
                key={index}
                className="star"
                src={index < Number(rating)  ? ActiveStar : InactiveStar}
                alt=""/>
        ))}
        </>
    )
}
export default Rating