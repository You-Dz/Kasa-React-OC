import { useState } from "react"
import CloseArrow from "../../assets/icons/close-arrow.svg?react"
import "./Collapse.scss"

function Collapse ({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(prev => !prev)

    return (
        <div className="collapse">
            <h2>
                <button onClick={toggle} className="collapse-header">
                    <span className="collapse-title">{title}</span>
                    <CloseArrow className={`collapse-icon ${isOpen ? "rotate" : ""}`} />
                </button>
            </h2>
            <div className={`collapse-content ${isOpen ? "unveil" : ""}`}>
                {Array.isArray(content)
                    ? <ul className="collapse-list">
                        {content.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    : <p>{content}</p>
                }
            </div>
        </div>
    )
}

export default Collapse