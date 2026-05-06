import { useState } from "react"
import CloseArrow from "../../assets/icons/close-arrow.svg?react"
import "./HousingCollapse.scss"


function HousingCollapse ({title,collapseContent}) {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(prev => !prev)

    return ( 

        <div className="housing-collapse">
            <h2>
            <button onClick={toggle} className="collapse-header">
                <span className="collapse-title">{title}</span>
                <CloseArrow className={`collapse-icon ${isOpen ? "rotate" : ""}`}/>
            </button>
            </h2>
            
            <div className={`collapse-content ${isOpen ? "unveil" : ""}`}>
                <ul className="collapse-list">
                    {Array.isArray(collapseContent)
                        ? collapseContent.map(item => <li key={item}>{item}</li>)
                        : <li>{collapseContent}</li>
                    }
                </ul>
            </div>   

        </div>
    )
}

export default HousingCollapse 