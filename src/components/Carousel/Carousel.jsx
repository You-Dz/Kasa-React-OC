import { useState } from "react"
import PrevArrow from "../../assets/icons/prev-arrow.svg?react";
import NextArrow from "../../assets/icons/next-arrow.svg?react";
import "./Carousel.scss"

function Carousel ({pictures}) {

    const [index,setIndex] = useState(0);
    const hasMultiple = pictures.length > 1;
    const [direction, setDirection] = useState(null);

    const next = () => {
        setDirection("next");
        setIndex ((oldIndex) => {
            if (oldIndex === pictures.length - 1) {
            return 0;
        }  
        return oldIndex +1 ;
    })
    };

    const prev = () => {
        setDirection("prev")
        setIndex ((oldIndex) => {
            if (oldIndex === 0) {
            return pictures.length - 1;
            }  
            return oldIndex -1 ;
        })
    };
    return (
        <div className="carousel">
            <img 
                key={index}
                className={`carousel-img ${direction === "next" ? "slide-left" : direction === "prev" ? "slide-right" : ""}`}
                src={pictures[index]} 
                alt=""
                fetchpriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
            />
            {hasMultiple && (
                <>
                    <button aria-label="Image précédente" className="left-btn carousel-btn" onClick={prev}>
                        <PrevArrow/>
                    </button>
                    <button aria-label="Image suivante" className="right-btn carousel-btn" onClick={next}>
                        <NextArrow/>
                    </button>
                    <span className="carousel-counter">{index+1}/{pictures.length}</span>
                </>
            )}
        </div>
    );
}
export default Carousel