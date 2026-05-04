import { useState } from "react"
import PrevArrow from "../../assets/icons/prev-arrow.svg?react";
import NextArrow from "../../assets/icons/next-arrow.svg?react";
function Carrousel ({pictures}) {
    const [index,setIndex] = useState(0);
    const next = () => {
        setIndex ((oldIndex) => (oldIndex + 1) % pictures.length)
    };
    // % ci-dessus = modulo on tente un /.length et on garde le reste si on peut diviser le reste sera 0
    const prev = () => {
        setIndex ((oldIndex) => (oldIndex - 1 + pictures.length)% pictures.length)
    };
    return (
        <>
        <img src={pictures[index]} alt=""/>
        <button onClick={prev}><PrevArrow/></button>
        <button onClick={next}><NextArrow/></button>
        </>
    );
}
export default Carrousel