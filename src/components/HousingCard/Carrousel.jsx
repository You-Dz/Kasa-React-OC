import { useState } from "react"
import PrevArrow from "../../assets/icons/prev-arrow.svg?react";
import NextArrow from "../../assets/icons/next-arrow.svg?react";
import "./Carrousel.scss"
function Carrousel ({pictures}) {
    const [index,setIndex] = useState(0);
    const next = () => {
        setIndex ((oldIndex) => {
            if (oldIndex === pictures.length - 1) {
            return 0;
        }  
        return oldIndex +1 ;
    })
    };
    // % ci-dessus = modulo on tente un /.length et on garde le reste si on peut diviser le reste sera 0
    const prev = () => {
        setIndex ((oldIndex) => {
            if (oldIndex === 0) {
            return pictures.length - 1;
            }  
            return oldIndex -1 ;
        })
    };
    return (
        <div className="carrousel">
        <img className="carrousel-img" src={pictures[index]} alt=""/>
        <button className="left-btn carrousel-btn" onClick={prev}><PrevArrow/></button>
        <button className="right-btn carrousel-btn" onClick={next}><NextArrow/></button>
        </div>
    );
}
export default Carrousel